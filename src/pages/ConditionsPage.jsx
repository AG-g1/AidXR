import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const conditions = [
  {
    title: 'ADHD & Learning Differences',
    status: 'Live',
    statusColor: 'bg-lime text-bg',
    borderColor: 'border-l-lime',
    dotColor: 'bg-lime',
    desc: 'Our flagship product focuses on attention training, impulse control, and cognitive skills development.',
    features: [
      'Sustained attention exercises',
      'Impulse control games',
      'Working memory training',
      'Executive function challenges',
    ],
  },
  {
    title: 'Autism Spectrum',
    status: 'Prototype',
    statusColor: 'bg-amber text-bg',
    borderColor: 'border-l-amber',
    dotColor: 'bg-amber',
    desc: 'Specialized VR experiences for social skills training, sensory processing, and behavioral coaching.',
    features: [
      'Social interaction simulations',
      'Sensory processing exercises',
      'Routine and transition training',
      'Emotional recognition practice',
    ],
  },
  {
    title: 'Anxiety & Phobias',
    status: 'In Development',
    statusColor: 'bg-rose text-bg',
    borderColor: 'border-l-rose',
    dotColor: 'bg-rose',
    desc: 'A library of VR exposure therapy experiences with adaptive difficulty and relaxation training.',
    features: [
      'Gradual exposure therapy',
      'Relaxation techniques',
      'Coping strategy training',
      'Stress resilience building',
    ],
  },
];

export default function ConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 bg-mesh-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">
                Conditions We Support
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-text leading-[1.08] tracking-tight mb-5">
                A pathway to{' '}
                <span className="text-gradient">full-spectrum support</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                From our live ADHD platform to upcoming autism and anxiety solutions, we're building
                comprehensive VR neurotherapy for children's mental health.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Condition cards */}
      <section className="py-24 lg:py-32 pb-32">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-5">
            {conditions.map((c, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className={`bg-surface border border-border border-l-2 ${c.borderColor} rounded-2xl p-7 lg:p-8 h-full flex flex-col transition-all duration-300 hover:bg-surface-raised`}>
                  <div className="mb-5">
                    <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full ${c.statusColor}`}>
                      {c.status}
                    </span>
                  </div>
                  <h2 className="font-display text-xl lg:text-2xl font-semibold text-text mb-3">{c.title}</h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">{c.desc}</p>
                  <ul className="space-y-3 flex-1">
                    {c.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-text-muted">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dotColor} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/platform"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime mt-6 hover:text-lime-bright transition-all duration-200 hover:gap-2.5"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
