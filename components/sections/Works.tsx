"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp, ChevronRight } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

interface CaseStudy {
  id: number;
  category: string;
  title: string;
  thumbnail: string;
  youtubeId?: string;
  externalLink?: string;
  externalLinkLabel?: string;
  year: string;
  tags: string[];
  problem: string;
  strategy: string;
  production: string;
  result: string;
  metrics: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 4,
    category: "지역 콘텐츠",
    title: "지역 스토리텔링 게임 개발",
    thumbnail: "/images/himchan.png",
    externalLink: "https://bytesketcher.github.io/SONGDO4/",
    externalLinkLabel: "웹으로 체험하기",
    year: "2026",
    tags: ["지역 퀴즈 게임", "모바일 앱", "TWA"],
    problem:
      "송도4동의 역사와 장소들을 아이들과 주민들에게 흥미롭게 전달할 마을 도슨트 교육 콘텐츠가 필요했습니다.",
    strategy:
      "지도 기반 탐험, 퀴즈, 스탬프 수집을 결합해 장소를 직접 클릭하며 마을 이야기를 자연스럽게 배우는 인터랙티브 학습 경험으로 기획했습니다.",
    production:
      "힘찬이 캐릭터와 함께 학교·공원·문화·행정·교통·축제 등 마을 곳곳을 탐험하는 인터랙티브 웹 지도를 제작하고, TWA(Trusted Web Activity)로 패키징해 구글 플레이스토어 등록을 준비하고 있습니다.",
    result:
      "웹 버전이 공개되어 마을도슨트 교육 자료로 실제 활용되고 있으며, 구글 플레이스토어 등록도 함께 준비 중입니다.",
    metrics: [
      { value: "13곳", label: "탐험 장소 수" },
      { value: "인터랙티브", label: "지도 기반 학습" },
      { value: "TWA", label: "앱 패키징 방식" },
    ],
  },
  {
    id: 3,
    category: "기업",
    title: "스타트업 IR 브랜드 필름",
    thumbnail: "https://img.youtube.com/vi/4ICQd93CydA/maxresdefault.jpg",
    youtubeId: "4ICQd93CydA",
    year: "2025",
    tags: ["AI 영상", "브랜드필름", "IR 피칭"],
    problem:
      "시리즈 A 투자 유치를 앞두고 기술력은 뛰어나지만 브랜드 스토리를 시각적으로 전달하는 영상 자산이 없었습니다.",
    strategy:
      "생성형 AI 시각화를 적극 활용해 복잡한 기술을 직관적으로 표현하고, 투자자 관점에서의 내러티브를 설계했습니다.",
    production:
      "AI 영상 생성 + 실사 촬영 하이브리드 방식으로 3분 IR 필름을 제작.",
    result: "복잡한 기술을 투자자 관점에서 명확히 전달해, 피칭 이해도와 후속 미팅 전환율이 크게 개선되었습니다.",
    metrics: [
      { value: "개선", label: "투자자 피칭 이해도" },
      { value: "하이브리드", label: "AI × 실사 제작 방식" },
      { value: "3분", label: "핵심 필름 러닝타임" },
    ],
  },
  {
    id: 2,
    category: "문화예술",
    title: "국제 현대미술 페스티벌 다큐",
    thumbnail: "https://img.youtube.com/vi/KM5MNgdTLXY/maxresdefault.jpg",
    youtubeId: "KM5MNgdTLXY",
    year: "2024",
    tags: ["다큐멘터리", "아카이브", "국제 배급"],
    problem:
      "페스티벌의 일정을 담는 다큐가 필요했지만, 내러티브와 촬영팀 구성, 플랫폼 연동까지 빠르게 처리해야 했습니다.",
    strategy:
      "멀티캠 동시 촬영 시스템과 현장 편집 워크플로우를 구축해 페스티벌 종료 72시간 내 초판 완성을 목표로 했습니다.",
    production:
      "전문 다큐멘터리 PD, 촬영감독의 팀을 구성하고 현장에서 색보정과 편집을 병행 진행했습니다.",
    result: "페스티벌의 현장감을 생생하게 담아낸 다큐멘터리로 국내외 배급망을 통해 필름 페스티벌을 효과적으로 알렸습니다.",
    metrics: [
      { value: "확산", label: "국내외 배급 홍보 효과" },
      { value: "신속 대응", label: "현장 편집 워크플로우" },
      { value: "몰입감", label: "다큐멘터리 완성도" },
    ],
  },
  {
    id: 1,
    category: "공공기관",
    title: "시군구 관광 홍보 캠페인",
    thumbnail: "https://img.youtube.com/vi/SECnIF_NaFk/maxresdefault.jpg",
    youtubeId: "SECnIF_NaFk",
    year: "2024",
    tags: ["홍보영상", "유튜브", "SNS 컷"],
    problem:
      "지역 관광 인지도가 낮고, 기존 홍보물이 딱딱하고 매력적이지 않아 젊은 세대에게 어필하지 못하는 문제가 있었습니다.",
    strategy:
      "숏폼(Reels·Shorts) 우선 전략을 채택하고, 지역 인플루언서와의 콜라보레이션으로 자연스러운 확산을 설계했습니다.",
    production:
      "4K 촬영, 타임랩스, 감성 내레이션을 결합한 메인 영상과 숏폼을 동시 제작했습니다.",
    result: "유튜브 조회수와 관광객 수가 눈에 띄게 증가하며 지역 관광 홍보에 기여했습니다.",
    metrics: [
      { value: "상승", label: "유튜브 조회수" },
      { value: "증가", label: "관광객 수" },
      { value: "4.9/5", label: "클라이언트 평점" },
    ],
  },
];

const phases = ["problem", "strategy", "production", "result"] as const;
const phaseLabels: Record<(typeof phases)[number], string> = {
  problem: "문제 정의",
  strategy: "전략 수립",
  production: "제작 과정",
  result: "성과",
};

export default function Works() {
  const [activeCase, setActiveCase] = useState(0);
  const [activePhase, setActivePhase] = useState<(typeof phases)[number]>("problem");
  const study = caseStudies[activeCase];

  return (
    <section
      id="works"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--surface) 30%, var(--surface) 70%, var(--bg) 100%)",
      }}
      aria-labelledby="works-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <AnimateInView>
            <SectionLabel>Works</SectionLabel>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <h2
              id="works-heading"
              className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              Case Studies
            </h2>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className="text-[var(--text-secondary)] max-w-md text-center">
              문제 정의부터 성과까지, 모든 프로젝트의 과정을 투명하게 공개합니다.
            </p>
          </AnimateInView>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Case List — Left */}
          <div className="lg:col-span-2 flex flex-col gap-3" role="list" aria-label="케이스 스터디 목록">
            {caseStudies.map((cs, i) => (
              <motion.button
                key={cs.id}
                onClick={() => { setActiveCase(i); setActivePhase("problem"); }}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeCase === i
                    ? "border-[var(--accent)] bg-[var(--accent-dim)]"
                    : "border-[var(--border-subtle)] bg-[var(--surface-2)] hover:border-[var(--border)]"
                }`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                role="listitem"
                aria-pressed={activeCase === i}
                aria-label={`${cs.title} 케이스 스터디 선택`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1.5">
                    <span
                      className={`text-xs font-medium tracking-wider uppercase ${
                        activeCase === i ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {cs.category} · {cs.year}
                    </span>
                    <span className="text-[var(--text-primary)] font-semibold text-sm leading-snug">
                      {cs.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 mt-1 transition-colors ${
                      activeCase === i ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                {activeCase === i && (
                  <motion.div
                    className="flex gap-2 mt-3 flex-wrap"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-[rgba(0,201,167,0.1)] text-[var(--accent)] border border-[rgba(0,201,167,0.2)]"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Case Detail — Right */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-[var(--surface)]">
                  {study.thumbnail ? (
                    <img
                      src={study.thumbnail}
                      alt={`${study.title} 썸네일`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)] text-sm">
                      썸네일 준비 중
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />
                  {study.youtubeId ? (
                    <a
                      href={`https://youtube.com/watch?v=${study.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors bg-[rgba(7,16,15,0.7)] px-3 py-1.5 rounded-full border border-[var(--border-subtle)]"
                      aria-label="유튜브에서 영상 보기"
                    >
                      <ArrowUpRight size={12} aria-hidden="true" />
                      유튜브 보기
                    </a>
                  ) : study.externalLink ? (
                    <a
                      href={study.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors bg-[rgba(7,16,15,0.7)] px-3 py-1.5 rounded-full border border-[var(--border-subtle)]"
                    >
                      <ArrowUpRight size={12} aria-hidden="true" />
                      {study.externalLinkLabel ?? "자세히 보기"}
                    </a>
                  ) : null}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Phase Tabs */}
                  <div
                    className="flex gap-1 mb-6 bg-[var(--surface)] rounded-xl p-1 overflow-x-auto"
                    style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
                    role="tablist"
                    aria-label="케이스 스터디 단계"
                  >
                    {phases.map((phase) => (
                      <button
                        key={phase}
                        onClick={() => setActivePhase(phase)}
                        role="tab"
                        aria-selected={activePhase === phase}
                        className={`shrink-0 text-xs py-2 px-3 rounded-lg font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                          activePhase === phase
                            ? "bg-[var(--accent)] text-[#07100f]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {phaseLabels[phase]}
                      </button>
                    ))}
                  </div>

                  {/* Phase Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePhase}
                      role="tabpanel"
                      aria-label={phaseLabels[activePhase]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="min-h-[80px]"
                    >
                      {activePhase === "result" ? (
                        <div className="flex flex-col gap-4">
                          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                            {study.result}
                          </p>
                          <div className="grid grid-cols-3 gap-3 mt-2">
                            {study.metrics.map((m) => (
                              <div
                                key={m.label}
                                className="bg-[var(--surface-2)] rounded-xl p-4 text-center border border-[var(--border-subtle)]"
                              >
                                <div className="flex items-center justify-center gap-1 mb-1">
                                  <TrendingUp size={14} className="text-[var(--accent)]" aria-hidden="true" />
                                  <span className="text-xl font-bold text-[var(--accent)]">
                                    {m.value}
                                  </span>
                                </div>
                                <span className="text-xs text-[var(--text-muted)]">{m.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                          {study[activePhase]}
                        </p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
