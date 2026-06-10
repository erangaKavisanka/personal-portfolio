import { motion } from "framer-motion";

import {
  SiDocker,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiTypescript,
  SiLinux,
  SiJenkins,
  SiApachemaven,
  SiPostman,
  SiGit,
  SiKubernetes,
  SiTerraform,
  SiNginx,
  SiPython,
} from "react-icons/si";

import { FaJava, FaAws } from "react-icons/fa";

import {
  Workflow,
  ShieldCheck,
  Boxes,
  Server,
  Activity,
  BarChart3,
} from "lucide-react";


const skills = [
  { name: "AWS", icon: FaAws, color: "from-orange-500 to-yellow-500" },
  { name: "Docker", icon: SiDocker, color: "from-blue-500 to-cyan-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "from-blue-600 to-blue-400" },
  { name: "Terraform", icon: SiTerraform, color: "from-purple-600 to-indigo-500" },

  { name: "ArgoCD", icon: Workflow, color: "from-blue-500 to-cyan-500" },
  { name: "GitOps", icon: SiGit, color: "from-orange-500 to-red-500" },

  { name: "Linux", icon: SiLinux, color: "from-yellow-600 to-yellow-400" },

  { name: "GitHub Actions", icon: SiGithubactions, color: "from-blue-600 to-blue-400" },

  { name: "Jenkins", icon: SiJenkins, color: "from-red-600 to-red-400" },

  { name: "SonarQube", icon: ShieldCheck, color: "from-blue-500 to-cyan-500" },

  { name: "Helm", icon: Boxes, color: "from-indigo-500 to-blue-500" },

  { name: "Ansible", icon: Server, color: "from-red-500 to-pink-500" },

  { name: "Nginx", icon: SiNginx, color: "from-green-600 to-green-400" },

  { name: "Prometheus", icon: Activity, color: "from-orange-500 to-yellow-500" },

  { name: "Grafana", icon: BarChart3, color: "from-orange-500 to-red-500" },

  { name: "AWS EKS", icon: SiKubernetes, color: "from-blue-600 to-blue-400" },

  { name: "Java", icon: FaJava, color: "from-red-500 to-orange-500" },

  { name: "Python", icon: SiPython, color: "from-yellow-500 to-blue-500" },
];
const cloudSkills = [
  "AWS",
  "GCP",
  "Multi-Cloud",
  "EC2",
  "S3",
  "IAM",
  "VPC",
  "Load Balancer",
  "Route 53",
  "Cloud Architecture",
];

const devopsSkills = [
  "Docker",
  "Kubernetes",
  "Helm",
  "ArgoCD",
  "GitOps",
  "Terraform",
  "Ansible",
  "Jenkins",
  "GitHub Actions",
  "CI/CD",
];

const sreSkills = [
  "Linux",
  "Bash Scripting",
  "Nginx",
  "Prometheus",
  "Grafana",
  "Monitoring",
  "Observability",
  "Reliability Engineering",
  "Incident Management",
];

const programmingSkills = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
];

const researchSkills = [
  "Software Engineering Research",
  "Technical Writing",
  "Academic Publishing",
  "IoT Systems",
  "RF Communication",
  "Research Methodology",
];


const tools = [ "Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "Maven", ];


export const SkillsSection = () => {
  const renderSkillBadges = (items: string[], color: string) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`text-xs px-3 py-1.5 rounded-full border ${color}`}
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Cloud • DevOps • SRE • Research
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in Cloud Computing, DevOps, Kubernetes,
            Infrastructure as Code, Site Reliability Engineering,
            Open Source, and Software Engineering Research.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                <motion.div
                  className="text-3xl mb-2 flex justify-center text-foreground group-hover:text-primary"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon />
                </motion.div>

                <h3 className="text-xs font-medium">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-primary">
              Programming Languages
            </h4>
            {renderSkillBadges(
              programmingSkills,
              "bg-primary/10 text-primary border-primary/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-accent">
              Cloud Platforms
            </h4>
            {renderSkillBadges(
              cloudSkills,
              "bg-accent/10 text-accent border-accent/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-primary">
              DevOps & Automation
            </h4>
            {renderSkillBadges(
              devopsSkills,
              "bg-primary/10 text-primary border-primary/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-accent">
              Site Reliability Engineering
            </h4>
            {renderSkillBadges(
              sreSkills,
              "bg-accent/10 text-accent border-accent/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-primary">
              Development Tools
            </h4>
            {renderSkillBadges(
              tools,
              "bg-primary/10 text-primary border-primary/20"
            )}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h4 className="font-bold mb-4 text-accent">
              Research & Publications
            </h4>
            {renderSkillBadges(
              researchSkills,
              "bg-accent/10 text-accent border-accent/20"
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

