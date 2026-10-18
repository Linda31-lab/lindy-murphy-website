import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  ChartColumn,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Megaphone,
  Search,
  Sparkles,
  Stars,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { SocialButtons } from "@/components/social-links";
import {
  experience,
  expertise,
  site,
  toolkit,
} from "@/lib/content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const expertiseIcons = {
  search: Search,
  "file-text": FileText,
  "chart-column": ChartColumn,
  users: Users,
  sparkles: Sparkles,
  megaphone: Megaphone,
};

function StarMark({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={style}
      width="20"
      height="20"
    >
      <path d="M12 0c.6 5.7 2.3 7.4 8 8-5.7.6-7.4 2.3-8 8-.6-5.7-2.3-7.4-8-8 5.7-.6 7.4-2.3 8-8Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteNavbar />
      <main>
        <section id="top" className="section hero-glow pt-6 pb-6">
          <div aria-hidden="true" className="blobs">
            <span className="blob blob-1" />
            <span className="blob blob-2" />
            <span className="blob blob-3" />
          </div>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="columns is-vcentered is-variable is-8 py-6">
              <div className="column is-7">
                <span className="tag is-medium is-rounded mb-4 hero-kicker">
                  <span className="icon brand-color mr-1">
                    <Stars size={16} />
                  </span>
                  Enterprise search experience · practical AI curiosity
                </span>
                <p
                  className="brand-color has-text-weight-bold mb-3"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    fontSize: "0.8rem",
                  }}
                >
                  {site.role}
                </p>
                <h1 className="title is-1 hero-title" style={{ lineHeight: 1.05 }}>
                  I help enterprise brands get{" "}
                  <span className="text-gradient">discovered</span>.
                </h1>
                <p
                  className="subtitle is-5 has-text-grey mt-4"
                  style={{ maxWidth: "40rem" }}
                >
                  I lead organic discovery at Taxwell across TaxAct, Drake Software,
                  and 1040.com. My foundation is enterprise SEO, content, on-site
                  search, taxonomy, and analytics. More recently, I&apos;ve been
                  learning AI fast, testing what works, and teaching teams how to
                  use it in the workflows they already have.
                </p>
                <div className="buttons mt-5">
                  <a className="button is-primary is-rounded is-medium" href="#experience">
                    <strong>View my experience</strong>
                    <span className="icon">
                      <ArrowRight size={16} />
                    </span>
                  </a>
                  <a className="button is-rounded is-medium" href="#contact">
                    Contact me
                  </a>
                </div>
                <SocialButtons />
              </div>
              <div className="column is-5">
                <div style={{ position: "relative", maxWidth: "22rem", margin: "0 auto" }}>
                  <StarMark
                    className="float-slow brand-color"
                    style={{
                      position: "absolute",
                      left: "-0.5rem",
                      top: "1.5rem",
                      zIndex: 2,
                    }}
                  />
                  <StarMark
                    className="float-slow"
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: 0,
                      color: "var(--brand-coral)",
                      zIndex: 2,
                      animationDelay: "-3s",
                    }}
                  />
                  <div className="float-slow">
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "1 / 1",
                        borderRadius: "2.2rem",
                        overflow: "hidden",
                        border: "4px solid var(--bulma-scheme-main)",
                        boxShadow:
                          "0 20px 50px -12px color-mix(in srgb, var(--brand) 40%, transparent)",
                        background:
                          "linear-gradient(135deg, color-mix(in srgb, var(--brand) 20%, transparent), color-mix(in srgb, var(--brand-coral) 22%, transparent))",
                      }}
                    >
                      <Image
                        src="/mascot.jpg"
                        alt="Illustrated avatar of Lindy Murphy"
                        fill
                        priority
                        sizes="(max-width: 1024px) 22rem, 22rem"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <span
                    className="tag is-medium is-rounded sticker"
                    style={{
                      backgroundColor: "var(--bulma-scheme-main)",
                      boxShadow: "0 8px 20px -6px rgba(0,0,0,0.25)",
                      border: "1px solid var(--bulma-border-weak)",
                    }}
                  >
                    <strong>learn fast. teach clearly.</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="mb-6">
              <div style={{ maxWidth: "40rem" }}>
                <h2 className="title is-2">Experience</h2>
                <p className="subtitle is-6 has-text-grey mt-3">
                  A career built inside enterprise teams, learning complex businesses,
                  making digital experiences easier to find, and bringing other
                  people along for the work.
                </p>
              </div>
              <div className="experience-index mt-5">
                <div>
                  <span className="experience-tools-label">Jobs</span>
                  <div className="tags">
                    {experience.map((role) => (
                      <a
                        key={role.id}
                        href={`#${role.id}`}
                        className="tag is-rounded experience-job-link"
                      >
                        {role.jumpLabel}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="experience-tools-label">Tools</span>
                  <div className="tags">
                    <a href="/tools" className="tag is-rounded experience-tool">
                      All tools
                    </a>
                    <a href="/tools#ai-tools" className="tag is-rounded experience-tool">
                      AI tools
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-list">
              {experience.map((role) => (
                <article
                  key={role.id}
                  id={role.id}
                  className="box experience-item"
                >
                  <div className="experience-marker" aria-hidden="true">
                    <BriefcaseBusiness size={20} />
                  </div>
                  <div className="experience-content">
                    <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap" style={{ gap: "0.5rem" }}>
                      <div>
                        <h3 className="title is-4 mb-1">{role.title}</h3>
                        <p className="brand-color has-text-weight-semibold">
                          {role.company}
                        </p>
                      </div>
                      <p className="has-text-grey is-size-7 has-text-weight-semibold">
                        {role.dates}
                      </p>
                    </div>
                    <p className="mt-3">{role.summary}</p>
                    <ul className="experience-highlights mt-3">
                      {role.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {"note" in role && role.note ? (
                      <p className="is-size-7 has-text-grey mt-3">{role.note}</p>
                    ) : null}
                    {role.tools.length > 0 ? (
                      <div className="experience-tools">
                        <span className="experience-tools-label">Tools</span>
                        <div className="tags">
                          {role.tools.map((item) => (
                            <a
                              key={item.slug}
                              href={`/tools#${item.slug}`}
                              className="tag is-rounded experience-tool"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="section section-alt">
          <div className="container">
            <div className="mb-6" style={{ maxWidth: "40rem" }}>
              <h2 className="title is-2">Areas of expertise</h2>
              <p className="subtitle is-6 has-text-grey mt-3">
                Built through years of enterprise ecommerce and software
                experience, with AI enablement as a newer skill I&apos;m actively
                building and sharing with the teams around me.
              </p>
            </div>
            <div className="columns is-multiline is-variable is-5">
              {expertise.map((item) => {
                const Icon = expertiseIcons[item.icon];
                return (
                  <div key={item.title} className="column is-4">
                    <div className="box lift" style={{ borderRadius: "1.4rem", height: "100%" }}>
                      <span
                        className="icon is-large mb-3"
                        style={{
                          borderRadius: "1rem",
                          color: item.color,
                          backgroundColor: `color-mix(in srgb, ${item.color} 14%, transparent)`,
                        }}
                      >
                        <Icon size={22} />
                      </span>
                      <h3 className="title is-5 mb-2">{item.title}</h3>
                      <p className="has-text-grey">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="columns is-vcentered is-variable is-8">
              <div className="column is-6">
                <h2 className="title is-2">About me</h2>
                <p className="has-text-grey mt-4">
                  I&apos;m Lindy, a positive, curious leader with more than 13 years
                  across digital operations, ecommerce, content, search, and organic
                  discovery. I&apos;ve grown inside enterprise businesses including
                  HSN, JOANN, TaxAct, and Taxwell, where the work depends on strong
                  partnerships as much as strong strategy.
                </p>
                <p className="has-text-grey mt-4">
                  My AI experience is newer than my search career, and I&apos;m not
                  interested in pretending otherwise. I&apos;ve been learning fast
                  and furiously, working hands-on in ChatGPT, Cursor, Copilot, and
                  Gemini, then leading practical sessions so colleagues can apply
                  what works to their own roles and workflows.
                </p>
                <p className="has-text-weight-semibold mt-5 mb-2">My toolkit</p>
                <div className="tags">
                  {toolkit.map((tag) => (
                    <span key={tag} className="tag is-rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="column is-6">
                <div className="box" style={{ borderRadius: "1.6rem" }}>
                  <p className="is-size-5 has-text-weight-medium">
                    &quot;I learn by doing, then teach by making it useful. Whether
                    it&apos;s search, data, or AI, the best strategy is the one a
                    team can actually put to work.&quot;
                  </p>
                  <div
                    className="is-flex is-align-items-center mt-5"
                    style={{ gap: "0.75rem" }}
                  >
                    <span
                      style={{
                        position: "relative",
                        width: 44,
                        height: 44,
                        display: "inline-block",
                        borderRadius: 9999,
                        overflow: "hidden",
                        boxShadow:
                          "0 0 0 2px color-mix(in srgb, var(--brand) 35%, transparent)",
                      }}
                    >
                      <Image
                        src="/nav-headshot.jpg"
                        alt={`Avatar of ${site.name}`}
                        fill
                        sizes="44px"
                        style={{ objectFit: "cover" }}
                      />
                    </span>
                    <div>
                      <p className="has-text-weight-semibold">{site.name}</p>
                      <p className="is-size-7 has-text-grey">{site.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <div className="mb-6" style={{ maxWidth: "40rem" }}>
              <h2 className="title is-2">Education &amp; development</h2>
              <p className="subtitle is-6 has-text-grey mt-3">
                Formal education, search training, and a habit of learning the next
                useful thing before it becomes the obvious thing.
              </p>
            </div>
            <div className="columns is-variable is-5">
              <div className="column is-6">
                <div className="box credential-card">
                  <span className="icon is-large brand-color mb-3">
                    <GraduationCap size={28} />
                  </span>
                  <h3 className="title is-4">Education</h3>
                  <div className="content">
                    <p>
                      <strong>Bachelor of Communications</strong>
                      <br />
                      Western Michigan University, 2010 to 2012
                    </p>
                    <p>
                      <strong>Business Administration &amp; Management</strong>
                      <br />
                      Southwestern Michigan College, 2008 to 2010
                    </p>
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="box credential-card">
                  <span className="icon is-large brand-color mb-3">
                    <Award size={28} />
                  </span>
                  <h3 className="title is-4">Selected professional development</h3>
                  <div className="content">
                    <ul>
                      <li>Continuous Product Design Foundations</li>
                      <li>
                        Google data analytics foundations and data-driven decision
                        making
                      </li>
                      <li>
                        SEO foundations, keyword strategy, link building, local,
                        international, and video SEO
                      </li>
                      <li>Advanced Google Analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />

        <section id="contact" className="section section-alt">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column is-5">
                <h2 className="title is-2">Let&apos;s connect</h2>
                <p className="has-text-grey mt-4" style={{ maxWidth: "28rem" }}>
                  I&apos;m always glad to talk about organic discovery, enterprise
                  search, team leadership, or practical AI enablement. Drop me a
                  line and I&apos;ll write back, like a real human.
                </p>
                <div className="mt-5">
                  <a
                    href={`mailto:${site.email}`}
                    className="is-flex is-align-items-center mb-4"
                    style={{ gap: "0.75rem" }}
                  >
                    <span className="icon brand-color">
                      <Mail size={20} />
                    </span>
                    {site.email}
                  </a>
                  <div
                    className="is-flex is-align-items-center has-text-grey"
                    style={{ gap: "0.75rem" }}
                  >
                    <span className="icon brand-color">
                      <MapPin size={20} />
                    </span>
                    Available for projects worldwide
                  </div>
                </div>
              </div>
              <div className="column is-7">
                <div className="box" style={{ borderRadius: "1.6rem" }}>
                  <h3 className="title is-4">Send a message</h3>
                  <p className="has-text-grey mb-4">
                    Tell me what you&apos;d like to talk about.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
