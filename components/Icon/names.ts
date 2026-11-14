export const JOURNEY_ICON_NAMES = [
  "credential",
  "globe",
  "laptop",
  "office",
] as const;

export const CONTACT_ICON_NAMES = [
  "envelope",
  "instagram",
  "github",
  "medium",
  "linkedin",
  "mug-hot",
] as const;

export type JourneyIconName = (typeof JOURNEY_ICON_NAMES)[number];
export type ContactIconName = (typeof CONTACT_ICON_NAMES)[number];
export type IconName = JourneyIconName | ContactIconName;
