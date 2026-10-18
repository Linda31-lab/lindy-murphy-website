import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { aiTools, experience, site, workTools } from "@/lib/content";

export const metadata: Metadata = {
  title: `Tools | ${site.name}`,
  description:
    "Software, platforms, and AI tools I have used across organic discovery, ecommerce, content, experimentation, and team enablement.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  const catalog = workTools();

  return (
    <>
      <SiteNavbar />
      <main>
        <section className="section hero-glow pt-6 pb-5">
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <p className="brand-color has-text-weight-semibold is-size-7" style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Toolkit
            </p>
            <h1 className="title is-2 mt-3" style={{ maxWidth: "36rem" }}>
              Tools I have used and keep close
            </h1>
            <p className="subtitle is-6 has-text-grey mt-3" style={{ maxWidth: "40rem" }}>
              Platforms from the jobs, plus the AI tools I use to learn fast and
              teach clearly. I will keep adding how I used each one as this
              page grows.
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
              {aiTools.map((item) => (
                <div key={item.slug} className="column is-3-desktop is-6-tablet">
                  <article
                    id={item.slug}
                    className="box tool-card ai-tool-card"
                  >
                    <span className="icon brand-color mb-2">
                      <Sparkles size={20} />
                    </span>
                    <h3 className="title is-5 mb-1">{item.name}</h3>
                    <p className="is-size-7 has-text-grey">Hands-on, in the workflow</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work-tools" className="section">
          <div className="container">
            <div className="mb-6" style={{ maxWidth: "40rem" }}>
              <h2 className="title is-3">Tools from the work</h2>
              <p className="has-text-grey mt-3">
                What I have used in enterprise roles, from CMS and analytics to
                on-site search, testing, and reviews. Job labels jump back to
                that role on the homepage.
              </p>
            </div>
            <div className="columns is-multiline is-variable is-4">
              {catalog.map((item) => (
                <div key={item.slug} className="column is-4">
                  <article id={item.slug} className="box tool-card">
                    <h3 className="title is-5 mb-3">{item.name}</h3>
                    <div className="tags">
                      {item.jobs.map((job) => (
                        <a
                          key={job}
                          href={`/#${jobSlug(job)}`}
                          className="tag is-rounded experience-job-link"
                        >
                          {job}
                        </a>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function jobSlug(jumpLabel: string) {
  const role = experience.find((item) => item.jumpLabel === jumpLabel);
  return role?.id ?? "experience";
}
