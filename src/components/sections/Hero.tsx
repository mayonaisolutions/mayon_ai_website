import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles, Terminal, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-bg-main transition-colors duration-300">
      {/* Volcanic Lava Background Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-glow rounded-full blur-[100px] opacity-60 animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-brand-glow rounded-full blur-[120px] opacity-40 animate-blob [animation-delay:3s] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,78,32,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,78,32,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and Intro */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6 sm:space-y-8"
          >
            {/* Tagline Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-volcano/20 bg-brand-glow text-brand-volcano text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Next-Gen Engineering Studio</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1]"
            >
              We build premium{' '}
              <span className="bg-gradient-to-r from-brand-volcano via-brand-volcano to-brand-accent bg-clip-text text-transparent">
                Websites
              </span>
              ,{' '}
              <span className="bg-gradient-to-r from-brand-volcano via-brand-volcano to-brand-accent bg-clip-text text-transparent">
                Backend
              </span>
              , &{' '}
              <span className="bg-gradient-to-r from-brand-volcano via-brand-volcano to-brand-accent bg-clip-text text-transparent">
                AI Solutions
              </span>
              .
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl font-light"
            >
              Mayon AI Solutions is a bespoke product development studio. We engineer ultra-fast, high-performance websites, scalable backend architectures, and custom AI systems tailored to scale your brand.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 font-bold">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto font-semibold">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Features list */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 sm:gap-6 border-t border-border-main/60 pt-6 sm:pt-8 text-xs text-text-secondary"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg border border-border-main bg-bg-card">
                  <Terminal className="w-4 h-4 text-brand-volcano" />
                </div>
                <span>100% In-house Engineering</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg border border-border-main bg-bg-card">
                  <Shield className="w-4 h-4 text-brand-volcano" />
                </div>
                <span>Secure, AI-Native Builds</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Monogram SVG Peak Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="lg:col-span-5 flex justify-center relative select-none"
          >
            {/* Soft decorative volcanic shadow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-volcano/10 via-transparent to-brand-accent/5 rounded-full filter blur-3xl transform scale-90" />
            
            {/* Visual SVG Graphic representing the grid */}
            <svg
              width="450"
              height="450"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[400px] sm:max-w-[450px] relative z-10 filter drop-shadow-2xl"
            >
              <defs>
                <linearGradient id="wireframe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-text-secondary)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--color-text-muted)" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Wireframe Grid/Topographic Lines representing the peak structure */}
              {/* Ring 1 */}
              <circle cx="250" cy="250" r="200" stroke="url(#wireframe-grad)" strokeWidth="1" strokeDasharray="4 6" />
              {/* Ring 2 */}
              <circle cx="250" cy="250" r="160" stroke="url(#wireframe-grad)" strokeWidth="1" />
              {/* Ring 3 */}
              <circle cx="250" cy="250" r="110" stroke="url(#wireframe-grad)" strokeWidth="1" strokeDasharray="2 3" />

              {/* Erupting AI spark nodes floating upwards */}
              <motion.circle
                cx="250"
                cy="120"
                r="7"
                fill="var(--color-brand-volcano)"
                animate={{ y: [0, -40, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="200"
                cy="90"
                r="5"
                fill="var(--color-brand-accent)"
                animate={{ y: [0, -50, 0], opacity: [0.5, 0.9, 0.5] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              />
              <motion.circle
                cx="300"
                cy="100"
                r="4.5"
                fill="var(--color-brand-volcano)"
                animate={{ y: [0, -35, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 2 }}
              />

              {/* Connecting virtual lines for floating sparks */}
              <line x1="250" y1="180" x2="250" y2="80" stroke="var(--color-brand-volcano)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
              <line x1="200" y1="180" x2="200" y2="40" stroke="var(--color-brand-accent)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
              <line x1="300" y1="180" x2="300" y2="65" stroke="var(--color-brand-volcano)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
            </svg>

            {/* The Actual transparent logo image in the center, floating gently */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-20"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src="/image.png"
                alt="Mayon AI Solutions Logo"
                className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] object-contain drop-shadow-[0_0_35px_rgba(124,58,237,0.4)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
