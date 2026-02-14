import Reveal from '../components/Reveal';

const domains = [
  {
    title: 'Attention & Focus',
    desc: 'Build sustained attention and reduce impulsivity through engaging VR exercises designed by neuropsychologists.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Memory & Cognitive Control',
    desc: 'Strengthen working memory and executive function with adaptive challenges that grow with your child.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Emotional Regulation',
    desc: 'Learn to recognize, manage, and express emotions in a safe, immersive environment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Stress & Anxiety Resilience',
    desc: 'Develop coping strategies and relaxation techniques through guided VR experiences.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Social Skills',
    desc: 'Practice social interactions and communication in realistic VR scenarios without real-world pressure.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const steps = [
  { n: '01', title: 'Enter VR Session', desc: 'Your child puts on the headset and enters a calm, engaging virtual environment designed for focus and fun.' },
  { n: '02', title: 'Gamified Training', desc: 'Complete age-appropriate cognitive and emotional exercises disguised as immersive games.' },
  { n: '03', title: 'Real-Time Analysis', desc: 'Our AI monitors performance in real-time, measuring reaction times, accuracy, and engagement.' },
  { n: '04', title: 'Adaptive Adjustment', desc: 'Difficulty automatically adjusts to keep your child in the optimal challenge zone for growth.' },
  { n: '05', title: 'Progress Tracking', desc: 'View detailed reports in the companion app showing improvements and areas of focus.' },
  { n: '06', title: 'Clinical Integration', desc: 'Optionally share data with clinicians to inform overall care and treatment plans.' },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 bg-mesh-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">Platform</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-text leading-[1.08] tracking-tight mb-5">
                Two experiences,{' '}
                <span className="text-gradient">one powerful system</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Immersive VR training paired with a companion app for complete visibility and progress tracking.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Two experiences */}
      <section className="py-24 lg:py-32">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-5">
            <Reveal>
              <div className="bg-surface border border-border rounded-2xl p-7 lg:p-9 h-full transition-all duration-300 hover:border-lime/15 hover:bg-surface-raised">
                <div className="w-12 h-12 rounded-xl bg-lime/[0.08] text-lime flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="10" rx="2" /><circle cx="8" cy="12" r="2" /><circle cx="16" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-text mb-4">VR Training Experience</h3>
                <ul className="space-y-3">
                  {[
                    'Gamified cognitive and emotional exercises designed by neuropsychologists',
                    'Adaptive AI adjusts difficulty in real-time based on performance',
                    'Works with standalone VR headsets — no PC required',
                    'Available on Meta Quest Store and Steam',
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bg-surface border border-border rounded-2xl p-7 lg:p-9 h-full transition-all duration-300 hover:border-teal/15 hover:bg-surface-raised">
                <div className="w-12 h-12 rounded-xl bg-teal/[0.08] text-teal flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-text mb-4">Mobile Companion App</h3>
                <ul className="space-y-3">
                  {[
                    'Track progress with detailed performance metrics and trends',
                    'Share reports with clinicians, teachers, and therapists',
                    'Set goals and receive personalized recommendations',
                    "Celebrate achievements and track your child's progress journey",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Five domains */}
      <section className="py-24 lg:py-32 bg-mesh-2">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">Training Areas</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">
                Five cognitive domains
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((d, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-surface border border-border rounded-2xl p-6 lg:p-7 h-full transition-all duration-300 hover:bg-surface-raised hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-lime/[0.08] text-lime flex items-center justify-center mb-4">
                    {d.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-text mb-2">{d.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 pb-32">
        <div className="h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">How It Works</span>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight mb-4">
                  A complete training loop
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Each session is optimized for your child's unique needs through our adaptive AI system.
                </p>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-lime/30 via-lime/10 to-transparent" />
              <div className="space-y-8">
                {steps.map((s, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className="relative flex gap-5">
                      <div className="relative z-10 shrink-0">
                        <div className="w-11 h-11 rounded-full border border-lime/25 bg-surface flex items-center justify-center font-display text-sm font-bold text-lime">
                          {s.n}
                        </div>
                      </div>
                      <div className="pt-1.5">
                        <h3 className="font-display text-base font-semibold text-text mb-1">{s.title}</h3>
                        <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
