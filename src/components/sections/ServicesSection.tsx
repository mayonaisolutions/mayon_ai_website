import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Globe, Server, Brain, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      image: `${process.env.PUBLIC_URL}/images/service_web_dev.jpg`,
      icon: <Globe className="w-5 h-5 text-brand-volcano" />,
      title: 'Web Development',
      description:
        'We build lightning-fast, secure websites and web applications tailored for maximum conversion, scalability, and seamless user experiences.',
      bullets: [
        'React, Next.js & Vite frameworks',
        'Headless CMS & static builds',
        'Custom REST & GraphQL API setup',
        'Performant, SEO-optimized layouts',
      ],
    },
    {
      image: `${process.env.PUBLIC_URL}/images/service_backend_dev.jpg`,
      icon: <Server className="w-5 h-5 text-brand-volcano" />,
      title: 'Backend Development',
      description:
        'Custom server-side architectures, REST/GraphQL APIs, and robust database layers engineered for scalability, high concurrency, and data safety.',
      bullets: [
        'FastAPI, Node.js & Go structures',
        'Scalable SQL & NoSQL systems',
        'Secure OAuth2 & auth flows',
        'Microservices & cloud deployments',
      ],
    },
    {
      image: `${process.env.PUBLIC_URL}/images/service_ai_solutions.jpg`,
      icon: <Brain className="w-5 h-5 text-brand-volcano" />,
      title: 'AI Solutions',
      description:
        'Integrate modern machine learning models and large language models (LLMs) to automate operations, construct chatbots, and extract data.',
      bullets: [
        'Custom chatbots & AI agents',
        'OpenAI, Anthropic & LLM integration',
        'Autonomous agent workflows',
        'Data extraction & analysis pipelines',
      ],
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  };

  return (
    <section className="py-20 md:py-28 bg-bg-main border-y border-border-main/50 relative overflow-hidden transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-glow opacity-20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-brand-volcano uppercase">What We Build</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            High-performance digital products engineered to scale
          </p>
          <div className="w-16 h-1 bg-brand-volcano mx-auto rounded-full mt-2" />
        </div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full flex flex-col">
              <Card className="h-full flex flex-col justify-between overflow-hidden !p-0 group hover:border-brand-volcano/40 transition-all duration-300">
                {/* Visual Banner Image */}
                <div className="relative w-full h-52 overflow-hidden bg-bg-main border-b border-border-main/50">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay to blend into card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Icon Badge on top of image */}
                  <div className="absolute bottom-3 left-6 p-2 rounded-xl border border-border-main bg-bg-card/95 backdrop-blur-md shadow-sm">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  {/* Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight text-text-primary group-hover:text-brand-volcano transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 pt-1">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-brand-volcano shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 mt-auto">
                    <Link to="/services" className="block w-full">
                      <Button variant="secondary" className="w-full justify-between group-hover:border-brand-volcano/30 py-2.5 rounded-xl text-xs font-semibold">
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
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

export default ServicesSection;
