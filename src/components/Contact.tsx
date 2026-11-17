import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Users, Clock, Send, CheckCircle2, AlertCircle, Sparkles, X, MapPin } from 'lucide-react';
import { CONTACT_INFO, STUDENT_INFO } from '../data/content.ts';
import { ContactFormData } from '../types.ts';

interface ContactProps {
  darkMode: boolean;
  selectedGoalPreset?: string;
  onClearGoalPreset?: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  darkMode,
  selectedGoalPreset,
  onClearGoalPreset,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    runningGoal: 'Beginner to 5K',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  // If a program/service is selected from elsewhere, update the runningGoal field
  useEffect(() => {
    if (selectedGoalPreset) {
      setFormData((prev) => ({
        ...prev,
        runningGoal: selectedGoalPreset,
      }));
    }
  }, [selectedGoalPreset]);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address (e.g. runner@example.com).';
      }
    }

    if (!formData.runningGoal.trim()) {
      newErrors.runningGoal = 'Please specify your running goal.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your current running experience and target.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters so we can better tailor your program.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        runningGoal: 'Beginner to 5K',
        message: '',
      });
      if (onClearGoalPreset) onClearGoalPreset();
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
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
            <Send className="w-3.5 h-3.5" />
            <span>Interactive Contact Section</span>
          </div>
          <h2
            id="contact-headline"
            className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            {CONTACT_INFO.headline}
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {CONTACT_INFO.description}
          </p>
        </div>

        {/* Two-Column Contact Layout: Sidebar Info (Left) + HTML5 Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Contact Sidebar Details */}
          <div className="lg:col-span-5 space-y-6">
            <div
              id="contact-sidebar"
              className={`p-8 rounded-2xl border ${
                darkMode
                  ? 'bg-gray-800/60 border-gray-700'
                  : 'bg-slate-50 border-gray-200 shadow-sm'
              }`}
            >
              <h3 className="font-heading font-bold text-xl mb-4">Direct Communication</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Have questions before committing? Connect directly with Coach {STUDENT_INFO.fullName} to discuss customized pacing, race calendars, or private group clinics.
              </p>

              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 block">Email Inquiries</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-semibold text-orange-500 hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Instagram item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/15 text-pink-500 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 block">Instagram</span>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline"
                    >
                      {CONTACT_INFO.instagram}
                    </a>
                  </div>
                </div>

                {/* Running Community item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-500 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 block">Running Community</span>
                    <span className="text-sm font-semibold block">
                      {CONTACT_INFO.community}
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">
                      Weekly Saturday 06:00 AM Group Long Runs
                    </span>
                  </div>
                </div>

                {/* Hours item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 block">Coaching Hours</span>
                    <span className="text-sm font-semibold block">{CONTACT_INFO.hours}</span>
                  </div>
                </div>
              </div>

              {/* Student Identification Notice */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-400 space-y-1">
                <div className="font-semibold text-gray-500 dark:text-gray-300">Portfolio Academic Record:</div>
                <div>Student: {STUDENT_INFO.fullName}</div>
                <div>NIM: {STUDENT_INFO.nim} • {STUDENT_INFO.batch}</div>
                <div>Course: {STUDENT_INFO.course}</div>
              </div>
            </div>
          </div>

          {/* Right Column: HTML5 Form with Client-Side Validation */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-container"
              className={`p-8 rounded-2xl border shadow-sm ${
                darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <form id="coaching-contact-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.fullName
                        ? 'border-rose-500 bg-rose-50/20'
                        : darkMode
                        ? 'bg-gray-900 border-gray-700 text-white focus:border-orange-500'
                        : 'bg-slate-50 border-gray-300 text-gray-900 focus:bg-white'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-500 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. alex.runner@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.email
                        ? 'border-rose-500 bg-rose-50/20'
                        : darkMode
                        ? 'bg-gray-900 border-gray-700 text-white focus:border-orange-500'
                        : 'bg-slate-50 border-gray-300 text-gray-900 focus:bg-white'
                    }`}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-500 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Running Goal Field */}
                <div>
                  <label
                    htmlFor="runningGoal"
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Running Goal <span className="text-orange-500">*</span>
                  </label>
                  <select
                    id="runningGoal"
                    name="runningGoal"
                    value={formData.runningGoal}
                    onChange={(e) => handleInputChange('runningGoal', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer ${
                      errors.runningGoal
                        ? 'border-rose-500 bg-rose-50/20'
                        : darkMode
                        ? 'bg-gray-900 border-gray-700 text-white focus:border-orange-500'
                        : 'bg-slate-50 border-gray-300 text-gray-900 focus:bg-white'
                    }`}
                  >
                    <option value="Beginner to 5K">Beginner to 5K (Build consistency & complete first 5K)</option>
                    <option value="5K & 10K Race Preparation">5K & 10K Race Preparation (Pace & threshold)</option>
                    <option value="10K Performance">10K Performance (Improve race splits & speed)</option>
                    <option value="Half Marathon Journey">Half Marathon Journey (Endurance & 21.1K prep)</option>
                    <option value="Strength & Mobility for Runners">Strength & Mobility for Runners</option>
                    <option value="Custom General Fitness Coaching">Custom General Fitness & Recovery</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Current Experience & Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your weekly running background, any past injuries, or specific race timeline you have in mind..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y ${
                      errors.message
                        ? 'border-rose-500 bg-rose-50/20'
                        : darkMode
                        ? 'bg-gray-900 border-gray-700 text-white focus:border-orange-500'
                        : 'bg-slate-50 border-gray-300 text-gray-900 focus:bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-500 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-98 text-white font-semibold text-base shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Start My Coaching Journey</span>
                </button>

                <p className="text-[11px] text-center text-gray-400">
                  🔒 No spam guaranteed. We respect your athletic privacy and respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal / Alert (Client-Side Interactivity) */}
      {isSubmitted && submittedData && (
        <div
          id="contact-success-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
        >
          <div
            className={`relative w-full max-w-lg p-6 sm:p-8 rounded-2xl border shadow-2xl ${
              darkMode ? 'bg-[#1F2937] border-gray-700 text-white' : 'bg-white border-gray-100 text-[#111827]'
            }`}
          >
            <button
              onClick={() => setIsSubmitted(false)}
              aria-label="Close message"
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl">Journey Initiated!</h4>
                <p className="text-xs text-gray-400">StrideLab Inquiry Successfully Logged</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-4">
              Thank you, <span className="font-bold text-orange-500">{submittedData.fullName}</span>! Coach Linda Evelyn Saragih has received your details and target goal:
            </p>

            <div
              className={`p-4 rounded-xl border text-xs space-y-2 mb-6 ${
                darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-slate-50 border-gray-200'
              }`}
            >
              <div>
                <span className="text-gray-400 block">Selected Goal Track:</span>
                <span className="font-semibold text-orange-500">{submittedData.runningGoal}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Registered Email:</span>
                <span className="font-semibold">{submittedData.email}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Runner Note:</span>
                <span className="italic text-gray-300">"{submittedData.message}"</span>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-md shadow-orange-500/20 transition-colors cursor-pointer"
              >
                Back to StrideLab
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
