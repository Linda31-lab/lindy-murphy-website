"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks, site } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="navbar is-spaced site-navbar"
      role="navigation"
      aria-label="main navigation"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        borderBottom: "1px solid var(--bulma-border-weak)",
      }}
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/" onClick={() => setOpen(false)}>
            <span className="nav-avatar">
              <Image
                src="/nav-headshot.jpg"
                alt={site.name}
                fill
                className="nav-avatar-image"
                sizes="46px"
              />
            </span>
            <strong className="brand-font ml-2">{site.name}</strong>
          </a>
          <button
            type="button"
            className={`navbar-burger${open ? " is-active" : ""}`}
            aria-label="menu"
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div
          id="site-navigation"
          className={`navbar-menu site-navbar-menu${open ? " is-active" : ""}`}
        >
          <div className="navbar-start">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="navbar-item"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <ThemeToggle />
                <a
                  className="button is-primary is-rounded"
                  href="/#contact"
                  onClick={() => setOpen(false)}
                >
                  <strong>Get in touch</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
