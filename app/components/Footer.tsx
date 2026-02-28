// Placeholder logo - replace with your actual logo
const thesioraLogo = "/assets/thesiora-logo.png";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={thesioraLogo}
                alt="Thesiora"
                className="h-8 w-8 brightness-0 invert"
              />
              <span className="font-display font-bold text-xl text-foreground">
                Thesiora
              </span>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Smart, evidence-based report writing. You stay the author.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {[Twitter, Linkedin, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/user-guide" className="text-muted-foreground hover:text-foreground transition-colors">
                User Guide
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Acceptable Use
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Thesiora. All rights reserved.</p>
          <p>Made for researchers and writers worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
