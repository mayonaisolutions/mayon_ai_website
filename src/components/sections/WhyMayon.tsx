import React from 'react';
import { Card } from '../ui/Card';
import { Zap, Cpu, Users, Milestone } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyMayon: React.FC = () => {
  const valueProps = [
    {
      icon: <Zap className="w-5 h-5 text-brand-volcano" />,
      title: 'High Velocity Builds',
      metric: '2.5x',
      sub: 'Faster delivery time',
      description: 'Leveraging Vite configurations and custom component frameworks, we build and iterate with extreme velocity without compromising structural integrity.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-volcano" />,
      title: 'AI-Native Architectures',
      metric: '100%',
      sub: 'AI-integrated workflows',
      description: 'Our websites and systems leverage state-of-the-art LLMs, automated agents, and intelligent workflows to streamline user experiences and operations.',
    },
    {
      icon: <Users className="w-5 h-5 text-brand-volcano" />,
      title: '100% In-house Squad',
      metric: '0',
      sub: 'Freelancers or outsourcing',
      description: 'Our core engineering and design team is entirely in-house. This gives us complete control over code quality, security protocols, and timeline updates.',
    },
    {
      icon: <Milestone className="w-5 h-5 text-brand-volcano" />,
      title: 'Transparent Pricing',
      metric: '100%',
      sub: 'Milestone-based flat rates',
      description: 'No hidden setup fees, hourly tracking disputes, or surprise bills. We work on fixed scope contracts with clear, structured milestone deliverables.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 90, damping: 14 } },
  };

  return (
    <section className="py-20 md:py-28 bg-bg-main border-t border-border-main/50 relative overflow-hidden transition-colors duration-300">
      {/* Background soft glowing blob */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-brand-glow opacity-25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8 space-y-4 text-left">
            <h2 className="text-xs font-bold tracking-widest text-brand-volcano uppercase">Why Mayon</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              We build systems that elevate the baseline of your digital operations
            </p>
          </div>
          <div className="lg:col-span-4 text-left">
            <p className="text-text-secondary text-sm leading-relaxed">
              We aren't a traditional web agency that installs a template and leaves. We are engineering partners committed to security, custom speeds, and native AI power.
            </p>
          </div>
        </div>

        {/* Props Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {valueProps.map((prop, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between hover:border-brand-volcano/30">
                <div className="space-y-6">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl border border-border-main bg-bg-main">
                      {prop.icon}
                    </div>
                    <span className="text-2xl font-black text-brand-volcano/80">{prop.metric}</span>
                  </div>
                  {/* Content */}
                  <div className="space-y-2.5">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-bold text-text-primary tracking-tight">{prop.title}</h3>
                      <p className="text-xs font-semibold text-text-muted">{prop.sub}</p>
                    </div>
                    <p className="text-text-secondary text-xs leading-relaxed font-light">{prop.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMayon;
