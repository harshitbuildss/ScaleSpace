
"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "AI AUTOMATION",
    title: "The Lead Response System",
    description:
      "A conceptual workflow connecting enquiry capture, lead qualification, CRM updates, and follow-up tasks.",
    outcome: "Designed to reduce manual handoffs",
    tags: ["Workflow design", "AI", "CRM"],
    visual: "automation",
  },
  {
    number: "02",
    category: "WEB & DIGITAL PRODUCTS",
    title: "The Digital Experience",
    description:
      "A conversion-focused website concept designed to communicate value clearly and guide visitors toward an enquiry.",
    outcome: "Designed around the customer journey",
    tags: ["Web design", "UX", "Development"],
    visual: "product",
  },
  {
    number: "03",
    category: "CLIENT ACQUISITION",
    title: "The Growth Pipeline",
    description:
      "A conceptual acquisition journey linking campaign traffic, landing pages, lead capture, and sales pipeline stages.",
    outcome: "Designed for clearer lead management",
    tags: ["Funnels", "Lead capture", "Analytics"],
    visual: "growth",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "automation") {
    return (
      <div className="ss-work-automation" aria-hidden="true">
        <div className="ss-work-mini-node node-a">
          <span>01</span> Lead
        </div>
        <div className="ss-work-mini-node node-b">
          <span>02</span> AI
        </div>
        <div className="ss-work-mini-node node-c">
          <span>03</span> CRM
        </div>
        <div className="ss-work-mini-node node-d">
          <span>04</span> Follow-up
        </div>
        <svg viewBox="0 0 320 220" preserveAspectRatio="none">
          <path d="M70 65 C115 65 115 110 155 110" />
          <path d="M190 110 C230 110 225 65 255 65" />
          <path d="M190 120 C230 120 225 165 255 165" />
          <circle r="3">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M70 65 C115 65 115 110 155 110"
            />
          </circle>
          <circle r="3">
            <animateMotion
              dur="3s"
              begin="-1.2s"
              repeatCount="indefinite"
              path="M190 110 C230 110 225 65 255 65"
            />
          </circle>
        </svg>
        <div className="ss-work-visual-caption">CONNECTED WORKFLOW</div>
      </div>
    );
  }

  if (type === "product") {
    return (
      <div className="ss-work-product" aria-hidden="true">
        <div className="ss-work-browser">
          <div className="ss-work-browser-top">
            <i /><i /><i />
            <span>YOUR DIGITAL EXPERIENCE</span>
          </div>
          <div className="ss-work-browser-body">
            <div className="ss-work-browser-eyebrow">BUILT AROUND USERS</div>
            <div className="ss-work-browser-heading">
              Better experiences.
              <br />
              Clearer journeys.
            </div>
            <div className="ss-work-browser-line line-long" />
            <div className="ss-work-browser-line line-short" />
            <div className="ss-work-browser-button" />
            <div className="ss-work-browser-cards">
              <i /><i /><i />
            </div>
          </div>
        </div>
        <div className="ss-work-product-float">UX / UI</div>
      </div>
    );
  }

  return (
    <div className="ss-work-growth" aria-hidden="true">
      <div className="ss-work-growth-stage stage-one">
        <span>01</span> DISCOVER
      </div>
      <div className="ss-work-growth-stage stage-two">
        <span>02</span> CAPTURE
      </div>
      <div className="ss-work-growth-stage stage-three">
        <span>03</span> QUALIFY
      </div>
      <div className="ss-work-growth-stage stage-four">
        <span>04</span> CONVERT
      </div>
      <div className="ss-work-growth-orbit" />
      <div className="ss-work-growth-core">GROWTH</div>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section className="ss-work" id="work">
      <div className="ss-work-container">
        <div className="ss-work-header">
          <div>
            <div className="ss-work-eyebrow">
              <span className="ss-hero-dot" />
              SELECTED WORK & CONCEPTS
            </div>
            <h2>
              Ideas turned into
              <br />
              <span>connected systems.</span>
            </h2>
          </div>

          <p>
            Explore the types of business problems we aim to solve through
            automation, digital products, and customer acquisition systems.
          </p>
        </div>

        <div className="ss-work-tabs" role="tablist" aria-label="Project concepts">
          {projects.map((item, index) => (
            <button
              type="button"
              key={item.number}
              role="tab"
              aria-selected={active === index}
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{item.number}</span>
              {item.category}
              <span className="ss-work-tab-arrow">↗</span>
            </button>
          ))}
        </div>

        <article className="ss-work-project" key={project.number}>
          <div className={`ss-work-art ss-work-art-${project.visual}`}>
            <div className="ss-work-art-label">
              <span>CONCEPT / {project.number}</span>
              <span>ILLUSTRATIVE DESIGN</span>
            </div>
            <ProjectVisual type={project.visual} />
            <div className="ss-work-art-bottom">
              <span>SCALES­PACE</span>
              <span>STRATEGY × SYSTEMS</span>
            </div>
          </div>

          <div className="ss-work-project-copy">
            <div className="ss-work-project-category">
              {project.category}
            </div>

            <h3>{project.title}</h3>

            <p className="ss-work-project-description">
              {project.description}
            </p>

            <div className="ss-work-project-outcome">
              <span className="ss-work-outcome-icon">↗</span>
              <div>
                <span>DESIGN INTENT</span>
                <p>{project.outcome}</p>
              </div>
            </div>

            <div className="ss-work-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a href="#contact" className="ss-work-cta">
              Discuss a similar project <span>↗</span>
            </a>
          </div>
        </article>

        <div className="ss-work-bottom-note">
          <span className="ss-hero-dot" />
          <p>
            These are illustrative concepts, not completed client projects
            or verified performance results.
          </p>
          <span>WORK / 06</span>
        </div>
      </div>
    </section>
  );
}
