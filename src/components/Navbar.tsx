import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Flame, ArrowRight } from 'lucide-react';
import { STUDENT_INFO } from '../data/content.ts';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'coaching', 'programs', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Coaching', target: 'coaching' },
    { label: 'Programs', target: 'programs' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-[#111827]/90 backdrop-blur-md border-b border-gray-800 shadow-md py-3.5'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-3.5'
          : darkMode
          ? 'bg-transparent py-5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span
              className={`font-heading font-extrabold text-xl tracking-tight leading-none block ${
                darkMode ? 'text-white' : 'text-[#111827]'
              }`}
            >
              Stride<span className="text-orange-500">Lab</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-gray-400 block mt-0.5">
              Coaching
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.target}
              id={`nav-link-${link.target}`}
              onClick={() => handleLinkClick(link.target)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.target
                  ? darkMode
                    ? 'text-orange-400 bg-gray-800/80'
                    : 'text-orange-600 bg-orange-50'
                  : darkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  : 'text-gray-600 hover:text-[#111827] hover:bg-gray-100/70'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light/Dark Mode Switcher */}
          <button
            id="theme-toggle-desktop"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`p-2.5 rounded-xl border transition-colors ${
              darkMode
                ? 'bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700'
                : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-xs'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA button */}
          <button
            id="nav-cta-btn"
            onClick={() => handleLinkClick('contact')}
            className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-98 text-white text-sm font-semibold shadow-md shadow-orange-500/25 transition-all"
          >
            <span>Start your coaching journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="theme-toggle-mobile"
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme"
            className={`p-2 rounded-lg border ${
              darkMode
                ? 'bg-gray-800 border-gray-700 text-yellow-400'
                : 'bg-white border-gray-200 text-gray-600'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className={`p-2 rounded-lg ${
              darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className={`md:hidden px-4 pt-3 pb-6 border-b transition-all ${
            darkMode ? 'bg-[#111827] border-gray-800' : 'bg-white border-gray-100 shadow-lg'
          }`}
        >
          <div className="flex flex-col gap-1.5 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className={`text-left px-3 py-2.5 rounded-xl text-base font-medium ${
                  activeSection === link.target
                    ? darkMode
                      ? 'text-orange-400 bg-gray-800 font-semibold'
                      : 'text-orange-600 bg-orange-50 font-semibold'
                    : darkMode
                    ? 'text-gray-200 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            id="mobile-nav-cta"
            onClick={() => handleLinkClick('contact')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-500 text-white font-semibold text-sm shadow-md shadow-orange-500/20"
          >
            <span>Start your coaching journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
