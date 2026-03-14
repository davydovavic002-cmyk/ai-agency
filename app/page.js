'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  if (!mounted) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0f0f0] overflow-x-hidden font-sans">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] hidden md:block"
        style={{ translateX: cursorXSpring, translateY: cursorYSpring, left: -16, top: -16 }}
      />

      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        </div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[10px] uppercase tracking-[0.8em] text-cyan-400 mb-6 block">Future of Brand Identity</span>
          <h1 className="text-6xl md:text-[100px] font-bold tracking-tighter mb-8">
            NEON<span className="italic font-light opacity-50">ZEN</span>
          </h1>
          <p className="max-w-md mx-auto text-gray-400 text-sm uppercase tracking-widest leading-relaxed">
            AI-Driven Agency. Asia-Inspired Design.
          </p>
        </motion.div>
      </section>

      <section className="p-6 md:p-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2rem]">
          <h3 className="text-2xl italic mb-4">AI-Influencers</h3>
          <p className="text-gray-400 text-sm">Цифровые души, которые не знают усталости.</p>
        </div>
        <div className="bg-[#111] border border-white/5 p-10 rounded-[2rem]">
          <h3 className="text-2xl uppercase tracking-tighter mb-4">Web Lab</h3>
          <p className="text-gray-400 text-sm">Next-gen UI/UX. Asian Aesthetic.</p>
        </div>
      </section>

      <footer className="p-10 text-center text-[10px] tracking-[0.5em] text-gray-600 border-t border-white/5">
        EST. 2026 • BASED IN BATUMI
      </footer>
    </div>
  );
}
