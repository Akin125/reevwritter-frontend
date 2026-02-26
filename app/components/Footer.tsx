// Placeholder logo - replace with your actual logo
const thesioraLogo = "/assets/thesiora-logo.png";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center mb-8">
          {/* Logo */}
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
          
          <p className="text-muted-foreground text-sm max-w-md mb-6">
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

        {/* Bottom row */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Thesiora. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
