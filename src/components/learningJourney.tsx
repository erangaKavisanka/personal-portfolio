"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const certifications = [
"AWS Certified Cloud Practitioner",
"Aviatrix Certified Multicloud Associate",
"KCNA - Kubernetes and Cloud Native Associate (Ongoing)",
"AWS Solutions Architect Associate (Ongoing)",
];

const professionalTraining = [
{
title: "Decoding DevOps – From Basics to Advanced",
provider: "Imran Teli - Udemy",
},
{
title: "Advanced DevOps Course",
provider: "Developers Stack",
},
{
title: "Linux For Absolute Beginners",
provider: "KodeKloud",
},
{
title: "Full Stack Developer Course",
provider: "Skyrek",
},
];

const linuxBadges = [
{
title: "Linux",
code: "LFS101",
image: "/badges/lfs101.png",
},
{
title: "Kubernetes",
code: "LFS158",
image: "/badges/lfs158.png",
},
{
title: "DevOps & SRE",
code: "LFS162",
image: "/badges/lfs162.png",
},
{
title: "GitOps",
code: "LFS169",
image: "/badges/lfs169.png",
},
{
title: "Jenkins",
code: "LFS167",
image: "/badges/lfs167.png",
},
{
title: "DevSecOps",
code: "LFS180",
image: "/badges/lfs180.png",
},
{
title: "Istio",
code: "LFS144",
image: "/badges/lfs144.png",
},
{
title: "Serverless",
code: "LFS157",
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
        Certifications, professional training, and Linux Foundation learning
        paths supporting my growth in Cloud Computing, Kubernetes, and DevOps.
      </p>
    </motion.div>

    {/* Top Row */}
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
   {/* Certifications */}
{/* ======================= Certifications ======================= */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-5"
>
  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

  {/* Header */}
  <div className="relative flex items-center justify-between mb-5">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
        <Award className="w-5 h-5 text-white" />
      </div>

      <div>
        <h3 className="text-xl font-bold">
          Certifications
        </h3>

        <p className="text-xs text-muted-foreground">
          Industry Recognized Credentials
        </p>
      </div>
    </div>

    <div className="text-right">
      <h4 className="text-2xl font-bold gradient-text">
        {certifications.length}
      </h4>

      <p className="text-[11px] text-muted-foreground">
        Total
      </p>
    </div>
  </div>

  {/* Cards */}
  <div className="space-y-3">

    {certifications.map((cert, index) => {

      const preparing = cert.includes("Ongoing");

      return (
        <motion.div
          key={index}
          whileHover={{
            y: -2,
            scale: 1.01,
          }}
          transition={{ duration: 0.2 }}
          className={`relative overflow-hidden rounded-xl border transition-all duration-300
          ${
            preparing
              ? "border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-400/40"
              : "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-400/40"
          }`}
        >
          {/* Left Accent */}
          <div
            className={`absolute left-0 top-0 h-full w-1
            ${
              preparing
                ? "bg-yellow-400"
                : "bg-emerald-400"
            }`}
          />

          <div className="flex items-center justify-between px-4 py-3 pl-5">

            <div className="flex items-center gap-3">

              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center
                ${
                  preparing
                    ? "bg-yellow-500/10"
                    : "bg-emerald-500/10"
                }`}
              >
                <Award
                  className={`w-4 h-4
                  ${
                    preparing
                      ? "text-yellow-400"
                      : "text-emerald-400"
                  }`}
                />
              </div>

              <div>

                <h4 className="font-medium text-sm leading-snug">
                  {cert.replace(" (Ongoing)", "")}
                </h4>

                <p className="text-[11px] text-muted-foreground">

                  {cert.includes("AWS")
                    ? "Amazon Web Services"
                    : cert.includes("Aviatrix")
                    ? "Aviatrix"
                    : "Linux Foundation"}

                </p>

              </div>

            </div>

            <span
              className={`text-[10px] font-medium px-2.5 py-1 rounded-full
              ${
                preparing
                  ? "bg-yellow-500/10 text-yellow-300"
                  : "bg-emerald-500/10 text-emerald-300"
              }`}
            >
              {preparing ? "Ongoing" : "Verified"}
            </span>

          </div>

        </motion.div>
      );

    })}

  </div>



</motion.div>

      {/* Professional Training */}
 {/* ======================= Professional Training ======================= */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-5"
>
  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />

  {/* Header */}
  <div className="relative flex items-center justify-between mb-5">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent to-primary flex items-center justify-center">
        <GraduationCap className="w-5 h-5 text-white" />
      </div>

      <div>
        <h3 className="text-xl font-bold">
          Professional Training
        </h3>

        <p className="text-xs text-muted-foreground">
          Courses & Learning
        </p>
      </div>
    </div>

    <div className="text-right">
      <h4 className="text-2xl font-bold gradient-text">
        {professionalTraining.length}
      </h4>

      <p className="text-[11px] text-muted-foreground">
        Courses
      </p>
    </div>
  </div>

  {/* Timeline */}
  <div className="relative ml-2">

    {/* Timeline Line */}
    <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-40" />

    {professionalTraining.map((training, index) => (
      <motion.div
        key={index}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="relative flex gap-4 pb-5 last:pb-0"
      >
        {/* Timeline Dot */}
        <div className="relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-md">
          <GraduationCap className="w-3 h-3 text-white" />
        </div>

        {/* Course Card */}
        <div className="flex-1 rounded-xl border border-primary/15 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all p-3">

          <div className="flex items-center justify-between">

            <div>
              <h4 className="text-sm font-semibold leading-snug">
                {training.title}
              </h4>

              <p className="text-xs text-muted-foreground mt-1">
                {training.provider}
              </p>
            </div>

            <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300">
              Completed
            </span>

          </div>

        </div>
      </motion.div>
    ))}
  </div>

</motion.div>
    </div>

 {/* ======================= Linux Foundation ======================= */}
{/* ======================= Linux Foundation ======================= */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-5"
>
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

  {/* Header */}
  <div className="relative flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
        <BookOpen className="w-5 h-5 text-white" />
      </div>

      <div>
        <h3 className="text-xl font-bold">
          Linux Foundation Learning Path
        </h3>

        <p className="text-xs text-muted-foreground">
          Official Linux Foundation Courses & Badges
        </p>
      </div>
    </div>

    <div className="text-right">
      <h4 className="text-2xl font-bold gradient-text">
        {linuxBadges.length}
      </h4>

      <p className="text-[11px] text-muted-foreground">
        Badges
      </p>
    </div>
  </div>

  {/* Badge Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

    {linuxBadges.map((badge, index) => (

      <motion.div
        key={index}
        whileHover={{
          y: -6,
          scale: 1.05,
        }}
        transition={{ duration: 0.25 }}
        className="group rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15 transition-all p-4 flex flex-col items-center"
      >

        {/* Badge */}
        <img
          src={badge.image}
          alt={badge.title}
          className="w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        {/* Course Name */}
        <h4 className="mt-3 text-sm font-semibold text-center">
          {badge.title}
        </h4>

        {/* Course Code */}
        <span className="mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          {badge.code}
        </span>

      </motion.div>

    ))}

  </div>

 
</motion.div>
  </div>
</section>

);
}
