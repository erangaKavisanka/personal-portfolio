"use client";

import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

const certifications = [
"AWS Certified Cloud Practitioner",
"Aviatrix Certified Multicloud Associate",
"KCNA - Kubernetes and Cloud Native Associate",
"AWS Solutions Architect Associate (Preparing)",
];

const linuxBadges = [
{
title: "Linux",
image: "/badges/lfs101.png",
},
{
title: "Kubernetes",
image: "/badges/lfs158.png",
},
{
title: "DevOps & SRE",
image: "/badges/lfs162.png",
},
{
title: "GitOps",
image: "/badges/lfs169.png",
},
{
title: "Jenkins",
image: "/badges/lfs167.png",
},
{
title: "Istio",
image: "/badges/lfs144.png",
},
{
title: "Serverless",
image: "/badges/lfs157.png",
},
];

export default function LearningJourneySection() {
return ( <section
   id="journey"
   className="py-20 lg:py-32 relative overflow-hidden"
 >
{/* Background */} <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

```
  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
        Learning Journey
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">
          Cloud & DevOps Journey
        </span>
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        Certifications and Linux Foundation learning paths that support my
        growth in Cloud Computing, Kubernetes, and DevOps.
      </p>
    </motion.div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Certifications Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <Award className="w-6 h-6 text-primary-foreground" />
          </div>

          <h3 className="text-2xl font-bold">
            Certifications
          </h3>
        </div>

        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-primary/10 border border-primary/20"
            >
              {cert}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Linux Foundation Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent to-primary flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>

          <h3 className="text-2xl font-bold">
            Linux Foundation Training
          </h3>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {linuxBadges.map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center"
            >
              <img
                src={badge.image}
                alt={badge.title}
                className="w-16 h-16 object-contain"
              />

              <p className="text-xs text-center mt-2 text-muted-foreground">
                {badge.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>


);

}

