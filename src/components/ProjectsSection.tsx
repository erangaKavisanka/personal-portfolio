import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Project = {
  title: string;
  description: string;
  summary?: string;
  details?: string[];
  features?: string[];
  technologies?: string[];
  image: string;
  images?: string[];
  tags: string[];
  githubUrl?: string;
  videoUrl?: string;
  liveUrl?: string;
};

// Helper to extract YouTube embed URL without autoplay
const getYoutubeEmbedUrl = (url?: string) => {
  if (!url) return "";
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?rel=0`;
  }
  return url;
};

const projects: Project[] = [
  {
    title: "Production-Grade GitOps Platform on Amazon EKS",
    description: "Enterprise-grade GitOps platform automating infrastructure provisioning and Kubernetes deployments on AWS.",
    summary: "Provisioned Amazon EKS with Terraform and automated GitOps deployments using GitHub Actions, Helm, Argo CD, Amazon ECR, and SonarQube.",
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
    images: ["/projects/2.jpg"],
    tags: ["GitOps", "AWS", "Kubernetes"],
    githubUrl: "",
    videoUrl: "",
    image: ""
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
    image: "/projects/3.png",
    tags: ["Kubernetes", "AWS", "MySQL"],
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
    image: "/projects/4.png",
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
    image: "/projects/5.jpg",
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
    image: "/projects/6.gif",
    tags: ["CI/CD", "Jenkins", "AWS"],
    githubUrl: "",
    videoUrl: "https://youtu.be/OjUblNONRMs",
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
    image: "/projects/7.png",
    tags: ["DevSecOps", "Security", "CI/CD"],
    githubUrl: "https://github.com/erangaKavisanka/vprofile-v7-gitlab-DevSecOps-pipeline.git",
    videoUrl: "https://youtu.be/Cdb1s_1jktA",
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
    image: "/projects/8.jpg",
    tags: ["Ansible", "Automation", "AWS"],
    githubUrl: "https://github.com/erangaKavisanka/ansible-aws-multi-node-automation.git",
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
    image: "/projects/9.png",
    tags: ["Terraform", "EKS", "AWS"],
    githubUrl: "https://github.com/erangaKavisanka/terraform-amazon-eks-platform.git",
    videoUrl: "",
  },

  {
    title: "Production-Grade AWS Infrastructure Provisioning Engine using Python boto3",
    description:
      "Python-based cloud deployment engine automating end-to-end AWS infrastructure provisioning using boto3 and GitHub Actions.",
    summary:
      "Built an automated deployment system provisioning EC2 instances, Application Load Balancers, networking, and application deployment through reusable Python automation and CI/CD workflows.",
    details: [
      "Automated EC2 provisioning with dynamic Amazon Linux AMI selection.",
      "Provisioned Application Load Balancer, Target Groups, and HTTP Listeners.",
      "Implemented Security Groups with ALB-to-EC2 traffic isolation.",
      "Configured user-data bootstrapping for zero-touch application deployment.",
      "Integrated GitHub Actions for automated deployment and controlled infrastructure teardown.",
    ],
    features: [
      "Infrastructure Automation",
      "Application Load Balancer",
      "GitHub Actions",
      "Python Automation",
      "Zero-Touch Deployment",
      "Tag-Based Resource Management",
    ],
    technologies: [
      "Python",
      "boto3",
      "AWS EC2",
      "Application Load Balancer",
      "GitHub Actions",
      "IAM",
      "Security Groups",
      "User Data",
    ],
    image: "/projects/10.png",
    tags: ["Python", "AWS", "Automation"],
    githubUrl: "https://github.com/erangaKavisanka/production-style-aws-automation-python-boto3.git",
    videoUrl: "https://youtu.be/nMjeNzoyyOc",
  },
];

// ----------------------------------------
// Component: ImageCarousel
// ----------------------------------------
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, images.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-muted/20 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") paginate(-1);
        if (e.key === "ArrowRight") paginate(1);
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          custom={direction}
          variants={{
            enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
            center: { zIndex: 1, x: 0, opacity: 1 },
            exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? '100%' : '-100%', opacity: 0 })
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) paginate(1);
            else if (swipe > swipeConfidenceThreshold) paginate(-1);
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <Button
              variant="secondary"
              size="icon"
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg pointer-events-auto hover:scale-110 transition-transform text-foreground"
              onClick={(e) => { e.stopPropagation(); paginate(-1); }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg pointer-events-auto hover:scale-110 transition-transform text-foreground"
              onClick={(e) => { e.stopPropagation(); paginate(1); }}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                  ? "w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ----------------------------------------
// Component: YouTubePlayer
// ----------------------------------------
const YouTubePlayer = ({ url }: { url: string }) => {
  const embedUrl = getYoutubeEmbedUrl(url);
  return (
    <div className="w-full h-full bg-black relative z-[100]" style={{ pointerEvents: 'auto' }}>
      <iframe
        src={embedUrl}
        className="w-full h-full border-0 relative z-[100]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Project Demo Video"
        loading="lazy"
        style={{ pointerEvents: 'auto', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
      />
    </div>
  );
};

// ----------------------------------------
// Component: MediaTabs
// ----------------------------------------
const MediaTabs = ({ images, videoUrl }: { images: string[]; videoUrl: string }) => {
  const [activeTab, setActiveTab] = useState<"images" | "video">("images");

  return (
    <div className="w-full h-full flex flex-col group/tabs relative bg-black/10">
      <div className="absolute top-4 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <div className="flex items-center gap-2 bg-background/70 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-xl pointer-events-auto transition-transform duration-300">
          <button
            onClick={() => setActiveTab("images")}
            className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${activeTab === "images" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {activeTab === "images" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">Gallery</span>
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${activeTab === "video" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {activeTab === "video" && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1"><Play className="w-3.5 h-3.5" /> Demo Video</span>
          </button>
        </div>
      </div>

      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "images" ? (
            <motion.div
              key="images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <ImageCarousel images={images} />
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-10"
              style={{ pointerEvents: 'auto' }}
            >
              <YouTubePlayer url={videoUrl} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ----------------------------------------
// Component: ProjectMedia
// ----------------------------------------
const ProjectMedia = ({ project }: { project: Project }) => {
  const images = project.images?.length ? project.images : (project.image ? [project.image] : []);
  const videoUrl = project.videoUrl?.trim() || "";

  let content = null;
  if (images.length > 0 && videoUrl) {
    content = <MediaTabs images={images} videoUrl={videoUrl} />;
  } else if (videoUrl) {
    content = <YouTubePlayer url={videoUrl} />;
  } else if (images.length > 0) {
    content = <ImageCarousel images={images} />;
  } else {
    content = (
      <div className="w-full h-full bg-muted/20 flex items-center justify-center text-muted-foreground">
        No media available
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden bg-muted/10 relative z-10">
      {content}
    </div>
  );
};

// ----------------------------------------
// Component: ProjectCard
// ----------------------------------------
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
      className="group relative flex flex-col h-full rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500"
    >
      {/* Background Layer (extracted to prevent backdrop-filter from breaking iframes on iOS) */}
      <div className="absolute inset-0 bg-card/40 group-hover:bg-card/60 backdrop-blur-xl border border-white/10 transition-colors duration-500 pointer-events-none z-0" />

      <div className="w-full relative z-10">
        <ProjectMedia project={project} />
      </div>
      <div className="w-full flex flex-col flex-1 p-6 space-y-6 relative z-10">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-primary/80">Key Features</h4>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
            {project.features?.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1 flex-shrink-0" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-primary/5 text-muted-foreground border border-primary/10 backdrop-blur-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 mt-auto">
          <Button variant="outline" size="sm" className="rounded-full gap-1.5 hover:scale-105 transition-transform" asChild>
            <a href={project.githubUrl || "https://github.com/kspeiris"} target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </Button>
          {(project.liveUrl && project.liveUrl !== "" && project.liveUrl !== "#") && (
            <Button size="sm" className="rounded-full gap-1.5 hover:scale-105 transition-transform shadow-md shadow-primary/20" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ----------------------------------------
// Main Component: ProjectsSection
// ----------------------------------------
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-40 relative overflow-hidden bg-background">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 space-y-24 lg:space-y-40">

        {/* Header */}
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing AI/ML research, backend development,
            mobile apps, and full-stack applications.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
