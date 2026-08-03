import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-border-main bg-bg-card hover:bg-bg-hover text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-volcano"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-text-secondary hover:text-brand-accent transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-brand-volcano animate-pulse-slow" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
