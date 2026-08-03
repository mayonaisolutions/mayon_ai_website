import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../ui/Card';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Mayon built our serverless API and React platform in under six weeks. The speed and structural cleanliness of the code were outstanding. Our page load times dropped by 45%.',
      author: 'Sarah Jenkins',
      role: 'CTO, CloudOptima',
      avatarLetters: 'SJ',
    },
    {
      quote:
        'Their AI Solutions team integrated custom LLM agents directly into our support workflows. We automated 60% of common tickets and saved over 120 hours of manual QA in month one.',
      author: 'David Chen',
      role: 'Founder, NeuroFlow AI',
      avatarLetters: 'DC',
    },
    {
      quote:
        'They delivered our core API architectures with flawless data synchronization and robust microservice layers. They operate like a premium boutique engineering studio, not a generic agency.',
      author: 'Marcus Vance',
      role: 'VP of Product, ApexRetail',
      avatarLetters: 'MV',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    }),
  };

  return (
    <section className="py-20 md:py-28 bg-bg-main relative overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-4 mb-12 md:mb-16">
          <h2 className="text-xs font-bold tracking-widest text-brand-volcano uppercase">Testimonials</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Trusted by product leaders
          </p>
          <div className="w-16 h-1 bg-brand-volcano mx-auto rounded-full mt-2" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] sm:min-h-[250px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <Card className="mx-auto border-border-main/60 bg-bg-card p-8 md:p-10 shadow-volcanic text-left max-w-3xl flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
                {/* Large Decorative Quote Icon */}
                <Quote className="absolute right-6 top-6 w-24 h-24 text-brand-volcano/[0.03] stroke-[1] pointer-events-none" />

                {/* Avatar / Initials */}
                <div className="w-14 h-14 rounded-2xl bg-volcanic-gradient text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                  {testimonials[activeIndex].avatarLetters}
                </div>

                {/* Quote Text */}
                <div className="space-y-4 relative z-10">
                  <p className="text-text-primary text-base sm:text-lg italic leading-relaxed font-light">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm sm:text-base">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-text-muted text-xs font-medium">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl border border-border-main bg-bg-card text-text-primary hover:bg-bg-hover hover:border-brand-volcano/30 transition-all focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-6 bg-brand-volcano' : 'w-2 bg-border-main hover:bg-text-muted'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl border border-border-main bg-bg-card text-text-primary hover:bg-bg-hover hover:border-brand-volcano/30 transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
