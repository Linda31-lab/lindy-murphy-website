import Image from "next/image";
import { navLinks, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer
      className="footer"
      style={{ borderTop: "1px solid var(--bulma-border-weak)" }}
    >
      <div className="container">
        <div
          className="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-items-center"
          style={{ gap: "1.5rem" }}
        >
          <div
            className="is-flex is-align-items-center has-text-weight-semibold"
            style={{ gap: "0.5rem" }}
          >
            <span
              style={{
                position: "relative",
                width: 32,
                height: 32,
                display: "inline-block",
                borderRadius: 9999,
                overflow: "hidden",
                boxShadow:
                  "0 0 0 2px color-mix(in srgb, var(--brand) 35%, transparent)",
              }}
            >
              <Image
                src="/nav-headshot.jpg"
                alt={site.name}
                fill
                sizes="32px"
                style={{ objectFit: "cover" }}
              />
            </span>
            {site.name}
          </div>
          <nav className="is-flex is-flex-wrap-wrap" style={{ gap: "1.25rem" }}>
            {navLinks.map((link) => (
              <a key={link.href} className="has-text-grey" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="is-flex" style={{ gap: "1rem" }}>
            <a href={site.github} className="has-text-grey">
              GitHub
            </a>
            <a href={site.linkedin} className="has-text-grey">
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`} className="has-text-grey">
              Email
            </a>
          </div>
        </div>
        <p className="has-text-centered has-text-grey is-size-7 mt-5">
          © 2026 {site.name}. Search experience, curious leadership, and
          practical AI.
        </p>
      </div>
    </footer>
  );
}
