import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Compass, ShieldCheck, Sparkles, Infinity } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
};

export const About: React.FC = () => {
  const coreValues = [
    {
      icon: <Sparkles className="w-5 h-5 text-brand-volcano" />,
      title: 'Precision Energy, Rapid Velocity',
      description: 'We believe speed is a feature. We engineer sites and frameworks that load instantly and respond instantly to interaction.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-volcano" />,
      title: 'Trust & Engineering Rigor',
      description: 'We do not skip steps. We enforce strict typescript typing, write robust unit coverages, and perform static security reviews.',
    },
    {
      icon: <Compass className="w-5 h-5 text-brand-volcano" />,
      title: 'AI-Guided Workflows',
      description: 'We do not just build AI applications; we use AI tools internally to write, test, and audit projects faster and more reliably.',
    },
    {
      icon: <Infinity className="w-5 h-5 text-brand-volcano" />,
      title: 'Long-Term Partnership',
      description: 'We stay on board after releases. We monitor server statuses, deploy patches, and assist in structural growth updates.',
    },
  ];

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-28 pb-16 bg-bg-main min-h-screen transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-volcano/20 bg-brand-glow text-brand-volcano text-xs font-semibold uppercase tracking-wider">
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-[1.1]">
              Engineering digital architectures of enduring precision and speed
            </h1>
            <p className="text-text-secondary text-base leading-relaxed font-light">
              Mayon AI Solutions was founded to bridge the massive gap between template web agencies and top-tier enterprise engineering shops. We serve startups and high-growth brands who demand speed, security, and next-gen AI capabilities in their product stack.
            </p>
            <p className="text-text-secondary text-base leading-relaxed font-light">
              By keeping our engineering entirely in-house, we construct clean-code structures that outpace standard outsourced stacks. We build products designed to last.
            </p>
          </div>

          {/* Mayon Name Origin */}
          <div className="lg:col-span-5">
            <Card className="border-brand-volcano/20 bg-bg-card p-8 shadow-volcanic relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-glow opacity-30 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-volcano animate-pulse" />
                The Mayon Name Origin
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-light">
                Our name <strong>Mayon</strong> traces its roots to ancient classical heritage, denoting <strong>Lord Vishnu</strong> — the cosmic preserver, protector, and architect of universal order and balance.
              </p>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-light">
                We embed this philosophy directly into our engineering systems: <strong>Supreme protection, architectural harmony, enduring resilience, and intelligent stewardship.</strong>
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-brand-volcano border-t border-border-main pt-4">
                <div>Cosmic Balance</div>
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                <div>Supreme Protection</div>
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                <div>Enduring Resilience</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-brand-volcano uppercase">Core Principles</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              How we structure our build standards
            </p>
            <div className="w-16 h-1 bg-brand-volcano mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <Card key={idx} className="h-full flex flex-col justify-start border-border-main/50 hover:border-brand-volcano/25" hoverEffect={true}>
                <div className="space-y-4 text-left">
                  <div className="p-2.5 rounded-xl border border-border-main bg-bg-main w-fit">
                    {value.icon}
                  </div>
                  <h3 className="text-base font-bold text-text-primary tracking-tight">{value.title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed font-light">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Philosophy card */}
        <Card className="border-border-main/60 bg-bg-card p-8 md:p-12 shadow-sm text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
            No middlemen. Direct engineering access.
          </h2>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto leading-relaxed font-light">
            When you build with Mayon, you speak directly with our senior engineers and UX designers. We skip account management layers to ensure client feedbacks translate directly into production code.
          </p>
          <div className="pt-2 flex justify-center gap-8 text-left max-w-lg mx-auto border-t border-border-main pt-6">
            <div className="text-center flex-1">
              <div className="text-2xl font-black text-brand-volcano">100%</div>
              <div className="text-[10px] uppercase font-bold text-text-muted">In-House Coding</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-2xl font-black text-brand-volcano">45%</div>
              <div className="text-[10px] uppercase font-bold text-text-muted">Load Speedup Avg</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-2xl font-black text-brand-volcano">100%</div>
              <div className="text-[10px] uppercase font-bold text-text-muted">Milestone Sync</div>
            </div>
          </div>
        </Card>
      </div>
    </motion.main>
  );
};

export default About;
