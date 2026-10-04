'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';

type IconName =
  | 'arrow'
  | 'spark'
  | 'web'
  | 'bot'
  | 'brand'
  | 'growth'
  | 'check'
  | 'plus'
  | 'menu'
  | 'close'
  | 'target'
  | 'layers'
  | 'zap'
  | 'shield'
  | 'chart'
  | 'workflow'
  | 'mail';

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    spark: <><path d="m12 3-1.2 5.2L6 10l4.8 1.8L12 17l1.2-5.2L18 10l-4.8-1.8L12 3Z"/><path d="m19 15-.6 2.4L16 18l2.4.6L19 21l.6-2.4L22 18l-2.4-.6L19 15Z"/></>,
    web: <><rect x="3" y="4" width="18" height="15" rx="2"/><path d="M3 8h18"/><path d="M7 6h.01M10 6h.01M13 6h.01"/></>,
    bot: <><rect x="5" y="7" width="14" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M8 16h8"/><path d="M3 11v4M21 11v4"/></>,
    brand: <><path d="M4 19c4-7 7-10 16-14"/><path d="M5 5c2.7 0 5 2.3 5 5s-2.3 5-5 5"/><path d="M14 17c2.7 0 5-2.3 5-5s-2.3-5-5-5"/></>,
    growth: <><path d="M4 19V5M4 19h16"/><path d="m7 15 4-4 3 2 5-6"/><path d="M16 7h3v3"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="m14.5 9.5 4-4"/></>,
    layers: <><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></>,
    zap: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>,
    shield: <><path d="M12 3 20 6v6c0 5-3.2 8-8 9-4.8-1-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/></>,
    chart: <><path d="M5 20V9M12 20V4M19 20v-7"/><path d="M3 20h18"/></>,
    workflow: <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><path d="M8 7.2 16 11M8 16.8 16 13"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const services = [
  {
    id: 'build',
    number: '01',
    label: 'BUILD',
    title: 'Web & Product Development',
    icon: 'web' as IconName,
    intro: 'Build the digital foundation your business actually needs.',
    outcome: 'Turn your digital presence into a business asset — not another brochure.',
    items: ['High-converting websites', 'Landing pages & funnels', 'Web applications', 'Customer portals & dashboards', 'MVP & SaaS development', 'Custom internal tools'],
    visual: 'browser'
  },
  {
    id: 'automate',
    number: '02',
    label: 'AUTOMATE',
    title: 'AI & Business Automation',
    icon: 'bot' as IconName,
    intro: 'Remove repetitive work and connect the systems running your business.',
    outcome: 'Less manual work. Faster response times. More consistent operations.',
    items: ['n8n workflow automation', 'AI agents & AI workflows', 'CRM automation', 'Lead qualification', 'WhatsApp & email automation', 'API integrations & data sync'],
    visual: 'flow'
  },
  {
    id: 'brand',
    number: '03',
    label: 'BRAND',
    title: 'Personal & Founder Branding',
    icon: 'brand' as IconName,
    intro: 'Turn the person behind the business into a recognizable authority.',
    outcome: 'Build authority that makes the right people trust you before the sales call.',
    items: ['Founder positioning', 'Personal brand strategy', 'Content systems', 'LinkedIn & Instagram strategy', 'Short-form content strategy', 'Personal websites & lead funnels'],
    visual: 'brand'
  },
  {
    id: 'grow',
    number: '04',
    label: 'GROW',
    title: 'Client Acquisition & Growth',
    icon: 'growth' as IconName,
    intro: 'Turn your digital presence into a predictable source of opportunities.',
    outcome: 'Turn attention into qualified opportunities and measurable growth.',
    items: ['Lead generation', 'SEO & local SEO', 'Paid acquisition', 'Conversion optimization', 'Marketing funnels', 'Analytics & performance systems'],
    visual: 'chart'
  }
];

const problems = [
  {
    title: '“My website looks fine, but it doesn’t generate enough enquiries.”',
    tag: 'CONVERSION',
    text: 'We diagnose the gap between attention and action, then rebuild the digital journey around your buyer.',
    flow: ['Traffic', 'Landing page', 'Lead capture', 'CRM', 'Follow-up']
  },
  {
    title: '“We get leads, but too much follow-up is still manual.”',
    tag: 'AUTOMATION',
    text: 'We connect forms, CRM, AI and messaging so qualified opportunities move forward without your team chasing every task.',
    flow: ['Lead', 'CRM', 'AI qualify', 'Notify', 'Follow-up']
  },
  {
    title: '“The business depends too much on me.”',
    tag: 'SYSTEMS',
    text: 'We map repeatable work and turn bottlenecks into documented, automated workflows your team can actually operate.',
    flow: ['Process', 'Rules', 'Automation', 'Team', 'Dashboard']
  },
  {
    title: '“I want a personal brand that actually creates business opportunities.”',
    tag: 'PERSONAL BRAND',
    text: 'We connect positioning and content to a professional digital destination and a clear path from attention to enquiry.',
    flow: ['Content', 'Authority', 'Profile', 'Website', 'Enquiry']
  }
];

const faqs = [
  ['What exactly does SCALESPACE do?', 'We design and build digital growth systems: websites and products, AI automation, founder branding and client-acquisition infrastructure. The goal is to connect those pieces around a real business outcome.'],
  ['Do you only build websites?', 'No. A website can be one part of the system. Depending on the problem, we can combine web development, CRM, AI, automation, branding and acquisition into one connected solution.'],
  ['Can you automate our existing processes?', 'Yes. We can map an existing workflow, identify repetitive steps and connect tools through APIs, n8n and AI where it creates a clear business benefit.'],
  ['Can you work with our existing tools?', 'Usually, yes. The approach is tool-agnostic where practical. We first understand what you already use and then decide whether to integrate, replace or simplify.'],
  ['Do you work with founders and personal brands?', 'Yes. Founder positioning, content systems, personal websites and lead funnels can be built as part of the broader growth system.'],
  ['What if I do not know what service I need?', 'That is fine. Start with the problem, not the service. Tell us what is slowing growth, creating manual work or losing opportunities, and we can map the likely system.'],
  ['How does a project start?', 'You submit the project brief. We review the business context, goals and constraints, then define the scope, priorities and implementation path before development begins.'],
  ['Do you provide ongoing support?', 'Ongoing optimization and support can be structured after the initial build, depending on the system and the level of involvement your team needs.']
];

const nodeLabels = ['TRAFFIC', 'WEBSITE', 'LEAD', 'CRM', 'AI', 'AUTOMATION', 'SALES', 'CUSTOMER'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(1);
  const [activeProblem, setActiveProblem] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const active = services[activeService];
  const selectedProblem = problems[activeProblem];
  const year = new Date().getFullYear();

  const toggleService = (value: string) => {
    setSelectedServices((current) => current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  };

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState('submitting');
    setFormError('');

    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get('name'),
      company: form.get('company'),
      email: form.get('email'),
      phone: form.get('phone'),
      website: form.get('website'),
      businessType: form.get('businessType'),
      challenge: form.get('challenge'),
      services: selectedServices,
      budget: form.get('budget'),
      timeline: form.get('timeline'),
      message: form.get('message')
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'Unable to submit your request.');
      setFormState('success');
      event.currentTarget.reset();
      setSelectedServices([]);
    } catch (error) {
      setFormState('error');
      setFormError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="ambient-grid" aria-hidden="true" />
      <div className="flow-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="brand-mark" aria-label="SCALESPACE home">
          <span className="brand-orbit"><i /><i /><i /></span>
          <span>SCALESPACE</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#system" onClick={() => setMenuOpen(false)}>Systems</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <div className="header-actions">
          <a href="#contact" className="nav-cta">Start a Project <Icon name="arrow" size={15} /></a>
          <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'close' : 'menu'} size={21} />
          </button>
        </div>
      </header>

      <section id="top" className="hero section-pad">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="status-dot" /> DIGITAL GROWTH SYSTEMS <span className="eyebrow-line" /></div>
          <h1>Your business doesn’t need <em>more tools.</em><br /><span>It needs a system.</span></h1>
          <p className="hero-lede">We design and build the digital infrastructure behind ambitious businesses — combining high-converting websites, AI automation, personal branding and client acquisition into one connected growth engine.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Build My Growth System <Icon name="arrow" size={17} /></a>
            <a className="button button-ghost" href="#services">Explore Services <span className="play-ring">↓</span></a>
          </div>
          <div className="hero-micro"><span>STRATEGY</span><b>→</b><span>BUILD</span><b>→</b><span>AUTOMATE</span><b>→</b><span>GROW</span></div>
        </div>

        <div className="hero-visual" aria-label="Animated digital growth system visualization">
          <div className="visual-glow" />
          <div className="orbital-ring ring-a" /><div className="orbital-ring ring-b" />
          <div className="system-core"><span className="core-pulse" /><strong>GROWTH</strong><small>SYSTEM</small></div>
          {nodeLabels.map((label, index) => {
            const angle = (index / nodeLabels.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 38;
            const y = 50 + Math.sin(angle) * 38;
            return <div key={label} className={`hero-node node-${index}`} style={{ left: `${x}%`, top: `${y}%` }}><span className="node-pulse" /><span>{label}</span></div>;
          })}
          {nodeLabels.map((label, index) => <span key={`packet-${label}`} className={`data-packet packet-${index}`} aria-hidden="true" />)}
          <div className="visual-caption"><span className="live-dot" /> SYSTEMS LIVE <b>08 NODES</b></div>
        </div>
      </section>

      <section className="problem-strip section-pad">
        <div className="section-kicker">THE REAL PROBLEM</div>
        <div className="problem-grid">
          <div><h2>Most businesses don’t have a <em>marketing problem.</em><br />They have a disconnected system.</h2></div>
          <div className="problem-list"><div><span>01</span> Website lives in one place.</div><div><span>02</span> Leads live somewhere else.</div><div><span>03</span> Follow-up is still manual.</div><div><span>04</span> Data never closes the loop.</div></div>
        </div>
        <div className="connect-animation"><div className="loose-node">TRAFFIC</div><div className="loose-line" /><div className="loose-node">LEAD</div><div className="loose-line" /><div className="loose-node">CRM</div><div className="loose-line" /><div className="loose-node">AI</div><div className="loose-line" /><div className="loose-node">CUSTOMER</div></div>
        <p className="problem-close">We connect the pieces — then engineer the flow between them.</p>
      </section>

      <section id="services" className="services section-pad">
        <div className="section-heading split-heading"><div><div className="section-kicker">01 / CAPABILITIES</div><h2>Everything your digital growth system needs.</h2></div><p>From your first digital impression to the systems that turn attention into customers, we design, build and connect the pieces.</p></div>
        <div className="services-layout">
          <div className="service-tabs">
            {services.map((service, index) => <button key={service.id} className={`service-tab ${index === activeService ? 'active' : ''}`} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} onClick={() => setActiveService(index)}><span className="service-tab-number">{service.number}</span><span><small>{service.label}</small><strong>{service.title}</strong></span><Icon name="arrow" size={17} /></button>)}
          </div>
          <div className="service-detail">
            <div className="service-detail-copy"><div className="service-icon"><Icon name={active.icon} size={24} /></div><div className="eyebrow">{active.label}</div><h3>{active.title}</h3><p>{active.intro}</p><div className="service-items">{active.items.map((item) => <div key={item}><Icon name="check" size={15} /> {item}</div>)}</div><div className="service-outcome"><span>BUSINESS OUTCOME</span><strong>{active.outcome}</strong></div></div>
            <div className={`service-visual visual-${active.visual}`}>
              {active.visual === 'browser' && <div className="browser-mock"><div className="browser-top"><i/><i/><i/><span>growth-system.app</span></div><div className="browser-body"><div className="mock-sidebar"/><div className="mock-main"><div className="mock-title"/><div className="mock-cards"><i/><i/><i/></div><div className="mock-chart"><b/><b/><b/><b/><b/><b/><b/></div></div></div><div className="floating-tag tag-a">+ LEAD CAPTURE</div><div className="floating-tag tag-b">CONVERT  →</div></div>}
              {active.visual === 'flow' && <div className="workflow-mock">{['FORM', 'CRM', 'AI', 'FOLLOW-UP', 'SALES'].map((item, i) => <div key={item} className="workflow-node" style={{ animationDelay: `${i * 0.2}s` }}><span>{String(i + 1).padStart(2, '0')}</span>{item}{i < 4 && <b>→</b>}</div>)}<div className="workflow-particle" /></div>}
              {active.visual === 'brand' && <div className="brand-mock"><div className="profile-line"><span className="avatar">A</span><span><b>Founder / Operator</b><small>Building in public</small></span><i>FOLLOW</i></div><div className="content-grid"><div className="content-card tall"><small>01 / INSIGHT</small><strong>Positioning that makes the right people pay attention.</strong></div><div className="content-card"><small>02 / STORY</small><strong>Trust compounds.</strong></div><div className="content-card"><small>03 / PROOF</small><strong>Show the system.</strong></div></div><div className="brand-flow"><span>ATTENTION</span><b>→</b><span>TRUST</span><b>→</b><span>ENQUIRY</span></div></div>}
              {active.visual === 'chart' && <div className="growth-mock"><div className="metric-row"><div><small>OPPORTUNITIES</small><strong>+ <span>42</span></strong></div><div><small>QUALIFIED</small><strong><span>18</span></strong></div><div><small>PIPELINE</small><strong>₹<span>8.4L</span></strong></div></div><div className="line-chart"><svg viewBox="0 0 500 220" preserveAspectRatio="none"><path d="M0 195 C60 190 55 160 105 165 S150 120 195 135 S235 85 280 105 S335 75 360 82 S415 42 500 18" /><path className="chart-fill" d="M0 195 C60 190 55 160 105 165 S150 120 195 135 S235 85 280 105 S335 75 360 82 S415 42 500 18 L500 220 L0 220 Z" /></svg><div className="chart-axis"><span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span></div></div></div>}
            </div>
          </div>
        </div>
      </section>

      <section className="diagnose section-pad">
        <div className="section-heading centered"><div className="section-kicker">02 / START WITH THE PROBLEM</div><h2>Where is your business right now?</h2><p>Choose the bottleneck that feels closest. We’ll show you the system behind it.</p></div>
        <div className="problem-selector">{problems.map((problem, index) => <button key={problem.tag} className={`problem-card ${index === activeProblem ? 'active' : ''}`} onClick={() => setActiveProblem(index)}><span>{problem.tag}</span><strong>{problem.title}</strong><i><Icon name="arrow" size={15} /></i></button>)}</div>
        <div className="diagnosis-output"><div className="diagnosis-copy"><div className="eyebrow"><span className="status-dot" /> {selectedProblem.tag}</div><h3>{selectedProblem.title}</h3><p>{selectedProblem.text}</p><a href="#contact" className="text-link">Build this system <Icon name="arrow" size={16} /></a></div><div className="diagnosis-flow">{selectedProblem.flow.map((item, i) => <div key={item} className="diag-step"><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong>{i < selectedProblem.flow.length - 1 && <i>→</i>}</div>)}</div></div>
      </section>

      <section id="system" className="system-section section-pad">
        <div className="system-head"><div><div className="section-kicker">03 / THE SYSTEM</div><h2>One connected system.<br /><em>Not a stack of random tools.</em></h2></div><p>Your brand creates attention. Your website captures intent. Your CRM remembers it. AI and automation move the opportunity forward. Your team gets the signal at the right moment.</p></div>
        <div className="system-map">
          <div className="system-map-grid" />
          <div className="map-center"><span className="core-pulse" /><strong>YOUR BUSINESS</strong><small>CONNECTED GROWTH ENGINE</small></div>
          {['BRAND', 'CONTENT', 'TRAFFIC', 'WEBSITE', 'LEAD', 'CRM', 'AI', 'AUTOMATION', 'SALES', 'CUSTOMER'].map((item, index) => { const positions = [[15,25],[30,12],[47,7],[66,16],[82,28],[85,52],[70,75],[48,86],[27,78],[10,56]]; const [left, top] = positions[index]; return <div key={item} className={`map-node map-node-${index}`} style={{ left: `${left}%`, top: `${top}%` }}><span /><b>{item}</b></div>; })}
          {Array.from({ length: 12 }).map((_, i) => <span className={`map-packet map-packet-${i}`} key={i} />)}
        </div>
        <div className="system-note"><Icon name="zap" size={17} /> <span>THE PRINCIPLE</span><p>Technology is not the product. The outcome is.</p></div>
      </section>

      <section id="why" className="why section-pad">
        <div className="section-heading centered"><div className="section-kicker">04 / WHY US</div><h2>Why businesses choose a system<br />instead of another freelancer.</h2></div>
        <div className="why-grid">
          {[['01', 'Business-first thinking', 'We start with the business problem, not the technology.'], ['02', 'Strategy + execution', 'You do not have to translate strategy into implementation. We handle both.'], ['03', 'Connected systems', 'Your website, CRM, AI and automation should work together.'], ['04', 'Built around your workflow', 'No unnecessary tools. No one-size-fits-all systems.'], ['05', 'Designed for growth', 'Build infrastructure that can evolve as the business does.'], ['06', 'One strategic partner', 'One team across brand, technology, automation and acquisition.']].map(([num, title, text]) => <article className="why-card" key={num}><span>{num}</span><div className="why-icon"><Icon name={['target','layers','workflow','shield','chart','spark'][Number(num)-1] as IconName} size={21} /></div><h3>{title}</h3><p>{text}</p><i><Icon name="arrow" size={15} /></i></article>)}
        </div>
      </section>

      <section className="process section-pad">
        <div className="section-heading split-heading"><div><div className="section-kicker">05 / PROCESS</div><h2>From problem<br />to operating system.</h2></div><p>A focused process keeps strategy, design and implementation moving toward the same business outcome.</p></div>
        <div className="process-track">{[['01','DISCOVER','Understand the business, audience, workflow and bottlenecks.'],['02','STRATEGIZE','Identify the highest-impact opportunities and design the system.'],['03','BUILD','Create the website, product, brand assets or infrastructure.'],['04','AUTOMATE','Connect tools, data, AI and workflows.'],['05','OPTIMIZE','Measure performance and improve what matters.']].map(([n,t,d],i)=><div className="process-step" key={n}><div className="process-dot"><span>{n}</span></div><div><small>{t}</small><p>{d}</p></div>{i < 4 && <b>→</b>}</div>)}</div>
      </section>

      <section id="about" className="about section-pad">
        <div className="about-visual"><div className="about-grid" /><div className="about-statement"><span>OUR PHILOSOPHY</span><strong>Understand the problem.<br />Design the system.<br /><em>Build what matters.</em></strong><small>Automate what repeats. Measure what moves the business.</small></div></div>
        <div className="about-copy"><div className="section-kicker">06 / ABOUT</div><h2>We don’t build for the sake of building.</h2><p>Modern businesses do not need more disconnected tools. They need systems that work together.</p><p>We combine strategy, design, technology, AI and automation to build digital infrastructure around the way your business actually operates.</p><div className="about-points"><div><Icon name="check" size={16} /><span>Strategy before software.</span></div><div><Icon name="check" size={16} /><span>Automation with purpose.</span></div><div><Icon name="check" size={16} /><span>Systems designed to scale.</span></div></div><div className="founder-placeholder"><span>FOUNDER / OPERATOR</span><strong>HARSHIT SRIVASTAVA</strong><small>Strategy · Technology · Growth</small></div></div>
      </section>

      <section className="faq section-pad">
        <div className="section-heading centered"><div className="section-kicker">07 / QUESTIONS</div><h2>Everything you should know<br />before starting.</h2></div>
        <div className="faq-list">{faqs.map(([q,a], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={q}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{q}</span><Icon name={openFaq === index ? 'close' : 'plus'} size={18} /></button><div className="faq-answer"><p>{a}</p></div></div>)}</div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="contact-shell">
          <div className="contact-copy"><div className="section-kicker">08 / START A PROJECT</div><h2>Let’s build the system behind your next stage.</h2><p>Tell us where the business is today. We’ll identify what should be built, automated or improved.</p><div className="contact-signals"><span><Icon name="shield" size={16} /> Strategy first</span><span><Icon name="zap" size={16} /> No unnecessary tools</span><span><Icon name="mail" size={16} /> Clear next step</span></div></div>
          <div className="lead-form-wrap">
            {formState === 'success' ? <div className="form-success"><div className="success-mark"><Icon name="check" size={30} /></div><div className="eyebrow">REQUEST RECEIVED</div><h3>Your brief is in.</h3><p>Thanks. We’ve received your project details. The next step is a focused conversation around the problem, scope and right system.</p><button className="button button-primary" onClick={() => setFormState('idle')}>Send another request <Icon name="arrow" size={16} /></button></div> : <form className="lead-form" onSubmit={submitLead}>
              <div className="form-grid"><label>Full name *<input name="name" required placeholder="Your name" /></label><label>Business / Company *<input name="company" required placeholder="Company name" /></label><label>Work email *<input type="email" name="email" required placeholder="you@company.com" /></label><label>Phone / WhatsApp<input name="phone" placeholder="+91 ..." /></label><label>Website<input name="website" placeholder="https://" /></label><label>Business type<select name="businessType" defaultValue=""><option value="" disabled>Select one</option><option>Startup</option><option>SME</option><option>Creator / Founder</option><option>Professional service</option><option>D2C / E-commerce</option><option>Agency</option><option>Other</option></select></label></div>
              <label>What is the biggest challenge right now? *<input name="challenge" required placeholder="e.g. leads are coming in but follow-up is manual" /></label>
              <fieldset><legend>What are you looking for?</legend><div className="check-grid">{['Website / Web App','AI Automation','CRM / Lead System','Personal Branding','Lead Generation','Product / MVP','SEO / Growth','Not sure — I need guidance'].map(item => <button type="button" className={`check-option ${selectedServices.includes(item) ? 'selected' : ''}`} key={item} onClick={() => toggleService(item)}><span><Icon name="check" size={13} /></span>{item}</button>)}</div></fieldset>
              <div className="form-grid"><label>Budget range<select name="budget" defaultValue=""><option value="">Select one</option><option>Under ₹25K</option><option>₹25K–₹50K</option><option>₹50K–₹1L</option><option>₹1L–₹2.5L</option><option>₹2.5L+</option><option>Not sure</option></select></label><label>Timeline<select name="timeline" defaultValue=""><option value="">Select one</option><option>ASAP</option><option>1–2 months</option><option>2–3 months</option><option>Exploring</option></select></label></div>
              <label>Tell us a little more. *<textarea name="message" required rows={4} placeholder="What are you trying to achieve, and what is getting in the way?" /></label>
              {formState === 'error' && <div className="form-error">{formError}</div>}
              <button className="button button-primary form-submit" type="submit" disabled={formState === 'submitting'}>{formState === 'submitting' ? 'Sending brief…' : 'Request a Strategy Call'} <Icon name="arrow" size={17} /></button>
              <small className="form-note">No spam. No pressure. Just a clear conversation about what your business needs.</small>
            </form>}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main"><div className="footer-brand"><a href="#top" className="brand-mark"><span className="brand-orbit"><i/><i/><i/></span><span>SCALESPACE</span></a><p>Digital growth systems for ambitious businesses.</p></div><div className="footer-cols"><div><small>EXPLORE</small><a href="#services">Services</a><a href="#system">Systems</a><a href="#why">Why Us</a><a href="#about">About</a></div><div><small>SERVICES</small><a href="#services">Web & Product</a><a href="#services">AI & Automation</a><a href="#services">Personal Branding</a><a href="#services">Client Acquisition</a></div><div><small>CONNECT</small><a href="#contact">Start a Project</a><a href="#contact">Strategy Call</a><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a></div></div></div>
        <div className="footer-bottom"><span>© {year} SCALESPACE. All rights reserved.</span><span>Privacy · Terms</span><span>BUILT FOR GROWTH <i className="status-dot" /></span></div>
      </footer>
    </main>
  );
}
