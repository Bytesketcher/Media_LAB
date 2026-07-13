"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const PUBLIC_SECTOR_YOUTUBE_ID = "V0vfWyWXP7Y";
const CULTURE_ARTS_YOUTUBE_ID = "SSjZHROVTC0";
const CORPORATE_BRAND_YOUTUBE_ID = "ObY6N23gIa8";

const visualItems = [
  {
    label: "공공기관",
    youtubeId: PUBLIC_SECTOR_YOUTUBE_ID,
    thumbnail: `https://img.youtube.com/vi/${PUBLIC_SECTOR_YOUTUBE_ID}/maxresdefault.jpg`,
  },
  {
    label: "문화예술",
    youtubeId: CULTURE_ARTS_YOUTUBE_ID,
    thumbnail: `https://img.youtube.com/vi/${CULTURE_ARTS_YOUTUBE_ID}/maxresdefault.jpg`,
  },
  {
    label: "기업 브랜드",
    youtubeId: CORPORATE_BRAND_YOUTUBE_ID,
    thumbnail: `https://img.youtube.com/vi/${CORPORATE_BRAND_YOUTUBE_ID}/maxresdefault.jpg`,
  },
  { label: "AI 콘텐츠" },
];

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
  const [activeVideo, setActiveVideo] = useState<{ id: string; label: string } | null>(null);

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
            <SectionLabel>Brand Manifesto</SectionLabel>
          </AnimateInView>

          <AnimateInView delay={0.1}>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[var(--text-primary)]"
            >
              우리는 세상을 밝게 비추기보다
              <br />
              <span className="gradient-text">따뜻하게 비춘다</span>
            </h2>
          </AnimateInView>

          <AnimateInView delay={0.15}>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)]">
              Warm Light. Lasting Stories.
            </p>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg italic">
              &ldquo;Great stories do not shine because they are loud. They shine
              because they are warm. At YUNON, we create media that brings
              warmth to people, places, and culture.&rdquo;
            </p>
          </AnimateInView>

          <AnimateInView delay={0.3}>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              좋은 이야기는 화려해서 빛나는 것이 아닙니다. 사람의 마음을 따뜻하게
              하기 때문에 오래 남습니다. YUNON은 사람과 지역, 그리고 문화에
              온기를 더하는 콘텐츠를 만듭니다.
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
              {visualItems.map((item, i) => {
                const isVideo = Boolean(item.youtubeId);
                return (
                  <motion.div
                    key={item.label}
                    onClick={
                      isVideo
                        ? () => setActiveVideo({ id: item.youtubeId!, label: item.label })
                        : undefined
                    }
                    onKeyDown={
                      isVideo
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setActiveVideo({ id: item.youtubeId!, label: item.label });
                            }
                          }
                        : undefined
                    }
                    role={isVideo ? "button" : undefined}
                    tabIndex={isVideo ? 0 : undefined}
                    aria-label={isVideo ? `${item.label} 사례 영상 재생` : undefined}
                    className={`relative glass-card rounded-xl aspect-square overflow-hidden flex flex-col items-center justify-center gap-2 ${
                      isVideo ? "cursor-pointer group" : "cursor-default"
                    }`}
                    whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {isVideo && (
                      <>
                        <img
                          src={item.thumbnail}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[rgba(7,16,15,0.55)] group-hover:bg-[rgba(7,16,15,0.4)] transition-colors duration-200" />
                        <Play
                          size={18}
                          fill="currentColor"
                          className="absolute top-2 right-2 text-white/90"
                          aria-hidden="true"
                        />
                      </>
                    )}
                    <div className="relative w-10 h-10 rounded-full bg-[var(--accent-dim)] flex items-center justify-center">
                      <span className="text-[var(--accent)] text-lg font-bold">{i + 1}</span>
                    </div>
                    <span className="relative text-xs text-[var(--text-secondary)] text-center px-2">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimateInView>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideo.label} 사례 영상`}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`${activeVideo.label} 사례 영상`}
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="영상 닫기"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
