import Reveal from '../components/Reveal';

const principles = [
  {
    title: 'Immersion = Engagement',
    desc: 'VR creates a distraction-free environment where children naturally focus, making therapy feel like play.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Adaptive Difficulty',
    desc: "Real-time AI adjustment keeps training in the neuroplasticity sweet spot — challenging but achievable.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Objective Data',
    desc: 'Precise performance metrics replace subjective observations, giving parents and clinicians real insight.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Fun = Adherence',
    desc: 'Children actually want to do their therapy. Consistent practice leads to lasting skill development.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
];

const evidence = [
  { source: 'Li et al., 2024 · JMIR', stat: 'd=0.68', label: 'ADHD attention improvement', detail: 'Meta-analysis of 32 studies with 8,139 children aged 3–19. Immersive VR had the strongest effect on attention (p < .001).' },
  { source: 'Meta-Analysis, 2024', stat: '2.45', label: 'ASD emotional skills effect size', detail: 'Significant improvement in emotional skills (SMD = 2.45, p = 0.03) and social skills (SMD = 1.43) in children with autism.' },
  { source: 'VRET Meta-Analysis, 2024', stat: 'g=1.14', label: 'Anxiety reduction at 6 months', detail: 'VR exposure therapy benefits sustain and increase over time — Hedges\' g of -0.86 post-treatment to -1.14 at 6-month follow-up.' },
  { source: 'CMS / Medicare', stat: 'E1905', label: 'HCPCS reimbursement code', detail: 'Medicare created a billing code specifically for VR cognitive behavioral therapy devices.' },
];

const researchAreas = [
  {
    condition: 'ADHD',
    color: 'lime',
    summary: 'VR-based interventions significantly improve attention, executive function, and cognitive control in children with ADHD, with immersive VR showing the strongest effects.',
    studies: [
      {
        title: 'VR Technology on Attention and Motor Ability in ADHD Children',
        authors: 'Li et al.',
        year: '2024',
        journal: 'JMIR Serious Games',
        finding: 'Meta-analysis of 32 studies (8,139 participants ages 3–19): VR significantly improves attention (Cohen d = -0.68, p < .001) and motor ability (d = 0.48, p < .001). Immersive VR had the strongest effect.',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11612531/',
      },
      {
        title: 'Immersive VR for Improving Cognitive Deficits in Children with ADHD',
        authors: 'Fang et al.',
        year: '2023',
        journal: 'Virtual Reality (Springer)',
        finding: 'Seven RCTs showed large effect sizes for sustained attention (SMD = -1.38, p = 0.009) and correct hits (SMD = -1.50, p = 0.004). VR most effective at improving vigilance.',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9938513/',
      },
      {
        title: 'Integrating VR into ADHD Therapy: Advancing Clinical Evidence',
        authors: 'Frontiers in Psychiatry',
        year: '2025',
        journal: 'Frontiers in Psychiatry',
        finding: 'VR shows benefits in attention and executive function for individuals with ADHD, with optimal results when combined with pharmacological treatments.',
        url: 'https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1591504/full',
      },
      {
        title: 'Game-Based Interventions for Pediatric ADHD: Neurofeedback Meta-Analysis',
        authors: 'Psychiatry Research',
        year: '2025',
        journal: 'Psychiatry Research',
        finding: 'The neurofeedback subgroup showed the largest effect size among all computer game-based interventions for ADHD, with beta band enhancement being key to cognitive control.',
        url: 'https://www.sciencedirect.com/science/article/pii/S0165178125000964',
      },
    ],
  },
  {
    condition: 'Autism',
    color: 'teal',
    summary: 'VR creates safe, repeatable social environments where children with ASD can practice eye contact, emotion recognition, and conversational skills with clinically significant outcomes.',
    studies: [
      {
        title: 'Immersive VR-Based Training on Cognitive, Social, and Emotional Skills in ASD',
        authors: 'Research in Developmental Disabilities',
        year: '2024',
        journal: 'Research in Developmental Disabilities',
        finding: 'Meta-analysis of RCTs: significant improvements in social skills (SMD = 1.43, p = 0.05), emotional skills (SMD = 2.45, p = 0.03), and cognitive skills in children with autism.',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38941690/',
      },
      {
        title: 'VR Interventions for Social Skills in ASD',
        authors: 'Tong et al.',
        year: '2025',
        journal: 'Journal of Medical Internet Research',
        finding: 'Systematic review confirming VR positively impacts complex social skills including eye contact, emotion recognition, empathy, and conversational abilities.',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11840372/',
      },
      {
        title: 'VR and Emotion Regulation in ASD: Randomized Controlled Trial',
        authors: 'PubMed',
        year: '2024',
        journal: 'Clinical Trial',
        finding: '40 boys with ASD aged 7–10: significant difference (p < 0.05) between VR and control groups in executive functions and emotion regulation ability.',
        url: 'https://pubmed.ncbi.nlm.nih.gov/39109573/',
      },
      {
        title: 'VR Enhances Cognitive and Social Communication in ASD',
        authors: 'Frontiers in Public Health',
        year: '2022',
        journal: 'Frontiers in Public Health',
        finding: '44 children with autism over 3 months: VR group showed significantly better results in cognition and social interaction compared to control (p < 0.05).',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9582941/',
      },
    ],
  },
  {
    condition: 'Anxiety',
    color: 'violet',
    summary: 'VR exposure therapy matches the gold standard of in-vivo exposure, with effects that sustain and even increase over time — and children find it far more approachable.',
    studies: [
      {
        title: 'VRET for Social Anxiety Disorder: Meta-Analysis',
        authors: 'Anxiety, Stress & Coping',
        year: '2024',
        journal: 'Taylor & Francis',
        finding: 'Large effect sizes: Hedges\' g = -0.86 post-treatment, -1.03 at 3 months, -1.14 at 6 months. No significant difference between VRET and in-vivo exposure — comparable efficacy.',
        url: 'https://www.tandfonline.com/doi/full/10.1080/10615806.2024.2392195',
      },
      {
        title: 'VR Therapy for Anxiety Disorders: Systematic Review and Meta-Analysis',
        authors: 'Frontiers in Psychiatry',
        year: '2025',
        journal: 'Frontiers in Psychiatry',
        finding: 'Comprehensive meta-analysis of RCTs confirming effectiveness of VR therapy for anxiety disorders in adolescents and adults.',
        url: 'https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1553290/full',
      },
      {
        title: 'VR-Assisted CBT for Anxiety Disorders',
        authors: 'Frontiers in Psychiatry',
        year: '2021',
        journal: 'Frontiers in Psychiatry',
        finding: 'VR-enhanced CBT showed similar efficacy to standard CBT with medium effect sizes vs. waitlist, supporting it as a viable and more engaging alternative.',
        url: 'https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2021.575094/full',
      },
      {
        title: 'VRET for Reducing School Anxiety in Adolescents',
        authors: 'JMIR Mental Health',
        year: '2024',
        journal: 'JMIR Mental Health',
        finding: 'Pilot study demonstrating feasibility and potential effectiveness of VR exposure therapy for symptoms of school and social anxiety in adolescents.',
        url: 'https://mental.jmir.org/2024/1/e56235',
      },
    ],
  },
];

const neurofeedback = [
  {
    title: 'Brain Neuroplasticity via VR and BCI Technologies',
    year: '2024',
    journal: 'Sensors (MDPI)',
    finding: 'Neuroimaging confirms structural brain changes — gray matter increases in hippocampus and caudate nucleus — following VR-based neurofeedback interventions.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11397861/',
  },
  {
    title: 'VR-Based Feedback for Neurofeedback Training',
    year: '2022',
    journal: 'Frontiers in Human Neuroscience',
    finding: '3D VR-based feedback produces a linear increase in sensorimotor rhythm (SMR) power within a single session — outperforming traditional 2D feedback.',
    url: 'https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2022.952261/full',
  },
  {
    title: 'Theta/Beta Ratio Neurofeedback for ADHD',
    year: '2024',
    journal: 'Applied Psychophysiology and Biofeedback',
    finding: 'Medium effects at post-treatment, large effects at follow-up. Individualized protocols adjusted for alpha activity are more clinically efficient with lasting results.',
    url: 'https://link.springer.com/article/10.1007/s10484-024-09675-w',
  },
];

const precedents = [
  { name: 'EndeavorRx', company: 'Akili Interactive', year: '2020', tag: 'Pediatric ADHD', detail: 'First FDA-authorized prescription video game. Five clinical trials with 600+ children. 68% of parents saw clinically meaningful change in daily impairments after two months.' },
  { name: 'RelieVRx', company: 'AppliedVR', year: '2021', tag: 'Chronic Pain', detail: 'First FDA De Novo VR therapeutic. 1,067-participant RCT. Over 60,000 patients treated. Medicare & VA coverage secured.' },
  { name: 'Luminopia One', company: 'Luminopia', year: '2021', tag: 'Pediatric Vision', detail: 'FDA-authorized VR treatment for amblyopia in children ages 4-7. Uses modified content viewed through a VR headset at home.' },
  { name: 'Floreo VR', company: 'Floreo', year: '2023', tag: 'Autism / ASD', detail: 'First VR autism technology to receive FDA Breakthrough Device Designation. Partnered with Children\'s Hospital of Philadelphia and NIH. Multi-site pivotal trial underway.' },
  { name: 'EndeavorOTC', company: 'Akili Interactive', year: '2024', tag: 'Adult ADHD', detail: 'FDA-cleared OTC digital therapeutic for adult ADHD. 83% of 221 participants showed improved attention control on the TOVA.' },
];

const roadmap = [
  { n: '01', title: 'Advisory Board Assembly', status: 'In Progress', active: true, desc: 'Recruiting pediatric neuropsychologists and cognitive scientists to guide clinical protocol development.' },
  { n: '02', title: 'Clinical Pilot Studies', status: 'Next', active: false, desc: 'Feasibility studies with clinical partners to validate cognitive assessment and training protocols.' },
  { n: '03', title: 'Peer-Reviewed Publication', status: 'Planned', active: false, desc: "Submit findings to peer-reviewed journals for independent evaluation of AidXR's approach." },
  { n: '04', title: 'Regulatory Pathway', status: 'Future', active: false, desc: 'Pursue FDA regulatory pathway informed by EndeavorRx and Floreo breakthrough device precedents.' },
];

const colorMap = {
  lime: { bg: 'bg-lime/[0.08]', text: 'text-lime', border: 'border-lime/20' },
  teal: { bg: 'bg-teal/[0.08]', text: 'text-teal', border: 'border-teal/20' },
  violet: { bg: 'bg-violet/[0.08]', text: 'text-violet', border: 'border-violet/20' },
};

export default function SciencePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 bg-mesh-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">The Science</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-text leading-[1.08] tracking-tight mb-5">
                Why VR works{' '}
                <span className="text-gradient">for children</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Virtual reality isn't just engaging — it's clinically proven to accelerate
                cognitive and emotional skill development in pediatric populations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 lg:py-32">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-surface border border-border rounded-2xl p-6 lg:p-7 h-full transition-all duration-300 hover:border-lime/15 hover:bg-surface-raised hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-lime/[0.08] text-lime flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-text mb-2">{p.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="mt-6 bg-surface-raised border border-border rounded-2xl p-5 text-center max-w-3xl mx-auto">
              <p className="text-sm text-text-muted leading-relaxed">
                Our approach builds on peer-reviewed research in VR therapy, digital therapeutics,
                and neuropsychological assessment. We follow FDA breakthrough device guidance
                for pediatric mental health applications.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Evidence base */}
      <section className="py-24 lg:py-32 bg-mesh-2">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">Research</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight">
                The evidence base
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {evidence.map((e, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-surface border border-border rounded-2xl p-6 h-full transition-all duration-300 hover:bg-surface-raised">
                  <div className="text-[11px] text-text-dim font-medium uppercase tracking-[0.12em] mb-3">{e.source}</div>
                  <div className="font-display text-3xl font-bold text-gradient-warm mb-1.5">{e.stat}</div>
                  <div className="text-sm font-medium text-text mb-2">{e.label}</div>
                  <p className="text-xs text-text-dim leading-relaxed">{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research by Condition */}
      <section className="py-24 lg:py-32">
        <div className="h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">Peer-Reviewed Studies</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight mb-4">
                Research by condition
              </h2>
              <p className="text-text-muted">
                Key findings from meta-analyses, randomized controlled trials, and systematic reviews published in leading journals.
              </p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {researchAreas.map((area, ai) => {
              const c = colorMap[area.color];
              return (
                <Reveal key={ai} delay={ai * 100}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${c.bg} ${c.text}`}>
                        {area.condition}
                      </span>
                    </div>
                    <p className="text-text-muted leading-relaxed mb-6 max-w-3xl">{area.summary}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {area.studies.map((s, si) => (
                        <a
                          key={si}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-surface border border-border rounded-xl p-5 transition-all duration-300 hover:border-${area.color}/20 hover:bg-surface-raised group block`}
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4 className="text-sm font-semibold text-text leading-snug group-hover:text-lime transition-colors">{s.title}</h4>
                            <svg className="w-4 h-4 text-text-dim shrink-0 mt-0.5 group-hover:text-lime transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                              <path d="M5 3h8v8M13 3L3 13" />
                            </svg>
                          </div>
                          <div className="text-[11px] text-text-dim mb-2">
                            {s.authors} · {s.year} · {s.journal}
                          </div>
                          <p className="text-xs text-text-muted leading-relaxed">{s.finding}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neurofeedback + VR */}
      <section className="py-24 lg:py-32 bg-mesh-3">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">Neurofeedback</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight mb-4">
                VR + brain-computer interfaces
              </h2>
              <p className="text-text-muted leading-relaxed">
                Combining VR with real-time neural monitoring creates a feedback loop that drives measurable neuroplastic changes — actual structural and functional brain improvements confirmed by neuroimaging.
              </p>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-5">
            {neurofeedback.map((n, i) => (
              <Reveal key={i} delay={i * 100}>
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface border border-border rounded-2xl p-6 h-full transition-all duration-300 hover:border-lime/15 hover:bg-surface-raised group block"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-lime bg-lime/[0.08] px-3 py-1 rounded-full">{n.year}</span>
                    <svg className="w-4 h-4 text-text-dim group-hover:text-lime transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M5 3h8v8M13 3L3 13" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-text mb-1 group-hover:text-lime transition-colors">{n.title}</h3>
                  <div className="text-[11px] text-text-dim mb-3">{n.journal}</div>
                  <p className="text-sm text-text-muted leading-relaxed">{n.finding}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-24 lg:py-32">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="bg-surface border border-border rounded-2xl p-8 lg:p-10 max-w-3xl mx-auto text-center">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">Safety</span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text leading-tight mb-4">
                Safe for children
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                A 2024 systematic review found that VR is well-tolerated in young children ages 4–10 with no noteworthy effects on visuomotor functions or postural stability. Assessments of VR sickness — headache, eye complaints, dizziness — revealed no or only mild symptoms.
              </p>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/38466416/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-lime hover:underline"
              >
                Read the study
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M5 3h8v8M13 3L3 13" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FDA Precedents */}
      <section className="py-24 lg:py-32 bg-mesh-2">
        <div className="h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">Precedents</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight mb-4">
                FDA-cleared VR therapeutics
              </h2>
              <p className="text-text-muted">
                AidXR is building on a pathway validated by five FDA-authorized digital therapeutics.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {precedents.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-surface border border-border rounded-2xl p-7 h-full transition-all duration-300 hover:border-lime/15 hover:bg-surface-raised">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold text-lime bg-lime/[0.08] px-3 py-1 rounded-full">{p.year}</span>
                    <span className="text-xs text-text-dim">{p.company}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text mb-1">{p.name}</h3>
                  <span className="text-[11px] font-semibold text-lime uppercase tracking-[0.12em]">{p.tag}</span>
                  <p className="text-sm text-text-muted leading-relaxed mt-3">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 lg:py-32 pb-32">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-24 lg:mb-32" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="text-xs font-semibold text-lime uppercase tracking-[0.15em] mb-3 block">Our Roadmap</span>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text leading-tight mb-4">
                  Path to clinical validation
                </h2>
                <p className="text-text-muted leading-relaxed">
                  We believe in radical transparency. AidXR is pre-clinical — here's our roadmap.
                </p>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-lime/30 via-lime/10 to-transparent" />
              <div className="space-y-8">
                {roadmap.map((r, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="relative flex gap-5">
                      <div className="relative z-10 shrink-0">
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center font-display text-sm font-bold ${
                            r.active
                              ? 'bg-lime text-bg shadow-[0_0_20px_rgba(132,204,22,0.3)]'
                              : 'bg-surface border border-border text-text-dim'
                          }`}
                        >
                          {r.n}
                        </div>
                      </div>
                      <div className={`pt-1.5 ${!r.active ? 'opacity-50' : ''}`}>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="font-display text-base font-semibold text-text">{r.title}</h3>
                          <span
                            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                              r.active ? 'bg-lime/[0.08] text-lime' : 'bg-surface-raised text-text-dim'
                            }`}
                          >
                            {r.status}
                          </span>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed">{r.desc}</p>
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
