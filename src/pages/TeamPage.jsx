import Reveal from '../components/Reveal';

const advisors = [
  {
    role: 'Clinical / Neuropsychology',
    seeking: 'Pediatric Neuropsychologist',
    desc: 'Guiding assessment protocol design and ensuring our cognitive training modules meet clinical standards.',
    status: 'Recruiting',
  },
  {
    role: 'Neuroscience Research',
    seeking: 'Cognitive Scientist',
    desc: 'Designing experimental paradigms and translating VR interactions into validated neuropsychological metrics.',
    status: 'Recruiting',
  },
  {
    role: 'Regulatory / FDA',
    seeking: 'Regulatory Affairs Specialist',
    desc: 'Navigating FDA De Novo pathway informed by EndeavorRx and Luminopia precedents for pediatric digital therapeutics.',
    status: 'Recruiting',
  },
  {
    role: 'Business / Strategy',
    seeking: 'Healthcare Business Advisor',
    desc: 'Shaping go-to-market strategy for clinical partnerships, hospital networks, and school district deployments.',
    status: 'Recruiting',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 bg-mesh-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">Our Team</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-text leading-[1.08] tracking-tight mb-5">
                Built at the intersection of{' '}
                <span className="text-gradient">neuroscience and technology</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                We're assembling a multidisciplinary advisory board of clinicians,
                researchers, and industry experts. If you're passionate about
                transforming pediatric neurotherapy, we want to hear from you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 lg:py-32 pb-32">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mb-4">Advisory Board</h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  We're looking for domain experts who are passionate about transforming
                  how children receive neurotherapy.
                </p>
                <a
                  href="mailto:hello@aidxr.com"
                  className="inline-flex items-center gap-2 bg-lime hover:bg-lime-bright text-bg font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(132,204,22,0.25)]"
                >
                  Join Our Advisory Board
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {advisors.map((a, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="bg-surface border border-border rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:border-lime/15 hover:bg-surface-raised">
                    <span className="inline-flex text-[11px] font-bold text-amber bg-amber/[0.08] px-3 py-1 rounded-full self-start mb-5">
                      {a.status}
                    </span>
                    <h3 className="font-display text-base font-semibold text-text mb-1">{a.role}</h3>
                    <div className="text-sm text-lime mb-3">Seeking: {a.seeking}</div>
                    <p className="text-sm text-text-muted leading-relaxed flex-1">{a.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
