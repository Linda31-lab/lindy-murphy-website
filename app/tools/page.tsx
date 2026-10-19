import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { JsonLdScript } from "@/components/json-ld-script";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { aiTools, roleHref, site, workTools } from "@/lib/content";
import { getToolGuide, toolGuides } from "@/lib/tool-guides";

export const metadata: Metadata = {
  title: `Tools | ${site.name}`,
  description:
    "Software, platforms, and AI tools I have used across organic discovery, ecommerce, content, experimentation, and team enablement. Each tool has its own page.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  const catalog = workTools();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `Tools | ${site.name}`,
        description:
          "Directory of software, platforms, and AI tools Lindy Murphy has used, with a dedicated page for each one.",
        url: `${site.url}/tools`,
        isPartOf: {
          "@type": "WebSite",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "ItemList",
        name: "Tools Lindy Murphy has used",
        itemListElement: toolGuides.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: `${site.url}/tools/${item.slug}`,
        })),
      },
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
        ],
      },
    ],
  };

  return (
    <>
      <JsonLdScript data={collectionSchema} />
      <SiteNavbar />
      <main>
        <section className="section hero-glow pt-6 pb-5">
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <p className="brand-color has-text-weight-semibold is-size-7" style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Toolkit
            </p>
            <h1 className="title is-2 mt-3" style={{ maxWidth: "36rem" }}>
              Tools I have used, each with its own page
            </h1>
            <p className="subtitle is-6 has-text-grey mt-3" style={{ maxWidth: "40rem" }}>
              Platforms from the jobs, plus the AI tools I use to learn fast and
              teach clearly. Open any tool for what it does, how I used it, FAQs,
              and schema.
            </p>
            <div className="tags mt-4">
              <a href="#ai-tools" className="tag is-rounded experience-tool">
                AI tools
              </a>
              <a href="#work-tools" className="tag is-rounded experience-tool">
                Tools from the work
              </a>
              <a href="/#experience" className="tag is-rounded experience-job-link">
                Back to experience
              </a>
            </div>
          </div>
        </section>

        <section id="ai-tools" className="section section-alt">
          <div className="container">
            <div className="mb-6" style={{ maxWidth: "40rem" }}>
              <h2 className="title is-3">AI tools</h2>
              <p className="has-text-grey mt-3">
                ChatGPT, Cursor, Copilot, and Gemini are part of how I draft,
                check, and teach. I use them on real work, then keep only what a
                team can reuse.
              </p>
            </div>
            <div className="columns is-multiline is-variable is-4">
              {aiTools.map((item) => {
                const guide = getToolGuide(item.slug);
                return (
                  <div key={item.slug} className="column is-3-desktop is-6-tablet">
                    <a
                      href={`/tools/${item.slug}`}
                      className="box tool-card ai-tool-card tool-card-link"
                    >
                      <span className="icon brand-color mb-2">
                        <Sparkles size={20} />
                      </span>
                      <h3 className="title is-5 mb-1">{item.name}</h3>
                      <p className="is-size-7 has-text-grey">
                        {guide?.summary ?? "Hands-on, in the workflow"}
                      </p>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work-tools" className="section">
          <div className="container">
            <div className="mb-6" style={{ maxWidth: "40rem" }}>
              <h2 className="title is-3">Tools from the work</h2>
              <p className="has-text-grey mt-3">
                What I have used in enterprise roles, from CMS and analytics to
                on-site search, testing, and reviews. Each card opens a full
                page. Job labels jump back to that role on the homepage.
              </p>
            </div>
            <div className="columns is-multiline is-variable is-4">
              {catalog.map((item) => {
                const guide = getToolGuide(item.slug);
                return (
                  <div key={item.slug} className="column is-4">
                    <article className="box tool-card">
                      <p className="is-size-7 brand-color has-text-weight-semibold mb-2">
                        {guide?.category ?? "Tool"}
                      </p>
                      <h3 className="title is-5 mb-3">
                        <a href={`/tools/${item.slug}`}>{item.name}</a>
                      </h3>
                      <p className="is-size-7 has-text-grey mb-4">
                        {guide?.summary}
                      </p>
                      <div className="tags mb-3">
                        {item.jobs.map((job) => (
                          <a
                            key={job}
                            href={roleHref(job)}
                            className="tag is-rounded experience-job-link"
                          >
                            {job}
                          </a>
                        ))}
                      </div>
                      <a href={`/tools/${item.slug}`} className="is-size-7 has-text-weight-semibold">
                        How I used {item.name}
                      </a>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
