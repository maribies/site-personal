import type { SiteData } from "../lib/schemas";

export const siteData: SiteData = {
  experiences: [
    {
      type: "projects",
      experiences: [
        {
          icon: "/static/images/fun.png",
          iconAlt: "fun project",
          title: "A fun project for learning or personal use",
          role: "Engineer",
          roleSummary: "Engineered the project.",
          link: "https://example.com/project",
          summary: "Testing fun things",
          timeFrame: "2026 - Present",
          keywords: ["React", "Vite"],
          skills: ["Built the fun test fixture"],
        },
      ],
    },
    {
      type: "work",
      experiences: [
        {
          icon: "/static/images/test.png",
          iconAlt: "Test Co Logo",
          title: "Test Co",
          role: "Engineer",
          roleSummary: "Engineered the test fixture.",
          link: "https://example.com/test-co",
          summary: "Testing things",
          timeFrame: "2024 - Present",
          keywords: ["React", "Vite"],
          skills: ["Built the test fixture"],
        },
      ],
    },
    {
      type: "business",
      experiences: [
        {
          icon: "/static/images/other.png",
          iconAlt: "Other Co Logo",
          title: "Other Co",
          role: "Manager",
          roleSummary: "Managed the test fixture.",
          link: "https://example.com/other-co",
          summary: "Other things",
          timeFrame: "2020 - 2024",
          keywords: ["Excel"],
          skills: ["Managed the fixture"],
        },
      ],
    },
  ],
  links: [
    {
      link: "https://example.com/profile",
      icon: "github",
      name: "@fixture",
    },
  ],
  copy: {
    home: {
      hero: {
        role: "Fixture Engineer",
        summary: "I build test fixtures.",
        aka: { title: "aka Fixture", body: "A fixture's nickname." },
      },
      info: {
        title: "Hi! I'm a fixture.",
        summary: "I exist for testing.",
      },
    },
  },
};
