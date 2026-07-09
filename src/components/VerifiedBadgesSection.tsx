"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Expand, X } from "lucide-react";

const badges = [
  {
    title: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "The Linux Foundation",
    image: "/badges/kcna.png",
    link: "YOUR_KCNA_CREDLY_LINK",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "/badges/aws.png",
    link: "https://www.credly.com/badges/71295d36-d1e2-4b4e-9f35-5055d0844ca5/public_url",
  },
  {
    title: "Aviatrix Certified Multicloud Network Associate",
    issuer: "Aviatrix",
    image: "/badges/aviatrix.png",
    link: "https://www.credly.com/badges/31ee830f-590c-4adf-ac08-9859363396b1/public_url",
  },
  {
    title: "Technical Lead - AWS Student Builder Group - USJ",
    issuer: "Amazon Web Services",
    image: "/badges/aws-2.png",
    link: "https://lnkd.in/gSPzzjNu",
  },
];

export const VerifiedBadgesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="badges"
      className="relative py-24 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Verified Badges
          </h2>

          <p className="text-muted-foreground mt-4">
            Industry-recognized certifications validating cloud, networking,
            Kubernetes and leadership expertise.
          </p>
        </motion.div>

        {/* Badge Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {badges.map((badge, index) => (

            <motion.a
              key={index}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative group rounded-2xl border border-border bg-card/60 backdrop-blur-lg p-8 text-center shadow-xl hover:border-primary/40 hover:shadow-primary/20 transition-all duration-300"
            >
                            {/* Badge Image */}
      <div className="relative h-56 flex items-center justify-center mb-6 group/image">

  <img
    src={badge.image}
    alt={badge.title}
    className="w-44 h-44 object-contain transition-all duration-300 group-hover/image:scale-110"
  />

                {/* Full Screen Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedImage(badge.image);
                  }}
                  className="absolute top-2 right-2 w-10 h-10 rounded-full bg-white text-primary shadow-lg flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <Expand className="w-5 h-5" />
                </button>

              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold relative z-10">
                {badge.title}
              </h3>

              {/* Issuer */}
              <p className="text-muted-foreground text-sm mt-2 relative z-10">
                Issued by {badge.issuer}
              </p>

            </motion.a>

          ))}

        </div>
      </div>

      {/* Full Screen Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Badge */}
          <img
            src={selectedImage}
            alt="Badge Preview"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
};

export default VerifiedBadgesSection;