import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Shield,
  GitBranch,
  BookOpen,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "Building scalable and secure cloud solutions on AWS with a focus on reliability, performance, and cost optimization.",
    gradient: "from-accent to-primary",
  },

  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Automating software delivery through GitHub Actions, Docker, Kubernetes, Terraform, and GitOps workflows.",
    gradient: "from-primary to-accent",
  },

  {
    icon: Server,
    title: "Platform Engineering",
    description:
      "Designing modern infrastructure using Infrastructure as Code, container orchestration, and cloud-native technologies.",
    gradient: "from-accent to-primary",
  },

  {
    icon: Shield,
    title: "Site Reliability Engineering",
    description:
      "Improving system reliability through monitoring, observability, automation, and incident management practices.",
    gradient: "from-primary to-accent",
  },

  {
    icon: BookOpen,
    title: "Software Engineering Research",
    description:
      "Conducting research in software engineering and emerging technologies with published academic contributions.",
    gradient: "from-accent to-primary",
  },

  {
    icon: Cpu,
    title: "Open Source & Technical Leadership",
    description:
      "Contributing to open-source projects, leading technical communities, and mentoring students through workshops and events.",
    gradient: "from-primary to-accent",
  },
];



export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Expertise & Interests
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Focus On</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Software Engineering undergraduate, researcher, and cloud enthusiast
            specializing in DevOps, Cloud Computing, Kubernetes, Site Reliability
            Engineering, Infrastructure as Code, and Open Source technologies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`}
                  />
                </div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 mb-6`}
                >
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Glow Effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
