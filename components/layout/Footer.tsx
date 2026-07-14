import { Instagram, Youtube, Mail } from "lucide-react";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "다큐멘터리 제작", href: "#" },
    { label: "가상융합(VR·AR)", href: "#" },
    { label: "뮤지엄·전시 미디어", href: "#" },
    { label: "디지털 아카이빙", href: "#" },
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
                <span className="text-[#07100f] font-bold text-xs">HO</span>
              </div>
              <span className="text-[var(--text-primary)] font-semibold text-lg">HO Archive</span>
            </div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              Creating Public Experiences.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              공공기관·문화재단·박물관·지역을 위한 몰입형 콘텐츠 프로덕션.
              다큐멘터리, XR, AI, 인터랙티브 기술로 사람과 장소, 문화를 잇는 이야기를 만듭니다.
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
            © 2026 HO Archive. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Crafted with precision in Korea
          </p>
        </div>
      </div>
    </footer>
  );
}
