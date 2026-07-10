"use client";

import { motion } from "framer-motion";
import {
  Video,
  Youtube,
  Sparkles,
  Building2,
  Palette,
  BarChart3,
} from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: Building2,
    title: "기관·기업 홍보영상",
    description:
      "공공기관, 지자체, 기업의 비전과 가치를 전달하는 전략적 홍보 영상을 기획부터 후반 작업까지 원스톱으로 제작합니다.",
    tags: ["홍보영상", "기업 브랜드필름", "다큐멘터리"],
    accent: "#00c9a7",
  },
  {
    icon: Youtube,
    title: "유튜브 채널 운영",
    description:
      "채널 전략 수립부터 정기 콘텐츠 제작, 썸네일 디자인, 알고리즘 최적화까지 유튜브 채널을 성장시킵니다.",
    tags: ["채널 기획", "숏폼", "롱폼 콘텐츠"],
    accent: "#FF4444",
  },
  {
    icon: Sparkles,
    title: "생성형 AI 콘텐츠",
    description:
      "AI 영상 생성, AI 내레이션, 가상 스튜디오 등 최신 생성형 AI 기술을 활용한 혁신적인 콘텐츠를 만듭니다.",
    tags: ["AI 영상", "AI 내레이션", "버추얼 프로덕션"],
    accent: "#7C3AED",
  },
  {
    icon: Palette,
    title: "문화예술 미디어",
    description:
      "전시, 공연, 축제 등 문화예술 현장을 감각적인 영상으로 기록하고 아카이빙합니다. 예술의 순간을 영원히.",
    tags: ["전시 기록", "공연 영상", "아카이브"],
    accent: "#F59E0B",
  },
  {
    icon: Video,
    title: "지역 콘텐츠",
    description:
      "지역의 문화, 관광, 특산물을 알리는 시티 브랜딩 영상과 관광 홍보 콘텐츠를 제작합니다.",
    tags: ["시티 브랜딩", "관광 홍보", "지역 축제"],
    accent: "#10B981",
  },
  {
    icon: BarChart3,
    title: "콘텐츠 전략 컨설팅",
    description:
      "영상 제작 전 미디어 전략을 수립하고, 제작 후 성과를 분석해 다음 콘텐츠를 더 효과적으로 만듭니다.",
    tags: ["미디어 전략", "성과 분석", "콘텐츠 로드맵"],
    accent: "#06B6D4",
  },
];

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
              기획, 촬영, 편집, AI 후반 작업까지 — 영상의 모든 단계를 HO Ground가 함께합니다.
            </p>
          </AnimateInView>
        </div>

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
