import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'How It Works', to: '/platform' },
      { label: 'For Parents', to: '/parents' },
      { label: 'For Clinics', to: '/clinics' },
    ],
  },
  {
    title: 'Conditions',
    links: [
      { label: 'ADHD', to: '/conditions' },
      { label: 'Autism', to: '/conditions' },
      { label: 'Anxiety', to: '/conditions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/team' },
      { label: 'Science', to: '/science' },
      { label: 'Contact', href: 'mailto:hello@aidxr.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy' },
      { label: 'Terms of Service' },
      { label: 'HIPAA Compliance' },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA band */}
      <section className="relative bg-mesh-2">
        <div className="h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-text leading-tight mb-5">
              Build real skills.{' '}
              <span className="text-gradient">Not just coping strategies.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base sm:text-lg text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
              Give your child the tools they need to focus, regulate emotions, and thrive —
              at home or through your care provider.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-5">
              <Link
                to="/parents"
                className="inline-flex items-center justify-center gap-2 bg-lime hover:bg-lime-bright text-bg font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(132,204,22,0.25)]"
              >
                Get Started for Free
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                to="/clinics"
                className="inline-flex items-center justify-center gap-2 glass hover:bg-white/[0.06] text-text font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
            <p className="text-xs text-text-dim">No credit card required · Cancel anytime · HIPAA compliant</p>
          </Reveal>
        </div>
      </section>

      {/* Footer grid */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-md bg-lime inline-flex items-center justify-center">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#060B16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              <span className="font-display text-sm font-bold text-text">
                Aid<span className="text-lime">XR</span>
              </span>
            </Link>
            <p className="text-sm text-text-dim leading-relaxed">
              VR neurotherapy that helps children build real skills for attention,
              confidence, and emotional resilience.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-[0.15em] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="text-sm text-text-dim hover:text-text transition-colors">
                        {l.label}
                      </Link>
                    ) : l.href ? (
                      <a href={l.href} className="text-sm text-text-dim hover:text-text transition-colors">
                        {l.label}
                      </a>
                    ) : (
                      <span className="text-sm text-text-dim hover:text-text transition-colors cursor-pointer">
                        {l.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-border">
          <div className="text-xs text-text-dim">&copy; {new Date().getFullYear()} AidXR Inc. All rights reserved.</div>
          <div className="text-xs text-text-dim">Available on Meta Quest & Steam</div>
        </div>
      </div>
    </footer>
  );
}
