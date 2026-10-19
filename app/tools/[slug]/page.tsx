import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { ToolJsonLd } from "@/components/tool-json-ld";
import { roleHref, site } from "@/lib/content";
import {
  getToolGuide,
  relatedToolGuides,
  toolGuideJobs,
  toolGuides,
} from "@/lib/tool-guides";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return toolGuides.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolGuide(slug);
  if (!tool) {
    return {};
  }

  const title = `${tool.name}: how I use it | ${site.name}`;
  return {
    title,
    description: tool.summary,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title,
      description: tool.summary,
      url: `/tools/${tool.slug}`,
      siteName: site.name,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: tool.summary,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolGuide(slug);
  if (!tool) {
    notFound();
  }

  const jobs = toolGuideJobs(tool.slug);
  const related = relatedToolGuides(tool.slug);

  return (
    <>
      <ToolJsonLd tool={tool} />
      <SiteNavbar />
      <main>
        <section className="section hero-glow pt-6 pb-5">
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <nav className="breadcrumb tool-breadcrumb" aria-label="Breadcrumb">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/tools">Tools</a>
                </li>
                <li className="is-active">
                  <a href={`/tools/${tool.slug}`} aria-current="page">
                    {tool.name}
                  </a>
                </li>
              </ul>
            </nav>
            <p
              className="brand-color has-text-weight-semibold is-size-7"
              style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              {tool.category}
            </p>
            <h1 className="title is-2 mt-3" style={{ maxWidth: "40rem" }}>
              {tool.name}
            </h1>
            <p className="subtitle is-6 has-text-grey mt-3" style={{ maxWidth: "42rem" }}>
              {tool.summary}
            </p>
            <div className="tags mt-4">
              {jobs.map((job) => (
                <a
                  key={job}
                  href={roleHref(job)}
                  className="tag is-rounded experience-job-link"
                >
                  {job}
                </a>
              ))}
              <a href="/tools" className="tag is-rounded experience-tool">
                All tools
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container tool-prose">
            <div className="columns is-variable is-8">
              <div className="column is-6">
                <h2 className="title is-3">What it is</h2>
                {tool.whatItDoes.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="column is-6">
                <h2 className="title is-3">How I used it</h2>
                {tool.howIUsedIt.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="mb-6" style={{ maxWidth: "40rem" }}>
              <h2 className="title is-3">Questions about {tool.name}</h2>
              <p className="has-text-grey mt-3">
                The same questions are in the FAQ schema on this page, so the
                markup matches what you can read here.
              </p>
            </div>
            <div className="faq-list" style={{ maxWidth: "64rem" }}>
              {tool.faqs.map((item) => (
                <details key={item.question} className="box faq-item">
                  <summary>
                    <span>{item.question}</span>
                    <span className="icon chevron brand-color" aria-hidden="true">
                      <ChevronDown size={20} />
                    </span>
                  </summary>
                  <p className="faq-answer has-text-grey">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="section">
            <div className="container">
              <h2 className="title is-3 mb-5">Related tools</h2>
              <div className="columns is-multiline is-variable is-4">
                {related.map((item) => (
                  <div key={item.slug} className="column is-3-desktop is-6-tablet">
                    <a href={`/tools/${item.slug}`} className="box tool-card tool-card-link">
                      <p className="is-size-7 brand-color has-text-weight-semibold mb-2">
                        {item.category}
                      </p>
                      <h3 className="title is-5 mb-2">{item.name}</h3>
                      <p className="is-size-7 has-text-grey">{item.summary}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
