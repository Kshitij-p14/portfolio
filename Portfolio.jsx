"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  // Animation variant for consistent "Shambhavi-style" reveals
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  };

  return (
    <main className="bg-[#f9f9f9] text-[#1a1a1a] selection:bg-gray-200 min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block border border-black px-3 py-1 text-[10px] font-bold mb-8 uppercase tracking-[0.2em]">
              Open to Work
            </span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-10">
              HEY, I'M <br/> 
              <span className="text-gray-400">KSHITIJ.</span>
            </h1>
            <p className="max-w-md text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              A <strong>Data Scientist</strong> at NMIMS who believes models should provide both precision and clarity. 
              Specializing in Deep Learning, NLP, and interactive storytelling through data.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src="/profile.jpg" 
              alt="Kshitij Panchal" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* --- CASE STUDIES SECTION --- */}
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
