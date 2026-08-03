import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTABanner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-bg-main relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glowing Background Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-glow opacity-30 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl border border-brand-volcano/20 bg-bg-card p-8 md:p-16 shadow-volcanic text-center max-w-4xl mx-auto overflow-hidden"
        >
          {/* Subtle volcanic linear trace */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,78,32,0.06),transparent_60%)] pointer-events-none" />

          <div className="space-y-6 max-w-2xl mx-auto relative z-10">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-volcano/10 bg-brand-glow text-brand-volcano text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's collaborate</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              Have a project in mind? Let's build it together.
            </h2>

            {/* Sub */}
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
              We are currently booking select web, app, and artificial intelligence projects. Contact us today to receive a free roadmap consultation and milestone estimate.
            </p>

            {/* Action */}
            <div className="pt-4 flex justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="gap-2 font-bold px-8">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
