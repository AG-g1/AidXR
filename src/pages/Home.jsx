import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';

const skills = [
  {
    title: 'Attention & Focus',
    desc: 'Build sustained attention and reduce impulsivity through engaging VR exercises.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Memory & Cognitive Control',
    desc: 'Strengthen working memory with adaptive challenges that grow with your child.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Emotional Regulation',
    desc: 'Learn to recognize and manage emotions in a safe, immersive environment.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Stress & Anxiety Resilience',
    desc: 'Develop coping strategies through guided VR exposure and relaxation.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Social Skills',
    desc: 'Practice social interactions in realistic scenarios without real-world pressure.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const conditions = [
  {
    title: 'ADHD & Learning Differences',
    status: 'Live',
    statusColor: 'bg-lime text-bg',
    borderColor: 'border-l-lime',
    desc: 'Attention training, impulse control, and cognitive skills development.',
  },
  {
    title: 'Autism Spectrum',
    status: 'Prototype',
    statusColor: 'bg-amber text-bg',
    borderColor: 'border-l-amber',
    desc: 'Social skills training, sensory processing, and behavioral coaching.',
  },
  {
    title: 'Anxiety & Phobias',
    status: 'In Development',
    statusColor: 'bg-rose text-bg',
    borderColor: 'border-l-rose',
    desc: 'VR exposure therapy with adaptive difficulty and relaxation training.',
  },
];

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── What AidXR Does ── */}
      <section className="py-24 lg:py-32 bg-mesh-3">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            <Reveal>
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">
                What AidXR Does
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text leading-tight">
                Building skills that last a lifetime
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-text-muted leading-relaxed lg:pt-10">
                Our VR platform targets the core cognitive and emotional skills that children
                with ADHD, autism, and anxiety need to thrive — powered by adaptive AI that
                adjusts in real-time to each child's unique needs and progress.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-surface border border-border rounded-2xl p-6 lg:p-7 h-full transition-all duration-300 hover:border-lime/15 hover:bg-surface-raised hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-lime/[0.08] text-lime flex items-center justify-center mb-4">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-text mb-2">{s.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-10 text-center">
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 text-lime hover:text-lime-bright font-semibold text-sm transition-all duration-200 hover:gap-3"
              >
                Explore the platform
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Conditions ── */}
      <section className="py-24 lg:py-32 bg-mesh-2">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">
                Conditions We Support
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text leading-tight">
                A pathway to full-spectrum support
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {conditions.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`bg-surface border border-border border-l-2 ${c.borderColor} rounded-2xl p-6 lg:p-7 h-full transition-all duration-300 hover:bg-surface-raised hover:-translate-y-0.5`}>
                  <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full ${c.statusColor} mb-5`}>
                    {c.status}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text mb-2">{c.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={350}>
            <div className="text-center mt-10">
              <Link
                to="/conditions"
                className="inline-flex items-center gap-2 text-lime hover:text-lime-bright font-semibold text-sm transition-all duration-200 hover:gap-3"
              >
                Learn about each condition
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Science ── */}
      <section className="py-24 lg:py-32">
        <div className="h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal direction="left">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">
                The Science
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text leading-tight mb-5">
                Why VR works for children
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Our approach builds on peer-reviewed research in VR therapy, digital therapeutics,
                and neuropsychological assessment — following FDA breakthrough device guidance
                for pediatric mental health applications.
              </p>
              <Link
                to="/science"
                className="inline-flex items-center gap-2 text-lime hover:text-lime-bright font-semibold text-sm transition-all duration-200 hover:gap-3"
              >
                Explore the evidence
                <Arrow />
              </Link>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '109', label: 'Cochrane systematic reviews' },
                  { stat: '3', label: 'FDA-cleared VR therapeutics' },
                  { stat: '87%', label: 'ADHD detection sensitivity' },
                  { stat: 'E1905', label: 'Medicare VR therapy code' },
                ].map((item, i) => (
                  <div key={i} className="bg-surface border border-border rounded-2xl p-5 text-center transition-all duration-300 hover:bg-surface-raised">
                    <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-warm mb-1">{item.stat}</div>
                    <div className="text-xs text-text-muted leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── For Parents + For Clinics ── */}
      <section className="py-24 lg:py-32 bg-mesh-3">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-5">
            <Reveal>
              <Link to="/parents" className="group block bg-surface border border-border rounded-2xl p-8 lg:p-10 h-full transition-all duration-300 hover:border-lime/15 hover:bg-surface-raised">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-lime/[0.08] text-lime flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em]">For Parents</span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-3 leading-tight">
                  Help your child thrive, without the wait
                </h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  AidXR brings evidence-based neurotherapy into your home — on your schedule, at a fraction of the cost of traditional therapy.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime group-hover:text-lime-bright transition-all duration-200 group-hover:gap-2.5">
                  Learn more <Arrow />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link to="/clinics" className="group block bg-surface border border-border rounded-2xl p-8 lg:p-10 h-full transition-all duration-300 hover:border-teal/15 hover:bg-surface-raised">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-teal/[0.08] text-teal flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-teal uppercase tracking-[0.15em]">For Clinics & Schools</span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-3 leading-tight">
                  Extend your care with VR neurotherapy
                </h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Partner with AidXR to offer evidence-based VR therapy through your practice, hospital, or school district.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime group-hover:text-lime-bright transition-all duration-200 group-hover:gap-2.5">
                  Learn more <Arrow />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
