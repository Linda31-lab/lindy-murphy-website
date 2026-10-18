import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: "2026-10-18",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/tools`,
      lastModified: "2026-10-18",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
