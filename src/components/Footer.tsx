import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#blogs" },
    { name: "Resume", href: "#resume" },
    { name: "Skills", href: "#skills" },
  ],
};

const socialLinks = [
  { icon: Github, url: "https://github.com/erangaKavisanka", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/eranga-kavisanka-7249592a8/", label: "LinkedIn" },
  // { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {"<eranga />"}
            </motion.a>
            <p className="text-muted-foreground max-w-md mb-6">
              Building scalable, secure, and impactful digital solutions.
              Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Eranga Kavisanka. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Built by Eranga Kavisanka
          </p>
        </div>
      </div>
    </footer>
  );
};
