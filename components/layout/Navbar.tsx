"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "VR", href: "#vr" },
  { label: "Works", href: "#works" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[var(--accent)] focus:text-[#07100f] focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
      >
        본문으로 건너뛰기
      </a>

      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          scrolled
            ? "bg-[rgba(7,16,15,0.88)] backdrop-blur-xl border-b border-[var(--border-subtle)]"
            : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between"
          aria-label="주 내비게이션"
          style={{ height: "72px" }}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Ground HO 홈"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
              <span className="text-[#07100f] font-bold text-sm">G</span>
            </div>
            <span className="text-[var(--text-primary)] font-semibold text-lg tracking-tight">
              Ground HO
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 cursor-pointer"
                  aria-label={`${link.label} 섹션으로 이동`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-sm px-[5px] py-[5px] rounded-xl bg-[var(--accent)] text-[#07100f] font-semibold hover:bg-[#00b394] transition-colors duration-200 cursor-pointer"
            >
              문의하기
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[var(--text-primary)] cursor-pointer p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-[rgba(7,16,15,0.97)] backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="모바일 메뉴"
          >
            <div className="flex justify-between items-center px-6 h-[72px]">
              <span className="text-[var(--text-primary)] font-semibold text-lg">Ground HO</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[var(--text-primary)] cursor-pointer p-2"
                aria-label="메뉴 닫기"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 pt-8" aria-label="모바일 내비게이션">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-2xl font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-3 border-b border-[var(--border-subtle)] transition-colors duration-200 cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick("#contact")}
                className="mt-6 text-center py-4 rounded-xl bg-[var(--accent)] text-[#07100f] font-semibold text-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                문의하기
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
