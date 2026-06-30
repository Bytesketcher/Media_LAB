"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Camera, Sparkles, Rocket } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    subtitle: "브랜드 이해",
    description:
      "클라이언트의 목표, 타깃 오디언스, 기존 브랜드 자산을 깊이 파악하는 인터뷰와 리서치로 시작합니다. 영상 제작의 방향성을 함께 설정합니다.",
    duration: "1–2주",
    deliverable: "브랜드 브리프 문서",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    subtitle: "전략 및 기획",
    description:
      "목표 달성을 위한 콘텐츠 전략을 수립합니다. 스크립트, 스토리보드, 촬영 일정 계획을 수립하고 클라이언트 승인을 받습니다.",
    duration: "1–2주",
    deliverable: "스크립트 & 스토리보드",
  },
  {
    number: "03",
    icon: Camera,
    title: "Production",
    subtitle: "촬영 및 제작",
    description:
      "전문 장비와 숙련된 팀으로 촬영을 진행합니다. 모든 순간을 최고의 품질로 포착하며, 현장 모니터링을 통해 클라이언트가 실시간으로 확인할 수 있습니다.",
    duration: "1–5일",
    deliverable: "RAW 촬영본",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Post",
    subtitle: "후반 제작",
    description:
      "편집, 색보정, 사운드 믹싱, AI 보정을 거쳐 완성도 높은 최종본을 제작합니다. 2회 이상의 수정 과정을 통해 완벽한 결과물을 만듭니다.",
    duration: "1–3주",
    deliverable: "최종 납품 파일",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    subtitle: "배포 및 성과 분석",
    description:
      "플랫폼별 최적화 포맷으로 납품하고 업로드를 지원합니다. 4주 후 조회수, 인게이지먼트 데이터를 분석해 성과 리포트를 제공합니다.",
    duration: "배포 후 4주",
    deliverable: "성과 분석 리포트",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="process-heading"
    >
      {/* Header */}
      <div className="text-center mb-16 flex flex-col items-center gap-4">
        <AnimateInView>
          <SectionLabel>Process</SectionLabel>
        </AnimateInView>
        <AnimateInView delay={0.1}>
          <h2
            id="process-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            어떻게 만드는가
          </h2>
        </AnimateInView>
        <AnimateInView delay={0.2}>
          <p className="text-[var(--text-secondary)] max-w-lg text-center">
            투명하고 체계적인 5단계 프로세스로 모든 프로젝트를 진행합니다.
          </p>
        </AnimateInView>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px hidden md:block"
          style={{ background: "linear-gradient(180deg, transparent 0%, var(--border) 10%, var(--border) 90%, transparent 100%)" }}
          aria-hidden="true"
        />

        <ol className="flex flex-col gap-0" aria-label="제작 프로세스 단계">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;

            return (
              <li key={step.number} className="relative">
                <AnimateInView delay={i * 0.1} direction={isEven ? "left" : "right"}>
                  <div
                    className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content card */}
                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                      <div
                        className={`glass-card rounded-2xl p-6 inline-block w-full md:max-w-[420px] ${
                          isEven ? "md:ml-auto" : ""
                        }`}
                      >
                        <div
                          className={`flex items-center gap-3 mb-4 ${isEven ? "md:flex-row-reverse" : ""}`}
                        >
                          <span className="text-xs font-mono text-[var(--accent)] font-bold">
                            {step.number}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] tracking-wider uppercase">
                            {step.subtitle}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div
                          className={`flex items-center gap-4 ${isEven ? "md:justify-end" : ""}`}
                        >
                          <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--border)]">
                            {step.duration}
                          </span>
                          <span className="text-xs text-[var(--text-muted)]">
                            → {step.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full border-2 border-[var(--border)] bg-[var(--surface)] items-center justify-center z-10">
                      <Icon size={20} className="text-[var(--accent)]" aria-hidden="true" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimateInView>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
