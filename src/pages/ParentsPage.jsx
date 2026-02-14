import Reveal from '../components/Reveal';

const points = [
  'No prescription required to start',
  'Use at home on your own schedule',
  'See progress with detailed reports',
  'Safe, ad-free environment',
  'Cancel anytime, no commitment',
];

export default function ParentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 bg-mesh-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">
                For Parents & Caregivers
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-text leading-[1.08] tracking-tight mb-5">
                Help your child thrive,{' '}
                <span className="text-gradient">without the wait</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Traditional therapy can mean months-long waitlists, expensive sessions,
                and resistant children. AidXR brings evidence-based neurotherapy into your
                home — on your schedule, at a fraction of the cost.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 pb-32">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text mb-8">What to expect</h2>
                <ul className="space-y-4 mb-10">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-secondary">
                      <div className="w-6 h-6 rounded-full bg-lime/[0.08] flex items-center justify-center shrink-0">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="var(--color-lime)" strokeWidth="2" strokeLinecap="round">
                          <polyline points="2 6 5 9 10 3" />
                        </svg>
                      </div>
                      <span className="text-[15px]">{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={100}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:hello@aidxr.com"
                    className="inline-flex items-center justify-center gap-2 bg-lime hover:bg-lime-bright text-bg font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(132,204,22,0.25)]"
                  >
                    Start Free Trial
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                  <a
                    href="mailto:hello@aidxr.com"
                    className="inline-flex items-center justify-center gap-2 glass hover:bg-white/[0.06] text-text font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
                  >
                    Talk to a Specialist
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="space-y-5">
              <Reveal delay={100}>
                <div className="bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-surface-raised">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-lime/[0.08] text-lime flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <h3 className="font-display text-base font-semibold text-text">Safe & Private</h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    HIPAA-compliant data handling. Your child's information is encrypted and never shared without your explicit consent.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-surface-raised">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-lime/[0.08] text-lime flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-base font-semibold text-text">Designed for Kids</h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Every experience is age-appropriate, calming, and designed in collaboration with child psychologists and pediatric specialists.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="bg-surface-raised border border-border border-l-2 border-l-lime rounded-2xl p-6">
                  <p className="text-text-secondary italic leading-relaxed">
                    "My son actually asks to do his VR therapy. That's never happened with any other intervention we've tried."
                  </p>
                  <p className="text-sm text-text-dim mt-3">— Parent of 9-year-old with ADHD</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
