"use client";

import { motion } from "framer-motion";
import {
  Video,
  Sparkles,
  Building2,
  Palette,
  Glasses,
  Landmark,
  Layers,
  Archive,
  Youtube,
} from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: Video,
    title: "Documentary",
    description:
      "지역과 사람, 공동체의 이야기를 기록하는 다큐멘터리를 기획부터 촬영, 편집까지 제작합니다.",
    tags: ["다큐멘터리", "지역 기록", "공동체 스토리"],
    accent: "#4B6756",
  },
  {
    icon: Glasses,
    title: "가상융합(VR·AR)",
    description:
      "VR·AR 기술로 공간과 이야기를 몰입형으로 체험할 수 있는 가상융합 콘텐츠를 만듭니다.",
    tags: ["VR", "AR", "몰입형 경험"],
    accent: "#2E6FBB",
  },
  {
    icon: Palette,
    title: "Cultural Branding",
    description:
      "문화재단, 박물관, 미술관의 브랜드 아이덴티티와 이야기를 시각적으로 설계합니다.",
    tags: ["문화 브랜딩", "아이덴티티", "브랜드 필름"],
    accent: "#C8A14D",
  },
  {
    icon: Landmark,
    title: "Museum Media",
    description:
      "박물관·미술관·문화유산 공간을 위한 전시 영상과 미디어아트 콘텐츠를 제작합니다.",
    tags: ["전시영상", "미디어아트", "문화유산"],
    accent: "#C8A14D",
  },
  {
    icon: Building2,
    title: "Public Content",
    description:
      "공공기관과 지자체의 정책과 지역 이야기를 신뢰감 있게 전달하는 콘텐츠를 제작합니다.",
    tags: ["공공기관", "지자체", "정책 홍보"],
    accent: "#4B6756",
  },
  {
    icon: Layers,
    title: "Interactive Exhibition",
    description:
      "전시장과 공연 공간을 위한 인터랙티브 콘텐츠와 공간 기반 스토리텔링을 기획합니다.",
    tags: ["인터랙티브", "공간 스토리텔링", "전시 디자인"],
    accent: "#2E6FBB",
  },
  {
    icon: Sparkles,
    title: "AI Storytelling",
    description:
      "생성형 AI와 디지털 휴먼을 활용해 공공의 이야기를 새로운 방식의 AI 다큐멘터리로 제작합니다.",
    tags: ["생성형 AI", "디지털 휴먼", "AI 다큐멘터리"],
    accent: "#7C3AED",
  },
  {
    icon: Youtube,
    title: "YouTube Production",
    description:
      "채널 전략 수립부터 영상 제작, 숏폼 콘텐츠, 운영 컨설팅까지 유튜브 채널 성장을 지원합니다.",
    tags: ["채널 기획", "숏폼 콘텐츠", "운영 컨설팅"],
    accent: "#FF4444",
  },
];

const featuredService = {
  icon: Archive,
  title: "Digital Archive",
  description:
    "영상과 자료를 디지털로 아카이빙하고, 체계적인 메타데이터 관리로 문화유산을 오래도록 보존합니다.",
  tags: ["디지털 아카이빙", "문화유산 보존", "메타데이터 관리"],
  accent: "#C8A14D",
};

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-0">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <AnimateInView>
            <SectionLabel>Services</SectionLabel>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              무엇을 만들어드릴 수 있을까요
            </h2>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className="text-[var(--text-secondary)] max-w-lg text-center leading-relaxed">
              다큐멘터리부터 가상융합(VR·AR), AI 콘텐츠까지, 공공의 이야기를 문화 경험으로 만드는
              모든 과정을 HO Media Archive가 함께합니다.
            </p>
          </AnimateInView>
        </div>

        {/* Featured wide card */}
        <AnimateInView delay={0.15}>
          <motion.article
            className="glass-card rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center gap-6 cursor-default group mb-5"
            whileHover={{
              y: -4,
              borderColor: `${featuredService.accent}40`,
            }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${featuredService.accent}15` }}
            >
              <featuredService.icon
                size={22}
                style={{ color: featuredService.accent }}
                aria-hidden="true"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-tight">
                {featuredService.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {featuredService.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:shrink-0">
              {featuredService.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: `${featuredService.accent}10`,
                    color: featuredService.accent,
                    border: `1px solid ${featuredService.accent}25`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        </AnimateInView>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateInView key={service.title} delay={i * 0.08}>
                <motion.article
                  className="glass-card rounded-2xl p-7 flex flex-col gap-5 h-full cursor-default group"
                  whileHover={{
                    y: -6,
                    borderColor: `${service.accent}40`,
                  }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${service.accent}15` }}
                  >
                    <Icon
                      size={22}
                      style={{ color: service.accent }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: `${service.accent}10`,
                          color: service.accent,
                          border: `1px solid ${service.accent}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
