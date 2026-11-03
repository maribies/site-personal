import type { SiteData } from "../api/schemas";

export const siteData: SiteData = {
  experiences: [
    {
      type: "tech",
      experiences: [
        {
          icon: "/static/images/test.png",
          iconAlt: "Test Co Logo",
          title: "Engineer",
          company: "Test Co",
          companyLink: "https://example.com/test-co",
          timeFrame: "2024 - Present",
          tools: ["React", "Vite"],
          skills: ["Built the test fixture"],
          links: { main: { path: "https://example.com", type: "site" } },
        },
      ],
    },
    {
      type: "business",
      experiences: [
        {
          icon: "/static/images/other.png",
          iconAlt: "Other Co Logo",
          title: "Manager",
          company: "Other Co",
          companyLink: "https://example.com/other-co",
          timeFrame: "2020 - 2024",
          skills: ["Managed the fixture"],
          links: { main: { path: "https://example.com/video", type: "video" } },
        },
      ],
    },
  ],
  links: [
    {
      link: "https://example.com/profile",
      icon: "fa-brands fa-github",
      name: "@fixture",
    },
  ],
};
