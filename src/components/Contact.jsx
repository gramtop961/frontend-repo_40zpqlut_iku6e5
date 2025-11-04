import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 2600);
    }, 1200);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-28 bg-gradient-to-b from-black via-[#04040f] to-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Station</h2>
          <p className="mt-2 text-cyan-100/80">Open a channel and transmit your message.</p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_0_40px_rgba(56,189,248,0.15)]">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
            <div>
              <label className="mb-1 block text-sm text-cyan-100/80">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-white/40 focus:border-cyan-300/40"
                placeholder="Commander Jane Doe"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-cyan-100/80">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-cyan-300/40"
                placeholder="jane@starfleet.io"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-cyan-100/80">Message</label>
              <textarea
                rows={5}
                required
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-cyan-300/40"
                placeholder="Your transmission..."
              />
            </div>

            <div className="mt-2 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:you@example.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                  <Mail size={18} />
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-60"
              >
                {loading ? 'Transmitting…' : 'Send Transmission'}
              </button>
            </div>
          </form>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Transmission sent successfully. Expect a reply via subspace soon.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
