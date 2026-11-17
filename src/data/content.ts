import { Program, Service, Competency, Testimonial } from '../types.ts';

export const STUDENT_INFO = {
  fullName: 'Linda Evelyn Saragih',
  nim: '131620260020',
  batch: 'Batch 4 / Semester 1',
  course: 'Basic Programming for Business',
  businessName: 'Linda Evelyn - StrideLab Coaching',
  brandName: 'StrideLab Coaching',
  shortName: 'StrideLab',
  niche: 'Running & Fitness Coaching',
  primaryBrandColor: '#111827',
  secondaryAccentColor: '#F97316',
  surfaceColor: '#F8FAFC',
};

export const HERO_CONTENT = {
  headline: 'Run Stronger. Go Further.',
  subheadline: 'Personalized coaching for runners who want to become stronger, faster, and more consistent',
  description: 'Whether you are starting your running journey or preparing for your next race, StrideLab Coaching provides structured guidance to help you train with confidence and purpose.',
  primaryCta: 'Start your coaching journey',
  secondaryCta: 'Explore coaching plans',
};

export const ABOUT_CONTENT = {
  title: 'About StrideLab Coaching',
  coachName: 'Linda Evelyn Saragih',
  coachTitle: 'Lead Running Coach & Founder',
  coachAvatar: '/assets/coach_linda_profile.jpg',
  bio1: 'StrideLab Coaching was created to help runners train smarter and enjoy the process of becoming better athletes. The coaching approach focuses on structured training, consistency, recovery, and long-term progress.',
  bio2: 'Every runner has different goals, experience levels, and challenges, so training should be adapted to the individual rather than using a one-size-fits-all approach.',
  quote: 'Running is not just about putting in miles; it is about building lifelong stamina, purposeful movement, and the mental resilience to keep moving forward.',
  stats: [
    { label: 'Athletes Guided', value: '150+' },
    { label: 'Race Finishes', value: '98%' },
    { label: 'Personal Best Rate', value: '85%' },
    { label: 'Community Members', value: '500+' },
  ],
};

export const CORE_COMPETENCIES: Competency[] = [
  {
    name: 'Running Training',
    percentage: 95,
    description: 'Aerobic base building, progressive mileage, and form optimization.',
  },
  {
    name: 'Race Preparation',
    percentage: 90,
    description: 'Course reconnaissance, pacing strategy, and race-day mental readiness.',
  },
  {
    name: 'Training Planning',
    percentage: 95,
    description: 'Periodized microcycles, peak phasing, and personalized pacing schedules.',
  },
  {
    name: 'Strength & Conditioning',
    percentage: 85,
    description: 'Targeted runner strength, core stability, and posterior chain power.',
  },
  {
    name: 'Recovery',
    percentage: 90,
    description: 'Active recovery protocols, sleep optimization, and deload management.',
  },
  {
    name: 'Performance Tracking',
    percentage: 88,
    description: 'Heart rate zone analysis, cadence monitoring, and biometric milestones.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'beginner-coaching',
    title: 'Beginner Running Coaching',
    description: 'A structured program for new runners who want to build consistency and confidence.',
    iconName: 'Footprints',
    badge: 'Foundation',
    keyPoints: [
      'Gradual run-walk progression to prevent shin splints',
      'Breath control & cadence fundamentals',
      'Habit building & weekly check-in support',
    ],
  },
  {
    id: '5k-10k-prep',
    title: '5K & 10K Race Preparation',
    description: 'A focused training program designed to help runners prepare for their next 5K or 10K race.',
    iconName: 'Flame',
    badge: 'Speed & Stamina',
    keyPoints: [
      'Interval speedwork & tempo run workouts',
      'Race-pace calibration & splits strategy',
      'Pre-race tapering and nutrition guidance',
    ],
  },
  {
    id: 'half-marathon',
    title: 'Half Marathon Coaching',
    description: 'Structured training for runners working toward completing or improving their half marathon performance.',
    iconName: 'Trophy',
    badge: 'Endurance Focus',
    keyPoints: [
      'Long run progression up to 20K with target fueling',
      'Aerobic threshold threshold training',
      'Post-race recovery & injury prevention',
    ],
  },
  {
    id: 'strength-mobility',
    title: 'Strength & Mobility',
    description: 'Supporting runners with strength and mobility exercises to improve performance and movement quality.',
    iconName: 'Activity',
    badge: 'Injury Resilience',
    keyPoints: [
      'Single-leg stability & hip mobility routines',
      'Low-impact runner resistance exercises',
      'Pre-run dynamic warmups & post-run stretches',
    ],
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'program-1-5k',
    title: 'Beginner to 5K',
    subtitle: 'Build your running habit from zero to continuous 5K with confidence',
    description: 'A progressive training plan designed specifically for new runners looking to achieve their first 5-kilometer milestone without burnout or injury.',
    problem: 'New runners often struggle with consistency and knowing how much they should train.',
    solution: 'A progressive training plan that gradually builds running volume while allowing appropriate recovery.',
    outcome: 'Helps beginners develop consistency and prepare to complete their first 5K.',
    tags: ['Beginner', 'Running', '5K'],
    duration: '8 Weeks',
    sessionsPerWeek: '3-4 Days / Week',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80',
    weeklyPlanSummary: [
      'Phase 1 (Weeks 1-2): Aerobic Base & Run-Walk intervals (1 min run / 2 min walk)',
      'Phase 2 (Weeks 3-5): Continuous running build up to 20-25 minutes',
      'Phase 3 (Weeks 6-7): Pacing discovery, light tempo segments, and recovery walks',
      'Phase 4 (Week 8): Race week taper and triumphant 5K graduation run',
    ],
  },
  {
    id: 'program-2-10k',
    title: '10K Performance',
    subtitle: 'Master your pacing, sharpen your speed, and set a new personal record',
    description: 'A rigorous, structured training track designed for intermediate runners ready to push their 10K threshold and build lactate endurance.',
    problem: 'Runners may struggle to improve their pace and structure their training effectively.',
    solution: 'A structured program combining easy runs, quality sessions, recovery, and progressive training.',
    outcome: 'Helps runners prepare for a 10K and work toward improving their performance.',
    tags: ['10K', 'Performance', 'Training'],
    duration: '10 Weeks',
    sessionsPerWeek: '4-5 Days / Week',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=800&q=80',
    weeklyPlanSummary: [
      'Phase 1 (Weeks 1-3): Threshold baseline test and conversational aerobic building',
      'Phase 2 (Weeks 4-6): 800m & 1km track repeats, progression runs',
      'Phase 3 (Weeks 7-9): Sustained 10K race pace intervals and 12-14K weekend long runs',
      'Phase 4 (Week 10): 7-day taper, mental focus, and PB attempt on race day',
    ],
  },
  {
    id: 'program-3-half-marathon',
    title: 'Half Marathon Journey',
    subtitle: 'Conquer the 21.1K distance with endurance, fueling mastery, and mental strength',
    description: 'An all-encompassing endurance program that takes your running to 13.1 miles with strategic long runs, fueling protocols, and pacing discipline.',
    problem: 'Preparing for a longer race requires consistent training and careful progression.',
    solution: 'A structured half marathon program focusing on endurance, pacing, recovery, and race preparation.',
    outcome: 'Helps runners build the endurance and confidence needed for a half marathon.',
    tags: ['Half Marathon', 'Endurance', 'Race Preparation'],
    duration: '12 Weeks',
    sessionsPerWeek: '4-5 Days / Week',
    level: 'Intermediate / Advanced',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    weeklyPlanSummary: [
      'Phase 1 (Weeks 1-4): Long run extension to 12K, steady tempo introductions',
      'Phase 2 (Weeks 5-8): Mid-week lactate threshold runs and peak long runs up to 18K',
      'Phase 3 (Weeks 9-10): Race rehearsal runs with hydration & energy gel testing',
      'Phase 4 (Weeks 11-12): Progressive two-week taper and race-day execution strategy',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah K.',
    role: 'Beginner Runner',
    tag: '5K Finisher',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    quote: '“The training structure helped me become much more consistent with my running.”',
  },
  {
    id: 'testimonial-2',
    name: 'David M.',
    role: '10K Runner',
    tag: 'Sub-48min 10K',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    quote: '“I finally understood how to balance hard sessions with recovery.”',
  },
  {
    id: 'testimonial-3',
    name: 'Emily R.',
    role: 'Half Marathon Runner',
    tag: 'First Half Marathon Finisher',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    quote: '“The program gave me the confidence to prepare for my first half marathon.”',
  },
];

export const CONTACT_INFO = {
  headline: 'Ready to Reach Your Next Running Goal?',
  description: 'Tell us about your goal, your current running experience, and what you want to achieve.',
  email: 'linda.saragih@stridelab.coach',
  instagram: '@stridelab.coaching',
  community: 'StrideLab Community & Strava Runners Club',
  hours: 'Monday – Saturday: 06:00 – 19:00 WIB',
  location: 'Jakarta & Online Remote Coaching',
};
