import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Github, Linkedin, Twitter, ArrowUpRight, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com' },
  ];

  return (
    <footer className="bg-bg-card border-t border-border-main py-16 md:py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background soft accent glow */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-brand-glow opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-brand-glow opacity-30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 border-b border-border-main">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Logo />
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              We design, build, and scale premium websites, backend systems, and custom AI systems that power high-growth businesses.
            </p>
            <a
              href="mailto:mayonaisolutions@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-text-secondary hover:text-brand-volcano transition-colors w-fit font-medium"
            >
              <Mail className="w-4 h-4 text-brand-volcano shrink-0" />
              <span>mayonaisolutions@gmail.com</span>
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border-main text-text-secondary hover:text-brand-volcano hover:border-brand-volcano/30 hover:bg-bg-hover transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1: Studio */}
          <div className="md:col-span-2 col-span-6">
            <h3 className="text-xs font-semibold tracking-wider text-text-muted uppercase mb-4">Studio</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-text-secondary hover:text-brand-volcano transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-text-secondary hover:text-brand-volcano transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-text-secondary hover:text-brand-volcano transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-text-secondary hover:text-brand-volcano transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div className="md:col-span-2 col-span-6">
            <h3 className="text-xs font-semibold tracking-wider text-text-muted uppercase mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm text-text-secondary hover:text-brand-volcano transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-text-secondary hover:text-brand-volcano transition-colors">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-text-secondary hover:text-brand-volcano transition-colors">
                  AI Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Contact/Location */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-text-muted uppercase mb-4">Newsletter</h3>
            <p className="text-text-secondary text-xs leading-relaxed mb-4">
              Get insights on design, backend engineering, and artificial intelligence directly to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full pl-4 pr-3 py-2.5 rounded-xl border border-border-main bg-bg-main text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-volcano/50 focus:ring-1 focus:ring-brand-volcano/30 transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-volcanic-gradient text-white hover:brightness-110 shadow-volcanic hover:shadow-volcanic-lg transition-all duration-300"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} Mayon AI Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
