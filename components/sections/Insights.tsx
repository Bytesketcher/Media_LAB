"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const articles = [
  {
    category: "AI 트렌드",
    title: "2025년 생성형 AI가 영상 제작을 바꾸는 5가지 방법",
    excerpt:
      "Sora, Runway, Kling 등 AI 영상 도구들이 상용화되면서 프로덕션 워크플로우가 근본적으로 변화하고 있습니다. 무엇이 달라졌고, 어떻게 활용해야 할까요?",
    readTime: "7분",
    date: "2025. 05. 15",
    accent: "#7C3AED",
    tag: "AI",
  },
  {
    category: "콘텐츠 전략",
    title: "공공기관 홍보영상, 왜 아직도 재미없게 만들까?",
    excerpt:
      "딱딱한 공공 콘텐츠의 시대는 끝났습니다. 젊은 세대와 소통하는 공공기관 미디어 전략을 구체적인 사례와 함께 분석합니다.",
    readTime: "9분",
    date: "2025. 04. 28",
    accent: "#10B981",
    tag: "전략",
  },
  {
    category: "제작 인사이트",
    title: "4K vs 6K: 실무에서 실제로 중요한 것",
    excerpt:
      "해상도 숫자보다 중요한 것이 있습니다. 색역, 다이나믹레인지, 그리고 편집 워크플로우. 실제 현장에서의 경험을 바탕으로 이야기합니다.",
    readTime: "5분",
    date: "2025. 04. 10",
    accent: "#F59E0B",
    tag: "제작",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)",
      }}
      aria-labelledby="insights-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-4">
            <AnimateInView>
              <SectionLabel>Insights</SectionLabel>
            </AnimateInView>
            <AnimateInView delay={0.1}>
              <h2
                id="insights-heading"
                className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
              >
                미디어 인사이트
              </h2>
            </AnimateInView>
          </div>
          <AnimateInView delay={0.15} direction="right">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 group"
            >
              전체 아티클 보기
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </AnimateInView>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <AnimateInView key={article.title} delay={i * 0.1}>
              <motion.article
                className="glass-card rounded-2xl p-7 flex flex-col gap-5 h-full cursor-pointer group"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                tabIndex={0}
                role="article"
                aria-label={article.title}
              >
                {/* Meta */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: `${article.accent}15`,
                      color: article.accent,
                      border: `1px solid ${article.accent}25`,
                    }}
                  >
                    {article.tag}
                  </span>
                  <time
                    dateTime={article.date}
                    className="text-xs text-[var(--text-muted)]"
                  >
                    {article.date}
                  </time>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <Clock size={13} aria-hidden="true" />
                    <span>{article.readTime} 읽기</span>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                    aria-label={`${article.title} 읽기`}
                  >
                    읽기
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
