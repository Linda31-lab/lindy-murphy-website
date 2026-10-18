import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="mb-6" style={{ maxWidth: "40rem" }}>
          <h2 className="title is-2">Questions I get in interviews</h2>
          <p className="subtitle is-6 has-text-grey mt-3">
            How I use AI, how I think about AEO and GEO, and what still matters
            when people get answers instead of a list of links.
          </p>
        </div>
        <div className="faq-list" style={{ maxWidth: "64rem" }}>
          {faqs.map((item) => (
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
  );
}
