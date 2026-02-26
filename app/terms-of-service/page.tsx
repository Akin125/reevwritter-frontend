'use client';

import Link from 'next/link';
import { Header, Footer } from '../components';

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Headerold */}
      <Header currentPage="/terms-of-service" />

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-50/50 to-zinc-50 dark:via-black/50 dark:to-black"></div>
          </div>

          <div className="mx-auto max-w-5xl relative">
            {/* Headerold */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Terms of Service</h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg">Last Updated: January 31, 2026</p>
            </div>

        {/* Content Sections */}
        <div className="space-y-8 text-gray-300">
          {/* Introduction */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="mb-4 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of Thesiora Writer (&quot;Service&quot;, &quot;Platform&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), an AI-powered evidence-based academic and professional report writing platform. By accessing or using our Service, you agree to be bound by these Terms.
            </p>
            <p className="leading-relaxed">
              If you do not agree to these Terms, you may not access or use the Service. We reserve the right to modify these Terms at any time. Continued use after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Service Description */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">2. Service Description</h2>

            <div className="space-y-4">
              <p className="leading-relaxed">
                Thesiora Writer is an AI-powered research assistant platform that provides:
              </p>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">2.1 Core Features</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Planner Agent:</strong> Analyzes assignment briefs and generates structured research plans with subtopics, sections, and word targets</li>
                  <li><strong>Research & Writer Agent:</strong> Creates comprehensive, properly cited academic content using AI (currently Google Gemini 2.5 Flash)</li>
                  <li><strong>Reference Management:</strong> Validates and expands references, integrates with OpenAlex for DOI-based citations</li>
                  <li><strong>Proofreader Agent:</strong> Validates humanization, flow, readability, and citation accuracy</li>
                  <li><strong>Document Rendering:</strong> Converts validated JSON to DOCX/PDF with table of contents, proper formatting, and embedded tables/charts</li>
                  <li><strong>Citation Styles:</strong> Supports Harvard, APA, MLA, Chicago, and other academic styles</li>
                  <li><strong>Collaboration Tools:</strong> Team sharing with role-based permissions (Owner, Editor, Reviewer)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">2.2 Service Philosophy</h3>
                <p className="ml-4 leading-relaxed">
                  Thesiora Writer is designed to <strong>assist writers, not replace them</strong>. We preserve human authorship by keeping authors in control at every step. The platform accelerates research organization, synthesis, and formatting while you maintain full editorial authority and ownership of your work.
                </p>
              </div>
            </div>
          </section>

          {/* Eligibility and Account */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">3. Eligibility and Account Registration</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">3.1 Eligibility</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must be at least 13 years old to use the Service</li>
                  <li>Users under 18 must have parental/guardian consent</li>
                  <li>You must provide accurate, current, and complete information</li>
                  <li>You must be legally capable of entering into binding contracts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">3.2 Account Security</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You are responsible for maintaining the confidentiality of your password</li>
                  <li>You are responsible for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>We recommend enabling two-factor authentication (2FA) for enhanced security</li>
                  <li>Sharing accounts is prohibited; each user must have their own account</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">3.3 Account Types</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Individual Accounts:</strong> For personal academic or professional use</li>
                  <li><strong>Team/Enterprise Accounts:</strong> For organizations with multiple users</li>
                  <li>Each account type has specific quotas, features, and pricing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">4. User Responsibilities and Acceptable Use</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">4.1 Permitted Use</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create academic papers, research reports, and professional documents</li>
                  <li>Generate properly cited, evidence-based content</li>
                  <li>Collaborate with team members on shared projects</li>
                  <li>Export and use generated content for legitimate purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">4.2 Prohibited Activities</h3>
                <p className="ml-4 mb-2">You agree NOT to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the Service for any illegal purpose or violate any laws</li>
                  <li>Generate content that is plagiarized, fraudulent, or violates academic integrity policies</li>
                  <li>Create harmful, hateful, racist, sexist, or violent content</li>
                  <li>Infringe on intellectual property rights of others</li>
                  <li>Attempt to reverse engineer, decompile, or extract our AI models</li>
                  <li>Circumvent usage quotas, rate limits, or access controls</li>
                  <li>Use automated scripts or bots without authorization</li>
                  <li>Resell or redistribute our Service without permission</li>
                  <li>Upload malicious code, viruses, or harmful content</li>
                  <li>Impersonate others or misrepresent your affiliation</li>
                  <li>Spam, abuse, or harass other users or our support team</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">4.3 Academic Integrity</h3>
                <p className="ml-4 mb-2 leading-relaxed">
                  <strong>Important:</strong> While Thesiora Writer assists with research and writing, you are responsible for ensuring your use complies with your institution&apos;s academic integrity policies. The Service provides AI assistance, but:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must disclose AI assistance if required by your institution</li>
                  <li>You remain the author and are responsible for all content</li>
                  <li>You must verify all citations and references for accuracy</li>
                  <li>You should review and edit all AI-generated content</li>
                  <li>You must not submit AI-generated work as solely your own if prohibited</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">5. Intellectual Property Rights</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">5.1 Our Intellectual Property</h3>
                <p className="ml-4 mb-2 leading-relaxed">
                  Thesiora Writer, including all software, algorithms, prompts, UI/UX design, logos, and documentation, is owned by us and protected by intellectual property laws. You may not copy, modify, or create derivative works without permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">5.2 Your Content Ownership</h3>
                <p className="ml-4 mb-2 leading-relaxed">
                  <strong>You retain ownership</strong> of all content you create using Thesiora Writer, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Original assignment briefs and input materials</li>
                  <li>Generated research plans and outlines</li>
                  <li>AI-assisted written content and final documents</li>
                  <li>Edits, modifications, and customizations you make</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">5.3 License to Us</h3>
                <p className="ml-4 mb-2 leading-relaxed">
                  By using the Service, you grant us a limited license to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process your content through our systems and AI providers</li>
                  <li>Store your projects on our servers (AWS S3)</li>
                  <li>Display your content back to you and authorized collaborators</li>
                  <li>Use anonymized, aggregated data to improve the Service</li>
                </ul>
                <p className="ml-4 mt-2 leading-relaxed">
                  <strong>We do NOT use your specific content to train AI models or share it with third parties for their purposes.</strong>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">5.4 AI-Generated Content</h3>
                <p className="ml-4 leading-relaxed">
                  AI-generated content is provided &quot;as is.&quot; While we strive for accuracy, you are responsible for verifying, editing, and taking ownership of all outputs before use.
                </p>
              </div>
            </div>
          </section>

          {/* Subscription and Payment */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">6. Subscription Plans, Billing, and Quotas</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">6.1 Subscription Tiers</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Free Plan:</strong> Limited word count and features for trying the platform</li>
                  <li><strong>Pro Plan:</strong> Higher quotas, advanced features, priority support</li>
                  <li><strong>Enterprise Plan:</strong> Unlimited usage, custom features, dedicated support, team management</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">6.2 Quotas</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Each plan includes monthly word/token quotas</li>
                  <li>Quotas reset on your billing cycle date</li>
                  <li>Unused quotas do not roll over to the next month</li>
                  <li>Additional quotas can be purchased as top-ups</li>
                  <li>We will notify you when approaching quota limits</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">6.3 Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Subscriptions are billed monthly or annually in advance</li>
                  <li>Payment is due at the start of each billing period</li>
                  <li>We accept credit cards, debit cards, and other payment methods</li>
                  <li>All prices are in USD unless otherwise stated</li>
                  <li>Applicable taxes (VAT, GST) will be added to invoices</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">6.4 Cancellation and Refunds</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You may cancel your subscription at any time</li>
                  <li>Cancellation takes effect at the end of the current billing period</li>
                  <li>No refunds for partial months or unused quotas</li>
                  <li>Refunds may be granted at our discretion for service issues</li>
                  <li>Downgrading to a lower plan takes effect at next billing cycle</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">6.5 Price Changes</h3>
                <p className="ml-4 leading-relaxed">
                  We may change pricing with 30 days&apos; notice. Existing subscribers will be notified and can cancel before the new price takes effect.
                </p>
              </div>
            </div>
          </section>

          {/* Service Availability */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">7. Service Availability and Performance</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">7.1 Uptime Target</h3>
                <p className="ml-4 mb-2 leading-relaxed">
                  We strive for 99.5% uptime but do not guarantee uninterrupted service. The Service may be unavailable due to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Scheduled maintenance (with advance notice when possible)</li>
                  <li>Emergency security patches or updates</li>
                  <li>Third-party service outages (AI providers, cloud infrastructure)</li>
                  <li>Force majeure events beyond our control</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">7.2 Performance Expectations</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Planner generation: typically &lt; 20 seconds</li>
                  <li>Writer generation: typically &lt; 120 seconds (varies by length)</li>
                  <li>Proofreader validation: typically &lt; 30 seconds</li>
                  <li>Document rendering (DOCX): typically &lt; 10 seconds</li>
                </ul>
                <p className="ml-4 mt-2 leading-relaxed text-sm">
                  Note: Actual times may vary based on content complexity, queue length, and system load.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">7.3 Service Modifications</h3>
                <p className="ml-4 leading-relaxed">
                  We may modify, suspend, or discontinue any feature or aspect of the Service at any time with or without notice. We are not liable for any modification, suspension, or discontinuation.
                </p>
              </div>
            </div>
          </section>

          {/* Data and Privacy */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">8. Data Storage, Backup, and Privacy</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">8.1 Data Storage</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your projects are stored on AWS S3 cloud infrastructure</li>
                  <li>We use encryption at rest (AES-256) and in transit (TLS/SSL)</li>
                  <li>Database backups are performed regularly</li>
                  <li>You can export your data at any time in JSON/DOCX format</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">8.2 Data Retention and Deletion</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Active project data is retained while your account exists</li>
                  <li>You can delete individual projects at any time</li>
                  <li>Deleted projects are removed from our systems within 30 days</li>
                  <li>Account closure: all data deleted within 30 days of request</li>
                  <li>Some data retained longer for legal, tax, or security purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">8.3 Privacy</h3>
                <p className="ml-4 leading-relaxed">
                  Our collection and use of personal information is governed by our Privacy Policy. By using the Service, you consent to our privacy practices.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">9. Disclaimers and Warranties</h2>

            <div className="space-y-4">
              <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700">
                <p className="text-yellow-200 font-semibold mb-2">IMPORTANT DISCLAIMER:</p>
                <p className="text-yellow-100 leading-relaxed">
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
                </p>
              </div>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not guarantee that AI-generated content is accurate, complete, or error-free</li>
                <li>You are responsible for verifying all citations, references, and factual claims</li>
                <li>We do not guarantee that the Service meets your specific requirements</li>
                <li>We are not responsible for the quality or acceptance of your academic work</li>
                <li>We do not guarantee compliance with specific academic integrity policies</li>
                <li>Third-party AI providers (Google Gemini) have their own limitations and terms</li>
                <li>Reference databases (OpenAlex) may have incomplete or outdated information</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">10. Limitation of Liability</h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-900/20 rounded-lg border border-red-700">
                <p className="text-red-200 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, ARISING FROM:
                </p>
              </div>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use or inability to use the Service</li>
                <li>Unauthorized access to your account or data</li>
                <li>Errors, inaccuracies, or omissions in AI-generated content</li>
                <li>Academic penalties or consequences from using our Service</li>
                <li>Third-party actions or failures (AI providers, cloud services)</li>
                <li>Loss or corruption of project data</li>
                <li>Service interruptions, outages, or performance issues</li>
              </ul>

              <p className="mt-4 leading-relaxed">
                Our total liability for any claims arising from the Service shall not exceed the amount you paid us in the 12 months preceding the claim, or $100, whichever is greater.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">11. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify, defend, and hold harmless Thesiora Writer, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights, including intellectual property</li>
              <li>Your misuse of the Service</li>
              <li>Content you submit or generate through the Service</li>
              <li>Your violation of academic integrity policies</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">12. Termination</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">12.1 By You</h3>
                <p className="ml-4 leading-relaxed">
                  You may terminate your account at any time through account settings or by contacting support.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">12.2 By Us</h3>
                <p className="ml-4 mb-2 leading-relaxed">
                  We may suspend or terminate your account immediately if you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate these Terms or our Acceptable Use Policy</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Fail to pay required fees</li>
                  <li>Pose a security risk to our systems or other users</li>
                  <li>Abuse our support team or other users</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">12.3 Effect of Termination</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your access to the Service will be immediately revoked</li>
                  <li>You may export your data before termination</li>
                  <li>Data will be deleted within 30 days after termination</li>
                  <li>No refunds for prepaid unused periods (except as required by law)</li>
                  <li>Sections of these Terms that should survive (liability, IP) remain in effect</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">13. Dispute Resolution and Governing Law</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">13.1 Informal Resolution</h3>
                <p className="ml-4 leading-relaxed">
                  Before filing a legal claim, you agree to contact us at legal@thesiorawriter.com to attempt informal resolution of any dispute.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">13.2 Arbitration</h3>
                <p className="ml-4 leading-relaxed">
                  Any disputes not resolved informally shall be resolved through binding arbitration in accordance with [Arbitration Rules]. You waive your right to participate in class actions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">13.3 Governing Law</h3>
                <p className="ml-4 leading-relaxed">
                  These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
                </p>
              </div>
            </div>
          </section>

          {/* Miscellaneous */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">14. Miscellaneous</h2>

            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the Service.</li>
                <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect.</li>
                <li><strong>No Waiver:</strong> Failure to enforce any right does not waive that right.</li>
                <li><strong>Assignment:</strong> You may not assign these Terms; we may assign them without restriction.</li>
                <li><strong>Force Majeure:</strong> We are not liable for delays or failures due to events beyond our reasonable control.</li>
                <li><strong>Notices:</strong> Legal notices will be sent to your registered email address.</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">15. Contact Information</h2>
            <p className="mb-4 leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 ml-4">
              <p><strong>Email:</strong> legal@thesiorawriter.com</p>
              <p><strong>Support:</strong> support@thesiorawriter.com</p>
              <p><strong>Mailing Address:</strong> Thesiora Writer, Legal Department, [Your Address]</p>
            </div>
          </section>

          {/* Acceptance */}
          <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-800 text-center">
            <p className="text-blue-300">
              By clicking &quot;Sign Up&quot;, &quot;I Agree&quot;, or by using Thesiora Writer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
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

