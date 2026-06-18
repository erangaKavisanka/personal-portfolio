"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Technical Lead",
    organization: "AWS Student Builder Group - USJ",
    period: "2026 - Present",
    image: "/community/aws-lead.jpg",
    description:
      "Leading cloud and DevOps initiatives, workshops, and mentoring activities.",
    tags: ["AWS", "Cloud", "Leadership"],
  },

  {
    title: "Head of Teaching Panel",
    organization: "FusionX 1.0 AI Bootcamp",
    period: "2025",
    image: "/community/fusionx.jpg",
    description:
      "Led technical training sessions and coordinated AI learning activities.",
    tags: ["AI", "Teaching", "Mentoring"],
  },

  {
    title: "Batch Representative",
    organization: "University of Sri Jayewardenepura",
    period: "2025 - 2026",
    image: "/community/batch-rep.jpg",
    description:
      "Represented students, coordinated academic matters, and acted as a communication bridge between students and faculty.",
    tags: ["Leadership", "Communication"],
  },

  {
    title: "Media Team Member",
    organization: "IEEE Student Branch - USJ",
    period: "2023 - 2024",
    image: "/community/ieee-media.jpg",
    description:
      "Created promotional content and supported social media and event marketing activities.",
    tags: ["IEEE", "Media", "Marketing"],
  },

  {
    title: "Program Team Member",
    organization: "IEEEXtreme",
    period: "2023 - 2024",
    image: "/community/ieeextreme.jpg",
    description:
      "Contributed to organizing and coordinating competitive programming events and student activities.",
    tags: ["Events", "Leadership"],
  },

  {
    title: "Open Source Contributor",
    organization: "WSO2",
    period: "2025",
    image: "/community/wso2.jpg",
    description:
      "Contributed to open-source projects and collaborated with the developer community.",
    tags: ["Open Source", "GitHub"],
  },

  {
    title: "Blogger",
    organization: "Medium",
    period: "2026 - Present",
    image: "/community/blogger.jpg",
    description:
      "Writing technical articles on Cloud Computing, DevOps, Software Engineering, and emerging technologies.",
    tags: ["Writing", "Tech Blogging"],
  },

  {
    title: "Banking Intern",
    organization: "People's Bank",
    period: "2022 - 2023",
    image: "/community/peoples-bank.jpg",
    description:
      "Gained practical experience in customer service, operations, documentation, and professional workplace practices.",
    tags: ["Internship", "Professional Experience"],
  },

  {
    title: "Dean's List Scholar",
    organization: "University of Sri Jayewardenepura",
    period: "2025",
    image: "/community/deans-list.jpg",
    description:
      "Recognized for academic excellence and outstanding GPA performance.",
    tags: ["Academic", "Achievement"],
  },
];




export default function LeadershipSection() {
return ( <section
   id="leadership"
   className="py-20 lg:py-32 relative overflow-hidden"
 > <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

```
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
        Beyond Technology
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">
          Leadership & Community Impact
        </span>
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        Technical leadership, volunteering, mentoring, open-source
        contributions, and community engagement throughout my journey.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {activities.map((activity, index) => (
        <motion.div
          key={activity.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
        >
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <span className="text-primary text-sm font-medium">
              {activity.period}
            </span>

            <h3 className="text-xl font-bold mt-2">
              {activity.title}
            </h3>

            <p className="text-muted-foreground text-sm mt-1 mb-3">
              {activity.organization}
            </p>

            <p className="text-sm text-muted-foreground mb-4">
              {activity.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {activity.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


);
}
