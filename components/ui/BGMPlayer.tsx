"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function BGMPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // Sync playback with state
  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch(() => setPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  // Try to autoplay the instant the page loads. Most browsers block
  // unmuted autoplay without a prior user gesture, so as a fallback,
  // start playback on the very first click/tap/scroll/key anywhere on
  // the page — effectively "as soon as you enter" in practice.
  useEffect(() => {
    setPlaying(true);

    const events: (keyof WindowEventMap)[] = ["click", "touchstart", "keydown", "scroll"];
    const startOnInteraction = () => setPlaying(true);
    events.forEach((e) =>
      window.addEventListener(e, startOnInteraction, { once: true, passive: true })
    );

    return () => {
      events.forEach((e) => window.removeEventListener(e, startOnInteraction));
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/morning-atlas.mp3" loop preload="auto" />
      <motion.button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        className="fixed bottom-6 right-6 z-[150] w-12 h-12 rounded-full bg-[rgba(7,16,15,0.85)] backdrop-blur-xl border border-[var(--border)] flex items-center justify-center text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-200 cursor-pointer shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        aria-label={playing ? "배경음악 정지" : "배경음악 재생"}
        aria-pressed={playing}
      >
        {playing ? <Volume2 size={18} aria-hidden="true" /> : <VolumeX size={18} aria-hidden="true" />}
      </motion.button>
    </>
  );
}
