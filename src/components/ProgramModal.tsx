import React, { useEffect } from 'react';
import { X, Calendar, Clock, BarChart2, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Program } from '../types.ts';

interface ProgramModalProps {
  program: Program | null;
  darkMode: boolean;
  onClose: () => void;
  onEnroll: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  darkMode,
  onClose,
  onEnroll,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (program) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div
      id="program-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="program-detail-modal"
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl transition-all ${
          darkMode
            ? 'bg-[#1F2937] border-gray-700 text-white'
            : 'bg-white border-gray-100 text-[#111827]'
        }`}
      >
        {/* Modal Banner Image */}
        <div className="relative h-52 sm:h-60 w-full overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            id="close-program-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Program Title and Subtitle in banner */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {program.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-orange-500 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {program.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 mt-1">{program.subtitle}</p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Metrics Ribbon */}
          <div
            className={`grid grid-cols-3 gap-3 p-4 rounded-xl border text-center text-xs ${
              darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-slate-50 border-gray-200'
            }`}
          >
            <div>
              <div className="text-gray-400 font-medium">Duration</div>
              <div className="font-bold text-sm text-orange-500 mt-0.5">{program.duration}</div>
            </div>
            <div>
              <div className="text-gray-400 font-medium">Frequency</div>
              <div className="font-bold text-sm text-orange-500 mt-0.5">{program.sessionsPerWeek}</div>
            </div>
            <div>
              <div className="text-gray-400 font-medium">Experience Level</div>
              <div className="font-bold text-sm text-orange-500 mt-0.5">{program.level}</div>
            </div>
          </div>

          {/* Problem & Solution breakdown from Blueprint */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Problem */}
            <div
              className={`p-4 rounded-xl border ${
                darkMode ? 'bg-rose-950/20 border-rose-900/40' : 'bg-rose-50/70 border-rose-100'
              }`}
            >
              <div className="flex items-center gap-2 text-rose-500 font-semibold text-xs uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge / Problem</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {program.problem}
              </p>
            </div>

            {/* The Solution */}
            <div
              className={`p-4 rounded-xl border ${
                darkMode ? 'bg-emerald-950/20 border-emerald-900/40' : 'bg-emerald-50/70 border-emerald-100'
              }`}
            >
              <div className="flex items-center gap-2 text-emerald-500 font-semibold text-xs uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Structured Solution</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {program.solution}
              </p>
            </div>
          </div>

          {/* Expected Outcome */}
          <div
            className={`p-4 rounded-xl border ${
              darkMode ? 'bg-orange-950/20 border-orange-900/40' : 'bg-orange-50/70 border-orange-200'
            }`}
          >
            <div className="flex items-center gap-2 text-orange-500 font-semibold text-xs uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Expected Outcome</span>
            </div>
            <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {program.outcome}
            </p>
          </div>

          {/* Training Focus & Curriculum Breakdown */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-400 mb-3">
              Program Roadmap & Syllabus
            </h4>
            <div className="space-y-2">
              {program.weeklyPlanSummary.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-2.5 ${
                    darkMode ? 'bg-gray-800/40 border-gray-700' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                darkMode
                  ? 'border-gray-700 hover:bg-gray-800 text-gray-300'
                  : 'border-gray-300 hover:bg-gray-100 text-gray-700'
              }`}
            >
              Close
            </button>
            <button
              id="modal-enroll-action-btn"
              onClick={() => onEnroll(program.title)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              <span>Enroll in This Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
