"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";

const HERO_YOUTUBE_ID = "VL4lfdsHBms";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const scrollRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="히어로 섹션"
    >
      {/* Background Video / Poster */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,201,167,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Fullscreen YouTube background */}
        <div className="absolute inset-0 bg-[var(--bg)]" />
        {videoLoaded && (
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none scale-[1.2]"
            src={`https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_YOUTUBE_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title="HO Media Archive 히어로 영상"
            style={{ objectFit: "cover" }}
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,16,15,0.65)] via-[rgba(7,16,15,0.5)] to-[rgba(7,16,15,0.85)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[rgba(0,201,167,0.08)] text-xs tracking-widest uppercase text-[var(--accent)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Immersive Content Production
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-[var(--text-muted)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          Documentary · XR · AI · Interactive Media
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[var(--text-primary)]">영상을 넘어 공간으로</span>
          <br />
          <span className="gradient-text">기록을 넘어 경험으로</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          HO Media Archive는 공공과 문화를 위한 콘텐츠를 기획하고 제작합니다.
          다큐멘터리, XR, AI, 인터랙티브 기술로 사람과 장소, 문화를 잇는 이야기를 만듭니다.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-[5px] py-[5px] rounded-xl bg-[var(--accent)] text-[#07100f] font-semibold text-sm hover:bg-[#00b394] transition-colors duration-200 cursor-pointer"
          >
            프로젝트 문의
          </a>
          <button
            onClick={() => setShowPlayer(true)}
            className="flex items-center gap-3 px-10 py-5 rounded-xl border border-[var(--border)] text-[var(--text-primary)] text-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 cursor-pointer"
            aria-label="쇼릴 영상 재생"
          >
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
              <Play size={14} fill="currentColor" />
            </span>
            쇼릴 보기
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex items-center gap-8 md:gap-12 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          {[
            { value: "200+", label: "프로젝트 완료" },
            { value: "98%", label: "클라이언트 만족도" },
            { value: "5년+", label: "스튜디오 운영" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        ref={scrollRef}
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="아래로 스크롤"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>

      {/* Video Modal */}
      {showPlayer && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="쇼릴 영상"
          onClick={() => setShowPlayer(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="HO Media Archive 쇼릴"
            />
            <button
              onClick={() => setShowPlayer(false)}
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
