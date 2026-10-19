import { JsonLdScript } from "@/components/json-ld-script";
import { site } from "@/lib/content";
import type { ToolGuide } from "@/lib/tool-guides";

export function ToolJsonLd({ tool }: { tool: ToolGuide }) {
  const url = `${site.url}/tools/${tool.slug}`;
  const about =
    tool.kind === "software"
      ? {
          "@type": "SoftwareApplication",
          name: tool.name,
          applicationCategory: tool.applicationCategory ?? "BusinessApplication",
          operatingSystem: "Web",
          description: tool.whatItDoes[0],
          url,
        }
      : {
          "@type": "DefinedTerm",
          name: tool.name,
          description: tool.whatItDoes[0],
          url,
        };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: `${site.url}/tools`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tool.name,
            item: url,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${tool.name} | ${site.name}`,
        description: tool.summary,
        isPartOf: {
          "@type": "WebSite",
          name: site.name,
          url: site.url,
        },
        about,
        breadcrumb: {
          "@type": "BreadcrumbList",
        },
      },
      {
        "@type": "TechArticle",
        headline: `How I use ${tool.name}`,
        name: tool.name,
        description: tool.summary,
        url,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
        },
        datePublished: site.updated,
        dateModified: site.updated,
        inLanguage: "en-US",
        author: {
          "@type": "Person",
          name: site.name,
          url: site.url,
          jobTitle: site.role,
        },
        about,
      },
      {
        "@type": "FAQPage",
        mainEntity: tool.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return <JsonLdScript data={graph} />;
}
