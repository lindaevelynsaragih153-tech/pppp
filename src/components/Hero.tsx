import React from 'react';
import { ArrowRight, Compass, Flame, Award, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { HERO_CONTENT, STUDENT_INFO } from '../data/content.ts';

interface HeroProps {
  darkMode: boolean;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onNavigate }) => {
  return (
    <section
      id="home"
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#111827]' : 'bg-[#F8FAFC]'
      }`}
    >
      {/* Background subtle sporty grid accent */}
      <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div
          className={`w-full h-full ${
            darkMode
              ? 'bg-[radial-gradient(#374151_1px,transparent_1px)]'
              : 'bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]'
          } [background-size:24px_24px]`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA buttons */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <div
              id="hero-badge"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 transition-colors ${
                darkMode
                  ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                  : 'bg-orange-100/70 text-orange-700 border border-orange-200'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Evidence-Based Running Coaching</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-headline"
              className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 ${
                darkMode ? 'text-white' : 'text-[#111827]'
              }`}
            >
              Run Stronger.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Go Further.
              </span>
            </h1>

            {/* Subheadline */}
            <h2
              id="hero-subheadline"
              className={`text-lg sm:text-xl font-medium leading-relaxed mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {HERO_CONTENT.subheadline}
            </h2>

            {/* Description */}
            <p
              id="hero-description"
              className={`text-base leading-relaxed mb-8 max-w-2xl ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {HERO_CONTENT.description}
            </p>

            {/* CTA Buttons */}
            <div id="hero-cta-group" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-98 text-white font-semibold text-base shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate('programs')}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border font-semibold text-base transition-all cursor-pointer ${
                  darkMode
                    ? 'border-gray-700 bg-gray-800/80 text-white hover:bg-gray-700'
                    : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50 shadow-xs'
                }`}
              >
                <Compass className="w-4 h-4 text-orange-500" />
                <span>{HERO_CONTENT.secondaryCta}</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div
              id="hero-trust-indicators"
              className={`mt-10 pt-6 border-t w-full grid grid-cols-3 gap-4 text-xs sm:text-sm font-medium ${
                darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Customized Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Weekly Adjustments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Injury Prevention</span>
              </div>
            </div>
          </div>

          {/* Right Column: Runner visual & interactive telemetry card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-3xl opacity-20 blur-xl"></div>

              {/* Main Image Container */}
              <div
                id="hero-runner-card"
                className={`relative rounded-2xl overflow-hidden border shadow-xl ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}
              >
                <img
                  id="hero-runner-img"
                  src="/assets/coach_linda_profile.jpg"
                  alt="Coach Linda Evelyn Saragih - StrideLab Coaching"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top transform hover:scale-102 transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Metric Badge 1 - Pace Progression */}
                <div
                  id="hero-metric-pace"
                  className={`absolute top-5 left-5 p-3.5 rounded-xl border backdrop-blur-md shadow-lg ${
                    darkMode
                      ? 'bg-gray-900/90 border-gray-700 text-white'
                      : 'bg-white/95 border-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center text-orange-500">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Average Pace</div>
                      <div className="text-sm font-bold flex items-center gap-1">
                        <span>-42s / km</span>
                        <span className="text-[10px] text-emerald-500 font-semibold">PR Pace</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 - Consistency & Cadence */}
                <div
                  id="hero-metric-consistency"
                  className={`absolute bottom-5 right-5 p-3.5 rounded-xl border backdrop-blur-md shadow-lg ${
                    darkMode
                      ? 'bg-gray-900/90 border-gray-700 text-white'
                      : 'bg-white/95 border-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-500">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Training Consistency</div>
                      <div className="text-sm font-bold text-orange-500">96% Adherence</div>
                    </div>
                  </div>
                </div>

                {/* Coach identification tag */}
                <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                  <span>StrideLab • {STUDENT_INFO.fullName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
