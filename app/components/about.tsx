
"use client";

import { useState } from "react";

const principles = [
  {
    number: "01",
    title: "Clarity before complexity",
    description:
      "Understand the real problem before introducing another tool, platform, or workflow.",
  },
  {
    number: "02",
    title: "Systems over scattered tactics",
    description:
      "Connect the customer experience, business processes, and technology into a more coherent operation.",
  },
  {
    number: "03",
    title: "Execution with purpose",
    description:
      "Prioritize useful outcomes, agree on the scope, and build around what the business actually needs.",
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section className="ss-about" id="about">
      <div className="ss-about-container">
        <div className="ss-about-top">
          <span className="ss-about-eyebrow">
            <span className="ss-hero-dot" />
            THE THINKING BEHIND SCALES­PACE
          </span>

          <span className="ss-about-index">ABOUT / 05</span>
        </div>

        <div className="ss-about-heading">
          <h2>
            Growth shouldn't
            <br />
            <span>feel like guesswork.</span>
          </h2>

          <p>
            ScaleSpace brings strategy, automation, digital experiences,
            and customer acquisition into one connected approach to
            business growth.
          </p>
        </div>

        <div className="ss-about-grid">
          <div className="ss-about-story">
            <span className="ss-about-kicker">OUR APPROACH</span>

            <p className="ss-about-statement">
              Better growth starts by understanding how the pieces fit
              together.
            </p>

            <p className="ss-about-body">
              Businesses often add tools, marketing activities, and
              processes as they grow. Without a clear structure, these
              additions can create more complexity instead of less.
            </p>

            <p className="ss-about-body">
              ScaleSpace is being built around a simple idea: identify
              what is slowing a business down, design a practical solution,
              and connect the right systems around a shared goal.
            </p>

            <a className="ss-about-cta" href="#contact">
              Let's discuss your business <span>↗</span>
            </a>
          </div>

          <div className="ss-about-principles">
            <div className="ss-about-principles-header">
              <span>HOW WE THINK</span>
              <span>SELECT A PRINCIPLE ↓</span>
            </div>

            {principles.map((principle, index) => (
              <button
                key={principle.number}
                type="button"
                className={`ss-about-principle ${
                  active === index ? "is-active" : ""
                }`}
                onClick={() => setActive(index)}
                aria-expanded={active === index}
              >
                <span className="ss-about-principle-number">
                  {principle.number}
                </span>

                <span className="ss-about-principle-content">
                  <strong>{principle.title}</strong>

                  {active === index && (
                    <span className="ss-about-principle-description">
                      {principle.description}
                    </span>
                  )}
                </span>

                <span className="ss-about-principle-arrow">
                  {active === index ? "−" : "+"}
                </span>
              </button>
            ))}

            <div className="ss-about-visual">
              <div className="ss-about-visual-orbit ss-about-orbit-a" />
              <div className="ss-about-visual-orbit ss-about-orbit-b" />

              <div className="ss-about-visual-core">
                <span>SS</span>
              </div>

              <div className="ss-about-visual-node ss-about-node-a">
                STRATEGY
              </div>
              <div className="ss-about-visual-node ss-about-node-b">
                SYSTEMS
              </div>
              <div className="ss-about-visual-node ss-about-node-c">
                GROWTH
              </div>

              <span className="ss-about-visual-caption">
                ONE CONNECTED APPROACH
              </span>
            </div>
          </div>
        </div>

        <div className="ss-about-founder">
          <div className="ss-about-founder-mark">
            <span>H</span>
          </div>

          <div className="ss-about-founder-copy">
            <span className="ss-about-kicker">FOUNDER</span>
            <h3>Harshit Srivastava</h3>
            <p>
              Building ScaleSpace around practical automation, digital
              solutions, and systems that help businesses work smarter.
            </p>
          </div>

          <span className="ss-about-founder-signature">
            SCA­LESPACE / FOUNDER
          </span>
        </div>
      </div>
    </section>
  );
}
