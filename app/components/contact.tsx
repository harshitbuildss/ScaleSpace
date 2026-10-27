
"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "scalespace.cares@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    details: "",
  });

  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function update(
    field: keyof typeof form,
    value: string
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.service ||
      !form.details.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (CONTACT_EMAIL === "scalespace.cares@gmail.com") {
      setError(
        "Setup needed: replace CONTACT_EMAIL with your business email in contact.tsx."
      );
      return;
    }

    const subject = `New ScaleSpace enquiry — ${form.service}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company / Website: ${form.company || "Not provided"}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget || "Not specified"}`,
      "",
      "Project details:",
      form.details,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setNotice(
      "Your email app should open with your enquiry prepared. Please review and send it there."
    );
  }

  return (
    <section className="ss-contact" id="contact">
      <div className="ss-contact-grid" aria-hidden="true" />

      <div className="ss-contact-inner">
        <div className="ss-contact-copy">
          <span className="ss-contact-eyebrow">
            <span className="ss-contact-dot" />
            LET&apos;S BUILD SOMETHING BETTER
          </span>

          <h2>
            Your next stage
            <br />
            of growth starts <span>here.</span>
          </h2>

          <p className="ss-contact-description">
            Tell us what you&apos;re trying to achieve. We&apos;ll
            explore the problem, identify opportunities, and figure
            out whether ScaleSpace is the right fit.
          </p>

          <div className="ss-contact-points">
            <div className="ss-contact-point">
              <span className="ss-contact-point-icon">01</span>
              <div>
                <h3>Understand the problem</h3>
                <p>We start with your goals, not a sales pitch.</p>
              </div>
            </div>

            <div className="ss-contact-point">
              <span className="ss-contact-point-icon">02</span>
              <div>
                <h3>Identify the opportunity</h3>
                <p>Find where systems, automation, or digital experiences can help.</p>
              </div>
            </div>

            <div className="ss-contact-point">
              <span className="ss-contact-point-icon">03</span>
              <div>
                <h3>Plan the next step</h3>
                <p>Discuss a practical approach that fits your business.</p>
              </div>
            </div>
          </div>

          <div className="ss-contact-note">
            <span className="ss-contact-note-line" />
            No pressure. Just a conversation about what&apos;s possible.
          </div>
        </div>

        <div className="ss-contact-form-card">
          <div className="ss-contact-form-heading">
            <div>
              <span className="ss-contact-form-label">PROJECT INQUIRY</span>
              <h3>Tell us about your project</h3>
            </div>
            <span className="ss-contact-form-mark">↗</span>
          </div>

          <p className="ss-contact-form-subtitle">
            Share a few details so we can understand what you need.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="ss-contact-fields">
              <label className="ss-contact-field">
                <span>Your name <b>*</b></span>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  required
                />
              </label>

              <label className="ss-contact-field">
                <span>Work email <b>*</b></span>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                />
              </label>

              <label className="ss-contact-field ss-contact-field-full">
                <span>Company or website</span>
                <input
                  type="text"
                  autoComplete="organization"
                  placeholder="Your business name or website"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                />
              </label>

              <label className="ss-contact-field ss-contact-field-full">
                <span>What are you looking for? <b>*</b></span>
                <select
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="AI & Business Automation">
                    AI &amp; business automation
                  </option>
                  <option value="Websites & Digital Experiences">
                    Websites &amp; digital experiences
                  </option>
                  <option value="Lead Generation & Growth Systems">
                    Lead generation &amp; growth systems
                  </option>
                  <option value="AI Products & Custom Solutions">
                    AI products &amp; custom solutions
                  </option>
                  <option value="Not Sure Yet">Not sure yet</option>
                </select>
              </label>

              <label className="ss-contact-field ss-contact-field-full">
                <span>Estimated budget</span>
                <select
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                >
                  <option value="">Select a budget (optional)</option>
                  <option value="Under ₹15,000">Under ₹15,000</option>
                  <option value="₹15,000–₹30,000">₹15,000–₹30,000</option>
                  <option value="₹30,000–₹75,000">₹30,000–₹75,000</option>
                  <option value="₹75,000+">₹75,000+</option>
                  <option value="Need guidance">Need guidance</option>
                </select>
              </label>

              <label className="ss-contact-field ss-contact-field-full">
                <span>Tell us about the challenge <b>*</b></span>
                <textarea
                  placeholder="What are you trying to improve, build, or automate?"
                  rows={4}
                  value={form.details}
                  onChange={(e) => update("details", e.target.value)}
                  required
                />
              </label>
            </div>

            {error && (
              <p className="ss-contact-message ss-contact-error" role="alert">
                {error}
              </p>
            )}

            {notice && (
              <p className="ss-contact-message ss-contact-success" role="status">
                {notice}
              </p>
            )}

            <button className="ss-contact-submit" type="submit">
              <span>Prepare my enquiry</span>
              <span className="ss-contact-submit-arrow">↗</span>
            </button>

            <p className="ss-contact-privacy">
              Your details are used to respond to your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
