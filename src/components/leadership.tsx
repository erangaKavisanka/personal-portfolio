"use client";

import { motion } from "framer-motion";

const activities = [
{
title: "Technical Lead",
organization: "AWS Student Builder Group - USJ",
period: "2026 - Present",
image: "/badges/community/aws.png",
description:
"Leading cloud and DevOps initiatives, workshops, and mentoring activities.",
tags: ["AWS", "Cloud", "Leadership"],
},

{
title: "Open Source Contributor",
organization: "WSO2",
period: "2026",
image: "badges/community/wso2.webp",
description:
"Contributed to open-source projects and collaborated with the developer community.",
tags: ["Open Source", "GitHub"],
},

{
title: "Blogger",
organization: "Medium",
period: "2026 - Present",
image: "badges/community/medium.jpg",
description:
"Writing technical articles on Cloud Computing, DevOps and Software Engineering.",
tags: ["Writing", "Tech Blogging"],
},

{
title: "Founder & Author",
organization: "Kubernetes Hidden Gems",
period: "2026 - Present",
image: "badges/community/khg2.png",
description:
"Created and manage a growing LinkedIn newsletter focused on Kubernetes, Cloud Native technologies.",
tags: ["Newsletter", "Kubernetes", "Cloud Native"],
},

{
title: "Head of Teaching Panel",
organization: "FusionX 1.0 AI Bootcamp in collaboration with Sri Lanka Association for Artificial Intelligence (SLAAI)",
period: "2025",
image: "/badges/community/fusionx.jpg",
description:
"Led technical training sessions and coordinated AI learning activities.",
tags: ["AI", "Teaching", "Mentoring"],
},

{
title: "Batch Representative",
organization: "University of Sri Jayewardenepura",
period: "2025-Present",
image: "/badges/community/jpura.png",
description:
"Represented students and acted as a communication bridge between students and faculty.",
tags: ["Leadership", "Communication"],
},

{
title: "Media Team Member",
organization: "IEEE Student Branch - USJ",
period: "2023 - 2024",
image: "badges/community/ieee1.jpg",
description:
"Created promotional content and supported social media and event marketing activities.",
tags: ["IEEE", "Media", "Marketing"],
},

{
title: "Program Team Member",
organization: "IEEEXtreme",
period: "2023 - 2024",
image: "badges/community/ieee2.jpg",
description:
"Contributed to organizing and coordinating competitive programming events.",
tags: ["Events", "Leadership"],
},

{
title: "Vice President",
organization: "Students' Union - Faculty of Computing, University of Sri Jayewardenepura",
period: "2023-2025",
image: "badges/community/jpura.png",
description:
"Representing students, coordinating faculty-level initiatives, supporting student welfare activities, and contributing to leadership and decision-making processes within the Faculty of Computing.",
tags: ["Leadership", "Student Affairs", "Management"],
},
];


export default function LeadershipSection() {
return ( <section
   id="leadership"
   className="py-20 lg:py-32 relative overflow-hidden"
 > <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

```
  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
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
        Leadership, volunteering, mentoring, content creation, open-source
        contributions, and community engagement throughout my journey.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((activity, index) => (
        <motion.div
          key={activity.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ y: -8 }}
          className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
        >
          <div className="flex gap-4 mb-4">
            <img
              src={activity.image}
              alt={activity.title}
              className="w-16 h-16 rounded-xl object-cover border border-primary/20"
            />

            <div>
              <p className="text-primary text-sm font-medium">
                {activity.period}
              </p>

              <h3 className="text-lg font-bold">
                {activity.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {activity.organization}
              </p>
            </div>
          </div>

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
        </motion.div>
      ))}
    </div>
  </div>
</section>


);
}
