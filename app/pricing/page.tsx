'use client';

import { useState } from 'react';
import { Header, Footer } from '../components';

interface Plan {
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  limitations: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans: Plan[] = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for trying out Thesiora Writer',
      features: [
        '5,000 words per month',
        '2 active projects',
        'Basic citation styles (APA, Harvard)',
        'Planner Agent access',
        'Writer Agent (standard speed)',
        'DOCX export',
        'Community support',
        'Email support (48-hour response)',
        'Academic integrity guidelines',
      ],
      limitations: [
        'No proofreader agent',
        'No team collaboration',
        'Standard processing speed',
        'Watermarked outputs',
      ],
      cta: 'Get Started Free',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: { monthly: 29, annual: 290 },
      description: 'For students and professionals who write regularly',
      features: [
        '50,000 words per month',
        'Unlimited active projects',
        'All citation styles (APA, Harvard, MLA, Chicago, IEEE, etc.)',
        'Planner Agent with advanced prompts',
        'Writer Agent (priority speed)',
        'Proofreader Agent included',
        'Advanced reference management',
        'OpenAlex integration for DOI citations',
        'DOCX & PDF export',
        'Table & chart generation',
        'Custom tone & audience settings',
        'Revision history',
        'Priority email support (24-hour response)',
        'No watermarks',
        '2FA security',
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: { monthly: 199, annual: 1990 },
      description: 'For teams, universities, and organizations',
      features: [
        'Unlimited words per month',
        'Unlimited projects',
        'All Pro features included',
        'Team collaboration with role-based access',
        'Owner, Editor, Reviewer roles',
        'Comment threads and feedback',
        'Shared project workspace',
        'Custom AI model configurations',
        'API access for integrations',
        'Webhooks and automation',
        'Batch processing',
        'Custom citation styles',
        'White-label options (available)',
        'SSO / SAML authentication',
        'Advanced security & compliance',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom SLA agreements',
        'Training & onboarding sessions',
        'Usage analytics & reporting',
      ],
      limitations: [],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const addOns = [
    {
      name: 'Extra Words',
      price: '$10 per 10,000 words',
      description: 'One-time purchase when you exceed your monthly quota',
    },
    {
      name: 'Additional Team Member',
      price: '$15/month per user',
      description: 'Add more users to your Enterprise plan',
    },
    {
      name: 'Priority Processing',
      price: '$20/month',
      description: 'Jump the queue - 2x faster content generation',
    },
    {
      name: 'Custom Citation Style',
      price: '$100 one-time',
      description: 'We create a custom citation format for your institution',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Headerold */}
      <Header currentPage="/pricing" />

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-50/50 to-zinc-50 dark:via-black/50 dark:to-black"></div>
          </div>

          <div className="mx-auto max-w-7xl relative">
            {/* Headerold */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Choose Your Plan</h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-8">
            Transparent pricing for AI-powered academic writing assistance. All plans include human-in-the-loop controls and authorship preservation.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg p-1 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'annual'
                  ? 'bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-green-500 dark:text-green-400">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border ${
                plan.highlighted
                  ? 'border-zinc-900 dark:border-zinc-50 shadow-lg shadow-zinc-900/20 dark:shadow-zinc-50/20'
                  : 'border-zinc-200 dark:border-zinc-800'
              } shadow-lg`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">{plan.name}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">
                    ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.annual / 12)}
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400 ml-2">/month</span>
                </div>
                {billingCycle === 'annual' && plan.price.annual > 0 && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    ${plan.price.annual} billed annually
                  </p>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition-colors ${
                  plan.highlighted
                    ? 'bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-900'
                    : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-50'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-zinc-700 dark:text-zinc-300 text-sm">
                        <svg
                          className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <h4 className="font-semibold text-zinc-600 dark:text-zinc-400 mb-3 text-sm">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start text-zinc-500 dark:text-zinc-500 text-sm">
                          <svg
                            className="w-5 h-5 text-zinc-400 dark:text-zinc-600 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-center">Add-ons & Extensions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-zinc-100/80 dark:bg-zinc-800/80 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50">{addon.name}</h3>
                  <span className="text-zinc-900 dark:text-zinc-50 font-semibold">{addon.price}</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-4 px-4 text-zinc-700 dark:text-zinc-300">Feature</th>
                  <th className="py-4 px-4 text-center text-zinc-900 dark:text-zinc-50">Free</th>
                  <th className="py-4 px-4 text-center text-zinc-900 dark:text-zinc-50">Pro</th>
                  <th className="py-4 px-4 text-center text-zinc-900 dark:text-zinc-50">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-4 px-4">Monthly Word Quota</td>
                  <td className="py-4 px-4 text-center">5,000</td>
                  <td className="py-4 px-4 text-center">50,000</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-4 px-4">Active Projects</td>
                  <td className="py-4 px-4 text-center">2</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-4 px-4">Planner Agent</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-4 px-4">Writer Agent</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓ Priority</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓ Ultra Priority</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-4 px-4">Proofreader Agent</td>
                  <td className="py-4 px-4 text-center text-red-500 dark:text-red-400">✗</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-4 px-4">Citation Styles</td>
                  <td className="py-4 px-4 text-center">2 (APA, Harvard)</td>
                  <td className="py-4 px-4 text-center">All Standard</td>
                  <td className="py-4 px-4 text-center">All + Custom</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-4 px-4">Team Collaboration</td>
                  <td className="py-4 px-4 text-center text-red-500 dark:text-red-400">✗</td>
                  <td className="py-4 px-4 text-center text-red-500 dark:text-red-400">✗</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-4 px-4">API Access</td>
                  <td className="py-4 px-4 text-center text-red-500 dark:text-red-400">✗</td>
                  <td className="py-4 px-4 text-center text-red-500 dark:text-red-400">✗</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-4 px-4">Support Response Time</td>
                  <td className="py-4 px-4 text-center">48 hours</td>
                  <td className="py-4 px-4 text-center">24 hours</td>
                  <td className="py-4 px-4 text-center">24/7 Priority</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Dedicated Account Manager</td>
                  <td className="py-4 px-4 text-center text-red-500 dark:text-red-400">✗</td>
                  <td className="py-4 px-4 text-center text-red-500 dark:text-red-400">✗</td>
                  <td className="py-4 px-4 text-center text-green-500 dark:text-green-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">Pricing FAQ</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">What counts toward my word quota?</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Only the final generated content counts. Planning, references, and proofreading don&apos;t consume your quota. If you regenerate a section, only the new content counts.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Can I upgrade or downgrade anytime?</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Yes! Changes take effect at your next billing cycle. If you upgrade mid-cycle, we&apos;ll prorate the difference immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">What happens if I exceed my quota?</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                You&apos;ll be notified when approaching your limit. You can purchase one-time word add-ons or upgrade your plan. We won&apos;t interrupt ongoing projects.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Do unused words roll over?</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                No, quotas reset monthly on your billing date. However, Enterprise plans include unlimited words.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Is there a free trial for Pro?</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Yes! New users get a 14-day Pro trial with full access to all features including the Proofreader Agent.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">What payment methods do you accept?</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                We accept all major credit cards, debit cards, and PayPal. Enterprise customers can request invoicing and bank transfers.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Are there educational discounts?</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Yes! Students with a valid .edu email get 20% off Pro plans. Universities can contact us for institutional licensing.
              </p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 mb-6">
              Not satisfied? Get a full refund within 30 days, no questions asked. We&apos;re confident you&apos;ll love Thesiora Writer.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center text-green-600 dark:text-green-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No Risk
              </div>
              <div className="flex items-center text-green-600 dark:text-green-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cancel Anytime
              </div>
              <div className="flex items-center text-green-600 dark:text-green-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Full Refund
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Join thousands of students and professionals using AI-powered research assistance
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/register"
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold rounded-lg transition-colors duration-200"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-200 dark:hover:bg-zinc-300 text-white dark:text-zinc-900 font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Sales
            </a>
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

