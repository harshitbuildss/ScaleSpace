
"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Understand before building.",
    description:
      "We identify the bottlenecks, missed opportunities, and manual work holding your business back.",
    deliverables: ["Business audit", "Problem mapping", "Priority roadmap"],
    icon: "◎",
  },
  {
    number: "02",
    label: "STRATEGIZE",
    title: "Design the right system.",
    description:
      "We map the customer journey, define the solution, and connect the right tools around your goals.",
    deliverables: ["System architecture", "Workflow mapping", "Implementation plan"],
    icon: "⌘",
  },
  {
    number: "03",
    label: "BUILD",
    title: "Turn the plan into reality.",
    description:
      "We implement the agreed workflows, digital experiences, and growth infrastructure, then test them.",
    deliverables: ["Implementation", "Integration testing", "Quality checks"],
    icon: "↗",
  },
  {
    number: "04",
    label: "OPTIMIZE",
    title: "Improve as you grow.",
    description:
      "We review performance, identify friction, and refine the system as your business and needs evolve.",
    deliverables: ["Performance review", "Refinements", "Next-step roadmap"],
    icon: "⟳",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08 }
    );

    revealObserver.observe(section);

    const stageElements = section.querySelectorAll<HTMLElement>(
      "[data-process-stage]"
    );

    const stageObserver = new IntersectionObserver(
      (entries) => {
        const candidates = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (candidates[0]) {
          const index = Number(
            candidates[0].target.getAttribute("data-process-stage")
          );
          setActiveStage(index);
        }
      },
      {
        rootMargin: "-25% 0px -35% 0px",
        threshold: [0.1, 0.3, 0.6],
      }
    );

    stageElements.forEach((element) => stageObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      stageObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className={`ss-process ${visible ? "is-visible" : ""}`}
    >
      <div className="ss-process-container">
        <header className="ss-process-header">
          <div className="ss-process-eyebrow">
            <span className="ss-hero-dot" />
            A CLEAR PATH FORWARD
          </div>

          <h2>
            From complexity
            <br />
            <span>to connected growth.</span>
          </h2>

          <p>
            No guesswork. No disconnected execution. A structured process
            designed around your business priorities.
          </p>
        </header>

        <div className="ss-process-layout">
          <div className="ss-process-intro">
            <span className="ss-process-side-label">
              THE SCALES­PACE METHOD
            </span>

            <div className="ss-process-current">
              <span className="ss-process-current-number">
                {stages[activeStage].number}
              </span>
              <div>
                <span className="ss-process-current-caption">
                  CURRENT STAGE
                </span>
                <h3>{stages[activeStage].label}</h3>
              </div>
            </div>

            <p>
              Every engagement starts with understanding the problem.
              The scope, timeline, and deliverables are agreed before
              implementation begins.
            </p>

            <a className="ss-process-link" href="#contact">
              Discuss your project <span>↗</span>
            </a>
          </div>

          <div className="ss-process-timeline">
            <div className="ss-process-track">
              <div
                className="ss-process-track-progress"
                style={{
                  height: `${(activeStage / (stages.length - 1)) * 100}%`,
                }}
              />
            </div>

            {stages.map((stage, index) => (
              <article
                key={stage.number}
                data-process-stage={index}
                className={`ss-process-card ${
                  activeStage === index ? "is-active" : ""
                }`}
              >
                <div className="ss-process-card-top">
                  <div className="ss-process-number">
                    <span>{stage.number}</span>
                  </div>

                  <span className="ss-process-card-label">
                    {stage.label}
                  </span>

                  <span className="ss-process-icon">{stage.icon}</span>
                </div>

                <h3>{stage.title}</h3>
                <p>{stage.description}</p>

                <div className="ss-process-deliverables">
                  {stage.deliverables.map((item) => (
                    <span key={item}>
                      <span className="ss-process-check">✓</span>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="ss-process-footer">
          <span className="ss-hero-dot" />
          <p>
            Strategy first. Transparent execution. Systems built for the
            next stage of your business.
          </p>
          <span className="ss-process-footer-mark">SS / 04</span>
        </div>
      </div>
    </section>
  );
}
