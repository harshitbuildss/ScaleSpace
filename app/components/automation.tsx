
"use client";

import { useEffect, useRef, useState } from "react";

type NodeItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

type SystemFlow = {
  id: string;
  label: string;
  theme: string;
  overline: string;
  core: NodeItem;
  inputs: NodeItem[];
  outputs: NodeItem[];
};

const systems: SystemFlow[] = [
  {
    id: "automation",
    label: "AI Automation",
    theme: "automation",
    overline: "INTELLIGENT WORKFLOW",
    core: {
      id: "automation-core",
      title: "AI Workflow Engine",
      subtitle: "PROCESS · DECIDE · ROUTE",
      icon: "✳",
      description:
        "A workflow connects incoming business events to rules, AI processing, connected tools, and the next appropriate action.",
    },
    inputs: [
      {
        id: "auto-web",
        title: "Website enquiry",
        subtitle: "New lead submitted",
        icon: "↗",
        description:
          "A website form submits a new enquiry. The backend validates the information before starting the connected workflow.",
      },
      {
        id: "auto-whatsapp",
        title: "Customer message",
        subtitle: "WhatsApp / email",
        icon: "◌",
        description:
          "An incoming message can trigger a workflow when the relevant messaging integration and permissions are configured.",
      },
      {
        id: "auto-crm",
        title: "CRM event",
        subtitle: "Record created",
        icon: "▦",
        description:
          "A supported CRM event can start a workflow to update records, route information, or notify the team.",
      },
      {
        id: "auto-schedule",
        title: "Scheduled task",
        subtitle: "Time-based trigger",
        icon: "◷",
        description:
          "Scheduled workflows can handle recurring checks, reports, synchronization, or other defined business tasks.",
      },
    ],
    outputs: [
      {
        id: "auto-qualify",
        title: "Lead qualified",
        subtitle: "Information organized",
        icon: "◎",
        description:
          "Validated information can be organized using agreed qualification criteria. AI-generated assessments should be checked where needed.",
      },
      {
        id: "auto-record",
        title: "CRM updated",
        subtitle: "Records synchronized",
        icon: "▤",
        description:
          "The workflow can write permitted updates to a connected CRM and record whether the operation succeeded.",
      },
      {
        id: "auto-notify",
        title: "Team notified",
        subtitle: "Relevant alert sent",
        icon: "↗",
        description:
          "A notification can be sent through a configured channel when an event meets the required conditions.",
      },
      {
        id: "auto-followup",
        title: "Follow-up queued",
        subtitle: "Next action prepared",
        icon: "◷",
        description:
          "Follow-up tasks can be created with appropriate consent, timing rules, error handling, and human oversight.",
      },
    ],
  },
  {
    id: "product",
    label: "Web & Products",
    theme: "product",
    overline: "DIGITAL PRODUCT PIPELINE",
    core: {
      id: "product-core",
      title: "Product Build System",
      subtitle: "DESIGN · DEVELOP · SHIP",
      icon: "⌘",
      description:
        "A structured delivery process connects business requirements, product experience, development, integrations, and launch.",
    },
    inputs: [
      {
        id: "product-idea",
        title: "Product idea",
        subtitle: "Problem to solve",
        icon: "✳",
        description:
          "Define the problem, target user, intended outcome, and the smallest useful version of the proposed product.",
      },
      {
        id: "product-users",
        title: "User requirements",
        subtitle: "Needs and workflows",
        icon: "◎",
        description:
          "Document the user's needs, the important journeys, and the requirements that should guide product decisions.",
      },
      {
        id: "product-design",
        title: "Interface design",
        subtitle: "UX and UI",
        icon: "▧",
        description:
          "Translate the product requirements into wireframes, interface components, and a coherent user experience.",
      },
      {
        id: "product-data",
        title: "Technical plan",
        subtitle: "Data and integrations",
        icon: "⌘",
        description:
          "Establish the appropriate application architecture, data model, integrations, and deployment approach.",
      },
    ],
    outputs: [
      {
        id: "product-ux",
        title: "Experience defined",
        subtitle: "Flows and interfaces",
        icon: "▧",
        description:
          "An agreed user experience defines the main screens, essential interactions, and expected application behavior.",
      },
      {
        id: "product-app",
        title: "Application built",
        subtitle: "Working features",
        icon: "⌘",
        description:
          "The scoped features are implemented, integrated, and tested against the agreed requirements.",
      },
      {
        id: "product-integrations",
        title: "Integrations ready",
        subtitle: "Systems connected",
        icon: "⌁",
        description:
          "Supported services are connected with appropriate authentication, data validation, and failure handling.",
      },
      {
        id: "product-launch",
        title: "Ready to launch",
        subtitle: "QA and deployment",
        icon: "↗",
        description:
          "The product goes through responsive checks, functional testing, and deployment preparation before release.",
      },
    ],
  },
  {
    id: "brand",
    label: "Personal Branding",
    theme: "brand",
    overline: "FOUNDER BRAND SYSTEM",
    core: {
      id: "brand-core",
      title: "Founder Brand Engine",
      subtitle: "POSITION · CREATE · CONNECT",
      icon: "✳",
      description:
        "A repeatable founder-brand system connects positioning and expertise to content, digital presence, and relevant business opportunities.",
    },
    inputs: [
      {
        id: "brand-expertise",
        title: "Founder expertise",
        subtitle: "Experience and insight",
        icon: "✳",
        description:
          "Identify the founder's knowledge, experience, perspective, and topics that are relevant to their audience.",
      },
      {
        id: "brand-audience",
        title: "Audience insights",
        subtitle: "Questions and needs",
        icon: "◎",
        description:
          "Map audience questions, recurring problems, and the topics that can support useful and credible content.",
      },
      {
        id: "brand-positioning",
        title: "Brand positioning",
        subtitle: "Message and identity",
        icon: "◇",
        description:
          "Define what the founder wants to be known for, who the brand serves, and how it should communicate its value.",
      },
      {
        id: "brand-ideas",
        title: "Content ideas",
        subtitle: "Stories and viewpoints",
        icon: "▤",
        description:
          "Organize potential posts, stories, and educational content into themes that support the agreed positioning.",
      },
    ],
    outputs: [
      {
        id: "brand-calendar",
        title: "Content calendar",
        subtitle: "Repeatable publishing",
        icon: "▦",
        description:
          "Create a publishing plan that balances useful insights, founder stories, educational content, and relevant offers.",
      },
      {
        id: "brand-production",
        title: "Content production",
        subtitle: "Scripts and assets",
        icon: "▧",
        description:
          "Produce appropriate scripts, briefs, visual assets, and drafts to make consistent publishing easier.",
      },
      {
        id: "brand-website",
        title: "Personal website",
        subtitle: "Authority and proof",
        icon: "⌘",
        description:
          "Present the founder's expertise, services, work, and next steps in a focused digital destination.",
      },
      {
        id: "brand-leads",
        title: "Enquiries captured",
        subtitle: "Audience to opportunity",
        icon: "↗",
        description:
          "Connect suitable calls to action with a lead form or enquiry process so interested visitors know what to do next.",
      },
    ],
  },
  {
    id: "acquisition",
    label: "Client Acquisition",
    theme: "acquisition",
    overline: "CUSTOMER ACQUISITION FLOW",
    core: {
      id: "acquisition-core",
      title: "Acquisition Engine",
      subtitle: "ATTRACT · QUALIFY · CONVERT",
      icon: "◎",
      description:
        "Connect marketing touchpoints to lead capture, qualification, sales workflows, and performance measurement.",
    },
    inputs: [
      {
        id: "acq-search",
        title: "Search and content",
        subtitle: "Organic discovery",
        icon: "⌕",
        description:
          "Useful content and search visibility can introduce relevant people to the business and its offer.",
      },
      {
        id: "acq-campaign",
        title: "Campaign traffic",
        subtitle: "Paid and social",
        icon: "↗",
        description:
          "Campaigns can direct relevant visitors to a dedicated landing page or offer, with tracking configured appropriately.",
      },
      {
        id: "acq-landing",
        title: "Landing page",
        subtitle: "Offer and proof",
        icon: "▧",
        description:
          "A focused landing page explains the offer, addresses buyer concerns, and gives visitors a clear next action.",
      },
      {
        id: "acq-enquiry",
        title: "Enquiry submitted",
        subtitle: "Form / booking",
        icon: "◉",
        description:
          "Enquiries enter the lead process through a form, booking workflow, or another supported contact channel.",
      },
    ],
    outputs: [
      {
        id: "acq-lead",
        title: "Lead captured",
        subtitle: "Information validated",
        icon: "◎",
        description:
          "The system validates enquiry details and creates a record for the next step in the process.",
      },
      {
        id: "acq-qualified",
        title: "Lead qualified",
        subtitle: "Fit and intent reviewed",
        icon: "◇",
        description:
          "Leads can be assessed against agreed criteria to help prioritize relevant sales conversations.",
      },
      {
        id: "acq-pipeline",
        title: "Sales pipeline",
        subtitle: "Next action assigned",
        icon: "▦",
        description:
          "A CRM or task system can track opportunity status, ownership, and the next follow-up action.",
      },
      {
        id: "acq-insights",
        title: "Performance insights",
        subtitle: "Measure the funnel",
        icon: "⌁",
        description:
          "Analytics help examine traffic, enquiries, pipeline progression, and where the customer journey could improve.",
      },
    ],
  },
];

const inputYs = [76, 179, 282, 385];
const outputYs = [76, 179, 282, 385];

function CoreVisual({ theme }: { theme: string }) {
  if (theme === "product") {
    return (
      <div className="ss-auto-product-art" aria-hidden="true">
        <div className="ss-auto-product-layer layer-back" />
        <div className="ss-auto-product-layer layer-mid" />
        <div className="ss-auto-browser">
          <div className="ss-auto-browser-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="ss-auto-browser-body">
            <div className="ss-auto-browser-sidebar" />
            <div className="ss-auto-browser-content">
              <span />
              <span />
              <span />
              <div className="ss-auto-browser-tiles">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "brand") {
    return (
      <div className="ss-auto-brand-art" aria-hidden="true">
        <div className="ss-auto-brand-ring ring-one" />
        <div className="ss-auto-brand-ring ring-two" />
        <div className="ss-auto-brand-orb">
          <span>S</span>
        </div>
        <i className="ss-auto-brand-satellite satellite-one" />
        <i className="ss-auto-brand-satellite satellite-two" />
        <i className="ss-auto-brand-satellite satellite-three" />
      </div>
    );
  }

  if (theme === "acquisition") {
    return (
      <div className="ss-auto-funnel-art" aria-hidden="true">
        <div className="ss-auto-funnel funnel-one">
          <span />
        </div>
        <div className="ss-auto-funnel funnel-two">
          <span />
        </div>
        <div className="ss-auto-funnel funnel-three">
          <span />
        </div>
        <div className="ss-auto-funnel funnel-four">
          <span />
        </div>
        <div className="ss-auto-funnel-core">→</div>
      </div>
    );
  }

  return (
    <div className="ss-auto-cube-cluster" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => (
        <div
          key={index}
          className="ss-auto-cube"
          style={{ animationDelay: `${index * -0.17}s` }}
        >
          <span className="face-top" />
          <span className="face-front" />
          <span className="face-side" />
        </div>
      ))}
    </div>
  );
}

export default function AutomationSystem() {
  const [activeFlow, setActiveFlow] = useState(0);
  const [selectedId, setSelectedId] = useState(systems[0].core.id);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const system = systems[activeFlow];
  const allNodes = [system.core, ...system.inputs, ...system.outputs];
  const selected = allNodes.find((node) => node.id === selectedId) ?? system.core;

  function changeFlow(index: number) {
    setActiveFlow(index);
    setSelectedId(systems[index].core.id);
  }

  function selectNode(node: NodeItem) {
    setSelectedId(node.id);
  }

  function connectionPath(y: number, direction: "in" | "out") {
    if (direction === "in") {
      return `M 365 ${y} C 395 ${y}, 390 220, 410 220`;
    }

    return `M 590 220 C 610 220, 605 ${y}, 635 ${y}`;
  }

  return (
    <section
      id="system"
      ref={sectionRef}
      className={`ss-auto-section ${visible ? "is-visible" : ""}`}
    >
      <div className="ss-auto-bg-grid" aria-hidden="true" />
      <div className="ss-auto-bg-aura" aria-hidden="true" />

      <div className="ss-auto-container">
        <div className="ss-auto-heading">
          <p className="ss-section-label">
            <span className="ss-hero-dot" />
            FROM DISCONNECTED TO CONNECTED
          </p>

          <h2>
            See how your business
            <br />
            <span>works as one system.</span>
          </h2>

          <p className="ss-auto-intro">
            Different problems need different workflows. Explore how
            we connect the inputs, processing, and outcomes behind your
            digital growth.
          </p>
        </div>

        {/* System category selector */}
        <div className="ss-auto-tabs" role="tablist" aria-label="System type">
          {systems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeFlow === index}
              onClick={() => changeFlow(index)}
              className={`ss-auto-tab ${activeFlow === index ? "is-active" : ""}`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
              <span className="ss-auto-tab-arrow">↗</span>
            </button>
          ))}
        </div>

        {/* Main automation architecture */}
        <div
          className={`ss-auto-board ss-auto-theme-${system.theme}`}
          data-theme={system.theme}
          key={system.id}
        >
          <div className="ss-auto-board-header">
            <div>
              <span className="ss-auto-kicker">
                ARCHITECTURE / {String(activeFlow + 1).padStart(2, "0")}
              </span>
              <h3>{system.overline}</h3>
            </div>

            <div className="ss-auto-board-status">
              <span className="ss-auto-status-dot" />
              INTERACTIVE MODEL
            </div>
          </div>

          <div className="ss-auto-canvas">
            <svg
              className="ss-auto-wires"
              viewBox="0 0 1000 440"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="ss-auto-wire-in">
                  <stop offset="0%" stopColor="var(--auto-accent)" stopOpacity=".08" />
                  <stop offset="100%" stopColor="var(--auto-accent)" stopOpacity=".75" />
                </linearGradient>
                <linearGradient id="ss-auto-wire-out">
                  <stop offset="0%" stopColor="var(--auto-accent)" stopOpacity=".75" />
                  <stop offset="100%" stopColor="var(--auto-accent)" stopOpacity=".1" />
                </linearGradient>
                <filter id="ss-auto-wire-glow">
                  <feGaussianBlur stdDeviation="2.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {inputYs.map((y, index) => {
                const path = connectionPath(y, "in");
                return (
                  <g key={`input-${index}`}>
                    <path
                      d={path}
                      className="ss-auto-wire ss-auto-wire-in"
                      stroke="url(#ss-auto-wire-in)"
                    />
                    <path
                      d={path}
                      className="ss-auto-wire-pulse"
                      stroke="var(--auto-accent)"
                      filter="url(#ss-auto-wire-glow)"
                    />
                    <circle r="3" fill="var(--auto-accent)">
                      <animateMotion
                        dur={`${2.7 + index * 0.37}s`}
                        repeatCount="indefinite"
                        path={path}
                      />
                    </circle>
                    <circle
                      cx="365"
                      cy={y}
                      r="3"
                      fill="var(--auto-accent)"
                      opacity=".7"
                    />
                  </g>
                );
              })}

              {outputYs.map((y, index) => {
                const path = connectionPath(y, "out");
                return (
                  <g key={`output-${index}`}>
                    <path
                      d={path}
                      className="ss-auto-wire ss-auto-wire-out"
                      stroke="url(#ss-auto-wire-out)"
                    />
                    <path
                      d={path}
                      className="ss-auto-wire-pulse"
                      stroke="var(--auto-accent)"
                      filter="url(#ss-auto-wire-glow)"
                    />
                    <circle r="3" fill="var(--auto-accent)">
                      <animateMotion
                        dur={`${3.1 + index * 0.31}s`}
                        repeatCount="indefinite"
                        path={path}
                        begin={`${index * -0.55}s`}
                      />
                    </circle>
                    <circle
                      cx="635"
                      cy={y}
                      r="3"
                      fill="var(--auto-accent)"
                      opacity=".7"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Incoming signals */}
            <div className="ss-auto-rail ss-auto-inputs">
              <div className="ss-auto-rail-label">
                <span className="ss-auto-rail-dot" />
                INPUTS / TRIGGERS
              </div>

              {system.inputs.map((node, index) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => selectNode(node)}
                  aria-pressed={selectedId === node.id}
                  className={`ss-auto-node ss-auto-input-node ${
                    selectedId === node.id ? "is-selected" : ""
                  }`}
                  style={{ animationDelay: `${index * 65}ms` }}
                >
                  <span className="ss-auto-node-icon">{node.icon}</span>
                  <span className="ss-auto-node-copy">
                    <span className="ss-auto-node-title">{node.title}</span>
                    <span className="ss-auto-node-sub">{node.subtitle}</span>
                  </span>
                  <span className="ss-auto-node-signal" />
                </button>
              ))}
            </div>

            {/* Central 3D engine */}
            <div className="ss-auto-core-wrap">
              <div className="ss-auto-core">
                <div className="ss-auto-core-orbit orbit-a" />
                <div className="ss-auto-core-orbit orbit-b" />

                <div className="ss-auto-hex-outer">
                  <div className="ss-auto-hex-inner" />
                </div>

                <div className="ss-auto-core-visual">
                  <CoreVisual theme={system.theme} />
                </div>

                <div className="ss-auto-core-spark spark-a" />
                <div className="ss-auto-core-spark spark-b" />
              </div>

              <button
                type="button"
                className="ss-auto-core-label"
                onClick={() => selectNode(system.core)}
                aria-pressed={selectedId === system.core.id}
              >
                <span>{system.core.title}</span>
                <span className="ss-auto-core-subtitle">{system.core.subtitle}</span>
              </button>
            </div>

            {/* Resulting actions */}
            <div className="ss-auto-rail ss-auto-outputs">
              <div className="ss-auto-rail-label">
                <span className="ss-auto-rail-dot" />
                OUTPUTS / ACTIONS
              </div>

              {system.outputs.map((node, index) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => selectNode(node)}
                  aria-pressed={selectedId === node.id}
                  className={`ss-auto-node ss-auto-output-node ${
                    selectedId === node.id ? "is-selected" : ""
                  }`}
                  style={{ animationDelay: `${index * 85}ms` }}
                >
                  <span className="ss-auto-node-status">✓</span>
                  <span className="ss-auto-node-copy">
                    <span className="ss-auto-node-title">{node.title}</span>
                    <span className="ss-auto-node-sub">{node.subtitle}</span>
                  </span>
                  <span className="ss-auto-output-icon">{node.icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="ss-auto-board-footer">
            <span>
              <span className="ss-auto-status-dot" />
              SELECT ANY NODE TO INSPECT
            </span>
            <span className="ss-auto-footer-route">
              INPUT <b>→</b> PROCESSING <b>→</b> OUTCOME
            </span>
          </div>
        </div>

        {/* Dynamic node explanation */}
        <div className="ss-auto-details" aria-live="polite">
          <div className="ss-auto-detail-copy" key={selected.id}>
            <div className="ss-auto-detail-label">
              <span className="ss-auto-detail-index">
                {selected.icon}
              </span>
              <span>NODE DETAILS</span>
              <span className="ss-auto-detail-line" />
              <span>{selected.subtitle}</span>
            </div>

            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
          </div>

          <div className="ss-auto-detail-action">
            <span className="ss-auto-kicker">DESIGNED AROUND YOUR BUSINESS</span>
            <p>
              The final implementation depends on your workflow, existing
              tools, integrations, permissions, and requirements.
            </p>
            <a href="#contact" className="ss-auto-contact-link">
              Discuss your system <span>↗</span>
            </a>
          </div>
        </div>

        <p className="ss-auto-disclaimer">
          Conceptual workflow visualization. Connection lines and moving
          packets are illustrative; no external workflows are executed by this demo.
        </p>
      </div>
    </section>
  );
}
