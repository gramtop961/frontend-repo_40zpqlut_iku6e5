import React, { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    const next = !muted;
    setMuted(next);
    audioRef.current.muted = next;
    if (!next) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* 3D Spline scene as full cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient nebula overlay - does not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),rgba(168,85,247,0.08)_40%,transparent_70%)]" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur">
              <Sparkles size={16} className="text-cyan-300" />
              <span className="text-xs tracking-widest text-cyan-200/90">TRAVERSE THE CODE COSMOS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]">
                Your Name
              </span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-cyan-100/90">
              Full Stack Developer | Dreaming in Code and Cosmos
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-6 py-3 text-black transition hover:bg-cyan-400"
              >
                <Rocket className="transition group-hover:translate-x-1" size={18} />
                <span className="font-semibold">View My Work</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                Contact Me
              </a>
              <button
                onClick={toggleAudio}
                className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-white backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10"
                aria-label="Toggle background music"
              >
                <span className={`h-2 w-2 rounded-full ${muted ? 'bg-red-400' : 'bg-green-400'} shadow-[0_0_12px_rgba(74,222,128,0.6)]`} />
                <span className="text-sm">{muted ? 'Unmute' : 'Mute'} Ambience</span>
              </button>
            </div>

            {/* Floating code snippets orbiting */}
            <div className="pointer-events-none relative mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {['const galaxy = new Map();', 'useEffect(() => warp(), [])', 'async function launch() {}', 'db.planets.find({ tech: true })', 'type Nebula<T> = T[]', 'fetch("/api/stars")'].map((snippet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, rotate: -2 }}
                  animate={{ opacity: 0.9, y: [0, -6, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 4 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-xl border border-cyan-300/20 bg-black/40 p-3 text-xs text-cyan-100/90 shadow-[0_0_24px_rgba(34,211,238,0.2)] backdrop-blur"
                >
                  <code>{snippet}</code>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hidden but preloaded ambient audio */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2021/12/20/audio_2ee216a849.mp3?filename=ambient-10673.mp3"
        loop
        muted
      />
    </section>
  );
}
