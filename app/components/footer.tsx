
const FOOTER_EMAIL = "YOUR_EMAIL@example.com";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#work" },
  { label: "Our approach", href: "#process" },
  { label: "About us", href: "#about" },
];

const solutions = [
  "AI & business automation",
  "Websites & digital experiences",
  "Lead generation systems",
  "AI products & custom solutions",
];

export default function Footer() {
  return (
    <footer className="ss-footer">
      <div className="ss-footer-inner">
        <div className="ss-footer-cta">
          <div>
            <span className="ss-footer-eyebrow">
              READY WHEN YOU ARE
            </span>
            <h2>
              Let&apos;s make
              <br />
              <span>work work better.</span>
            </h2>
          </div>

          <a className="ss-footer-cta-link" href="#contact">
            <span>Start a conversation</span>
            <span className="ss-footer-arrow">↗</span>
          </a>
        </div>

        <div className="ss-footer-divider" />

        <div className="ss-footer-main">
          <div className="ss-footer-brand">
            <a className="ss-footer-logo" href="#top" aria-label="ScaleSpace home">
              <span className="ss-footer-logo-mark">
                <span />
                <span />
                <span />
              </span>
              <span>
                Scale<span>Space</span>
              </span>
            </a>

            <p>
              Building smarter systems and digital experiences
              for businesses ready to move forward.
            </p>

            <a
              className="ss-footer-email"
              href={`mailto:${FOOTER_EMAIL}`}
            >
              {FOOTER_EMAIL === "YOUR_EMAIL@example.com"
                ? "Get in touch ↗"
                : FOOTER_EMAIL + " ↗"}
            </a>
          </div>

          <div className="ss-footer-column">
            <h3>EXPLORE</h3>
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#why-us">Why ScaleSpace</a>
          </div>

          <div className="ss-footer-column">
            <h3>WHAT WE DO</h3>
            {solutions.map((solution) => (
              <a key={solution} href="#services">
                {solution}
              </a>
            ))}
          </div>

          <div className="ss-footer-column ss-footer-connect">
            <h3>LET&apos;S CONNECT</h3>
            <p>
              Have a challenge worth solving? Tell us what
              you&apos;re working on.
            </p>
            <a className="ss-footer-text-link" href="#contact">
              Discuss your project <span>↗</span>
            </a>
          </div>
        </div>

        <div className="ss-footer-bottom">
          <span>
            © 2026 ScaleSpace. All rights reserved.
          </span>

          <a href="#top" className="ss-footer-back-top">
            Back to top <span>↑</span>
          </a>

          <span className="ss-footer-status">
            <span className="ss-footer-status-dot" />
            Built for what&apos;s next
          </span>
        </div>
      </div>
    </footer>
  );
}
