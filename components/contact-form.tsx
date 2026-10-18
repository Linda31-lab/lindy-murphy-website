"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    );
    const mailto = `mailto:${site.email}?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailto;
      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong opening your email app. Please email me directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-status notification is-primary is-light" role="status">
        <p className="has-text-weight-semibold">Your email app should be open.</p>
        <p className="mt-2">
          If nothing appeared, write me at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <button
          type="button"
          className="button is-small is-rounded mt-4"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {status === "error" ? (
        <div className="notification is-danger is-light" role="alert">
          {error}
        </div>
      ) : null}
      <div className="field">
        <label className="label" htmlFor="name">
          Name
        </label>
        <div className="control">
          <input
            className="input"
            id="name"
            name="name"
            required
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            className="input"
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">
          Message
        </label>
        <div className="control">
          <textarea
            className="textarea"
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Hello Lindy…"
          />
        </div>
      </div>
      <button
        type="submit"
        className="button is-primary is-rounded is-fullwidth"
        disabled={status === "sending"}
      >
        <strong>{status === "sending" ? "Opening email…" : "Send message"}</strong>
        <span className="icon">
          <Send size={16} />
        </span>
      </button>
    </form>
  );
}
