import Link from 'next/link';

interface FooterProps {
  variant?: 'default' | 'minimal';
}

export default function Footerold({ variant = 'default' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === 'minimal') {
    return (
      <footer className="border-t border-zinc-200 bg-white/50 px-6 py-8 dark:border-zinc-800 dark:bg-zinc-950/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              © {currentYear} Thesiora Writer. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/privacy-policy"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-zinc-200 bg-white px-6 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Thesiora Writer
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mb-4">
              AI-Powered Evidence-Based Research Writing Platform. Transform assignment briefs into published-grade
              academic papers using intelligent multi-agent workflows. Built with Gemini 2.5 Flash and modern web technologies.
            </p>
            <div className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <span>🔒 GDPR Compliant</span>
              <span>✓ 99.5% Uptime</span>
              <span>🌍 Global Access</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Platform</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/#features"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/#agents"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                AI Agents
              </Link>
              <Link
                href="/#how-it-works"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/#use-cases"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Use Cases
              </Link>
              <Link
                href="/dashboard"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Resources</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/user-guide"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                User Guide
              </Link>
              <Link
                href="/faq"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/privacy-policy"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {currentYear} Thesiora Writer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

