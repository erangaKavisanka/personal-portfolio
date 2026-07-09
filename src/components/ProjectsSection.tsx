import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import placeholderImage from "@/assets/project-1.jpg";



type Project = {
  title: string;
  description: string;
  summary?: string;
  details?: string[];
  features?: string[];
  technologies?: string[];
  image: string;
  tags: string[];
  githubUrl: string;
  videoUrl: string;
};

// Helper to extract YouTube embed URL with autoplay
const getYoutubeEmbedUrl = (url: string) => {
  if (!url) return "";
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  }
  return url; // fallback (if already an embed URL)
};

const projects: Project[] = [
  {
    title: "VProfile DevOps CI/CD Pipeline",
    description:
      "Production-grade DevOps project implementing CI/CD automation using Jenkins, Docker, Kubernetes, GitHub Actions, and AWS.",
    summary:
      "A complete end-to-end DevOps pipeline that automates application build, testing, containerization, deployment, and monitoring using modern cloud-native technologies.",
    details: [
      "Built automated CI/CD pipelines using Jenkins and GitHub Actions.",
      "Containerized the application using Docker and deployed to Kubernetes.",
      "Provisioned cloud infrastructure on AWS.",
      "Implemented Infrastructure as Code and deployment automation.",
    ],
    features: [
      "CI/CD Pipeline",
      "Docker Containerization",
      "Kubernetes Deployment",
      "GitHub Actions",
      "Jenkins Automation",
      "AWS Deployment",
      "Infrastructure as Code",
      "Production Monitoring",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "AWS",
      "Linux",
      "Bash",
      "Git",
      "NGINX",
      "Terraform"
    ],
    image: placeholderImage,
    tags: [
      "DevOps",
      "Kubernetes",
      "Docker",
      "AWS",
      "CI/CD",
      "Jenkins",
      "Terraform"
    ],
    githubUrl: "https://github.com/yourusername/vprofile-devops",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },

  {
    title: "Hybrid RF Off-Grid Emergency Communication System",
    description:
      "Final Year Research Project enabling off-grid communication with opportunistic cloud synchronization for traveler safety.",
    summary:
      "An IoT-powered hybrid communication platform that enables emergency messaging over RF mesh networks and synchronizes data to the cloud whenever internet connectivity becomes available.",
    details: [
      "Designed an RF mesh communication network for off-grid environments.",
      "Integrated ESP32-based IoT devices with a Flutter mobile application.",
      "Implemented MQTT communication using AWS IoT Core.",
      "Developed real-time dashboards with Grafana for monitoring emergency events.",
    ],
    features: [
      "RF Mesh Communication",
      "Emergency SOS Alerts",
      "Offline Messaging",
      "AWS IoT Core Integration",
      "MQTT Communication",
      "Grafana Dashboard",
      "Cloud Synchronization",
      "Flutter Mobile App",
    ],
    technologies: [
      "Flutter",
      "ESP32",
      "MQTT",
      "AWS IoT Core",
      "Grafana",
      "MySQL",
      "Python",
      "Docker",
      "Git"
    ],
    image: placeholderImage,
    tags: [
      "IoT",
      "Flutter",
      "AWS",
      "MQTT",
      "ESP32",
      "Research",
      "Cloud"
    ],
    githubUrl: "https://github.com/yourusername/hybrid-rf-network",
    videoUrl: "",
  },
];
export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState("demo");
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedProject(null);
      setActiveTab("demo");
      setShowFullDetails(false);
    }
  };

  const getProjectSummary = (project: Project) =>
    project.summary ?? project.description.split(". ")[0];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 12);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing AI/ML research, backend development,
            mobile apps, and full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 12) * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                    <Button
                      variant="hero"
                      size="sm"
                      className="gap-2"
                      onClick={() => setSelectedProject(project)}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="heroOutline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-secondary/50 text-muted-foreground rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="gap-2"
            >
              {showAllProjects ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  More Projects
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>

            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://github.com/kspeiris"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Projects
              </a>
            </Button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <Dialog open={!!selectedProject} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[92vh] overflow-hidden p-0 bg-card/95 backdrop-blur-lg border-border">
          {selectedProject && (
            <div className="max-h-[92vh] overflow-y-auto">
              <div className="relative overflow-hidden border-b border-border/70">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-cyan-400/10" />
                <div className="relative p-5 sm:p-6 lg:p-8">
                  <DialogHeader className="pr-8">
                    <DialogTitle className="text-2xl font-bold">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
                  <TabsList className="relative grid w-full grid-cols-2 bg-muted/60 overflow-hidden rounded-xl p-1 h-12">
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 520, damping: 42 }}
                      className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-lg bg-background shadow-sm"
                      style={{ x: activeTab === "demo" ? "0%" : "100%" }}
                    />
                    <TabsTrigger value="demo" className="relative z-10 h-10 rounded-lg data-[state=active]:bg-transparent data-[state=active]:shadow-none">
                      Demo
                    </TabsTrigger>
                    <TabsTrigger value="details" className="relative z-10 h-10 rounded-lg data-[state=active]:bg-transparent data-[state=active]:shadow-none">
                      Details
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="demo" className="mt-0">
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.6fr_1fr]">
                      <div className="space-y-4">
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/20 ring-1 ring-white/10 shadow-lg">
                          <iframe
                            src={getYoutubeEmbedUrl(selectedProject.videoUrl)}
                            title={selectedProject.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          Watch the live demo first, then switch to the Details tab for the full project breakdown.
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-background/30 p-3 sm:p-5">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                          <div className="mt-5">
                            <Button
                              variant="heroOutline"
                              size="sm"
                              className="gap-2"
                              onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="mt-0">
                  <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    <div className="rounded-xl border border-border/70 bg-background/30 p-3 sm:p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Summary
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {getProjectSummary(selectedProject)}
                      </p>

                      <Collapsible open={showFullDetails} onOpenChange={setShowFullDetails}>
                        <CollapsibleContent className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                          <div className="space-y-3">
                            {selectedProject.details?.map((item) => (
                              <p key={item}>{item}</p>
                            ))}
                            {selectedProject.features && (
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                  Key Features
                                </h4>
                                <ul className="grid gap-2 sm:grid-cols-2">
                                  {selectedProject.features.map((feature) => (
                                    <li
                                      key={feature}
                                      className="rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-sm text-muted-foreground"
                                    >
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {selectedProject.technologies && (
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                  Technologies
                                </h4>
                                <p>{selectedProject.technologies.join(", ")}</p>
                              </div>
                            )}
                          </div>
                        </CollapsibleContent>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="mt-3 gap-2 px-0 hover:bg-transparent">
                            {showFullDetails ? (
                              <>
                                Show less
                                <ChevronUp className="w-4 h-4" />
                              </>
                            ) : (
                              <>
                                Read more
                                <ChevronDown className="w-4 h-4" />
                              </>
                            )}
                          </Button>
                        </CollapsibleTrigger>
                      </Collapsible>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-background/30 p-3 sm:p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                      <Button
                        variant="heroOutline"
                        size="sm"
                        className="gap-2"
                        onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
