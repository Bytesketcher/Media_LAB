import { Instagram, Youtube, Mail } from "lucide-react";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "홍보영상 제작", href: "#" },
    { label: "유튜브 콘텐츠", href: "#" },
    { label: "AI 콘텐츠", href: "#" },
    { label: "기업 브랜드 필름", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Works", href: "#" },
    { label: "Process", href: "#" },
    { label: "Insights", href: "#" },
  ],
  Legal: [
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용약관", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--border-subtle)] bg-[var(--bg)]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <span className="text-[#07100f] font-bold text-sm">H</span>
              </div>
              <span className="text-[var(--text-primary)] font-semibold text-lg">Production HOSU</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              공공기관·지역·문화예술·기업을 위한 Media & Cultural Design 스튜디오.
              영상으로 브랜드의 이야기를 전합니다.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border)] transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border)] transition-colors duration-200"
              >
                <Youtube size={16} />
              </a>
              <a
                href="mailto:snowypaper70@gmail.com"
                aria-label="이메일 문의"
                className="w-9 h-9 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border)] transition-colors duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] mb-4">
                {category}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--border-subtle)] gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 HOSU. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Crafted with precision in Korea
          </p>
        </div>
      </div>
    </footer>
  );
}
