import React from 'react';
import { Footprints, Flame, Trophy, Activity, ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data/content.ts';
import { Service } from '../types.ts';

interface ServicesProps {
  darkMode: boolean;
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ darkMode, onSelectService }) => {
  const getIcon = (name: Service['iconName']) => {
    switch (name) {
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-orange-500" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-500" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-orange-500" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-orange-500" />;
      default:
        return <Activity className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section
      id="coaching"
      className={`py-20 md:py-28 transition-colors duration-300 ${
        darkMode ? 'bg-[#111827]/90' : 'bg-[#F8FAFC]'
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
            <Activity className="w-3.5 h-3.5 text-orange-500" />
            <span>Coaching Services & Solutions</span>
          </div>
          <h2
            id="services-title"
            className={`font-heading text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-[#111827]'
            }`}
          >
            Purpose-Built Training Tracks
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Scientifically planned training solutions designed to guide every stage of your running development.
          </p>
        </div>

        {/* 4 Responsive Service Cards Grid */}
        <div
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-gray-800/80 border-gray-700 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/5'
                  : 'bg-white border-gray-200 hover:border-orange-400 hover:shadow-lg shadow-sm'
              }`}
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      darkMode
                        ? 'bg-gray-700/80 group-hover:bg-orange-500/20'
                        : 'bg-orange-50 group-hover:bg-orange-100'
                    }`}
                  >
                    {getIcon(service.iconName)}
                  </div>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      darkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  className={`font-heading font-bold text-lg mb-2.5 group-hover:text-orange-500 transition-colors ${
                    darkMode ? 'text-white' : 'text-[#111827]'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Short Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>

                {/* Bullet Key Points */}
                <ul className="space-y-2 mb-6">
                  {service.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                id={`btn-select-service-${service.id}`}
                onClick={() => onSelectService(service.title)}
                className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-gray-700/80 hover:bg-orange-500 hover:text-white text-gray-200'
                    : 'bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-800'
                }`}
              >
                <span>Select Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
