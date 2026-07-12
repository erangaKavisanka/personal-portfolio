import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/erangaKavisanka", label: "GitHub" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/eranga-kavisanka-7249592a8/", label: "LinkedIn" },
  // { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
];

export const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4"
    >
      <span className="text-xs text-muted-foreground font-medium tracking-wider rotate-180 [writing-mode:vertical-rl]">
        Follow Me
      </span>
      <div className="w-[1px] h-8 bg-border" />
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          whileHover={{ scale: 1.2, x: 3 }}
          className="w-10 h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all shadow-lg"
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
      <div className="w-[1px] h-8 bg-border" />
    </motion.div>
  );
};
