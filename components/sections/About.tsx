"use client";

import { motion } from "framer-motion";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const values = [
  {
    title: "Story-First",
    description: "모든 영상은 이야기에서 시작합니다. 브랜드의 본질을 깊이 이해하고 서사를 설계합니다.",
  },
  {
    title: "AI-Augmented",
    description: "생성형 AI를 창의적 도구로 활용해 더 빠르고, 더 정밀한 콘텐츠를 만들어냅니다.",
  },
  {
    title: "Impact-Driven",
    description: "조회수와 인게이지먼트, 실제 성과로 측정되는 콘텐츠를 지향합니다.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — Text */}
        <div className="flex flex-col gap-8">
          <AnimateInView>
            <SectionLabel>About HO Ground</SectionLabel>
          </AnimateInView>

          <AnimateInView delay={0.1}>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[var(--text-primary)]"
            >
              영상이 브랜드를
              <br />
              <span className="gradient-text">말하게 합니다</span>
            </h2>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
              HO Ground는 공공기관, 지역 브랜드, 문화예술 기관, 기업을 위해
              정밀하게 설계된 영상 콘텐츠를 제작합니다. 단순한 촬영이 아니라
              <strong className="text-[var(--text-primary)] font-medium"> 전략적 스토리텔링</strong>을
              통해 브랜드의 가치를 명확하게 전달합니다.
            </p>
          </AnimateInView>

          <AnimateInView delay={0.3}>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              생성형 AI와 영상 제작의 경계를 허물며, 새로운 미디어 경험을 설계합니다.
              HO Ground의 모든 프로젝트는 클라이언트와 깊은 협업으로 시작해 측정 가능한
              성과로 마무리됩니다.
            </p>
          </AnimateInView>

          {/* Values */}
          <div className="flex flex-col gap-4 mt-2">
            {values.map((v, i) => (
              <AnimateInView key={v.title} delay={0.35 + i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-1 h-full min-h-[2.5rem] rounded-full bg-[var(--accent)] mt-1 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-[var(--text-primary)] block mb-1">
                      {v.title}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {v.description}
                    </span>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>

        {/* Right — Visual / Brand Story Video Teaser */}
        <AnimateInView direction="left" delay={0.15}>
          <div className="relative">
            {/* Glow behind */}
            <div
              className="absolute -inset-8 rounded-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,201,167,0.35) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Image placeholder grid */}
            <div className="relative rounded-2xl overflow-hidden grid grid-cols-2 gap-3">
              {["공공기관", "문화예술", "기업 브랜드", "AI 콘텐츠"].map((label, i) => (
                <motion.div
                  key={label}
                  className="glass-card rounded-xl aspect-square flex flex-col items-center justify-center gap-2 cursor-default"
                  whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-dim)] flex items-center justify-center">
                    <span className="text-[var(--accent)] text-lg font-bold">{i + 1}</span>
                  </div>
                  <span className="text-xs text-[var(--text-secondary)] text-center px-2">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
