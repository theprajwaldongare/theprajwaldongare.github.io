import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './icons';
import { navLinks } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101110]/90 backdrop-blur-md border-b border-[#2A2C2A]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="font-mono text-lg font-semibold tracking-tight text-[#A3B18A] hover:text-[#b5c49e] transition-colors"
        >
          PD<span className="text-[#F5F5F0]/30">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm text-[#A1A1AA] hover:text-[#F5F5F0] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/theprajwaldongare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1AA] hover:text-[#F5F5F0] transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <GithubIcon width={18} height={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#A1A1AA] hover:text-[#F5F5F0] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-[#101110]/98 backdrop-blur-lg z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-lg text-[#A1A1AA] hover:text-[#F5F5F0] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/theprajwaldongare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#F5F5F0] transition-colors duration-200 flex items-center gap-2"
            >
              <GithubIcon width={18} height={18} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
