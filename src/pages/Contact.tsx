import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Clock, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
};

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    { value: 'web', label: 'Web Development / Next.js' },
    { value: 'backend', label: 'Backend Development / API Systems' },
    { value: 'ai', label: 'AI Integration / LLM Pipeline' },
    { value: 'other', label: 'Consulting / Custom Integration' },
  ];

  const budgets = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 – $25,000' },
    { value: '25k-50k', label: '$25,000 – $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    }, 1500);
  };

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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
            Start a Project
          </h1>
          <p className="text-text-secondary text-base sm:text-lg font-light leading-relaxed">
            Ready to build? Send us your project details and we will reach out within 24 hours.
          </p>
          <div className="w-16 h-1 bg-brand-volcano mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Quick Info Cards (col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-text-primary tracking-tight">Direct Studio Contacts</h2>
              <p className="text-xs text-text-secondary leading-relaxed font-light">
                Feel free to email us directly or schedule a consultation. We are responsive across global timezones.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-xl border border-border-main/50 bg-bg-card">
                <div className="p-2.5 rounded-lg border border-border-main bg-bg-main text-brand-volcano shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">Email Inquiry</h4>
                  <a href="mailto:hello@mayon.ai" className="text-sm font-semibold text-text-secondary hover:text-brand-volcano transition-colors">
                    hello@mayon.ai
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl border border-border-main/50 bg-bg-card">
                <div className="p-2.5 rounded-lg border border-border-main bg-bg-main text-brand-volcano shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">Consultation Hours</h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    Mon – Fri, 9:00 AM – 6:00 PM EST
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl border border-border-main/50 bg-bg-card">
                <div className="p-2.5 rounded-lg border border-border-main bg-bg-main text-brand-volcano shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">Studio Headquarters</h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    New York City / Distributed Globally
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Card (col 7) */}
          <div className="lg:col-span-7">
            <Card className="border-border-main/60 bg-bg-card p-6 sm:p-10 shadow-volcanic relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    {/* Name */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="name" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                        Full Name <span className="text-brand-volcano">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-bg-main text-sm text-text-primary transition-all duration-200 focus:outline-none ${
                          errors.name
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                            : 'border-border-main focus:border-brand-volcano/50 focus:ring-1 focus:ring-brand-volcano/30'
                        }`}
                        placeholder="Sarah Jenkins"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs font-medium flex items-center gap-1.5 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="email" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                        Email Address <span className="text-brand-volcano">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-bg-main text-sm text-text-primary transition-all duration-200 focus:outline-none ${
                          errors.email
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                            : 'border-border-main focus:border-brand-volcano/50 focus:ring-1 focus:ring-brand-volcano/30'
                        }`}
                        placeholder="sarah@cloudoptima.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs font-medium flex items-center gap-1.5 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Dropdowns Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Project Type */}
                      <div className="space-y-2 text-left">
                        <label htmlFor="projectType" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Project Type <span className="text-brand-volcano">*</span>
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-bg-main text-sm text-text-primary transition-all duration-200 focus:outline-none ${
                            errors.projectType
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                              : 'border-border-main focus:border-brand-volcano/50 focus:ring-1 focus:ring-brand-volcano/30'
                          }`}
                        >
                          <option value="">Select an option</option>
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="text-red-500 text-xs font-medium flex items-center gap-1.5 pt-0.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.projectType}
                          </p>
                        )}
                      </div>

                      {/* Budget */}
                      <div className="space-y-2 text-left">
                        <label htmlFor="budget" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Est. Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-border-main bg-bg-main text-sm text-text-primary focus:outline-none focus:border-brand-volcano/50 focus:ring-1 focus:ring-brand-volcano/30 transition-all duration-200"
                        >
                          <option value="">Select budget size</option>
                          {budgets.map((b) => (
                            <option key={b.value} value={b.value}>
                              {b.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="message" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                        Project Details <span className="text-brand-volcano">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border bg-bg-main text-sm text-text-primary transition-all duration-200 focus:outline-none ${
                          errors.message
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                            : 'border-border-main focus:border-brand-volcano/50 focus:ring-1 focus:ring-brand-volcano/30'
                        }`}
                        placeholder="Tell us about the scope, objectives, and any technical timelines you have in mind..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs font-medium flex items-center gap-1.5 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full font-bold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending Request...' : 'Send Message'}
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    className="text-center py-10 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-text-primary">Request Received!</h3>
                      <p className="text-text-secondary text-sm leading-relaxed max-w-sm mx-auto font-light">
                        Thank you for reaching out. An engineering partner will review your project details and contact you via email shortly.
                      </p>
                    </div>
                    <div className="pt-4">
                      <Button variant="secondary" size="md" onClick={() => setIsSuccess(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
