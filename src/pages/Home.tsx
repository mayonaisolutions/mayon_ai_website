import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { ServicesSection } from '../components/sections/ServicesSection';
import { Process } from '../components/sections/Process';
import { WhyMayon } from '../components/sections/WhyMayon';
import { CTABanner } from '../components/sections/CTABanner';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
};

export const Home: React.FC = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      <Hero />
      <ServicesSection />
      <Process />
      <WhyMayon />
      <CTABanner />
    </motion.main>
  );
};

export default Home;
