
"use client";

import { useState } from "react";

const services = [
  {
    id: "01",
    label: "AI & Automation",
    title: "Let your systems do the repetitive work.",
    description:
      "Connect your tools, automate business processes, and use AI where it creates practical value.",
    tags: ["n8n", "AI workflows", "CRM", "API integrations"],
    steps: [
      { title: "New lead received", detail: "Website / WhatsApp" },
      { title: "AI qualifies lead", detail: "Context and requirements" },
      { title: "CRM gets updated", detail: "Record and lead status" },
      { title: "Team gets notified", detail: "Ready for follow-up" },
    ],
  },
  {
    id: "02",
    label: "Web & Products",
    title: "Turn your idea into a working product.",
    description:
      "Build premium websites, web applications, dashboards, and MVPs around real customer needs.",
    tags: ["Websites", "Web apps", "MVPs", "SaaS"],
    steps: [
      { title: "Understand the problem", detail: "Goals and requirements" },
      { title: "Design the experience", detail: "UX and interface" },
      { title: "Develop the product", detail: "Frontend and backend" },
      { title: "Launch and improve", detail: "Testing and iteration" },
    ],
  },
  {
    id: "03",
    label: "Personal Branding",
    title: "Turn your expertise into authority.",
    description:
      "Build a distinct founder identity with clear positioning, content systems, and a professional digital presence.",
    tags: ["Positioning", "Content strategy", "Founder sites", "Content systems"],
    steps: [
      { title: "Define your positioning", detail: "Expertise and audience" },
      { title: "Build your narrative", detail: "Message and content pillars" },
      { title: "Publish consistently", detail: "Repeatable content system" },
      { title: "Capture opportunities", detail: "Website and lead funnel" },
    ],
  },
  {
    id: "04",
    label: "Client Acquisition",
    title: "Connect attention to opportunities.",
    description:
      "Bring landing pages, lead capture, CRM, follow-ups, and measurement into one coherent acquisition system.",
    tags: ["Lead generation", "Landing pages", "Funnels", "Conversion"],
    steps: [
      { title: "Attract attention", detail: "Content, search, or ads" },
      { title: "Capture the lead", detail: "Landing page and form" },
      { title: "Qualify the enquiry", detail: "CRM and workflow" },
      { title: "Move toward a sale", detail: "Follow-up and tracking" },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section
      id="services"
      className="ss-services relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="ss-services-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="ss-reveal max-w-2xl">
          <p className="ss-section-label">
            <span className="ss-hero-dot" />
            WHAT WE BUILD
          </p>

          <h2 className="ss-services-heading mt-6">
            Everything connected.
            <br />
            <span>Nothing working in isolation.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            From digital products to intelligent workflows, we build the
            pieces your business needs and connect them into a system.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          {/* SERVICE SELECTOR */}
          <div className="ss-service-list" role="group" aria-label="Select a service">
            {services.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={`ss-service-option ${
                  active === index ? "is-active" : ""
                }`}
              >
                <span className="ss-service-number">{item.id}</span>

                <span className="min-w-0 flex-1">
                  <span className="ss-service-name">{item.label}</span>
                  <span className="ss-service-summary">
                    {[
                      "Intelligent workflows for better operations.",
                      "Websites and products built around your goals.",
                      "A clearer brand and a consistent content engine.",
                      "Connected systems that help turn leads into customers.",
                    ][index]}
                  </span>
                </span>

                <span className="ss-service-arrow" aria-hidden="true">
                  {active === index ? "↗" : "＋"}
                </span>
              </button>
            ))}

            <p className="mt-4 text-[10px] leading-5 text-white/30">
              Not sure where to start? We can begin with your business
              challenge instead of a predefined service.
            </p>
          </div>

          {/* DYNAMIC WORKFLOW PANEL */}
          <div className="ss-service-panel" key={service.id}>
            <div className="ss-service-panel-glow" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3">
                <span className="ss-panel-label">
                  CAPABILITY / {service.id}
                </span>

                <span className="ss-panel-status">
                  <span className="ss-hero-dot" />
                  SYSTEM PREVIEW
                </span>
              </div>

              <h3 className="ss-panel-heading mt-7">
                {service.title}
              </h3>

              <p className="mt-4 max-w-md text-xs leading-6 text-white/50 sm:text-sm sm:leading-7">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span className="ss-service-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Animated workflow nodes */}
              <div className="ss-workflow-list mt-8">
                {service.steps.map((step, index) => (
                  <div className="ss-workflow-item" key={step.title}>
                    <div className="ss-workflow-index">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="ss-workflow-title">{step.title}</p>
                      <p className="ss-workflow-description">
                        {step.detail}
                      </p>
                    </div>

                    <span className="ss-workflow-indicator" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="ss-services-cta group mt-7">
                Discuss this solution
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
