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

  if (!mounted) return <div style={{ background: '#050505', minHeight: '100vh' }} />;

  return (
    <div style={styles.container}>
      {/* Custom Cursor */}
      <motion.div
        style={{
          ...styles.cursor,
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />

      {/* Background Glows */}
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      {/* Hero Section */}
      <section style={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <span style={styles.subtitle}>The Future of Brand Identity</span>
          <h1 style={styles.title}>
            NEON<span style={{ fontStyle: 'italic', fontWeight: '300', opacity: 0.5 }}>ZEN</span>
          </h1>
          <p style={styles.description}>AI-Driven Agency. Asia-Inspired Design.</p>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <section style={styles.grid}>
        <div style={styles.cardLarge}>
          <h3 style={styles.cardTitle}>AI-Influencers</h3>
          <p style={styles.cardText}>Цифровые души, которые не знают усталости.</p>
          <div style={styles.kanji}>未来</div>
        </div>
        <div style={styles.cardSmall}>
          <h3 style={styles.cardTitleSmall}>Web Lab</h3>
          <p style={styles.cardText}>Next-gen UI/UX in Asian Style</p>
        </div>
      </section>

      <footer style={styles.footer}>
        EST. 2026 • BASED IN BATUMI • SERVING THE WORLD
      </footer>
    </div>
  );
}

// Прямые стили, которые точно сработают
const styles = {
  container: {
    backgroundColor: '#050505',
    color: '#f0f0f0',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  cursor: {
    position: 'fixed',
    top: -10,
    left: -10,
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
    mixBlendMode: 'difference',
    pointerEvents: 'none',
    zIndex: 9999,
  },
  glow1: {
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: '400px',
    height: '400px',
    backgroundColor: 'rgba(0, 255, 255, 0.05)',
    borderRadius: '50%',
    filter: 'blur(100px)',
  },
  glow2: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: '500px',
    height: '500px',
    backgroundColor: 'rgba(168, 85, 247, 0.05)',
    borderRadius: '50%',
    filter: 'blur(120px)',
  },
  hero: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 20px',
  },
  subtitle: {
    fontSize: '10px',
    letterSpacing: '0.8em',
    color: '#22d3ee',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '20px',
  },
  title: {
    fontSize: 'clamp(3rem, 10vw, 8rem)',
    margin: '0 0 20px 0',
    letterSpacing: '-0.05em',
    fontWeight: '600',
  },
  description: {
    fontSize: '12px',
    letterSpacing: '0.3em',
    color: '#888',
    textTransform: 'uppercase',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cardLarge: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '32px',
    padding: '40px',
    minHeight: '300px',
    position: 'relative',
    backdropFilter: 'blur(10px)',
  },
  cardSmall: {
    background: '#111',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '32px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardTitle: { fontSize: '2rem', fontStyle: 'italic', margin: 0 },
  cardTitleSmall: { fontSize: '1.2rem', textTransform: 'uppercase', margin: 0, letterSpacing: '0.1em' },
  cardText: { color: '#666', fontSize: '14px', marginTop: '10px' },
  kanji: { position: 'absolute', bottom: '20px', right: '30px', fontSize: '4rem', opacity: 0.05 },
  footer: {
    padding: '60px 20px',
    textAlign: 'center',
    fontSize: '9px',
    letterSpacing: '0.5em',
    color: '#444',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
};
