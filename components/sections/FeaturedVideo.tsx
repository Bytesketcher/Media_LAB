"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const BRAND_STORY_YOUTUBE_ID = "NJRLL-jP9e4";

export default function FeaturedVideo() {
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="featured-video"
      className="section-padding"
      aria-labelledby="featured-video-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <AnimateInView>
            <SectionLabel>Brand Story</SectionLabel>
          </AnimateInView>
          <AnimateInView delay={0.1}>
            <h2
              id="featured-video-heading"
              className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              Ground HO의 이야기
            </h2>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className="text-[var(--text-secondary)] max-w-lg text-center leading-relaxed">
              우리가 왜 영상을 만드는지, 어떻게 클라이언트와 함께 성장하는지
              직접 확인해 보세요.
            </p>
          </AnimateInView>
        </div>

        {/* Video Player */}
        <AnimateInView delay={0.15}>
          <div ref={containerRef} className="relative rounded-3xl overflow-hidden group">
            {/* Ambient glow */}
            <div
              className="absolute -inset-1 rounded-3xl opacity-40 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,201,167,0.4) 0%, rgba(0,123,102,0.2) 100%)",
              }}
              aria-hidden="true"
            />

            {!playing ? (
              /* Thumbnail Overlay */
              <div className="relative aspect-video bg-[var(--surface)] rounded-3xl overflow-hidden">
                {/* YouTube thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${BRAND_STORY_YOUTUBE_ID}/maxresdefault.jpg`}
                  alt="Ground HO 브랜드 스토리 영상 썸네일"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,16,15,0.8)] via-transparent to-[rgba(7,16,15,0.3)]" />

                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                  <motion.button
                    onClick={() => setPlaying(true)}
                    className="w-20 h-20 rounded-full bg-[var(--accent)] flex items-center justify-center cursor-pointer shadow-2xl"
                    style={{ boxShadow: "0 0 60px rgba(0,201,167,0.5)" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="브랜드 스토리 영상 재생"
                  >
                    <Play size={28} fill="#07100f" className="ml-1" aria-hidden="true" />
                  </motion.button>

                  <div className="text-center">
                    <p className="text-[var(--text-primary)] font-semibold text-xl mb-1">
                      Ground HO Story
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm">
                      3분으로 보는 Ground HO의 철학과 여정
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Active Player */
              <div className="relative aspect-video rounded-3xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${BRAND_STORY_YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Ground HO 브랜드 스토리"
                />
              </div>
            )}
          </div>
        </AnimateInView>

        {/* Scroll reveal quote */}
        <AnimateInView delay={0.2}>
          <blockquote className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] leading-relaxed italic">
              "영상은 단순한 콘텐츠가 아닙니다.
              <br />
              <span className="gradient-text">브랜드와 사람 사이의 연결입니다."</span>
            </p>
            <footer className="mt-4 text-sm text-[var(--text-muted)]">
              — Ground HO
            </footer>
          </blockquote>
        </AnimateInView>
      </div>
    </section>
  );
}
