"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Floating tech icons */
const floatingIcons = [
  { icon: "⚛️", delay: 0, x: "10%", y: "20%" },
  { icon: "🐳", delay: 0.5, x: "80%", y: "15%" },
  { icon: "☁️", delay: 1, x: "15%", y: "70%" },
  { icon: "🚀", delay: 1.5, x: "85%", y: "65%" },
  { icon: "💻", delay: 2, x: "5%", y: "45%" },
  { icon: "🔧", delay: 2.5, x: "90%", y: "40%" },
];

/* Roles for typewriter */
const roles = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Site Reliability Engineer",
  "Researcher",
  "AWS Certified Cloud Practitioner",
  "Kubernetes Enthusiast",
  "Open Source Contributor",
];

/* ===== Typewriter Hook ===== */
function useTypewriter(
  words: string[],
  opts?: { typeSpeed?: number; deleteSpeed?: number; holdMs?: number }
) {
  const typeSpeed = opts?.typeSpeed ?? 55;
  const deleteSpeed = opts?.deleteSpeed ?? 28;
  const holdMs = opts?.holdMs ?? 900;

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index] ?? "";
    let timer: number;

    if (!isDeleting && text === currentWord) {
      timer = window.setTimeout(() => setIsDeleting(true), holdMs);
      return () => window.clearTimeout(timer);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    timer = window.setTimeout(() => {
      const next = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);
      setText(next);
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, index, words, typeSpeed, deleteSpeed, holdMs]);

  return text;
}

export const HeroSection = () => {
  const roleText = useTypewriter(roles);

  const placeholder = useMemo(
    () => roles.reduce((a, b) => (a.length > b.length ? a : b), ""),
    []
  );

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl md:text-4xl opacity-20"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* ===== PROFILE IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-pulse" />

              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
                <motion.img
                  src="/profileImage.jpg"
                  alt="Eranga Kavishanka"
                  initial={{ scale: 1.25 }}
                  animate={{ scale: 1.35 }}
                  whileHover={{ scale: 1.45 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute bottom-4 right-4 bg-card/90 backdrop-blur border border-border rounded-full px-4 py-2 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ===== CONTENT ===== */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
            >
              Hi, I'm <span className="gradient-text">Eranga Kavisanka</span>
            </motion.h1>

            {/* Role Typewriter */}
<motion.div
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="text-lg md:text-xl text-primary font-medium mb-4"
>
  <span className="relative inline-flex items-center leading-none h-[1.6em]">
    {/* keeps width stable */}
    <span className="invisible whitespace-nowrap">{placeholder}</span>

    {/* typed text sits on the same baseline */}
    <span className="absolute left-0 top-0 inline-flex items-center whitespace-nowrap leading-none">
      <span>{roleText}</span>
      <motion.span
        className="ml-1 inline-block leading-none"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  </span>
</motion.div>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-2xl mb-8"
            >
              A passionate Software Engineering undergraduate building scalable,
              secure, and impactful systems.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#projects")}
                className="gap-2"
              >
                View Projects <ExternalLink className="w-5 h-5" />
              </Button>

              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection("#contact")}
                className="gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </motion.div>

            {/* ✅ STATS SECTION (RESTORED) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-10"
            >
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">30+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Projects Completed
                </div>
              </div>

            

              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Tech Stacks
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#services")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
