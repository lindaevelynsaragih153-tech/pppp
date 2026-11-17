import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/content.ts';

interface TestimonialsProps {
  darkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  return (
    <section
      id="testimonials"
      className={`py-20 md:py-28 transition-colors duration-300 ${
        darkMode ? 'bg-[#111827]/95' : 'bg-[#F8FAFC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
              darkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-100 text-orange-700'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-orange-500" />
            <span>Testimonials & Endorsements</span>
          </div>
          <h2
            id="testimonials-title"
            className={`font-heading text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-[#111827]'
            }`}
          >
            What Runners Say
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Real stories from athletes who built consistency, conquered race distances, and unlocked their running potential with StrideLab.
          </p>
        </div>

        {/* Three Testimonial Cards */}
        <div
          id="testimonials-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-gray-800/80 border-gray-700 hover:border-gray-600 shadow-lg'
                  : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Quotation Icon Decorator */}
              <div className="mb-6 flex items-center justify-between">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    darkMode ? 'bg-gray-700/80 text-orange-400' : 'bg-orange-50 text-orange-500'
                  }`}
                >
                  <Quote className="w-4 h-4" />
                </div>
              </div>

              {/* Quote Content */}
              <p
                className={`text-base italic leading-relaxed mb-8 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                {item.quote}
              </p>

              {/* Runner Info & Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100 dark:border-gray-700/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div
                    className={`font-heading font-bold text-sm ${
                      darkMode ? 'text-white' : 'text-[#111827]'
                    }`}
                  >
                    {item.name}
                  </div>
                  <div className="text-xs font-semibold text-orange-500">
                    &gt; {item.role}
                  </div>
                  <div className="text-[11px] text-gray-400">
                    {item.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
