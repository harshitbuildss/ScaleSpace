
"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Capabilities", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.09] bg-[#0d100f]/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-b border-transparent bg-[#0d100f]/30 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex h-[58px] max-w-[1160px] items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        {/* BRAND */}
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label="ScaleSpace home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-lime-200/30 text-sm text-lime-200 transition-all duration-300 group-hover:border-lime-200 group-hover:bg-lime-200/10">
          </span>

          <span className="text-[15px] font-medium tracking-[-0.04em] text-[#f2f0e9]">
            Scale<span className="text-white/50">Space</span>
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] text-white/50 transition-colors duration-200 hover:text-[#d4f58a]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="group hidden min-h-[38px] items-center gap-3 rounded-md bg-[#f2f0e9] px-4 text-[11px] font-medium text-[#111411] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4f58a] md:inline-flex"
        >
          Start a project
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/80 transition-colors hover:border-lime-200/40 hover:text-lime-200 md:hidden"
        >
          <span className="text-xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`grid overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "grid-rows-[1fr] border-t border-white/10" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-[#0d100f]/95 px-5 pb-5 pt-2 backdrop-blur-xl">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: `${index * 40}ms` }}
                className="flex items-center justify-between border-b border-white/[0.07] py-4 text-sm text-white/65 transition-colors hover:text-lime-200"
              >
                {link.label}
                <span className="text-xs">↗</span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex min-h-[44px] items-center justify-center gap-3 rounded-md bg-[#d4f58a] text-xs font-medium text-[#111411]"
            >
              Start a project <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
