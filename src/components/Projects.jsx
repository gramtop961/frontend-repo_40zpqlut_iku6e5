import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Nebula UI',
    desc: 'A component toolkit inspired by cosmic motions and holographic depth.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/',
    live: '#',
  },
  {
    title: 'Stellar API',
    desc: 'Serverless API orchestrating planetary telemetry and analytics.',
    tech: ['TypeScript', 'Node.js', 'AWS'],
    github: 'https://github.com/',
    live: '#',
  },
  {
    title: 'Orbit Ops',
    desc: 'A deployment dashboard with real-time constellations of services.',
    tech: ['Vite', 'React', 'WebSockets'],
    github: 'https://github.com/',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 sm:py-28 bg-gradient-to-b from-black via-[#060717] to-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-center gap-3">
          <Star className="text-fuchsia-300" />
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur will-change-transform"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(56,189,248,0.15),transparent_40%)]" />
              <h3 className="text-xl font-semibold text-cyan-50 drop-shadow">{p.title}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-100/80">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                  <Github size={16} /> Code
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-3 py-2 text-sm text-black transition hover:bg-cyan-400">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
