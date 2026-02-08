'use client';

import Link from 'next/link';
import { Header, Footer } from '../components';

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Header */}
      <Header currentPage="/privacy-policy" />

      {/* Main Content */}
      <main className="flex-1">
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-50/50 to-zinc-50 dark:via-black/50 dark:to-black"></div>
          </div>

          <div className="mx-auto max-w-5xl relative">
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Privacy Policy</h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg">Last Updated: January 31, 2026</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 sm:space-y-8 text-zinc-700 dark:text-zinc-300">
              {/* Introduction */}
              <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">1. Introduction</h2>
            <p className="mb-4 leading-relaxed">
              Welcome to Thesiora Writer (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our evidence-based academic report writing platform.
            </p>
            <p className="leading-relaxed">
              Thesiora Writer is an AI-powered research assistant that helps users create comprehensive, properly cited academic and professional reports. We assist writers without replacing them, keeping authors in control while simplifying research synthesis and document creation.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">2. Information We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">2.1 Personal Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Account Information:</strong> Name, email address, password (encrypted), profile photo</li>
                  <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</li>
                  <li><strong>Identity Verification:</strong> Information for email verification and optional two-factor authentication (2FA)</li>
                  <li><strong>OAuth Data:</strong> If you sign in with Google, we receive basic profile information (name, email, profile picture)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">2.2 Content and Project Data</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Research Briefs:</strong> Assignment briefs, project descriptions, and uploaded documents (DOCX, PDF)</li>
                  <li><strong>Generated Content:</strong> Plans, drafts, research outputs, citations, and final documents created through our platform</li>
                  <li><strong>Project Metadata:</strong> Titles, topics, word counts, citation styles, target audience preferences</li>
                  <li><strong>References:</strong> Primary and additional references, journal preferences, DOI information</li>
                  <li><strong>User Edits:</strong> Manual modifications to plans, sections, and content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">2.3 Usage and Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Usage Data:</strong> Features used, projects created, word counts generated, API calls, generation timestamps</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Log Data:</strong> Access times, pages viewed, errors encountered, performance metrics</li>
                  <li><strong>Cookies:</strong> Session cookies, preference cookies, authentication tokens</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">2.4 Communication Data</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Support tickets, help center inquiries, and feedback submissions</li>
                  <li>Team collaboration messages and comment threads on projects</li>
                  <li>Email correspondence with our support team</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">3. How We Use Your Information</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">3.1 Core Service Delivery</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Generate research plans using our AI-powered Planner Agent</li>
                  <li>Create comprehensive, cited academic content through our Writer Agent</li>
                  <li>Validate and proofread content for humanization, flow, and accuracy</li>
                  <li>Render documents in DOCX/PDF format with proper formatting and citations</li>
                  <li>Manage references, citations, and bibliographies</li>
                  <li>Process and fulfill your requests for content generation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">3.2 Account Management</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create and maintain your user account</li>
                  <li>Authenticate your identity and manage sessions</li>
                  <li>Process payments and manage subscriptions (Free, Pro, Enterprise tiers)</li>
                  <li>Track usage quotas (word counts, tokens) and reset cycles</li>
                  <li>Provide customer support and respond to inquiries</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">3.3 Platform Improvement</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Analyze usage patterns to improve AI model performance</li>
                  <li>Monitor system reliability and achieve 99.5% uptime targets</li>
                  <li>Optimize content generation speed and quality</li>
                  <li>Develop new features based on user needs</li>
                  <li>Conduct quality assurance and testing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">3.4 Communication</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Send transactional emails (account verification, password resets, receipts)</li>
                  <li>Notify you about project status updates and completion</li>
                  <li>Provide product updates, feature announcements (with opt-out option)</li>
                  <li>Send quota warnings and billing reminders</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">3.5 Security and Compliance</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Detect and prevent fraud, abuse, and security incidents</li>
                  <li>Enforce our Terms of Service and acceptable use policies</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Maintain audit logs for security purposes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI Processing */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">4. AI Processing and Data Usage</h2>
            <p className="mb-4 leading-relaxed">
              Our platform uses advanced AI models (currently Google Gemini 2.5 Flash) to generate research plans and content. Here&apos;s how your data is processed:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>AI Processing:</strong> Your briefs and project information are sent to third-party AI providers (Google) for processing. These providers have their own privacy policies.</li>
              <li><strong>No Training:</strong> We do not use your content to train AI models. Your projects remain confidential.</li>
              <li><strong>Human-in-the-Loop:</strong> You maintain control at every step - approve plans, edit content, and request changes.</li>
              <li><strong>Authorship Preservation:</strong> Generated content is clearly marked as AI-assisted. You remain the author.</li>
              <li><strong>Data Minimization:</strong> We only send necessary information to AI providers for content generation.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">5. How We Share Your Information</h2>

            <div className="space-y-4">
              <p className="leading-relaxed">We do not sell your personal information. We may share your data in the following circumstances:</p>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">5.1 Service Providers</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>AI/LLM Providers:</strong> Google (Gemini) for content generation</li>
                  <li><strong>Cloud Infrastructure:</strong> AWS for hosting, storage (S3), and databases</li>
                  <li><strong>Payment Processors:</strong> Stripe or similar for billing and subscriptions</li>
                  <li><strong>Email Services:</strong> For transactional and notification emails</li>
                  <li><strong>Analytics Providers:</strong> For usage analytics and performance monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">5.2 Team Collaboration</h3>
                <p className="ml-4 mb-2">When you share projects with team members, collaborators can access:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Project content based on their role (Owner, Editor, Reviewer)</li>
                  <li>Comments, edits, and revision history</li>
                  <li>Project metadata and settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">5.3 Legal Requirements</h3>
                <p className="ml-4">We may disclose information if required by law, court order, or to protect our rights, safety, or property.</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">5.4 Business Transfers</h3>
                <p className="ml-4">In the event of a merger, acquisition, or sale, your information may be transferred to the new entity.</p>
              </div>
            </div>
          </section>

          {/* Data Storage and Security */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">6. Data Storage and Security</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">6.1 Security Measures</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Encryption:</strong> TLS/SSL for data in transit, AES-256 for data at rest</li>
                  <li><strong>Authentication:</strong> JWT tokens, optional 2FA for premium tiers</li>
                  <li><strong>Access Control:</strong> Role-based access control (RBAC) for team projects</li>
                  <li><strong>Infrastructure:</strong> Secure AWS cloud infrastructure with regular security audits</li>
                  <li><strong>Password Security:</strong> Passwords are hashed using industry-standard algorithms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">6.2 Data Retention</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
                  <li><strong>Project Data:</strong> Stored in AWS S3; you can delete projects at any time</li>
                  <li><strong>Account Deletion:</strong> Upon request, we delete your data within 30 days</li>
                  <li><strong>Legal Compliance:</strong> Some data retained longer for legal/tax requirements</li>
                  <li><strong>Audit Logs:</strong> Security logs retained for up to 12 months</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">6.3 International Data Transfers</h3>
                <p className="ml-4">Your data may be stored and processed in servers located in different countries. We ensure appropriate safeguards are in place for international transfers.</p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">7. Your Privacy Rights</h2>

            <div className="space-y-4">
              <p className="leading-relaxed">Depending on your location, you may have the following rights:</p>

              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Data Portability:</strong> Export your projects and data in JSON/DOCX format</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Where processing is based on consent</li>
              </ul>

              <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-700">
                <p className="text-blue-300">To exercise your rights, email us at <strong>privacy@thesiorawriter.com</strong> or use the account settings page.</p>
              </div>
            </div>
          </section>

          {/* GDPR and CCPA Compliance */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">8. GDPR & CCPA Compliance</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">8.1 For EU/EEA Users (GDPR)</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We process data based on contract performance, legal obligations, or legitimate interests</li>
                  <li>You have the right to lodge a complaint with your data protection authority</li>
                  <li>We implement appropriate technical and organizational measures</li>
                  <li>Data processing agreements with all third-party processors</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">8.2 For California Users (CCPA/CPRA)</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We do not sell your personal information</li>
                  <li>You can request disclosure of collected data and deletion</li>
                  <li>No discrimination for exercising CCPA rights</li>
                  <li>Right to opt-out of data sharing (though we don&apos;t sell data)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">9. Cookies and Tracking Technologies</h2>

            <div className="space-y-4">
              <p className="leading-relaxed">We use cookies and similar technologies for:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Authentication, session management, security</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Analytics Cookies:</strong> Understand usage patterns and improve the platform</li>
                <li><strong>Performance Cookies:</strong> Monitor system performance and reliability</li>
              </ul>

              <p className="mt-4 leading-relaxed">
                You can control cookies through your browser settings. Note that disabling essential cookies may affect platform functionality.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">10. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              Our service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">11. Third-Party Links and Services</h2>
            <p className="leading-relaxed">
              Our platform may contain links to third-party websites or integrate with external services (e.g., OpenAlex for academic references, Google OAuth). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">12. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes by email or through a prominent notice on our platform. The &quot;Last Updated&quot; date at the top reflects the most recent revision. Continued use of our service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">13. Contact Us</h2>
            <p className="mb-4 leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 ml-4">
              <p><strong>Email:</strong> privacy@thesiorawriter.com</p>
              <p><strong>Support:</strong> support@thesiorawriter.com</p>
              <p><strong>Data Protection Officer:</strong> dpo@thesiorawriter.com</p>
              <p><strong>Mailing Address:</strong> Thesiora Writer, Privacy Department, [Your Address]</p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 text-center">
            <p className="text-zinc-700 dark:text-zinc-300 text-sm">
              By using Thesiora Writer, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
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


