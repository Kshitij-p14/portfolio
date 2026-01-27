"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch GitHub Repos dynamically
    fetch('https://api.github.com/users/Kshitij-p14/repos?sort=updated')
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 6)))
      .catch(err => console.error("Error fetching repos:", err));

    // Mouse tracking for spotlight effect
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variant for consistent reveals
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen relative selection:bg-blue-500/30 overflow-x-hidden">
      <div className="grain-overlay fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="spotlight" />
      
      {/* Navigation with Resume Download */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <span className="font-bold tracking-tighter text-xl text-blue-500">KP.</span>
        <a 
          href="/Kshitijpanchal_DS.pdf" 
          download 
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full transition-all flex items-center gap-2"
        >
          DOWNLOAD RESUME <span>↓</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 md:px-24 z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 w-full items-center">
          <motion.div {...fadeInUp}>
            <span className="font-mono text-xs tracking-[0.4em] text-blue-500 uppercase mb-4 block">
              Data Scientist // Athlete
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              KSHITIJ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">PANCHAL</span>
            </h1>
            <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed italic">
              "Master of Data Science student at NMIMS. Solving complex problems with the endurance of a marathon runner."
            </p>
          </motion.div>

          {/* Profile Photo with Cinematic Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative group justify-self-center md:justify-self-end"
          >
            <div className="absolute -inset-1 bg-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-black border border-white/10 p-2 rounded-2xl overflow-hidden w-64 h-80">
              <Image 
                src="/profile.jpg" 
                alt="Kshitij Panchal" 
                width={256}
                height={320}
                className="rounded-xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 md:px-24 bg-[#080808]/50 border-y border-white/5 relative z-10">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">Academic Background</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            {...fadeInUp}
            className="p-8 glass-card rounded-3xl border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold text-blue-400">Master of Data Science</h3>
            <p className="text-gray-400">NMIMS, Mumbai | 2024 — 2026</p>
            <div className="mt-4 inline-block px-4 py-1 bg-blue-500/10 rounded-full text-blue-300 font-mono text-sm">CGPA: 8.0/10</div>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="p-8 glass-card rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-gray-200">B.Sc. in Mathematics</h3>
            <p className="text-gray-400 text-sm">Wilson College | 2021 — 2024</p>
            <div className="mt-4 inline-block px-4 py-1 bg-white/5 rounded-full text-gray-400 font-mono text-sm">CGPA: 7.40/10</div>
          </motion.div>
        </div>
      </section>

      {/* Dynamic GitHub Section */}
      <section className="py-24 px-6 md:px-24 z-10 relative">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
          <span className="h-[1px] w-12 bg-blue-500"></span> GitHub Repository Pulse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.length > 0 ? repos.map((repo, idx) => (
            <motion.div 
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="p-8 glass-card rounded-3xl group"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-400 truncate uppercase">{repo.name}</h3>
              <p className="text-sm text-gray-400 h-12 overflow-hidden mb-6">{repo.description || "Project codebase and documentation."}</p>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-bold font-mono group-hover:text-blue-500 transition"
              >
                VIEW SOURCE →
              </a>
            </motion.div>
          )) : (
            <div className="col-span-3 text-center text-gray-500 py-12">
              <p>Loading repositories...</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer / Interests */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-4">/ Athlete</h4>
            <p className="text-gray-400 italic font-light">Training for the Tata Mumbai Marathon. Consistent pace, consistent data.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">/ Reader</h4>
            <p className="text-gray-400 italic font-light leading-relaxed">Currently exploring Atomic Habits and Deep Work to optimize performance.</p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
};
      <section className="px-6 md:px-20 lg:px-32 py-32 space-y-40 bg-white">
        <motion.h2 {...fadeInUp} className="text-sm font-bold uppercase tracking-widest mb-20">Featured Projects</motion.h2>
        
        {/* Project 1: NETRAI */}
        <motion.div {...fadeInUp} className="group border-t border-black pt-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4 italic">NETRAI: Accident Detection</h3>
              <p className="text-gray-500 max-w-sm mb-6">
                Real-time road accident detection using YOLOv12. Integrated Gemini 2 Flash for severity analysis.
              </p>
              <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
                <span>Deep Learning</span>
                <span>•</span>
                <span>Computer Vision</span>
              </div>
            </div>
            <div className="bg-gray-100 aspect-video rounded-sm flex items-center justify-center overflow-hidden">
               {/* Replace with screenshot of your dashboard */}
               <div className="text-gray-400 text-sm tracking-widest uppercase italic">View Case Study</div>
            </div>
          </div>
        </motion.div>

        {/* Project 2: Multimodal RAG */}
        <motion.div {...fadeInUp} className="group border-t border-black pt-12">
          <div className="grid md:grid-cols-2 gap-10">
             <div className="bg-gray-100 aspect-video rounded-sm order-2 md:order-1 flex items-center justify-center">
               <div className="text-gray-400 text-sm tracking-widest uppercase italic">View Case Study</div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4 italic">Multimodal RAG System</h3>
              <p className="text-gray-500 max-w-sm mb-6">
                AI-powered document Q&A using Qwen2.5-VL and ChromaDB. Enabled text-image understanding with 92% precision.
              </p>
              <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
                <span>Generative AI</span>
                <span>•</span>
                <span>NLP</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="px-6 md:px-20 lg:px-32 py-40 border-t border-black text-center bg-[#f9f9f9]">
        <motion.div {...fadeInUp}>
          <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-none mb-20 uppercase">
            GET THEM <br/> SAYING <span className="text-gray-400 italic">"WOW"</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-black pb-10">
            <p className="text-left max-w-xs font-medium text-gray-600">
              If you're looking for a designer who brings fresh ideas, thoughtful problem-solving, and creativity to every project, I'd love to connect.
            </p>
            <div className="flex gap-8 font-bold uppercase text-xs tracking-[0.3em]">
              <a href="https://github.com/Kshitij-p14" className="hover:line-through">GitHub</a>
              <a href="https://linkedin.com/in/kshitij-panchal-5707b92a5/" className="hover:line-through">LinkedIn</a>
            </div>
          </div>
          <p className="mt-10 text-[10px] text-gray-400 uppercase tracking-widest">© 2026 Kshitij Panchal • Built with Framer Motion</p>
        </motion.div>
      </footer>
    </main>
  );
}
