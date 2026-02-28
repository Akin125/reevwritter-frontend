import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          <div className="space-y-10 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Thesiora ("we", "our", or "us"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Service Description</h2>
              <p className="text-muted-foreground mb-3">Thesiora provides an AI-powered research and writing platform that includes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Automated research planning and content generation</li>
                <li>Citation management and reference validation</li>
                <li>Document creation and export capabilities</li>
                <li>Collaboration tools for team projects</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
              <p className="text-muted-foreground mb-3">To use our services, you must:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Be at least 18 years old or have parental consent</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Acceptable Use</h2>
              <p className="text-muted-foreground mb-3">You agree not to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Infringe on intellectual property rights</li>
                <li>Upload malicious code or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Misrepresent AI-generated content as entirely your own work</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                You retain ownership of content you create using our platform. We retain ownership of the platform, software, and underlying technology. By using our service, you grant us a license to process your content to provide our services.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Payment Terms</h2>
              <p className="text-muted-foreground mb-3">For paid subscriptions:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Fees are charged in advance on a recurring basis</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We may change pricing with 30 days notice</li>
                <li>Failed payments may result in service suspension</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Service Availability</h2>
              <p className="text-muted-foreground">
                We strive to maintain high availability but do not guarantee uninterrupted access. We may modify, suspend, or discontinue any part of the service with notice.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Thesiora shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate your account for violations of these terms. You may cancel your account at any time through your account settings.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms of Service from time to time. We will notify you of any material changes by email or through the platform. Continued use constitutes acceptance of the updated terms.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">11. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the jurisdiction in which Thesiora operates, without regard to conflict of law principles.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">12. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@thesiora.com" className="text-primary hover:underline">
                  legal@thesiora.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default TermsOfService;