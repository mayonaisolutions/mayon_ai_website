import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { ExternalLink, ArrowRight } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
};

export const Work: React.FC = () => {
  const categories = ['All', 'Web', 'Backend', 'AI'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'PulseTrade Crypto Desk',
      description: 'High-speed web dashboard for real-time cryptocurrency traders, supporting low-latency charts and secure OAuth checkouts.',
      category: 'Web',
      tags: ['React', 'Next.js', 'Tailwind', 'GraphQL'],
      stat: '45% load decrease',
    },
    {
      title: 'ApexFit Core Engine',
      description: 'High-throughput backend server processing biological telemetry streams, built with OAuth2 auth and multi-tenant DB replication.',
      category: 'Backend',
      tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      stat: '1.2m syncs/day',
    },
    {
      title: 'LexiParse AI Document Parsing',
      description: 'Distributed document extraction pipeline leveraging Claude 3.5 Sonnet to parse structured entities from unstructured financial PDFs.',
      category: 'AI',
      tags: ['Python', 'FastAPI', 'OpenAI', 'Pinecone'],
      stat: '99.4% accuracy rate',
    },
    {
      title: 'Velo Headless Commerce',
      description: 'Ultra-fast modular e-commerce frontend built using static page generations, powering a global fashion storefront.',
      category: 'Web',
      tags: ['React', 'Vite', 'GraphQL', 'Tailwind CSS'],
      stat: '1.2s load time',
    },
    {
      title: 'SupportFlow AI Core',
      description: 'Conversational agent and ticket routing backend using custom embeddings to automate 60% of customer support workloads.',
      category: 'AI',
      tags: ['LangChain', 'PgVector', 'Anthropic', 'Python'],
      stat: '₹12L/mo saved',
    },
    {
      title: 'LogiRoute Fleet Router',
      description: 'High-concurrency routing and logistics engine computing optimized vehicle coordinates under strict weight constraints.',
      category: 'Backend',
      tags: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
      stat: '300ms route matches',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-28 pb-16 bg-bg-main min-h-screen transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
            Our Work & Client Releases
          </h1>
          <p className="text-text-secondary text-base sm:text-lg font-light leading-relaxed">
            Explore digital platforms, high-performance apps, and custom AI networks built for select clients globally.
          </p>
          <div className="w-16 h-1 bg-brand-volcano mx-auto rounded-full mt-2" />
        </div>

        {/* Filter Toolbar */}
        <div className="flex justify-center items-center flex-wrap gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-300 focus:outline-none ${
                activeCategory === category
                  ? 'border-brand-volcano bg-brand-volcano text-white shadow-volcanic'
                  : 'border-border-main bg-bg-card text-text-secondary hover:bg-bg-hover hover:border-text-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between hover:border-brand-volcano/30">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-border-main bg-bg-main text-text-secondary">
                        {project.category}
                      </span>
                      <span className="text-xs font-bold text-brand-volcano">{project.stat}</span>
                    </div>

                    {/* Detail */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-text-primary tracking-tight flex items-center gap-1.5 hover:text-brand-volcano transition-colors cursor-pointer">
                        {project.title}
                        <ExternalLink className="w-4 h-4 opacity-50 stroke-[1.5]" />
                      </h3>
                      <p className="text-text-secondary text-xs leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded text-[10px] font-medium border border-border-subtle bg-bg-hover text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-auto">
                    <button className="flex items-center gap-1.5 text-xs font-bold text-brand-volcano group">
                      View Case Study
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Work;
