import Reveal from '../components/Reveal';

const cards = [
  {
    title: 'CPT Reimbursable',
    desc: 'Use existing RTM and behavioral health CPT codes for VR-delivered therapy.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Objective Outcomes',
    desc: 'Track patient progress with quantitative data, not just subjective reports.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Scalable Delivery',
    desc: 'Serve more patients without proportional staff increases.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Multi-Setting',
    desc: 'Deploy in clinics, hospitals, therapy networks, or school districts.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function ClinicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 bg-mesh-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-teal uppercase tracking-[0.15em] mb-3 block">
                For Clinics & Schools
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-text leading-[1.08] tracking-tight mb-5">
                Extend your care with{' '}
                <span className="text-gradient">VR neurotherapy</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Partner with AidXR to offer evidence-based VR therapy through your
                practice, hospital, or school district. Our B2B2C model creates new
                revenue streams while improving patient outcomes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 pb-32">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {cards.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-surface border border-border rounded-2xl p-6 h-full transition-all duration-300 hover:border-teal/15 hover:bg-surface-raised hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-teal/[0.08] text-teal flex items-center justify-center mb-4">
                    {c.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-text mb-2">{c.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Revenue spotlight */}
          <Reveal delay={400}>
            <div className="max-w-lg mx-auto bg-surface border border-border rounded-2xl p-10 text-center transition-all duration-300 hover:border-lime/15 hover:bg-surface-raised">
              <div className="text-xs text-text-dim font-medium uppercase tracking-[0.15em] mb-3">
                Potential annual revenue per patient
              </div>
              <div className="font-display text-5xl sm:text-6xl font-bold text-gradient-warm mb-2">$2,360+</div>
              <div className="text-sm text-text-dim mb-10">
                Through RTM, BHI, and VR therapy CPT codes
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:clinics@aidxr.com"
                  className="inline-flex items-center justify-center gap-2 bg-lime hover:bg-lime-bright text-bg font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(132,204,22,0.25)]"
                >
                  Request Clinical Demo
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
                <a
                  href="mailto:clinics@aidxr.com"
                  className="inline-flex items-center justify-center gap-2 glass hover:bg-white/[0.06] text-text font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
                >
                  Partnership Inquiry
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
