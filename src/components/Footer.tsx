import React from 'react';
import { Flame, ArrowUp, Instagram, Mail, Globe, Award } from 'lucide-react';
import { STUDENT_INFO } from '../data/content.ts';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Coaching', target: 'coaching' },
    { label: 'Programs', target: 'programs' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#111827] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Brand Logo & Flame Icon */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/25">
              <Flame className="w-5 h-5 fill-current" />
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tight">
              Stride<span className="text-orange-500">Lab</span> Coaching
            </span>
          </div>

          {/* Tagline */}
          <p className="text-base text-gray-400 font-medium tracking-wide mb-8">
            Run stronger. Go further.
          </p>

          {/* Centered Navigation Links Bar */}
          <nav id="footer-nav" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 text-sm text-gray-300">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.target}>
                <button
                  id={`footer-link-${link.target}`}
                  onClick={() => onNavigate(link.target)}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
                {index < navLinks.length - 1 && (
                  <span className="text-gray-600 select-none hidden sm:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Social Links Bar */}
          <div id="footer-social-bar" className="flex items-center gap-4 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:linda.saragih@stridelab.coach"
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              aria-label="Community"
              className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-xs font-semibold text-gray-300 hover:text-white border border-gray-700 transition-colors mb-10 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-orange-500" />
            <span>Back to Top</span>
          </button>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-gray-800 mb-8" />

          {/* Copyright & Blueprint Attribution */}
          <div className="space-y-1.5 text-xs text-gray-500">
            <p id="copyright-notice">
              © 2026 StrideLab Coaching. All rights reserved.
            </p>
            <p className="text-gray-400">
              Designed for <span className="text-gray-300 font-medium">{STUDENT_INFO.businessName}</span> • Course: {STUDENT_INFO.course}
            </p>
            <p className="text-[11px] text-gray-400">
              Student: {STUDENT_INFO.fullName} (NIM: {STUDENT_INFO.nim}) • {STUDENT_INFO.batch}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
