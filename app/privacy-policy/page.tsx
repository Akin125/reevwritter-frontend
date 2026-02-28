import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
const Privacy = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <div className="space-y-10 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p className="text-muted-foreground">
                Thesiora ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li><strong className="text-foreground/80">Personal Information:</strong> Name, email address, and account credentials when you sign up.</li>
                <li><strong className="text-foreground/80">Usage Data:</strong> Information about how you interact with our platform, including pages visited, features used, and session duration.</li>
                <li><strong className="text-foreground/80">Content Data:</strong> Documents, research materials, and other content you upload or create within Thesiora.</li>
                <li><strong className="text-foreground/80">Device Information:</strong> Browser type, operating system, and device identifiers.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>To provide, maintain, and improve our services.</li>
                <li>To personalize your experience and deliver relevant content.</li>
                <li>To communicate with you about updates, features, and support.</li>
                <li>To ensure the security and integrity of our platform.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Data Sharing & Disclosure</h2>
              <p className="text-muted-foreground">
                We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our platform, subject to confidentiality agreements. We may also disclose information when required by law.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your data, including encryption in transit and at rest. However, no method of electronic transmission or storage is 100% secure.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Access, correct, or delete your personal data.</li>
                <li>Withdraw consent for data processing.</li>
                <li>Request data portability.</li>
                <li>Object to certain processing activities.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your experience, analyze usage, and assist in our marketing efforts. You can manage cookie preferences through your browser settings.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised "Last updated" date.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@thesiora.com" className="text-primary hover:underline">
                  privacy@thesiora.com
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
export default Privacy;
