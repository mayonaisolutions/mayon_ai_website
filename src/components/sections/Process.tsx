import React from 'react';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover & Strategize',
      description:
        'We deep dive into your business workflows, goals, and technical requirements. Together we lay down a strict architecture roadmap, system specifications, and design prototypes.',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description:
        'Our design phase maps out complete high-fidelity UI/UX layouts. We iterate on dynamic design states, accessible contrasts, responsive layouts, and interactive flow details.',
    },
    {
      number: '03',
      title: 'Sprint-Based Build',
      description:
        'We build using premium tech stacks (React, Vite, Next.js, FastAPI). Clean code, rigorous typescript typing, test coverages, and custom component-driven setups are implemented.',
    },
    {
      number: '04',
      title: 'Launch & Optimize',
      description:
        'We deploy to production cloud setups (Vercel, AWS, GCP). We run final performance audits, setup tracking tools, hook up analytics, and transition into maintenance support.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 14 },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-bg-main transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-brand-volcano uppercase">How We Work</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Our step-by-step path to digital excellence
          </p>
          <div className="w-16 h-1 bg-brand-volcano mx-auto rounded-full mt-2" />
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Connecting Track Line for Desktop */}
          <div className="hidden md:block absolute top-[45px] left-[5%] right-[5%] h-0.5 bg-border-main z-0" />

          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative z-10 space-y-6">
              {/* Number circle */}
              <div className="relative flex justify-start md:justify-center">
                <div className="w-14 h-14 rounded-full border border-border-main bg-bg-card flex items-center justify-center shadow-volcanic text-lg font-bold text-brand-volcano hover:border-brand-volcano/30 hover:scale-105 transition-all duration-300">
                  {step.number}
                </div>
              </div>

              {/* Text Card */}
              <div className="bg-bg-card border border-border-main/60 rounded-2xl p-6 shadow-sm text-left md:text-center space-y-3 hover:border-border-main transition-all duration-300">
                <h3 className="text-lg font-bold text-text-primary tracking-tight">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-light">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
