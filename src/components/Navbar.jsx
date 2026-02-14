import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import aidxrLogo from '../assets/aidxr-logo.svg';

const links = [
  { label: 'Platform', to: '/platform' },
  { label: 'Science', to: '/science' },
  { label: 'Conditions', to: '/conditions' },
  { label: 'For Parents', to: '/parents' },
  { label: 'For Clinics', to: '/clinics' },
  { label: 'Team', to: '/team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-2xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img src={aidxrLogo} alt="AidXR" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                  pathname === l.to
                    ? 'text-lime'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {l.label}
                {pathname === l.to && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-lime rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <span className="text-[13px] text-text-muted hover:text-text transition-colors cursor-pointer font-medium">
              Sign In
            </span>
            <Link
              to="/parents"
              className="text-[13px] font-semibold bg-lime hover:bg-lime-bright text-bg px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_0_24px_rgba(132,204,22,0.25)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-10 text-text p-2 -mr-2"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-border"
          >
            <div className="glass px-6 py-4 flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`py-3 px-3 rounded-lg text-[15px] font-medium transition-colors ${
                    pathname === l.to
                      ? 'text-lime bg-lime/[0.06]'
                      : 'text-text-muted hover:text-text'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-4 pb-2 mt-3 border-t border-border">
                <Link
                  to="/parents"
                  className="block text-center bg-lime text-bg font-semibold px-5 py-3 rounded-full"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
