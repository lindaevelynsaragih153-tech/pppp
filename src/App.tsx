/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Programs } from './components/Programs.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('stridelab-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedGoalPreset, setSelectedGoalPreset] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-[#111827]');
      document.body.classList.remove('bg-[#F8FAFC]');
      localStorage.setItem('stridelab-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#111827]');
      document.body.classList.add('bg-[#F8FAFC]');
      localStorage.setItem('stridelab-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70; // offset for sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectGoal = (goalName: string) => {
    setSelectedGoalPreset(goalName);
    handleNavigate('contact');
  };

  return (
    <div className={`min-h-screen font-body transition-colors duration-300 ${
      darkMode ? 'dark bg-[#111827] text-white' : 'bg-[#F8FAFC] text-[#111827]'
    }`}>
      {/* Sticky Sporty Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onNavigate={handleNavigate}
      />

      <main id="main-content">
        {/* Hero Section */}
        <Hero
          darkMode={darkMode}
          onNavigate={handleNavigate}
        />

        {/* About Me & Business Background Section */}
        <About
          darkMode={darkMode}
        />

        {/* Coaching Services & Solutions Section */}
        <Services
          darkMode={darkMode}
          onSelectService={handleSelectGoal}
        />

        {/* Programs / Portfolio Showcase Section */}
        <Programs
          darkMode={darkMode}
          onSelectProgramForContact={handleSelectGoal}
        />

        {/* Testimonials & Endorsements Section */}
        <Testimonials
          darkMode={darkMode}
        />

        {/* Interactive Contact Section */}
        <Contact
          darkMode={darkMode}
          selectedGoalPreset={selectedGoalPreset}
          onClearGoalPreset={() => setSelectedGoalPreset('')}
        />
      </main>

      {/* Sporty Minimal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
