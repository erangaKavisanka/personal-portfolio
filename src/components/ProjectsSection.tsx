import { useEffect, useState } from "react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import placeholderImage from "@/assets/project-1.jpg";

type Project = {
  title: string;
  description: string;
  summary?: string;
  details?: string[];
  features?: string[];
  technologies?: string[];

  image: string;

  images?: string[];

  tags: string[];

  githubUrl: string;

  videoUrl?: string;
};

// Helper to extract YouTube embed URL with autoplay
const getYoutubeEmbedUrl = (url?: string) => {
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
    title: "Production-Grade GitOps Platform on Amazon EKS",
    description:
      "Enterprise-grade GitOps platform automating infrastructure provisioning and Kubernetes deployments on AWS.",
    summary:
      "Provisioned Amazon EKS with Terraform and automated GitOps deployments using GitHub Actions, Helm, Argo CD, Amazon ECR, and SonarQube.",
    details: [
      "Provisioned production-ready Amazon EKS infrastructure using Terraform.",
      "Implemented GitHub Actions CI/CD pipelines.",
      "Automated Helm-based Kubernetes deployments.",
      "Configured Argo CD continuous reconciliation.",
      "Integrated SonarQube quality gates and Amazon ECR.",
    ],
    features: [
      "GitOps",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
      "Helm",
      "Amazon EKS",
      "SonarQube",
    ],
    technologies: [
      "Amazon EKS",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
      "Helm",
      "Docker",
      "Amazon ECR",
      "SonarQube",
    ],
    image: "/projects/gitops.png",
    tags: ["GitOps", "AWS", "Kubernetes"],
    githubUrl: "",
    videoUrl: "",
  },

  {
    title: "Production-Style Multi-Tier Java Application on Kubernetes",
    description:
      "Production-style 5-tier Java application deployed on a self-managed Kubernetes cluster running on AWS.",
    summary:
      "Built a complete cloud-native deployment using Kubernetes, kOps, NGINX Ingress, Route53, Amazon EBS CSI, MySQL, RabbitMQ, and Memcached.",
    details: [
      "Provisioned Kubernetes cluster using kOps.",
      "Configured NGINX Ingress Controller.",
      "Integrated Route53 DNS.",
      "Configured Amazon EBS CSI persistent storage.",
      "Managed MySQL, RabbitMQ, and Memcached services.",
    ],
    features: [
      "5-Tier Architecture",
      "Ingress",
      "Persistent Storage",
      "Route53",
      "Service Discovery",
    ],
    technologies: [
      "Kubernetes",
      "kOps",
      "Docker",
      "AWS EC2",
      "NGINX",
      "Route53",
      "Amazon EBS CSI",
      "RabbitMQ",
      "MySQL",
      "Memcached",
    ],
    image: "/projects/vprofile-k8s.png",
    tags: ["Kubernetes", "Docker", "AWS"],
    githubUrl: "",
    videoUrl: "",
  },

  {
    title: "Production-Grade Cloud Observability Platform",
    description:
      "Centralized monitoring, logging, visualization, and alerting platform built on AWS.",
    summary:
      "Implemented Prometheus, Grafana, Loki, Alloy, PromQL dashboards, and Slack alerting across multiple AWS EC2 instances.",
    details: [
      "Configured Prometheus metrics collection.",
      "Built Grafana dashboards.",
      "Centralized logs using Loki.",
      "Configured Alloy log shipping.",
      "Integrated Slack alerting.",
    ],
    features: [
      "Monitoring",
      "Logging",
      "Alerting",
      "PromQL",
      "Grafana",
      "Loki",
    ],
    technologies: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Alloy",
      "Flask",
      "Slack",
      "AWS",
    ],
    image: "/projects/observability.png",
    tags: ["SRE", "Monitoring", "AWS"],
    githubUrl: "",
    videoUrl: "https://youtu.be/2Up8fXWoMy8?si=bcp2ZOcahUV5b-mb",
  },

  {
    title: "Serverless AWS Security Compliance Automation",
    description:
      "Automated cloud security auditing solution built using serverless AWS services.",
    summary:
      "Scans AWS Security Groups across regions, generates compliance reports, stores audit logs, and delivers automated notifications.",
    details: [
      "Built AWS Lambda automation.",
      "Configured EventBridge scheduled execution.",
      "Generated compliance reports.",
      "Stored reports in Amazon S3.",
      "Delivered SNS email notifications.",
    ],
    features: [
      "Serverless",
      "Security Automation",
      "Compliance",
      "Event Driven",
      "Multi-Region",
    ],
    technologies: [
      "AWS Lambda",
      "Python",
      "boto3",
      "EventBridge",
      "SNS",
      "Amazon S3",
    ],
    image: "/projects/security.png",
    tags: ["Security", "AWS", "Python"],
    githubUrl: "",
    videoUrl: "",
  },

  {
    title: "Jenkins CI/CD Pipeline for Containerized Applications",
    description:
      "Production-style CI/CD pipeline automating containerized application deployments to AWS.",
    summary:
      "Integrated Jenkins, Maven, SonarQube, Docker, Amazon ECR, and Amazon ECS into a complete deployment workflow.",
    details: [
      "Automated Maven builds.",
      "Integrated SonarQube quality analysis.",
      "Built Docker images.",
      "Published images to Amazon ECR.",
      "Automated deployments to Amazon ECS.",
    ],
    features: [
      "CI/CD",
      "Jenkins",
      "Docker",
      "Amazon ECS",
      "Amazon ECR",
    ],
    technologies: [
      "Jenkins",
      "Docker",
      "Amazon ECS",
      "Amazon ECR",
      "Maven",
      "SonarQube",
    ],
    image: "/projects/jenkins.png",
    tags: ["CI/CD", "Jenkins", "AWS"],
    githubUrl: "",
    videoUrl: "",
  },

  {
    title: "Security-First DevSecOps Pipeline using GitLab CI/CD",
    description:
      "Multi-stage DevSecOps pipeline integrating security directly into the software delivery lifecycle.",
    summary:
      "Automated builds, testing, Docker image creation, Checkstyle validation, Trivy vulnerability scanning, and secure artifact publishing.",
    details: [
      "Implemented GitLab CI/CD pipeline.",
      "Integrated Trivy vulnerability scanning.",
      "Automated Docker builds.",
      "Added Checkstyle validation.",
      "Generated security reports.",
    ],
    features: [
      "DevSecOps",
      "GitLab CI/CD",
      "Trivy",
      "Docker",
      "Shift-Left Security",
    ],
    technologies: [
      "GitLab CI/CD",
      "Docker",
      "Trivy",
      "Maven",
      "Checkstyle",
    ],
    image: "/projects/devsecops.png",
    tags: ["DevSecOps", "Security", "CI/CD"],
    githubUrl: "",
    videoUrl: "",
  },

  {
    title: "Multi-Node Infrastructure Automation using Ansible",
    description:
      "Automated provisioning and configuration management across multiple AWS EC2 instances.",
    summary:
      "Configured agentless infrastructure automation using Ansible inventory groups, SSH, and ad-hoc commands.",
    details: [
      "Configured Ansible control node.",
      "Managed multiple EC2 instances.",
      "Automated Apache deployment.",
      "Implemented inventory grouping.",
      "Performed agentless configuration management.",
    ],
    features: [
      "Configuration Management",
      "Automation",
      "Linux",
      "SSH",
      "Infrastructure",
    ],
    technologies: [
      "Ansible",
      "AWS EC2",
      "Linux",
      "SSH",
      "Apache HTTP Server",
    ],
    image: "/projects/ansible.png",
    tags: ["Ansible", "Automation", "AWS"],
    githubUrl: "",
    videoUrl: "",
  },

  {
    title: "Production-Ready Amazon EKS Infrastructure using Terraform",
    description:
      "Provisioned production-ready Kubernetes infrastructure on AWS using Infrastructure as Code.",
    summary:
      "Automated Amazon EKS deployment with reusable Terraform modules, VPC networking, IAM roles, and managed node groups.",
    details: [
      "Provisioned Amazon EKS.",
      "Created reusable Terraform modules.",
      "Configured IAM roles and policies.",
      "Automated VPC networking.",
      "Provisioned managed node groups.",
    ],
    features: [
      "Infrastructure as Code",
      "Amazon EKS",
      "Terraform",
      "AWS Networking",
      "Automation",
    ],
    technologies: [
      "Terraform",
      "Amazon EKS",
      "IAM",
      "VPC",
      "Route53",
      "CloudWatch",
    ],
    image: "/projects/terraform-eks.png",
    tags: ["Terraform", "EKS", "AWS"],
    githubUrl: "",
    videoUrl: "",
  },

  {
    title: "AI Agent as a Functional API with n8n",
    description:
      "Workflow-driven AI Agent exposed as a RESTful API using n8n, Groq, and OpenWeatherMap.",
    summary:
      "Built an intelligent API capable of context-aware conversations, external API integration, and workflow automation.",
    details: [
      "Built workflows using n8n.",
      "Integrated Groq LLM.",
      "Connected OpenWeatherMap API.",
      "Exposed workflows through Webhooks.",
      "Tested APIs using Postman.",
    ],
    features: [
      "AI Agent",
      "REST API",
      "Workflow Automation",
      "Memory",
      "Webhook",
    ],
    technologies: [
      "n8n",
      "Groq",
      "OpenWeatherMap API",
      "Postman",
      "Git",
      "GitHub",
    ],
    image: "/projects/n8n-agent.png",
    tags: ["AI", "Automation", "API"],
    githubUrl: "",
    videoUrl: "",
  },
];


export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState("demo");
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedProject(null);
      setActiveTab("demo");
      setShowFullDetails(false);
      setCarouselApi(null);
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    onSelect();
    carouselApi.on("select", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const getProjectSummary = (project: Project) =>
    project.summary ?? project.description.split(". ")[0];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 12);

  const demoTabLabel =
    selectedProject?.videoUrl && selectedProject.videoUrl.trim()
      ? "Demo"
      : selectedProject?.images && selectedProject.images.length > 0
        ? "Gallery"
        : "Demo";

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
                    <TabsTrigger
                      value="demo"
                      className="relative z-10 h-10 rounded-lg data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      {demoTabLabel}
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="relative z-10 h-10 rounded-lg data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      Details
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="demo" className="mt-0">
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.6fr_1fr]">
                      <div className="space-y-4">
                        {selectedProject.videoUrl && selectedProject.videoUrl.trim() ? (
                          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/20 ring-1 ring-white/10 shadow-lg">
                            <iframe
                              src={getYoutubeEmbedUrl(selectedProject.videoUrl)}
                              title={selectedProject.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        ) : selectedProject.images && selectedProject.images.length > 0 ? (
                          <div className="space-y-4">
                            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/20 ring-1 ring-white/10 shadow-lg">
                              <Carousel
                                setApi={setCarouselApi}
                                className="w-full h-full"
                              >
                                <CarouselContent className="h-full">
                                  {selectedProject.images.map((image, index) => (
                                    <CarouselItem
                                      key={`${image}-${index}`}
                                      className="h-full"
                                    >
                                      <img
                                        src={image}
                                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-border/70 bg-background/80 backdrop-blur-sm hover:bg-background" />
                                <CarouselNext className="right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-border/70 bg-background/80 backdrop-blur-sm hover:bg-background" />
                              </Carousel>
                            </div>

                            <div className="flex items-center justify-center gap-2">
                              {selectedProject.images.map((_, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  aria-label={`Go to slide ${index + 1}`}
                                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                                    index === currentSlide
                                      ? "bg-primary scale-110"
                                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                  }`}
                                  onClick={() => carouselApi?.scrollTo(index)}
                                />
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/20 ring-1 ring-white/10 shadow-lg">
                            <img
                              src={selectedProject.image}
                              alt={selectedProject.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {selectedProject.videoUrl && selectedProject.videoUrl.trim()
                            ? "Watch the live demo first, then switch to the Details tab for the full project breakdown."
                            : selectedProject.images && selectedProject.images.length > 0
                              ? "Swipe through the project gallery, then switch to the Details tab for the full project breakdown."
                              : "Preview the project cover image, then switch to the Details tab for the full project breakdown."}
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
