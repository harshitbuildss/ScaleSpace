
"use client";

import { useState } from "react";

const differentiators = [
  {
    number: "01",
    title: "Business first. Technology second.",
    description:
      "We start with your bottlenecks, goals, and customer journey—not a list of tools looking for a problem.",
    detail:
      "Every engagement starts by identifying what needs to improve and why it matters to your business.",
    icon: "◎",
    tags: ["Strategy", "Prioritization"],
  },
  {
    number: "02",
    title: "Connected, not fragmented.",
    description:
      "Your website, workflows, lead capture, and follow-up should work together instead of creating more manual work.",
    detail:
      "We map the handoffs between systems so information can move through the customer journey with less friction.",
    icon: "⌘",
    tags: ["Integrations", "Workflows"],
  },
  {
    number: "03",
    title: "Built around your business.",
    description:
      "No unnecessary complexity. The scope and implementation are shaped around your requirements and resources.",
    detail:
      "We agree on deliverables, dependencies, and success criteria before implementation begins.",
    icon: "↗",
    tags: ["Custom solutions", "Clear scope"],
  },
  {
    number: "04",
    title: "Designed to keep improving.",
    description:
      "A launch is a starting point. Systems should be tested, monitored where appropriate, and refined as needs change.",
    detail:
      "We identify practical improvements and next steps based on actual usage, feedback, and agreed goals.",
    icon: "⟳",
    tags: ["Testing", "Iteration"],
  },
];

export default function WhyScaleSpace() {
  const [active, setActive] = useState(0);

  return (
    <section id="why-us" className="ss-why">
      <div className="ss-why-container">
        <header className="ss-why-header">
          <div className="ss-why-eyebrow">
            <span className="ss-hero-dot" />
            THE SCALES­PACE DIFFERENCE
          </div>

          <h2>
            Less disconnected work.
            <br />
            <span>More room to grow.</span>
          </h2>

          <p>
            Growth gets complicated when every part of your business
            operates separately. We focus on making the pieces work
            together.
          </p>
        </header>

        <div className="ss-why-layout">
          <div className="ss-why-list">
            {differentiators.map((item, index) => (
              <button
                type="button"
                key={item.number}
                className={`ss-why-item ${
                  active === index ? "is-active" : ""
                }`}
                onClick={() => setActive(index)}
                aria-expanded={active === index}
              >
                <span className="ss-why-item-number">{item.number}</span>

                <span className="ss-why-item-title">
                  {item.title}
                </span>

                <span className="ss-why-item-arrow">
                  {active === index ? "−" : "+"}
                </span>

                {active === index && (
                  <span className="ss-why-item-description">
                    {item.description}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="ss-why-visual">
            <div className="ss-why-visual-grid" />

            <div className="ss-why-visual-top">
              <span>STRATEGY / EXECUTION</span>
              <span className="ss-why-live">
                <span className="ss-hero-dot" />
                SYSTEMS THINKING
              </span>
            </div>

            <div className="ss-why-orbit ss-why-orbit-one" />
            <div className="ss-why-orbit ss-why-orbit-two" />

            <div className="ss-why-center">
              <span className="ss-why-center-icon">
                {differentiators[active].icon}
              </span>
              <span className="ss-why-center-label">SCALESPACE</span>
              <strong>{differentiators[active].title}</strong>
              <p>{differentiators[active].detail}</p>
            </div>

            <div className="ss-why-satellite ss-why-satellite-one">
              <span className="ss-hero-dot" />
              Strategy
            </div>

            <div className="ss-why-satellite ss-why-satellite-two">
              <span className="ss-hero-dot" />
              Systems
            </div>

            <div className="ss-why-satellite ss-why-satellite-three">
              <span className="ss-hero-dot" />
              Growth
            </div>

            <div className="ss-why-visual-bottom">
              <span>01 — 04 / OPERATING PRINCIPLES</span>
              <div className="ss-why-progress">
                {differentiators.map((item, index) => (
                  <button
                    type="button"
                    key={item.number}
                    aria-label={`Show principle ${item.number}`}
                    onClick={() => setActive(index)}
                    className={active === index ? "is-active" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ss-why-tags">
          {differentiators[active].tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <span className="ss-why-tags-note">
            Practical systems. Clear priorities. Purposeful execution.
          </span>
        </div>
      </div>
    </section>
  );
}
