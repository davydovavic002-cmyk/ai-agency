'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function FinalAgencySite() {
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

  if (!mounted) return <div style={{ background: '#050505', minHeight: '100vh' }} />;

  return (
    <div style={styles.container}>
      {/* Custom Cursor */}
      <motion.div style={{ ...styles.cursor, translateX: cursorXSpring, translateY: cursorYSpring }} />

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.glow1} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <span style={styles.subtitle}>// DIGITAL ZEN GARDEN //</span>
          <h1 style={styles.title}>NEON<span style={{ fontWeight: '200', opacity: 0.6 }}>ZEN</span></h1>
          <p style={styles.heroDesc}>Мы объединяем эстетику азиатского минимализма с мощью нейросетей для создания брендов будущего.</p>
        </motion.div>
      </section>

      {/* Video Showcase Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Showcase <span style={styles.italic}>— Visual Soul</span></h2>
        <div style={styles.videoPlaceholder}>
           <div style={styles.videoOverlay}>
              <p style={{ letterSpacing: '0.5em', fontSize: '12px' }}>[ VIDEO PRESENTATION ]</p>
           </div>
           {/* Сюда мы вставим видео после генерации */}
           <div style={{ color: '#444', textAlign: 'center' }}>Видео генерируется...</div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section style={styles.gridSection}>
        <div style={styles.bentoGrid}>
          <div style={styles.cardLarge}>
             <span style={styles.cardTag}>01</span>
             <h3 style={styles.cardTitle}>AI-Influencers</h3>
             <p style={styles.cardText}>Разработка виртуальных амбассадоров: от внешности до уникального голоса и характера.</p>
             <div style={styles.kanji}>影響</div>
          </div>
          <div style={styles.cardSmall}>
             <span style={styles.cardTag}>02</span>
             <h3 style={styles.cardTitleSmall}>Neural Identity</h3>
             <p style={styles.cardText}>Брендинг, созданный алгоритмами на основе культурных кодов Японии и Кореи.</p>
          </div>
          <div style={styles.cardSmallAlt}>
             <span style={styles.cardTag}>03</span>
             <h3 style={styles.cardTitleSmall}>Web Zen</h3>
             <p style={styles.cardText}>Интерфейсы, которые ощущаются как медитация.</p>
          </div>
          <div style={styles.cardWide}>
             <h3 style={styles.cardTitleSmall}>Ready for the Future?</h3>
             <button style={styles.button}>Связаться в Telegram</button>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 NEON ZEN. BASED IN BATUMI. OPERATING GLOBALLY.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#050505', color: '#fff', fontFamily: 'Inter, sans-serif', overflowX: 'hidden' },
  cursor: { position: 'fixed', top: -10, left: -10, width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%', mixBlendMode: 'difference', pointerEvents: 'none', zIndex: 9999 },
  hero: { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' },
  glow1: { position: 'absolute', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)', top: '-10%', left: '-10%', zIndex: 0 },
  subtitle: { fontSize: '10px', letterSpacing: '0.8em', color: '#00ffff', marginBottom: '20px', display: 'block' },
  title: { fontSize: 'clamp(4rem, 15vw, 10rem)', margin: 0, letterSpacing: '-0.04em' },
  heroDesc: { maxWidth: '600px', fontSize: '14px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.2em', lineHeight: '1.8', marginTop: '20px' },
  section: { padding: '100px 5vw' },
  sectionTitle: { fontSize: '40px', fontWeight: '300', marginBottom: '50px', borderLeft: '1px solid #00ffff', paddingLeft: '20px' },
  italic: { fontStyle: 'italic', opacity: 0.5 },
  videoPlaceholder: { width: '100%', height: '60vh', background: '#111', borderRadius: '40px', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' },
  videoOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))', display: 'flex', alignItems: 'flex-end', padding: '40px', zIndex: 2 },
  gridSection: { padding: '0 5vw 100px 5vw' },
  bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' },
  cardLarge: { gridColumn: 'span 2', gridRow: 'span 2', background: '#111', borderRadius: '40px', padding: '40px', border: '1px solid #222', position: 'relative' },
  cardSmall: { gridColumn: 'span 2', background: 'rgba(255,255,255,0.03)', borderRadius: '40px', padding: '40px', border: '1px solid #222' },
  cardSmallAlt: { gridColumn: 'span 2', background: '#0a0a0a', borderRadius: '40px', padding: '40px', border: '1px solid #222' },
  cardWide: { gridColumn: 'span 4', background: '#00ffff', color: '#000', borderRadius: '40px', padding: '60px', textAlign: 'center' },
  cardTitle: { fontSize: '32px', marginBottom: '20px' },
  cardTitleSmall: { fontSize: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' },
  cardTag: { fontSize: '10px', opacity: 0.5, marginBottom: '10px', display: 'block' },
  cardText: { color: '#888', fontSize: '14px', lineHeight: '1.6' },
  kanji: { position: 'absolute', bottom: '20px', right: '40px', fontSize: '100px', opacity: 0.03 },
  button: { background: '#000', color: '#fff', border: 'none', padding: '15px 40px', borderRadius: '100px', marginTop: '30px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' },
  footer: { padding: '50px', textAlign: 'center', color: '#444', fontSize: '10px', letterSpacing: '0.3em' }
};
