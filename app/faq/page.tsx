'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '../components';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'What is Thesiora Writer?',
          answer: 'Thesiora Writer is an AI-powered research assistant that helps create comprehensive, properly cited academic and professional reports. Our platform uses a three-agent system: Planner (analyzes briefs and creates structured outlines), Writer (generates evidence-based content with citations), and Proofreader (validates humanization, flow, and accuracy). We assist writers without replacing them - you maintain full control and authorship throughout the process.'
        },
        {
          question: 'How does Thesiora Writer work?',
          answer: 'The workflow is simple: 1) Upload your assignment brief or create a project manually. 2) Our Planner Agent analyzes it and generates a structured research plan with subtopics and word targets. 3) You review and approve (or edit) the plan. 4) The Writer Agent creates comprehensive content with proper citations using AI (Google Gemini 2.5 Flash) and academic databases (OpenAlex). 5) The Proofreader Agent validates humanization, readability, and citation accuracy. 6) You download your document in DOCX or PDF format with full formatting, table of contents, and references.'
        },
        {
          question: 'Is Thesiora Writer free to use?',
          answer: 'We offer a Free plan with 5,000 words per month and 2 active projects - perfect for trying the platform. For regular use, our Pro plan ($29/month) includes 50,000 words, unlimited projects, and the Proofreader Agent. Enterprise plans ($199/month) offer unlimited usage and team collaboration. We also provide a 14-day Pro trial for new users.'
        },
        {
          question: 'Do I need technical skills to use Thesiora Writer?',
          answer: 'No technical skills required! Our interface is designed for students and professionals with no coding experience. Simply upload your brief, review the generated plan, and download your formatted document. Everything happens through an intuitive web interface.'
        },
        {
          question: 'What types of documents can I create?',
          answer: 'You can create academic research papers, literature reviews, business reports, case studies, white papers, professional reports, HR documents, consultant reports, and any evidence-based documents requiring proper citations. Our system supports multiple citation styles and adapts to different audiences and tones.'
        }
      ]
    },
    {
      category: 'Features & Capabilities',
      questions: [
        {
          question: 'What citation styles are supported?',
          answer: 'We support all major academic citation styles including APA (7th edition), Harvard, MLA, Chicago, IEEE, Vancouver, and more. Pro and Enterprise users have access to all styles. Free users can use APA and Harvard. Enterprise customers can request custom citation formats for their institutions.'
        },
        {
          question: 'How accurate are the citations?',
          answer: 'We integrate with OpenAlex, a comprehensive academic database, to validate and enrich references with DOI links, author information, and publication details. Our Proofreader Agent verifies that 90%+ of citations are traceable and less than 2% are orphaned. However, we always recommend manually verifying critical citations before submission.'
        },
        {
          question: 'Can I edit the generated content?',
          answer: 'Absolutely! Human-in-the-loop control is core to our philosophy. You can edit plans at any stage, modify generated content, request targeted regeneration of specific sections, add your own insights, and make any changes you need. You maintain full authorship and control.'
        },
        {
          question: 'What is the Proofreader Agent?',
          answer: 'The Proofreader Agent is our quality validation system that checks generated content for humanization (natural language flow), readability, paragraph structure, citation traceability, word count compliance, and overall coherence. It ensures content doesn\'t sound robotic and meets academic standards. Available on Pro and Enterprise plans.'
        },
        {
          question: 'Can I generate tables and charts?',
          answer: 'Yes! The Writer Agent can generate table specifications (data, columns, formatting) and chart specifications (type, data, labels) embedded in your document. These are rendered in the final DOCX output. Currently available on Pro and Enterprise plans.'
        },
        {
          question: 'How long does content generation take?',
          answer: 'Typical generation times: Planner (< 20 seconds), Writer (< 120 seconds depending on length), Proofreader (< 30 seconds), Document rendering (< 10 seconds). Total time from brief to finished document: 3-5 minutes for a 3,000-word paper. Pro users get priority processing for faster generation.'
        },
        {
          question: 'What AI model do you use?',
          answer: 'We currently use Google Gemini 2.5 Flash, chosen for its speed, accuracy, and cost-effectiveness. It handles long contexts (up to 6,000 words in a single prompt), maintains consistency, and produces high-quality academic content. We may add support for other models (GPT-4, Claude) in the future.'
        }
      ]
    },
    {
      category: 'Academic Integrity & Ethics',
      questions: [
        {
          question: 'Is using AI assistance considered cheating?',
          answer: 'This depends on your institution\'s policies. Thesiora Writer is designed as an assistive tool, not a replacement for human authorship. We recommend: 1) Check your institution\'s AI policy. 2) Disclose AI assistance if required. 3) Review and edit all generated content. 4) Verify all citations. 5) Add your own analysis and insights. The tool helps with research organization and synthesis, but YOU remain the author and are responsible for the final work.'
        },
        {
          question: 'How do I maintain academic integrity while using Thesiora Writer?',
          answer: 'Best practices: 1) Use the platform for research assistance and drafting, not as a final product. 2) Always review and fact-check generated content. 3) Add your own critical analysis and perspectives. 4) Verify all citations independently. 5) Disclose AI assistance in your acknowledgments if required. 6) Ensure the final work reflects your understanding and voice. 7) Follow your institution\'s guidelines on AI tools.'
        },
        {
          question: 'Does Thesiora Writer detect plagiarism?',
          answer: 'While we don\'t have built-in plagiarism detection, our Writer Agent generates original content based on synthesis of multiple sources rather than copying. We cite all sources properly. We recommend running your final document through institutional plagiarism checkers (Turnitin, etc.) as you would with any academic work.'
        },
        {
          question: 'Who owns the content I create?',
          answer: 'YOU own all content created using Thesiora Writer. We do not claim any rights to your projects, briefs, or generated documents. We do not use your specific content to train AI models or share it with third parties. You can export, publish, or use your content however you wish.'
        },
        {
          question: 'Will my professor know I used AI?',
          answer: 'Our Proofreader Agent specifically checks for humanization to ensure content doesn\'t sound robotic or formulaic. However, AI detection tools are evolving and sometimes produce false positives. We recommend: 1) Being transparent about using research assistance tools. 2) Adding your own voice and analysis. 3) Editing generated content to match your writing style. 4) Following your institution\'s disclosure policies.'
        }
      ]
    },
    {
      category: 'Usage & Quotas',
      questions: [
        {
          question: 'What counts toward my word quota?',
          answer: 'Only final generated content counts toward your monthly quota. This includes the content in sections and subsections. Planning outputs, reference lists, proofreading notes, and metadata do NOT count. If you regenerate a section, only the new content counts (not the old version).'
        },
        {
          question: 'What happens if I exceed my word limit?',
          answer: 'You\'ll receive notifications at 80% and 95% of your quota. If you exceed your limit, you can: 1) Purchase one-time word add-ons ($10 per 10,000 words). 2) Upgrade to a higher plan immediately (Pro or Enterprise). 3) Wait until your quota resets next month. We won\'t interrupt projects in progress.'
        },
        {
          question: 'Do unused words roll over to next month?',
          answer: 'No, word quotas reset monthly on your billing date. Unused words do not carry over. However, Enterprise plans include unlimited words, so there\'s no quota concern.'
        },
        {
          question: 'Can I generate longer documents on the Free plan?',
          answer: 'Free plan users get 5,000 words per month, which is suitable for 1-2 medium-length papers. For longer documents (10,000+ words), we recommend Pro (50,000 words/month) or Enterprise (unlimited). You can also break large projects into smaller sections across multiple months.'
        },
        {
          question: 'How many projects can I have active at once?',
          answer: 'Free: 2 active projects. Pro and Enterprise: Unlimited active projects. You can archive completed projects to make room on the Free plan.'
        }
      ]
    },
    {
      category: 'Collaboration & Teams',
      questions: [
        {
          question: 'Can I collaborate with team members?',
          answer: 'Yes, on Enterprise plans! You can invite team members, assign roles (Owner, Editor, Reviewer), share projects, leave comment threads on sections, and manage permissions. Team collaboration includes shared workspaces, revision history, and audit logs.'
        },
        {
          question: 'What are the different user roles?',
          answer: 'Owner: Full control - can edit, delete, manage permissions, and invite members. Editor: Can edit plans, content, and settings but cannot delete projects or manage permissions. Reviewer: Read-only access with the ability to leave comments and feedback. Useful for supervisors or peer review.'
        },
        {
          question: 'How do I add team members?',
          answer: 'Enterprise users can invite team members via email from the project settings. Each additional user costs $15/month beyond the base Enterprise plan. Invited users receive an email with access instructions and can log in with their own credentials.'
        }
      ]
    },
    {
      category: 'Technical & Security',
      questions: [
        {
          question: 'How secure is my data?',
          answer: 'We take security seriously: 1) TLS/SSL encryption for all data in transit. 2) AES-256 encryption for data at rest. 3) JWT authentication with optional 2FA (Pro/Enterprise). 4) Role-based access control (RBAC). 5) Regular security audits. 6) AWS cloud infrastructure with 99.5% uptime SLA. 7) GDPR and CCPA compliant data handling.'
        },
        {
          question: 'Where is my data stored?',
          answer: 'Your projects are stored on AWS S3 cloud storage with encryption. Databases (project metadata, user accounts) are hosted on AWS with regular backups. We use geographically distributed servers for reliability. Enterprise customers can request data residency in specific regions.'
        },
        {
          question: 'Can I export my data?',
          answer: 'Yes! You can export: 1) Individual projects as DOCX/PDF. 2) Project JSON for technical integrations. 3) All your data via account settings (includes all projects, plans, and metadata). 4) Reference lists in BibTeX format. Enterprise customers get API access for programmatic exports.'
        },
        {
          question: 'Do you use my data to train AI models?',
          answer: 'NO. We do not use your specific content to train AI models. Your projects and research remain confidential. We may use anonymized, aggregated analytics (e.g., "average document length") to improve the platform, but never specific content or identifiable information.'
        },
        {
          question: 'What happens if I delete my account?',
          answer: 'When you delete your account: 1) All projects and data are permanently removed within 30 days. 2) You can export your data before deletion. 3) Billing is canceled (no further charges). 4) Some data may be retained for legal/tax purposes (invoices, audit logs) as required by law. 5) The deletion is irreversible.'
        },
        {
          question: 'Is there an API available?',
          answer: 'Yes, for Enterprise customers! Our API allows: 1) Programmatic project creation. 2) Automated content generation. 3) Webhook integrations for workflow automation. 4) Batch processing. 5) Custom integrations with your existing systems. Contact sales for API documentation and access keys.'
        }
      ]
    },
    {
      category: 'Billing & Payments',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, Amex, Discover), debit cards, and PayPal. Enterprise customers can request invoicing with payment via bank transfer or purchase order. All payments are processed securely through industry-standard payment processors.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Yes! You can cancel anytime from your account settings. Cancellation takes effect at the end of your current billing period - you retain access until then. No penalties or cancellation fees. If you cancel mid-cycle, you won\'t be charged for the next period.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied within 30 days of your first payment, contact us for a full refund. After 30 days, we do not provide refunds for partial months or unused quotas, but you can cancel to avoid future charges.'
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes! You can upgrade anytime - changes take effect immediately and we\'ll prorate the difference. Downgrades take effect at your next billing cycle. If downgrading, ensure your usage fits within the new plan\'s limits (e.g., Free plan allows only 2 active projects).'
        },
        {
          question: 'Are there educational discounts?',
          answer: 'Yes! Students with a valid .edu email address receive 20% off Pro plans. Universities and educational institutions can contact us for volume licensing and institutional rates. Non-profit organizations may also qualify for discounts.'
        },
        {
          question: 'What happens if my payment fails?',
          answer: 'If payment fails, we\'ll: 1) Send an email notification. 2) Retry payment after 3 days. 3) If still unsuccessful, downgrade to Free plan after 7 days. 4) Projects remain accessible, but features are limited to Free tier. Update your payment method to restore access.'
        }
      ]
    },
    {
      category: 'Support & Troubleshooting',
      questions: [
        {
          question: 'How do I get support?',
          answer: 'Support options: 1) Email: support@thesiorawriter.com (48-hour response for Free, 24-hour for Pro, priority for Enterprise). 2) Live Chat: Mon-Fri 9AM-6PM EST (Pro/Enterprise). 3) Help Center: Browse FAQs, guides, and tutorials. 4) Contact Form: Submit detailed inquiries. Enterprise customers get dedicated account managers and 24/7 support.'
        },
        {
          question: 'What if the generated content is inaccurate?',
          answer: 'AI is powerful but not perfect. If you notice inaccuracies: 1) Use the editing tools to correct content. 2) Request regeneration with more specific prompts. 3) Provide feedback to our support team. 4) Verify all factual claims and citations independently. We continuously improve our models based on feedback, but YOU are responsible for final accuracy.'
        },
        {
          question: 'The system is slow - what can I do?',
          answer: 'If experiencing slow performance: 1) Check our status page for outages. 2) Try during off-peak hours. 3) Upgrade to Pro for priority processing. 4) Break large documents into smaller sections. 5) Contact support if issues persist. We target 99.5% uptime and typical processing times are < 2 minutes.'
        },
        {
          question: 'Can I request new features?',
          answer: 'Absolutely! We love feedback. Submit feature requests via: 1) Feature request form in Help Center. 2) Email feedback@thesiorawriter.com. 3) Contact form with category "Feature Request". Enterprise customers can request custom features as part of their plan. We prioritize features based on user demand.'
        },
        {
          question: 'What if I find a bug?',
          answer: 'Report bugs via: 1) Bug report form (include steps to reproduce). 2) Email support@thesiorawriter.com with subject "Bug Report". 3) Live chat for urgent issues. Include: your plan type, browser/device, screenshots, and detailed description. We address critical bugs within 24 hours.'
        }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      {/* Header */}
      <Header currentPage="/faq" />

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4d4d420_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d420_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#27272a20_1px,transparent_1px),linear-gradient(to_bottom,#27272a20_1px,transparent_1px)]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-black/50 dark:to-black"></div>
          </div>

          <div className="mx-auto max-w-5xl relative">
            {/* Header */}
            <div className="mb-12 sm:mb-16 text-center">
              <div className="text-6xl mb-6">❓</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">Frequently Asked Questions</h1>
              <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg max-w-3xl mx-auto">
                Everything you need to know about Thesiora Writer - from getting started to advanced features. Can&apos;t find your answer? <Link href="/contact" className="text-black dark:text-white font-bold underline hover:no-underline">Contact us</Link>.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-10 sm:mb-12">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full px-6 py-4 bg-white dark:bg-zinc-950 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors pl-12 font-medium"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500 dark:text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8 sm:space-y-10">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white dark:bg-zinc-950 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl">
                  <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6 pb-4 border-b-2 border-zinc-200 dark:border-zinc-800">{category.category}</h2>
                  <div className="space-y-3">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex;
                      const isOpen = openIndex === globalIndex;

                      return (
                        <div key={questionIndex} className="border-2 border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-black dark:hover:border-white transition-all">
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                          >
                            <span className="text-base sm:text-lg font-bold text-black dark:text-white pr-8">{faq.question}</span>
                            <svg
                              className={`w-6 h-6 text-black dark:text-white flex-shrink-0 transition-transform duration-200 ${
                                isOpen ? 'transform rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900 border-t-2 border-zinc-200 dark:border-zinc-800">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Need Help */}
            <div className="mt-12 sm:mt-16 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border-2 border-zinc-200 dark:border-zinc-800 text-center shadow-xl">
              <div className="text-5xl mb-6">💬</div>
              <h2 className="text-2xl sm:text-4xl font-bold text-black dark:text-white mb-4">Still Have Questions?</h2>
              <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Get in touch and we&apos;ll respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg"
                >
                  Contact Support
                </Link>
                <Link
                  href="/user-guide"
                  className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-bold rounded-xl transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 border-2 border-black dark:border-white"
                >
                  View User Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer variant="minimal" />
    </div>
  );
}

