import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { missingToolGuides, toolGuides } from "@/lib/tool-guides";

export default function sitemap(): MetadataRoute.Sitemap {
  if (missingToolGuides.length > 0) {
    throw new Error(
      `Missing tool pages for: ${missingToolGuides.join(", ")}`,
    );
  }

  return [
    {
      url: site.url,
      lastModified: site.updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/tools`,
      lastModified: site.updated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...toolGuides.map((item) => ({
      url: `${site.url}/tools/${item.slug}`,
      lastModified: site.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
