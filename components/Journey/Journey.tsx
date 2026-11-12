import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { CSSProperties } from "react";
import { animated, easings, useSpring } from "@react-spring/web";

import { Icon } from "../Icon";
import type { IconName } from "../Icon";
import css from "./journey.module.css";

/* ------------------------------------------------------------------
   1. CONFIGURE
------------------------------------------------------------------- */
type PlaceId = "education" | "business" | "world" | "tech";
type LayoutName = "wide" | "tall";
type Point = readonly [x: number, y: number];

/** Palette tokens from styles.css. */
type Token = "blue" | "purple" | "pink" | "orange" | "yellow";
const token = (name: Token) => `var(--${name})`;

interface Place {
  icon: IconName;
  color: string;
  /** The most rings this place can collect. Visits past the cap still pulse. */
  maxRings: number;
  linkTarget?: string;
}

const PLACES: Record<PlaceId, Place> = {
  education: {
    icon: "credential",
    color: token("blue"),
    maxRings: 6,
    linkTarget: "#education",
  },
  business: {
    icon: "office",
    color: token("pink"),
    maxRings: 6,
    linkTarget: "#business",
  },
  world: {
    icon: "globe",
    color: token("orange"),
    maxRings: 5,
  },
  tech: {
    icon: "laptop",
    color: token("yellow"),
    maxRings: 6,
    linkTarget: "#projects",
  },
};
const PLACE_IDS = Object.keys(PLACES) as PlaceId[];

// The journey, starting from education. Every arrival adds a ring to that place, up to
// its cap, so this list gives: business 2, tech 4, world travel 5 (capped), education 6 (capped).
const START: PlaceId = "education";
const ROUTE: readonly PlaceId[] = [
  // the first time round
  "business",
  "world",
  "education",
  "world",
  "tech",
  "education",
  // consulting, more travel, back into tech
  "business",
  "world",
  "education",
  "world",
  "tech",
  "education",
  // travel and tech again
  "world",
  "tech",
  "education",
  // and again
  "world",
  "tech",
  "education",
];

// The lines that exist between places. Each can be travelled in either direction,
// and consecutive places in ROUTE must be joined by one of them.
const EDGES = [
  { id: "education-business", a: "education", b: "business" },
  { id: "business-world", a: "business", b: "world" },
  { id: "education-world", a: "education", b: "world" },
  { id: "world-tech", a: "world", b: "tech" },
  { id: "tech-education", a: "tech", b: "education" },
] as const satisfies readonly { id: string; a: PlaceId; b: PlaceId }[];
type EdgeId = (typeof EDGES)[number]["id"];

interface Layout {
  /** Size of the grid ("stage units") the positions and curves are written in. */
  width: number;
  height: number;
  /** Radius of a place's first ring, in stage units. */
  disc: number;
  at: Record<PlaceId, Point>;
  /** One curve per line, drawn from the line's `a` place to its `b` place. */
  paths: Record<EdgeId, string>;
}

const LAYOUTS: Record<LayoutName, Layout> = {
  // Wide: a flat band. Business at the left tip, tech at the right tip.
  wide: {
    width: 1000,
    height: 300,
    disc: 44,
    at: {
      education: [410, 85],
      business: [90, 150],
      world: [590, 217],
      tech: [910, 150],
    },
    paths: {
      "education-business": "M410,85 C300,5 90,20 90,150", // over the top
      "business-world": "M90,150 C90,300 450,300 590,217", // underneath
      "education-world": "M410,85 C480,110 540,160 590,217", // the short link between the hubs
      "world-tech": "M590,217 C730,300 910,280 910,150", // underneath
      "tech-education": "M910,150 C910,20 520,5 410,85", // over the top
    },
  },
  // Tall: the same ribbon stood upright. Business on top, tech at the bottom.
  tall: {
    width: 300,
    height: 640,
    disc: 42,
    at: {
      education: [85, 264],
      business: [150, 62],
      world: [217, 377],
      tech: [150, 579],
    },
    paths: {
      "education-business": "M85,264 C5,194 20,62 150,62",
      "business-world": "M150,62 C300,62 300,289 217,377",
      "education-world": "M85,264 C110,308 160,346 217,377",
      "world-tech": "M217,377 C300,465 280,579 150,579",
      "tech-education": "M150,579 C20,579 5,333 85,264",
    },
  },
};
const LAYOUT_NAMES = Object.keys(LAYOUTS) as LayoutName[];

/** Component width (px) under which the tall layout is used.
    journey.module.css repeats this number in its container query: keep the two in step. */
const TALL_BELOW = 800;
const MIN_DISC_PX = 42; // circles never get smaller than this on screen (keeps icons near 64px)
const ICON_RATIO = 112 / 144; // icon size as a share of the first ring's diameter
const LINE_PX = 3; // line and first-ring thickness, in pixels
const RING_PX = 1.5; // thickness of the rings added on later visits
const RING_GAP_PX = 5; // space between rings

const SPEED = 420; // travel speed, in stage units per second
const MIN_LEG = 350; // no trip takes less than this (ms)
const ARRIVE = 800; // first arrival at a place (ms)
const REVISIT = 600; // later arrivals (ms)
const HOLD = 1600; // pause on the finished picture (ms)
const FADE = 1000; // everything fades before the story starts again (ms)

// The brand gradient, sampled so each line carries its own slice of it
// and the colors follow the direction of travel.
const BRAND: readonly Token[] = ["blue", "purple", "pink", "orange", "yellow"];
function brandColorAt(fraction: number): string {
  const pos = Math.max(0, Math.min(1, fraction)) * (BRAND.length - 1);
  const i = Math.min(BRAND.length - 2, Math.floor(pos));
  const mix = pos - i;
  const from = token(BRAND[i]);
  const to = token(BRAND[i + 1]);
  return `color-mix(in srgb, ${from} ${Math.round((1 - mix) * 100)}%, ${to})`;
}

/* ------------------------------------------------------------------
   2. THE ROUTE, worked out once: which line each trip uses, in which
   direction, and whether it is the first trip along that line.
------------------------------------------------------------------- */
interface Trip {
  from: PlaceId;
  to: PlaceId;
  edge: EdgeId;
  /** Travelling the curve from its far end. */
  reversed: boolean;
  /** The first trip along a line draws it. */
  first: boolean;
}

const TRIPS: Trip[] = [];
/** For each line: the direction and order in which it is first drawn. */
const FIRST_TRIP = new Map<
  EdgeId,
  { from: PlaceId; to: PlaceId; order: number }
>();
ROUTE.forEach((to, step) => {
  const from = step === 0 ? START : (ROUTE[step - 1] ?? START);
  const edge = EDGES.find(
    (e) => (e.a === from && e.b === to) || (e.a === to && e.b === from),
  );
  if (!edge) throw new Error(`Journey: no line between ${from} and ${to}`);
  const first = !FIRST_TRIP.has(edge.id);
  if (first) FIRST_TRIP.set(edge.id, { from, to, order: FIRST_TRIP.size });
  TRIPS.push({ from, to, edge: edge.id, reversed: edge.a !== from, first });
});

/** How many rings each place ends up with. */
const ringCount = (id: PlaceId) =>
  Math.min(
    [START, ...ROUTE].filter((place) => place === id).length,
    PLACES[id].maxRings,
  );

/* ------------------------------------------------------------------
   3. SCHEDULE: one thing at a time. Travel a line, then the place
   adds its ring. Built after the paths are in the page, because
   their lengths have to be measured.
------------------------------------------------------------------- */
interface Phase {
  start: number;
  duration: number;
}
interface LegPhase extends Phase, Trip {
  node: SVGPathElement;
  length: number;
  /** Where the trip starts and how far it runs, in stage units along the curve. */
  offset: number;
  visible: number;
}
interface Ring {
  index: number;
  /** Where on the circle the ring starts drawing, as a share of a full turn from 3 o'clock, clockwise. */
  turn: number;
  color: string;
  phase: Phase;
}
interface Schedule {
  legs: LegPhase[];
  rings: Record<PlaceId, Ring[]>;
  /** Visits past the cap: a pulse, no new ring. */
  pulses: Record<PlaceId, Phase[]>;
  fade: Phase;
  /** Every phase in order, so a position can be carried over to a rebuilt schedule. */
  timeline: Phase[];
  totalTime: number;
  /** A moment when the whole picture is complete, for reduced motion. */
  finishedAt: number;
}

const perPlace = <T,>(make: () => T) =>
  Object.fromEntries(PLACE_IDS.map((id) => [id, make()])) as Record<PlaceId, T>;

function buildSchedule(
  nodes: Record<EdgeId, SVGPathElement>,
  layout: Layout,
  disc: number,
  ringGap: number,
): Schedule {
  const ringRadius = (index: number) => disc + index * ringGap; // rings grow outward
  const rings = perPlace<Ring[]>(() => []);
  const pulses = perPlace<Phase[]>(() => []);
  const legs: LegPhase[] = [];
  const timeline: Phase[] = [];
  let clock = 0;
  const add = <P extends Phase>(phase: Omit<P, "start">): P => {
    const placed = { ...phase, start: clock } as P;
    timeline.push(placed);
    clock += placed.duration;
    return placed;
  };

  const addArrival = (place: PlaceId, from: PlaceId | null, angle: number) => {
    const index = rings[place].length;
    if (index >= PLACES[place].maxRings) {
      pulses[place].push(add({ duration: REVISIT }));
      return;
    }
    // The first ring is the place's own color; later rings take the color of where you came from.
    const color = PLACES[index === 0 || !from ? place : from].color;
    const turn = (((angle % 360) + 360) % 360) / 360;
    rings[place].push({
      index,
      turn,
      color,
      phase: add({ duration: index === 0 ? ARRIVE : REVISIT }),
    });
  };
  const outerNow = (place: PlaceId) =>
    ringRadius(Math.max(0, rings[place].length - 1));

  addArrival(START, null, -90);
  for (const trip of TRIPS) {
    const node = nodes[trip.edge];
    const length = node.getTotalLength();
    // The trip runs from the outer ring of one place to the outer ring of the next.
    const offset = outerNow(trip.from);
    const visible = Math.max(0, length - offset - outerNow(trip.to));
    const leg = add<LegPhase>({
      ...trip,
      node,
      length,
      offset,
      visible,
      duration: Math.max(MIN_LEG, (visible / SPEED) * 1000),
    });
    legs.push(leg);

    const meet = pointOn(leg, 1);
    const [cx, cy] = layout.at[trip.to];
    addArrival(
      trip.to,
      trip.from,
      (Math.atan2(meet.y - cy, meet.x - cx) * 180) / Math.PI,
    );
  }
  add({ duration: HOLD });
  const fade = add({ duration: FADE });

  return {
    legs,
    rings,
    pulses,
    fade,
    timeline,
    totalTime: clock,
    finishedAt: fade.start - 1,
  };
}

/** Where a trip is after covering `share` (0 to 1) of its visible stretch. */
function pointOn(leg: LegPhase, share: number): DOMPoint {
  const travelled = leg.offset + share * leg.visible;
  return leg.node.getPointAtLength(
    leg.reversed ? leg.length - travelled : travelled,
  );
}

/** Carry a moment in one schedule over to the same point of the story in another.
    Schedules for different sizes have the same phases with different durations. */
function carryOver(time: number, from: Schedule, to: Schedule): number {
  const index = Math.max(
    0,
    from.timeline.findIndex((phase) => time < phase.start + phase.duration),
  );
  const a = from.timeline[index];
  const b = to.timeline[index];
  if (!a || !b) return 0;
  return b.start + clamp((time - a.start) / a.duration) * b.duration;
}

/* ------------------------------------------------------------------
   4. FRAME HELPERS: what each part looks like at a given time (ms).
   react-spring calls these on every frame; React never re-renders.
------------------------------------------------------------------- */
function clamp(t: number) {
  return Math.max(0, Math.min(1, t));
}
const ease = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const progressOf = (phase: Phase, time: number) =>
  clamp((time - phase.start) / phase.duration);

/** 1 while the story plays, falling to 0 as it fades out before restarting. */
const shownAt = (schedule: Schedule, time: number) =>
  1 - ease(progressOf(schedule.fade, time));

/** The drawn stretch of a line: its length and where it begins along the curve. */
function trailAt(schedule: Schedule, edge: EdgeId, time: number) {
  const leg = schedule.legs.find((l) => l.edge === edge && l.first);
  if (!leg) return { length: 0, begins: 0, total: 1 };
  const length = ease(progressOf(leg, time)) * leg.visible;
  const begins = leg.reversed ? leg.length - leg.offset - length : leg.offset;
  return { length, begins, total: leg.length };
}

/** The dot that leads the way on every trip. */
function dotAt(schedule: Schedule, time: number) {
  for (const leg of schedule.legs) {
    const raw = progressOf(leg, time);
    if (raw <= 0 || raw >= 1) continue;
    const point = pointOn(leg, ease(raw));
    return {
      x: point.x,
      y: point.y,
      size: Math.min(1, raw * 10, (1 - raw) * 10),
    };
  }
  return { x: 0, y: 0, size: 0 };
}

function placeAt(schedule: Schedule, id: PlaceId, time: number) {
  let lit = 0; // how far the first ring has drawn: lights the icon
  let grown = 0; // how many extra rings have drawn: grows the cover
  let scale = 1; // one gentle pulse per visit
  const pulse = (phase: Phase) => {
    const raw = progressOf(phase, time);
    if (raw > 0 && raw < 1) scale = 1 + 0.06 * Math.sin(Math.PI * raw);
  };
  for (const ring of schedule.rings[id]) {
    const drawn = ease(progressOf(ring.phase, time));
    if (ring.index === 0) lit = drawn;
    else grown += drawn;
    pulse(ring.phase);
  }
  schedule.pulses[id].forEach(pulse);
  return { lit, grown, scale };
}

/* ------------------------------------------------------------------
   5. THE COMPONENT
   Sizes and the choice of layout live in CSS, so the server-rendered
   picture is already correct. JavaScript only measures the paths and
   runs the animation.
------------------------------------------------------------------- */

// Handed to journey.module.css as custom properties, so the numbers above stay the single source.
const ROOT_VARS: CSSProperties = {
  "--journey-ratio-wide": `${LAYOUTS.wide.width} / ${LAYOUTS.wide.height}`,
  "--journey-ratio-tall": `${LAYOUTS.tall.width} / ${LAYOUTS.tall.height}`,
  "--journey-disc-wide": `${((2 * LAYOUTS.wide.disc) / LAYOUTS.wide.width) * 100}cqw`,
  "--journey-disc-tall": `${((2 * LAYOUTS.tall.disc) / LAYOUTS.tall.width) * 100}cqw`,
  "--journey-disc-min": `${2 * MIN_DISC_PX}px`,
  "--journey-ring-gap": `${RING_GAP_PX}px`,
  "--journey-icon-ratio": ICON_RATIO,
};

const percent = (value: number, of: number) => `${(value / of) * 100}%`;

export const Journey = ({ className }: { className?: string }) => {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, ""); // keeps gradient ids unique per instance
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pathNodes = useRef<
    Record<LayoutName, Partial<Record<EdgeId, SVGPathElement>>>
  >({ wide: {}, tall: {} });
  const [size, setSize] = useState<{ root: number; stage: number } | null>(
    null,
  );
  const [built, setBuilt] = useState<{
    layoutName: LayoutName;
    schedule: Schedule;
  } | null>(null);
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(false);
  const scheduleRef = useRef<Schedule | null>(null);

  // One spring drives everything: `progress` runs from 0 to 1 over one loop of the story.
  const [{ progress }, api] = useSpring(() => ({ progress: 0 }));

  // Track sizes: the component's width picks the layout, the stage's width sets the scale.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;
    const measure = () => {
      const next = { root: root.clientWidth, stage: stage.clientWidth };
      setSize((prev) =>
        prev && prev.root === next.root && prev.stage === next.stage
          ? prev
          : next,
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  // Before the first measurement (and on the server) this is 'wide'; CSS shows the right
  // layout either way, and the schedule is only built once the real width is known.
  const layoutName: LayoutName =
    size && size.root > 0 && size.root < TALL_BELOW ? "tall" : "wide";
  const layout = LAYOUTS[layoutName];
  const scale = size ? size.stage / layout.width : 0; // pixels per stage unit

  // Run from a point in the loop to its end, then start the loop again.
  const run = useCallback(
    (from: number) => {
      const loop = (start: number) => {
        const schedule = scheduleRef.current;
        if (!schedule) return;
        api.start({
          from: { progress: start },
          to: { progress: 1 },
          reset: true,
          config: {
            duration: Math.max(1, schedule.totalTime * (1 - start)),
            easing: easings.linear,
          },
          onRest: (result) => {
            if (result.finished) loop(0);
          },
        });
      };
      loop(from >= 1 ? 0 : from);
    },
    [api],
  );

  const play = useCallback(() => {
    playingRef.current = true;
    setPlaying(true);
    run(progress.get());
  }, [progress, run]);

  const pause = useCallback(() => {
    playingRef.current = false;
    setPlaying(false);
    api.stop();
  }, [api]);

  // Measure the paths and build the schedule after each layout or size change.
  // Nothing is built while the component has no width (a hidden tab or panel).
  useLayoutEffect(() => {
    if (!(scale > 0)) return;
    const nodes = pathNodes.current[layoutName];
    if (!EDGES.every((edge) => nodes[edge.id])) return;
    const disc = Math.max(layout.disc, MIN_DISC_PX / scale); // first-ring radius, stage units
    const next = buildSchedule(
      nodes as Record<EdgeId, SVGPathElement>,
      layout,
      disc,
      RING_GAP_PX / scale,
    );
    const prev = scheduleRef.current;
    scheduleRef.current = next;
    setBuilt({ layoutName, schedule: next });

    if (prev) {
      // A resize or layout switch: stay at the same point of the story, at the right speed.
      const position =
        carryOver(progress.get() * prev.totalTime, prev, next) / next.totalTime;
      if (playingRef.current) run(position);
      else api.set({ progress: position });
    } else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // No motion wanted: show the finished picture, paused. The button still plays it.
      api.set({ progress: next.finishedAt / next.totalTime });
    } else {
      play();
    }
  }, [layoutName, layout, scale, api, progress, run, play]);

  // If the visitor turns on reduced motion while it plays, stop on the finished picture.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => {
      const schedule = scheduleRef.current;
      if (!event.matches || !schedule) return;
      pause();
      api.set({ progress: schedule.finishedAt / schedule.totalTime });
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [api, pause]);

  useEffect(
    () => () => {
      api.stop();
    },
    [api],
  );

  // The schedule only applies to the layout it was measured in.
  const schedule =
    built && built.layoutName === layoutName ? built.schedule : null;
  const timeOf = (p: number) => (schedule ? p * schedule.totalTime : 0);

  return (
    <div
      className={className ? `${css.journey} ${className}` : css.journey}
      ref={rootRef}
      style={ROOT_VARS}
    >
      <div className={css.stage} ref={stageRef}>
        <div
          className={css.picture}
          role="img"
          aria-label="A looping route between education, business, world travel and tech experiences. Each visit adds a ring around the place to show growing experiences."
        >
          {/* Layer 1: one SVG per layout for the lines; CSS shows the one that fits. */}
          {LAYOUT_NAMES.map((name) => {
            const drawn = LAYOUTS[name];
            const active = schedule !== null && name === layoutName;
            const unit = active && scale > 0 ? 1 / scale : 1; // one pixel, in stage units
            return (
              <svg
                key={name}
                className={css.lines}
                data-layout={name}
                viewBox={`0 0 ${drawn.width} ${drawn.height}`}
                aria-hidden="true"
              >
                <defs>
                  {/* One gradient per line, running the way it is first travelled. */}
                  {EDGES.map((edge) => {
                    const trip = FIRST_TRIP.get(edge.id);
                    if (!trip) return null;
                    const [x1, y1] = drawn.at[trip.from];
                    const [x2, y2] = drawn.at[trip.to];
                    return (
                      <linearGradient
                        key={edge.id}
                        id={`${uid}-${name}-${edge.id}`}
                        gradientUnits="userSpaceOnUse"
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                      >
                        {[0, 0.5, 1].map((stop) => (
                          <stop
                            key={stop}
                            offset={stop}
                            style={{
                              stopColor: brandColorAt(
                                (trip.order + stop) / EDGES.length,
                              ),
                            }}
                          />
                        ))}
                      </linearGradient>
                    );
                  })}
                </defs>

                <g strokeWidth={LINE_PX * unit}>
                  {EDGES.map((edge) => (
                    <path
                      key={edge.id}
                      className={css.base}
                      d={drawn.paths[edge.id]}
                      strokeDasharray={`${2 * unit} ${9 * unit}`}
                      ref={(node) => {
                        if (node) pathNodes.current[name][edge.id] = node;
                      }}
                    />
                  ))}
                </g>

                {active && schedule && (
                  <>
                    {/* Each line draws on its first trip and then stays. */}
                    <animated.g
                      strokeWidth={LINE_PX * unit}
                      opacity={progress.to((p) => shownAt(schedule, timeOf(p)))}
                    >
                      {EDGES.map((edge) => {
                        const trail = (p: number) =>
                          trailAt(schedule, edge.id, timeOf(p));
                        return (
                          <animated.path
                            key={edge.id}
                            className={css.trail}
                            d={drawn.paths[edge.id]}
                            stroke={`url(#${uid}-${name}-${edge.id})`}
                            strokeDasharray={progress.to(
                              (p) => `${trail(p).length} ${trail(p).total}`,
                            )}
                            strokeDashoffset={progress.to(
                              (p) => -trail(p).begins,
                            )}
                            visibility={progress.to((p) =>
                              trail(p).length > 0 ? "visible" : "hidden",
                            )}
                          />
                        );
                      })}
                    </animated.g>

                    <animated.circle
                      className={css.traveller}
                      cx={progress.to((p) => dotAt(schedule, timeOf(p)).x)}
                      cy={progress.to((p) => dotAt(schedule, timeOf(p)).y)}
                      r={progress.to(
                        (p) => dotAt(schedule, timeOf(p)).size * 6 * unit,
                      )}
                    />
                  </>
                )}
              </svg>
            );
          })}

          {/* Layer 2: each place is its own element, with a rings SVG and an icon.
              Position and size come from CSS, so they are right before any script runs. */}
          {PLACE_IDS.map((id) => {
            const place = PLACES[id];
            const count = ringCount(id);
            const state = (p: number) =>
              schedule
                ? placeAt(schedule, id, timeOf(p))
                : { lit: 0, grown: 0, scale: 1 };
            const shown = (p: number) =>
              schedule ? shownAt(schedule, timeOf(p)) : 1;
            return (
              <animated.div
                key={id}
                className={css.place}
                style={{
                  "--x-wide": percent(
                    LAYOUTS.wide.at[id][0],
                    LAYOUTS.wide.width,
                  ),
                  "--y-wide": percent(
                    LAYOUTS.wide.at[id][1],
                    LAYOUTS.wide.height,
                  ),
                  "--x-tall": percent(
                    LAYOUTS.tall.at[id][0],
                    LAYOUTS.tall.width,
                  ),
                  "--y-tall": percent(
                    LAYOUTS.tall.at[id][1],
                    LAYOUTS.tall.height,
                  ),
                  "--rings": count,
                  // How many extra rings have drawn: the cover grows with them (see .cover).
                  ...({
                    "--grown": progress.to((p) => state(p).grown * shown(p)),
                  } as object),
                  scale: progress.to((p) => state(p).scale),
                }}
              >
                <svg className={css.rings} aria-hidden="true">
                  {/* The cover hides the line ends and grows with the rings, so lines meet the outer ring. */}
                  <circle className={css.cover} cx="50%" cy="50%" />
                  <circle
                    className={css.ring}
                    cx="50%"
                    cy="50%"
                    strokeWidth={LINE_PX}
                    style={
                      {
                        r: `calc(var(--disc) / 2 - ${LINE_PX / 2}px)`,
                      } as CSSProperties
                    }
                  />
                  <animated.g opacity={progress.to(shown)}>
                    {/* One ring per visit, growing outward. */}
                    {Array.from({ length: count }, (_, index) => {
                      const ring = schedule?.rings[id][index];
                      const weight = index === 0 ? LINE_PX : RING_PX;
                      const drawn = (p: number) =>
                        ring ? ease(progressOf(ring.phase, timeOf(p))) : 0;
                      return (
                        <animated.circle
                          key={index}
                          cx="50%"
                          cy="50%"
                          pathLength={1}
                          strokeWidth={weight}
                          style={
                            {
                              r: `calc(var(--disc) / 2 + ${index * RING_GAP_PX - weight / 2}px)`,
                              // A style, not an attribute, so the color can be a CSS variable.
                              stroke: ring?.color ?? place.color,
                            } as CSSProperties
                          }
                          // The dash starts where the line arrives and wraps round the circle.
                          strokeDashoffset={-(ring?.turn ?? 0)}
                          strokeDasharray={progress.to(
                            (p) => `${drawn(p)} ${1 - drawn(p)}`,
                          )}
                          visibility={progress.to((p) =>
                            drawn(p) > 0 ? "visible" : "hidden",
                          )}
                        />
                      );
                    })}
                  </animated.g>
                </svg>
                <animated.span
                  className={css.icon}
                  style={{
                    opacity: progress.to(
                      (p) => 0.35 + 0.65 * state(p).lit * shown(p),
                    ),
                  }}
                >
                  {place.linkTarget ? (
                    <a href={place.linkTarget} className={css.link}>
                      <Icon name={place.icon} />
                    </a>
                  ) : (
                    <Icon name={place.icon} />
                  )}
                </animated.span>
              </animated.div>
            );
          })}
        </div>

        {/* Play / pause, tucked into the stage's bottom right corner. */}
        <button
          type="button"
          className={`${css.toggle} pointer`}
          aria-label={playing ? "Pause animation" : "Play animation"}
          onClick={playing ? pause : play}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="8" y1="5" x2="8" y2="19" />
              <line x1="16" y1="5" x2="16" y2="19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5 L19 12 L8 19 Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
