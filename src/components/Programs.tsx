import React, { useState } from 'react';
import { Layers, ArrowRight, Eye, Calendar, Sparkles } from 'lucide-react';
import { PROGRAMS } from '../data/content.ts';
import { Program } from '../types.ts';
import { ProgramModal } from './ProgramModal.tsx';

interface ProgramsProps {
  darkMode: boolean;
  onSelectProgramForContact: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ darkMode, onSelectProgramForContact }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleOpenModal = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  const handleEnrollFromModal = (programTitle: string) => {
    setSelectedProgram(null);
    onSelectProgramForContact(programTitle);
  };

  return (
    <section
      id="programs"
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
            <Layers className="w-3.5 h-3.5" />
            <span>Portfolio Showcase & Coaching Programs</span>
          </div>
          <h2
            id="programs-title"
            className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Curated Programs for Every Milestone
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore our flagship structured training programs. Click on any program to view the detailed problem-solution syllabus and expected outcomes.
          </p>
        </div>

        {/* 3 Program Cards Arranged in a Responsive CSS Grid */}
        <div
          id="programs-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              id={`program-card-${program.id}`}
              className={`group flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-gray-800/60 border-gray-700 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/5'
                  : 'bg-white border-gray-200 hover:border-orange-400 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* Program Image with Tag Badges */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Top Level Pill */}
                  <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[11px] font-semibold">
                    {program.duration}
                  </div>

                  {/* Program Tags on bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/90 text-gray-900 backdrop-blur-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="text-[11px] font-semibold text-orange-500 uppercase tracking-wider mb-1">
                    {program.level} Track
                  </div>
                  <h3
                    className={`font-heading text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors ${
                      darkMode ? 'text-white' : 'text-[#111827]'
                    }`}
                  >
                    {program.title}
                  </h3>
                  <p
                    className={`text-xs font-medium text-gray-400 mb-3`}
                  >
                    {program.subtitle}
                  </p>
                  <p
                    className={`text-sm leading-relaxed line-clamp-3 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {program.description}
                  </p>

                  {/* Outcome snapshot */}
                  <div
                    className={`mt-4 p-3 rounded-xl border text-xs ${
                      darkMode ? 'bg-gray-900/40 border-gray-700/60' : 'bg-slate-50 border-gray-100'
                    }`}
                  >
                    <span className="font-semibold text-orange-500 block mb-0.5">Target Outcome:</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{program.outcome}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: View Program Action Button */}
              <div className="p-6 pt-0">
                <button
                  id={`btn-view-program-${program.id}`}
                  onClick={() => handleOpenModal(program)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-98 text-white text-sm font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Program Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal for Program Details */}
        <ProgramModal
          program={selectedProgram}
          darkMode={darkMode}
          onClose={handleCloseModal}
          onEnroll={handleEnrollFromModal}
        />
      </div>
    </section>
  );
};
