"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const PUBLIC_SECTOR_YOUTUBE_ID = "V0vfWyWXP7Y";
const CULTURE_ARTS_YOUTUBE_ID = "SSjZHROVTC0";
const CORPORATE_BRAND_YOUTUBE_ID = "ObY6N23gIa8";
const AI_CONTENT_YOUTUBE_ID = "6Hx3aFuk_1U";

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
  {
    label: "AI 콘텐츠",
    youtubeId: AI_CONTENT_YOUTUBE_ID,
    thumbnail: `https://img.youtube.com/vi/${AI_CONTENT_YOUTUBE_ID}/maxresdefault.jpg`,
  },
];

const values = [
  {
    title: "Story First",
    description: "기술보다 이야기를 우선합니다.",
  },
  {
    title: "Human Centered",
    description: "사람 중심의 콘텐츠를 만듭니다.",
  },
  {
    title: "Culture Driven",
    description: "문화가 지속되는 콘텐츠를 만듭니다.",
  },
  {
    title: "Technology with Purpose",
    description: "기술은 목적이 아니라 더 깊은 경험을 위한 도구입니다.",
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
              Archive the Present.
              <br />
              <span className="gradient-text">Experience the Future.</span>
            </h2>
          </AnimateInView>

          <AnimateInView delay={0.15}>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--accent)]">
              Stories That Move People.
            </p>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg italic">
              &ldquo;We believe every community has stories worth preserving.
              We believe technology should deepen culture, not distract from
              it. Because culture is not only something we remember. It is
              something we experience.&rdquo;
            </p>
          </AnimateInView>

          <AnimateInView delay={0.3}>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              우리는 공공의 가치가 오래 살아남는 콘텐츠를 제작하는 회사입니다. 좋은 영상
              콘텐츠는 지역의 브랜드가 되고, 도시의 자산이 되고, 문화가 됩니다. HO Media Archive는
              영상, XR, AI, 인터랙티브 기술을 활용하여 공공과 문화 콘텐츠를 기획하고
              제작하는 크리에이티브 프로덕션입니다.
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
                    <span className="relative text-xl font-extrabold text-white text-center px-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
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
