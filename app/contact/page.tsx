'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '../components';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Headerold */}
      <Header currentPage="/contact" />

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 lg:py-20 overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-50/50 to-zinc-50 dark:via-black/50 dark:to-black"></div>
          </div>

          <div className="mx-auto max-w-6xl relative">
            {/* Headerold */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Contact Us</h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Have questions? Need support? Want to share feedback? We&apos;re here to help and would love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
                    <p className="text-green-800 dark:text-green-300">✓ Message sent successfully! We&apos;ll get back to you within 24 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-zinc-700 dark:text-zinc-300 mb-2 font-medium text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-300 mb-2 font-medium text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-zinc-700 dark:text-zinc-300 mb-2 font-medium text-sm">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing & Subscriptions</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="enterprise">Enterprise Sales</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-zinc-700 dark:text-zinc-300 mb-2 font-medium text-sm">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-zinc-700 dark:text-zinc-300 mb-2 font-medium text-sm">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold rounded-full transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 lg:space-y-8">
                {/* Direct Contact */}
                <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Email Support</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-2 text-sm">We typically respond within 24 hours</p>
                        <a href="mailto:support@thesiorawriter.com" className="text-zinc-900 dark:text-zinc-50 hover:underline font-medium text-sm">
                          support@thesiorawriter.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Live Chat</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-2 text-sm">Available Mon-Fri, 9AM-6PM EST</p>
                        <button className="text-zinc-900 dark:text-zinc-50 hover:underline font-medium text-sm">
                          Start Chat →
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Help Center</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-2 text-sm">Browse FAQs and documentation</p>
                        <Link href="/user-guide" className="text-zinc-900 dark:text-zinc-50 hover:underline font-medium text-sm">
                          Visit Help Center →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Department Contact */}
                <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Department Contacts</h2>

                  <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Sales & Enterprise</h3>
                      <a href="mailto:sales@thesiorawriter.com" className="text-zinc-700 dark:text-zinc-300 hover:underline text-sm">
                        sales@thesiorawriter.com
                      </a>
                    </div>

                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Billing & Subscriptions</h3>
                      <a href="mailto:billing@thesiorawriter.com" className="text-zinc-700 dark:text-zinc-300 hover:underline text-sm">
                        billing@thesiorawriter.com
                      </a>
                    </div>

                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Privacy & Data Protection</h3>
                      <a href="mailto:privacy@thesiorawriter.com" className="text-zinc-700 dark:text-zinc-300 hover:underline text-sm">
                        privacy@thesiorawriter.com
                      </a>
                    </div>

                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Legal & Compliance</h3>
                      <a href="mailto:legal@thesiorawriter.com" className="text-zinc-700 dark:text-zinc-300 hover:underline text-sm">
                        legal@thesiorawriter.com
                      </a>
                    </div>

                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Partnerships</h3>
                      <a href="mailto:partnerships@thesiorawriter.com" className="text-zinc-700 dark:text-zinc-300 hover:underline text-sm">
                        partnerships@thesiorawriter.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Support Hours</h2>

                  <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Monday - Friday</span>
                      <span className="text-zinc-900 dark:text-zinc-50 font-semibold text-sm">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Saturday</span>
                      <span className="text-zinc-900 dark:text-zinc-50 font-semibold text-sm">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sunday</span>
                      <span className="text-zinc-500 dark:text-zinc-600 text-sm">Closed</span>
                    </div>
                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        Emergency support available 24/7 for Enterprise customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footerold */}
      <Footer variant="minimal" />
    </div>
  );
}

