import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const skills = [
  { name: 'JavaScript', color: 'from-yellow-300 to-amber-400' },
  { name: 'React', color: 'from-cyan-300 to-blue-400' },
  { name: 'Node.js', color: 'from-emerald-300 to-green-400' },
  { name: 'Express', color: 'from-lime-300 to-emerald-400' },
  { name: 'MongoDB', color: 'from-emerald-300 to-teal-400' },
  { name: 'TypeScript', color: 'from-sky-300 to-blue-400' },
  { name: 'AWS', color: 'from-orange-300 to-amber-400' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-28 bg-gradient-to-b from-black via-[#050611] to-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-center gap-3">
          <User className="text-cyan-300" />
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          {/* Info Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80"
          >
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.7),rgba(217,70,239,0.7),rgba(56,189,248,0.7))] blur-xl opacity-60 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-black/60 backdrop-blur border border-white/10 shadow-[0_0_60px_rgba(56,189,248,0.25)]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-8">
              <p className="text-cyan-100/90 text-sm sm:text-base">
                I build immersive full‑stack experiences with a love for design systems and performant APIs. When I’m not coding, I’m stargazing and mapping constellations to data structures.
              </p>
            </div>
          </motion.div>

          {/* Skills as data crystals */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_0_24px_rgba(56,189,248,0.15)] backdrop-blur"
              >
                <div className={`pointer-events-none absolute -inset-1 opacity-30 blur-2xl bg-gradient-to-tr ${s.color}`} />
                <div className="relative z-10">
                  <div className={`mb-3 h-10 w-10 rounded-md bg-gradient-to-r ${s.color} shadow-[0_0_24px_rgba(56,189,248,0.4)]`} />
                  <div className="font-semibold text-cyan-50">{s.name}</div>
                  <div className="mt-1 text-xs text-cyan-100/70">Glowing rune calibrated</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
