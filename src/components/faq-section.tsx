"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  { q: "What services does CareOps provide?", a: "CareOps provides remote administrative support for medical practices and non-medical home care agencies. This can include patient calls, appointment coordination, caregiver scheduling, follow-ups, and routine operational reporting." },
  { q: "Do you support medical practices and home care agencies?", a: "Yes. We support both US medical practices and non-medical home care agencies, with responsibilities and workflows scoped to the needs of each organization." },
  { q: "How does remote healthcare administrative support work?", a: "We learn how your team works, agree on tasks and communication protocols, and coordinate support remotely through approved systems and documented processes." },
  { q: "Can you work with our existing scheduling or practice management software?", a: "Access depends on the software, your approval, and the appropriate security and contractual arrangements. We discuss system requirements before any work begins." },
  { q: "Can we customize the support around our workflow?", a: "Yes. Responsibilities, coverage arrangements, escalation rules, and reporting can be defined together around your workflow and operational requirements." },
  {
    q: "How do you approach patient privacy and information security?",
    a: "We aim to establish clear access controls, documented procedures, appropriate training, and secure client-approved workflows. Applicable requirements and Business Associate Agreements will be addressed where required before relevant services begin.",
  },
  { q: "How do we get started?", a: "Start by telling us about your organization and where support would be useful. We can discuss your current process, systems, and a practical starting point." },
  { q: "What do we agree on before support starts?", a: "We define the tasks in and out of scope, coverage windows, approved systems and access, escalation contacts, and the updates or reports that are useful to your team." },
  { q: "Who handles clinical questions or decisions?", a: "CareOps provides administrative support only. Clinical judgment, triage, diagnosis, treatment, and care decisions stay with your qualified staff; we follow your agreed routing instructions for clinical questions." },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="section-pad bg-[#F3FBFF]">
      <div className="container-wide grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <div className="eyebrow mb-5">A few helpful answers</div>
          <h2 className="display-font mb-4 text-[clamp(34px,4vw,48px)] font-semibold leading-[1.08] text-[#17384a]">Questions, answered.</h2>
          <p className="max-w-82.5 text-[13px] leading-[1.8] text-[#657773]">Want to talk through a particular workflow? We can start there.</p>
          <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-[#0E6284] no-underline">
            Talk with our team <ArrowRight size={15} />
          </a>
        </div>
        <div className="border-t border-[#CDEFFF]">
          {faqs.map(({ q, a }, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={q} className="border-b border-[#CDEFFF]">
                <h3 className="m-0">
                  <button
                    id={`faq-trigger-${index}`}
                    aria-controls={`faq-panel-${index}`}
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left text-[13px] font-bold text-[#274653]"
                    data-testid={`button-faq-${index}`}
                  >
                    <span>{q}</span>
                    <ChevronDown size={17} className={`shrink-0 text-[#0E6284] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-trigger-${index}`} className="accordion-content" data-open={isOpen}>
                  <div>
                    <p className="mb-5 max-w-172.5 pr-8 text-[12px] leading-[1.8] text-[#657773]">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
