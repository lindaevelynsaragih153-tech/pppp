import React, { useEffect, useRef, useState } from 'react';
import { Target, HeartPulse, UserCheck, ShieldCheck, Dumbbell, Calendar, Zap, Sparkles } from 'lucide-react';
import { ABOUT_CONTENT, CORE_COMPETENCIES, STUDENT_INFO } from '../data/content.ts';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 md:py-28 transition-colors duration-300 border-t ${
        darkMode
          ? 'bg-[#111827] border-gray-800 text-white'
          : 'bg-white border-gray-100 text-[#111827]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
              darkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-600'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me & Business Background</span>
          </div>
          <h2
            id="about-title"
            className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Coaching Philosophy & Athlete-First Approach
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Personalized, sustainable training systems designed by Coach {STUDENT_INFO.fullName} to help everyday runners achieve extraordinary personal milestones.
          </p>
        </div>

        {/* Two-Column Section: Philosophy & Story (Left) | Animated Competency Progress Indicators (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Coaching Story & Philosophy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div
              id="coach-profile-card"
              className={`p-6 rounded-2xl border transition-all ${
                darkMode
                  ? 'bg-gray-800/60 border-gray-700'
                  : 'bg-slate-50 border-gray-200 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-orange-500 shadow-md shrink-0">
                  <img
                    id="coach-profile-image"
                    src={ABOUT_CONTENT.coachAvatar}
                    alt={STUDENT_INFO.fullName}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">{STUDENT_INFO.fullName}</h3>
                  <p className="text-xs font-medium text-orange-500">
                    {ABOUT_CONTENT.coachTitle} • {STUDENT_INFO.shortName}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    NIM: {STUDENT_INFO.nim} • {STUDENT_INFO.batch}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p id="about-bio-1" className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {ABOUT_CONTENT.bio1}
                </p>
                <p id="about-bio-2" className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {ABOUT_CONTENT.bio2}
                </p>
              </div>

              {/* Quote block */}
              <div
                className={`mt-6 p-4 rounded-xl border-l-4 border-orange-500 italic text-sm ${
                  darkMode ? 'bg-gray-900/60 text-gray-300' : 'bg-white text-gray-700 shadow-xs'
                }`}
              >
                "{ABOUT_CONTENT.quote}"
              </div>
            </div>

            {/* Core Pillars / Value grid */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-gray-800/40 border-gray-700/80' : 'bg-white border-gray-200'
                }`}
              >
                <Target className="w-5 h-5 text-orange-500 mb-2" />
                <h4 className="font-heading font-semibold text-sm">Individualized Plans</h4>
                <p className="text-xs text-gray-400 mt-1">Calibrated to your exact fitness baseline and weekly calendar.</p>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-gray-800/40 border-gray-700/80' : 'bg-white border-gray-200'
                }`}
              >
                <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2" />
                <h4 className="font-heading font-semibold text-sm">Injury-Free Progression</h4>
                <p className="text-xs text-gray-400 mt-1">Prioritizing rest, deloading, and soft tissue longevity.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Skill / Competency Progress Indicators */}
          <div className="lg:col-span-6">
            <div
              id="competencies-container"
              className={`p-6 sm:p-8 rounded-2xl border ${
                darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-slate-50 border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading font-bold text-xl">Core Competencies</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Specialized technical & endurance domains</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500">
                  Interactive Observer
                </span>
              </div>

              <div className="space-y-5">
                {CORE_COMPETENCIES.map((competency, idx) => (
                  <div key={competency.name} id={`skill-item-${idx}`} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium">{competency.name}</span>
                      <span className="font-mono text-xs font-semibold text-orange-500">
                        {inView ? `${competency.percentage}%` : '0%'}
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div
                      className={`h-2.5 w-full rounded-full overflow-hidden ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${competency.percentage}%` : '0%',
                          transitionDelay: `${idx * 120}ms`,
                        }}
                      />
                    </div>

                    <p className={`text-[11px] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {competency.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom stats ribbon */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {ABOUT_CONTENT.stats.map((stat) => (
                  <div key={stat.label} className="p-2">
                    <div className="font-heading font-extrabold text-lg sm:text-xl text-orange-500">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
