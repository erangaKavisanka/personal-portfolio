"use client";

import { motion } from "framer-motion";

const badges = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "/badges/aws.png", // put badge image in public/badges
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
}
];

export const VerifiedBadgesSection = () => {
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
            Industry-recognized certifications validating cloud and networking expertise.
          </p>
        </motion.div>

        {/* Badge Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {badges.map((badge, index) => (
            <motion.a
              key={index}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-card/70 backdrop-blur-lg border border-border rounded-2xl p-8 text-center shadow-xl hover:shadow-primary/30 transition-all"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <img
                src={badge.image}
                alt={badge.title}
                className="w-40 mx-auto mb-6 relative z-10"
              />

              <h3 className="text-xl font-semibold relative z-10">
                {badge.title}
              </h3>

              <p className="text-muted-foreground text-sm mt-2 relative z-10">
                Issued by {badge.issuer}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerifiedBadgesSection;
