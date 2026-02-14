import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function NeuralCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let raf;
    let t = 0;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      c.width = c.offsetWidth * devicePixelRatio;
      c.height = c.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      const rect = c.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    c.addEventListener('mousemove', onMove);

    const nodes = Array.from({ length: 48 }, () => ({
      x: Math.random() * c.offsetWidth,
      y: Math.random() * c.offsetHeight,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 2 + 0.5,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      t += 0.003;
      const w = c.offsetWidth;
      const h = c.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          n.x += dx * 0.002;
          n.y += dy * 0.002;
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 180) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(132,204,22,${(1 - d / 180) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const pulse = Math.sin(t * 2 + n.phase) * 0.5 + 0.5;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        grad.addColorStop(0, `rgba(132,204,22,${0.08 + pulse * 0.08})`);
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(132,204,22,${0.35 + pulse * 0.45})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      c.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.35 }}
    />
  );
}

const ease = [0.16, 1, 0.3, 1];

const stats = [
  { value: '2,000+', label: 'Early Users' },
  { value: 'FDA', label: 'Breakthrough Design' },
  { value: 'IP', label: 'Protected Technology' },
];

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showVideo]);

  return (
    <section className="relative overflow-hidden min-h-screen bg-mesh-1">
      {/* Ambient glow orbs */}
      <div
        className="absolute rounded-full blur-[200px] pointer-events-none animate-float"
        style={{ top: '15%', left: '10%', width: 600, height: 600, background: 'rgba(132,204,22,0.05)' }}
      />
      <div
        className="absolute rounded-full blur-[160px] pointer-events-none animate-float-delayed"
        style={{ bottom: '10%', right: '15%', width: 400, height: 400, background: 'rgba(45,212,191,0.03)' }}
      />

      <NeuralCanvas />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center pt-28 pb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              <span className="text-[13px] text-text-secondary font-medium">
                Live on Meta Quest & Steam
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold text-text leading-[1.08] tracking-tight mb-7"
          >
            VR neurotherapy that{' '}
            <br className="hidden sm:block" />
            helps children{' '}
            <span className="text-gradient">build real skills</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Evidence-based brain training delivered through immersive virtual reality —
            helping kids develop attention, confidence, and emotional resilience.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="flex flex-col sm:flex-row justify-center gap-3 mb-20"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-lime hover:bg-lime-bright text-bg font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(132,204,22,0.3)]"
            >
              Get Started
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center justify-center gap-2 glass hover:bg-white/[0.06] text-text font-semibold px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 3.5v9l6.5-4.5z" />
              </svg>
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-0"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-8 sm:gap-0">
                {i > 0 && <div className="hidden sm:block w-px h-10 bg-border mx-10" />}
                <div className="text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-warm">{s.value}</div>
                  <div className="text-xs text-text-dim mt-1 font-medium uppercase tracking-[0.15em]">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-9 rounded-full border border-text-dim flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-lime"
            />
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[94vw] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <span>Close</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <video
                src="/Upgrade_VR_trailer_aidxr.mp4"
                controls
                autoPlay
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
