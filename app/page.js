'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function AgencySite() {
  // Защита от ошибок гидратации (когда серверный и клиентский рендер не совпадают)
  const [mounted, setMounted] = useState(false);

  // Настройка кастомного курсора
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

  // Если компонент еще не смонтирован в браузере, рендерим пустой фон
  if (!mounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0f0f0] font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Custom Cursor Element */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] hidden md:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -16,
          top: -16,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.8em] text-cyan-400 mb-6 block">
            The Future of Brand Identity
          </span>
          <h1 className="text-6xl md:text-[120px] font-medium leading-none tracking-tighter mb-8">
            NEON<span className="italic font-light opacity-50 text-cyan-50">ZEN</span>
          </h1>
          <p className="max-w-md mx-auto text-gray-400 text-sm md:text-base leading-relaxed uppercase tracking-widest">
            AI-Driven Agency. Asia-Inspired Design.
          </p>
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="p-6 md:p-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          
          {/* Main Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 md:row-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between"
          >
            <h3 className="text-3xl font-light italic text-white">AI-Influencers</h3>
            <p className="text-gray-400 text-sm mt-4">
              Создание цифровых душ, которые не знают границ и усталости.
            </p>
            <div className="mt-12 text-6xl opacity-10 text-white">未来</div>
          </motion.div>

          {/* Web Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 bg-[#111] border border-white/5 p-8 rounded-[2rem] flex items-center justify-between overflow-hidden relative"
          >
            <div className="z-10">
              <h3 className="text-xl tracking-widest uppercase text-white">Web Lab</h3>
              <p className="text-gray-500 text-xs mt-2">Next-gen UI/UX in Asian Style</p>
            </div>
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-xl" />
          </motion.div>

          {/* SMM Card */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
            <h3 className="text-lg text-white">Neural SMM</h3>
            <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: [-100, 200] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                className="h-full w-20 bg-cyan-400"
              />
            </div>
          </div>

          {/* Bots Card */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center">
             <span className="text-xs text-cyan-400 mb-2">● Online</span>
             <h3 className="text-lg uppercase text-white">AI-Bots</h3>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 border-t border-white/5 text-center text-[10px] tracking-[0.5em] text-gray-600">
        EST. 2026 • BASED IN BATUMI • SERVING THE WORLD
      </footer>
    </div>
  );
}
