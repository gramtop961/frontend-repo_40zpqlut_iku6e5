import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Home, User, FolderGit2, MessageSquare } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Floating nav */}
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
        <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur">
          <li>
            <a href="#home" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-cyan-100/90 hover:text-white hover:bg-white/5">
              <Home size={16} /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-cyan-100/90 hover:text-white hover:bg-white/5">
              <User size={16} /> About
            </a>
          </li>
          <li>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-cyan-100/90 hover:text-white hover:bg-white/5">
              <FolderGit2 size={16} /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-cyan-100/90 hover:text-white hover:bg-white/5">
              <MessageSquare size={16} /> Contact
            </a>
          </li>
        </ul>
      </nav>

      <main className="[scrollbar-color:rgba(34,211,238,0.4)_transparent]">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-black/40 py-8 text-center text-sm text-cyan-100/60">
        Built with love for the cosmos. © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
