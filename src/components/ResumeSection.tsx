import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";


const experience = [
  {
    company: "WSO2",
    role: "Open Source Contributor",
    duration: "2025 - Present",
    achievements: [
      "Contributed to open-source software projects and community initiatives",
      "Worked with Git-based collaboration workflows and modern software development practices",
      "Strengthened expertise in cloud-native technologies and software engineering",
    ],
  },

  {
    company: "Independent Research Project",
    role: "Researcher & Author",
    duration: "2025 - 2026",
    achievements: [
      "Published research paper at the Jayewardenepura Computing Symposium (JCoS) 2026",
      "Conducted a comparative analysis of RF-based offline communication systems for traveller and hiker safety",
      "Explored IoT integration approaches and opportunistic cloud synchronization techniques",
    ],
  },

  {
    company: "InventX Solutions",
    role: "Co-Founder",
    duration: "2024 - Present",
    achievements: [
      "Collaborating on software solutions and technical projects for real-world clients",
      "Participating in cloud deployment, automation, and modern development practices",
      "Managing project planning and technical decision-making activities",
    ],
  },
];



const education = [
  {
    degree: "BComp (Hons.) in Software Engineering",
    university: "University of Sri Jayewardenepura",
    year: "2023 - Present",
    highlights: [
      "Current GPA: 3.89",
      "Dean's List",
      "Faculty of Computing",
    ],
  },

  {
    degree: "Diploma in English Language",
    university: "Yale College of English Academy",
    year: "2023",
    highlights: [
      "English Communication",
      "Professional Writing",
    ],
  },

  {
    degree: "G.C.E Advanced Level",
    university: "Pinnawala Central College",
    year: "2022",
    highlights: [
      "Physical Science Stream",
      "BBB Results",
    ],
  },
];




const certifications = [
  "AWS Certified Cloud Practitioner",
  "Aviatrix Certified Multicloud Associate",
  "AWS Solutions Architect Associate (Ongoing)",
  "KCNA - Kubernetes and Cloud Native Associate (Ongoing)",
  "Advanced DevOps Master Course - Imran Teli",
  "Full Stack Web Development - Skyrek",
];


export const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

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
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my professional experience and educational background.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors group"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-primary group-hover:bg-primary transition-colors" />
                  
                  <div className="mb-2">
                    <span className="text-sm text-primary font-medium">{job.duration}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">{job.role}</h4>
                  <p className="text-muted-foreground mb-3">{job.company}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors group"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-accent group-hover:bg-accent transition-colors" />
                    
                    <div className="mb-2">
                      <span className="text-sm text-accent font-medium">{edu.year}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-3">{edu.university}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
