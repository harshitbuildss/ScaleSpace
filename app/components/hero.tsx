
"use client";

const nodes = [
  { title: "Lead captured", sub: "Website form", number: "01" },
  { title: "AI processing", sub: "Qualifying request", number: "02" },
  { title: "CRM synchronized", sub: "Record updated", number: "03" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="ss-hero relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40 md:pb-24 md:pt-44"
    >
      <div className="ss-hero-grid pointer-events-none absolute inset-0" />
      <div className="ss-hero-glow ss-hero-glow-warm pointer-events-none" />
      <div className="ss-hero-glow ss-hero-glow-cool pointer-events-none" />
      <div className="ss-hero-beam ss-hero-beam-one pointer-events-none" />
      <div className="ss-hero-beam ss-hero-beam-two pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        {/* Hero copy */}
        <div className="mx-auto max-w-4xl text-center sm:pt-7">
          <div className="ss-hero-eyebrow mx-auto">
            <span className="ss-hero-dot" />
            AI AUTOMATION · DIGITAL PRODUCTS · GROWTH
          </div>

          <h1 className="ss-hero-title mx-auto mt-7 max-w-4xl">
            Build a smarter business.
            <br />
            <span>Scale beyond the manual.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[600px] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            ScaleSpace connects AI automation, digital products, personal
            branding, and client acquisition into systems designed around
            the way your business grows.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="ss-hero-primary group">
              Build your growth system
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#services" className="ss-hero-secondary">
              Explore capabilities
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-5 text-[10px] tracking-wide text-white/35">
            Strategy first. Connected systems. Purposeful execution.
          </p>
        </div>

        {/* Animated product visual */}
        <div className="ss-hero-stage relative mx-auto mt-16 max-w-[960px] sm:mt-20">
          <div className="ss-stage-aura" />

          <div className="ss-stage-orbit ss-stage-orbit-one" />
          <div className="ss-stage-orbit ss-stage-orbit-two" />

          {/* Floating status card */}
          <div className="ss-floating-card ss-floating-card-left">
            <span className="ss-hero-dot" />
            <div>
              <p className="text-[10px] text-white/90">
                Workflow active
              </p>
              <p className="mt-1 text-[9px] text-white/40">
                Systems connected
              </p>
            </div>
          </div>

          <div className="ss-floating-card ss-floating-card-right">
            <span className="ss-hero-dot" />
            <div>
              <p className="text-[10px] text-white/90">
                ScaleSpace Engine
              </p>
              <p className="mt-1 text-[9px] text-white/40">
                Brand · Build · Automate
              </p>
            </div>
          </div>

          {/* Dashboard perspective */}
          <div className="ss-dashboard-perspective">
            <div className="ss-dashboard-shell">
              <div className="ss-dashboard-topbar">
                <div className="flex items-center gap-2">
                  <span className="ss-window-dot" />
                  <span className="ss-window-dot" />
                  <span className="ss-window-dot" />
                </div>

                <span className="text-[9px] tracking-[0.12em] text-white/45">
                  SCALESPACE / SYSTEMS
                </span>

                <span className="rounded-full border border-lime-200/20 px-2 py-1 text-[8px] text-lime-200">
                  PREVIEW
                </span>
              </div>

              <div className="ss-dashboard-layout">
                {/* Sidebar */}
                <aside className="ss-dashboard-sidebar">
                  <div className="mb-7 flex items-center gap-2 text-xs text-white/85">
                    <span className="text-lime-200">◈</span>
                    Systems
                  </div>

                  {["Overview", "Workflows", "Leads", "Integrations", "Analytics"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className={`mb-2 rounded-md px-3 py-2 text-left text-[9px] ${
                          index === 1
                            ? "border border-lime-200/15 bg-lime-200/[0.07] text-lime-100"
                            : "text-white/40"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}

                  <div className="mt-8 border-t border-white/[0.08] pt-4">
                    <p className="text-[8px] text-white/30">
                      WORKSPACE
                    </p>
                    <p className="mt-3 text-[9px] text-white/45">
                      Growth Engine
                    </p>
                  </div>
                </aside>

                {/* Main panel */}
                <div className="ss-dashboard-main">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[9px] text-white/40">
                        YOUR BUSINESS SYSTEM
                      </p>
                      <h2 className="mt-2 text-sm font-medium text-white/90 sm:text-base">
                        Automation overview
                      </h2>
                    </div>

                    <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[8px] text-white/55">
                      <span className="ss-hero-dot" />
                      All systems connected
                    </span>
                  </div>

                  {/* Workflow cards */}
                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {[
                      ["01", "Lead capture"],
                      ["02", "AI qualification"],
                      ["03", "CRM updates"],
                    ].map(([number, label]) => (
                      <div key={number} className="ss-dashboard-metric">
                        <span className="text-[8px] text-lime-200/75">
                          {number} / SYSTEM
                        </span>
                        <p className="mt-3 text-[10px] text-white/80">
                          {label}
                        </p>
                        <div className="ss-metric-line mt-3">
                          <span />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Abstract graph */}
                  <div className="ss-dashboard-chart mt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-white/80">
                          Connected workflows
                        </p>
                        <p className="mt-1 text-[8px] text-white/35">
                          Illustrative system visualization
                        </p>
                      </div>
                      <span className="text-[9px] text-lime-200/80">
                        LIVE PREVIEW
                      </span>
                    </div>

                    <svg
                      viewBox="0 0 520 125"
                      preserveAspectRatio="none"
                      className="ss-chart-svg mt-3"
                      aria-label="Animated illustrative workflow graph"
                      role="img"
                    >
                      <defs>
                        <linearGradient
                          id="ssChartGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#D4F58A" stopOpacity=".05" />
                          <stop offset="50%" stopColor="#D4F58A" stopOpacity=".9" />
                          <stop offset="100%" stopColor="#8ECDF5" stopOpacity=".65" />
                        </linearGradient>
                      </defs>

                      {[25, 55, 85, 115].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="520"
                          y2={y}
                          stroke="rgba(255,255,255,.07)"
                          strokeWidth=".8"
                        />
                      ))}

                      <path
                        d="M0 100 C45 92 50 60 100 72 S170 108 220 62 S300 44 345 55 S420 18 470 35 S500 24 520 15"
                        fill="none"
                        stroke="url(#ssChartGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="750"
                        className="ss-chart-path"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow status cards */}
          <div className="ss-hero-workflow-strip">
            {nodes.map((node) => (
              <div key={node.number} className="ss-hero-workflow-node">
                <span className="ss-hero-dot" />
                <div>
                  <p className="text-[9px] text-white/80">{node.title}</p>
                  <p className="mt-1 text-[8px] text-white/35">{node.sub}</p>
                </div>
                <span className="ml-auto text-[10px] text-lime-200/75">↗</span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-[9px] tracking-wide text-white/30">
            AN ILLUSTRATIVE VIEW OF A CONNECTED DIGITAL GROWTH SYSTEM
          </p>
        </div>
      </div>
    </section>
  );
}
