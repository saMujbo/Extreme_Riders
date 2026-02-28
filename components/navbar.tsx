"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ink/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-primary-foreground"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-carmine">
              <span className="text-sm font-black tracking-tighter text-primary-foreground">
                ER
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight text-primary-foreground">
              Extreme Riders
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-carmine px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-carmine/90 hover:shadow-lg hover:shadow-carmine/25"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-primary-foreground/10 bg-ink/95 backdrop-blur-md px-4 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-carmine px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-carmine/90"
            >
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
