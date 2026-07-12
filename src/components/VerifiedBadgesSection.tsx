"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, ExternalLink, X, Trophy } from "lucide-react";

interface Achievement {
  title: string;
  category: string;
  issuer: string;
  description: string;
  image: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: "Kubernetes and Cloud Native Associate (KCNA)",
    category: "Certification",
    issuer: "The Linux Foundation",
    description: "Industry-recognized certification validating Kubernetes fundamentals and cloud-native technologies.",
    image: "/badges/kcna.png",
    link: "https://www.credly.com/badges/a285a0c0-742d-4256-99ae-857b5707227a/public_url"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    category: "Certification",
    issuer: "Amazon Web Services",
    description: "Foundational certification covering AWS cloud concepts, security, networking, pricing, and architecture.",
    image: "/badges/aws.png",
    link: "https://www.credly.com/badges/71295d36-d1e2-4b4e-9f35-5055d0844ca5/public_url"
  },
  {
    title: "Aviatrix Certified Multicloud Network Associate",
    category: "Certification",
    issuer: "Aviatrix",
    description: "Certification demonstrating knowledge of multicloud networking and cloud connectivity.",
    image: "/badges/aviatrix.png",
    link: "https://www.credly.com/badges/31ee830f-590c-4adf-ac08-9859363396b1/linked_in_profile"
  },
  {
    title: "Technical Lead",
    category: "Leadership",
    issuer: "AWS Student Builder Group – USJ",
    description: "Leading cloud initiatives, technical sessions, and community activities while representing AWS on campus.",
    image: "/badges/aws-2.png",
    link: "https://www.credly.com/badges/382ebb3f-05d5-4018-9ae2-86900dfdafe9/public_url"
  },
  {
    title: "Published Research Paper",
    category: "Research",
    issuer: "Jayewardenepura Computing Symposium (JCoS 2026)",
    description: "Published undergraduate research",
    image: "/badges/research1.jpg",
    link: "https://www.linkedin.com/posts/eranga-kavisanka-7249592a8_research-publication-jcos2026-ugcPost-7463624864038359040-MnwV/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEouAcwBLFoJr-teZm0z89rST1LN-ILosYk"
  },
  {
    title: "WSO2 Open Source Contributor",
    category: "Open Source",
    issuer: "WSO2",
    description: "Successfully contributed to WSO2 open-source projects and collaborated with industry engineers.",
    image: "/badges/ws02.jpg",
    link: "https://github.com/wso2/docs-integrator/pull/187"
  },
  {
    title: "Industry Recommendation",
    category: "Recognition",
    issuer: "Shamika Shehan - DevOps & SRE Tech Lead",
    description: "Received a professional recommendation recognizing technical skills, collaboration, and engineering potential.",
    image: "/badges/rec1.jpg",
    link: "https://www.linkedin.com/posts/eranga-kavisanka-7249592a8_devops-sre-cloudcomputing-activity-7473752031078313984-KayN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEouAcwBLFoJr-teZm0z89rST1LN-ILosYk"
  },
  // {
  //   title: "Batch Top (Rank #1)",
  //   category: "Academic",
  //   issuer: "University of Sri Jayewardenepura",
  //   description: "Graduating as the highest-ranked Software Engineering undergraduate in the batch.",
  //   image: "/badges/rank1.png",
  // },
  {
    title: "Kubernetes Hidden Gems",
    category: "Community",
    issuer: "LinkedIn Newsletter",
    description: "Author of the Kubernetes Hidden Gems technical newsletter with 1,000+ subscribers sharing cloud-native and Kubernetes insights.",
    image: "/badges/khg.png",
    link: "Subscribe on LinkedIn https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7463101252302692352"
  },
  // {
  //   title: "3,000+ LinkedIn Followers",
  //   category: "Community",
  //   issuer: "LinkedIn",
  //   description: "Growing a professional network by consistently sharing DevOps, Kubernetes, Cloud, and Infrastructure content.",
  //   image: "/badges/linkedin.png",
  //   link: "LinkedIn Profile"
  // }
];

export const VerifiedBadgesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="achievements"
      className="relative py-24 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading Section */}
        <div className="relative text-center mb-16 flex flex-col items-center justify-center">
          {/* Subtle Trophy Icon behind heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <Trophy className="w-64 h-64 md:w-96 md:h-96" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Achievements
            </h2>
            <p className="text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
              A collection of certifications, research, leadership, community contributions, open-source work, and professional recognition that reflects my journey in DevOps, Cloud Native Engineering, and Site Reliability Engineering.
            </p>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="relative group flex flex-col rounded-2xl border border-border bg-card/40 backdrop-blur-md overflow-hidden shadow-xl hover:border-primary/40 hover:shadow-primary/20 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-black/20 p-6 flex items-center justify-center overflow-hidden">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-background/80 text-foreground backdrop-blur-md border border-border shadow-sm">
                    {item.category}
                  </span>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 relative z-10"
                />

                {/* Glow behind image on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 blur-2xl" />

                {/* Fullscreen Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedImage(item.image);
                  }}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/90 text-primary shadow-lg border border-border/50 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
                  aria-label="View Fullscreen"
                >
                  <Expand className="w-5 h-5" />
                </button>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1 relative z-20 bg-gradient-to-b from-transparent to-background/50">
                <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-primary/90 text-sm font-medium mb-4">
                  {item.issuer}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                {item.link && (
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Large Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage}
              alt="Achievement Preview"
              className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VerifiedBadgesSection;