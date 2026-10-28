import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Globe, Server, Brain, ArrowRight } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
};

export const Services: React.FC = () => {
  const serviceDetails = [
    {
      image: '/images/service_web_dev.jpg',
      icon: <Globe className="w-8 h-8 text-brand-volcano" />,
      title: 'Web Engineering',
      tagline: 'Fast, secure, and SEO-first core products.',
      description: 'We develop custom frontend systems and full-stack websites using the industry’s most stable modern build setups. Our applications are optimized for Core Web Vitals, screen responsiveness, and responsive interactivity.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
      features: [
        { name: 'Serverless Rendering (SSR/ISR)', desc: 'Optimized page load distributions for global fast deliveries.' },
        { name: 'Headless CMS Integration', desc: 'Secure contents decoupling using Contentful, Strapi, or Sanity.' },
        { name: 'REST & GraphQL Core APIs', desc: 'Typed database queries mapped to clean backend endpoints.' },
        { name: 'Responsive UI Design systems', desc: 'Adaptive styling built upon custom, accessible design tokens.' }
      ]
    },
    {
      image: '/images/service_backend_dev.jpg',
      icon: <Server className="w-8 h-8 text-brand-volcano" />,
      title: 'Backend Engineering',
      tagline: 'Scalable, secure, and fast server architectures.',
      description: 'We design and deploy high-concurrency API structures and robust database integrations. From microservice layouts to secure user authentication, we build backend systems that never fail.',
      stack: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'AWS/GCP'],
      features: [
        { name: 'REST & GraphQL Core APIs', desc: 'Secure, typed endpoints built for high throughput and speed.' },
        { name: 'Relational & Document DBs', desc: 'Optimized PostgreSQL and MongoDB schema configurations.' },
        { name: 'Containerized Infrastructures', desc: 'Docker and Kubernetes setups mapping clean local/cloud states.' },
        { name: 'Caching & Queueing Engines', desc: 'Redis and RabbitMQ structures handling fast data distributions.' }
      ]
    },
    {
      image: '/images/service_ai_solutions.jpg',
      icon: <Brain className="w-8 h-8 text-brand-volcano" />,
      title: 'AI Solutions & Pipelines',
      tagline: 'Intelligent process automations.',
      description: 'We construct and deploy machine learning automations, custom NLP engines, and vector-backed LLM pipelines. We enable companies to automate complex tasks, parse large datasets, and serve conversational agents.',
      stack: ['Python', 'FastAPI', 'OpenAI / Anthropic APIs', 'LangChain', 'PgVector', 'Docker', 'FlaskAPI'],
      features: [
        { name: 'Custom AI Agents & Bots', desc: 'Conversational logic custom-trained on your internal documents.' },
        { name: 'Semantic Search Engines', desc: 'Vector database search architectures yielding fast text matches.' },
        { name: 'Data Pipeline Automations', desc: 'Scheduled ETL scripts parsing and cleaning files automatically.' },
        { name: 'Custom Model Deployments', desc: 'Scalable cloud containers hosting LLM integrations secure.' }
      ]
    }
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
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
            Our Services & Engineering Scope
          </h1>
          <p className="text-text-secondary text-base sm:text-lg font-light leading-relaxed">
            We provide deep technological expertise across frontend builds, backend architectures, and state-of-the-art AI systems. 
          </p>
          <div className="w-16 h-1 bg-brand-volcano mx-auto rounded-full mt-2" />
        </div>

        {/* Detailed Services list */}
        <div className="space-y-24 md:space-y-32">
          {serviceDetails.map((service, idx) => (
            <div 
              key={idx} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text description (col 5) */}
              <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="w-full h-52 rounded-2xl overflow-hidden border border-border-main/60 bg-bg-card relative shadow-volcanic group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 p-2 rounded-xl border border-border-main bg-bg-card/95 backdrop-blur-md shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">{service.title}</h2>
                  <p className="text-brand-volcano text-sm font-semibold">{service.tagline}</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed font-light">{service.description}</p>
                
                {/* Tech stack badges */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold tracking-wider text-text-muted uppercase">Tech Stack Details</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((badge, bIdx) => (
                      <span 
                        key={bIdx} 
                        className="px-3 py-1 rounded-lg border border-border-main bg-bg-card text-xs font-semibold text-text-secondary hover:border-brand-volcano/20 transition-colors"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/contact">
                    <Button variant="primary" className="gap-2">
                      Start a Project
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Detailed Cards (col 7) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feat, fIdx) => (
                  <Card key={fIdx} className="border-border-main/50 space-y-3 hover:border-brand-volcano/25" hoverEffect={true}>
                    <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-volcano shrink-0" />
                      {feat.name}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-light">{feat.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Services;
