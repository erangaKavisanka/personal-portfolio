import re

with open('src/components/ProjectsSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract projects array
projects_match = re.search(r'const projects: Project\[\] = \[\s*(.*?)\s*\];\s*(export const|const)', content, re.DOTALL)
if projects_match:
    projects_str = 'const projects: Project[] = [\n' + projects_match.group(1) + '\n];'
else:
    print('Could not find projects array, trying fallback...')
    projects_match = re.search(r'const projects: Project\[\] = \[\s*(.*?)\s*\];', content, re.DOTALL)
    if projects_match:
        projects_str = 'const projects: Project[] = [\n' + projects_match.group(1) + '\n];'
    else:
        print('Failed again.')
        exit(1)

new_content = """import React, { useState, useEffect } from "react";
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
  const regExp = /^.*(youtu.be\\/|v\\/|u\\/\\w\\/|embed\\/|watch\\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?rel=0`;
  }
  return url;
};

""" + projects_str + """

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
           loading="lazy"
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
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
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
    <div className="w-full h-full bg-black">
      <iframe
        src={embedUrl}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Project Demo Video"
        loading="lazy"
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
            className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
              activeTab === "images" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
            className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
              activeTab === "video" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
              className="absolute inset-0"
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
    <div className="aspect-video lg:aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 bg-muted/10 relative z-10">
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
      className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center rounded-[2.5rem] p-6 lg:p-10 bg-card/40 hover:bg-card/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500"
    >
       <div className="w-full lg:w-[55%] flex-shrink-0 relative z-10">
          <ProjectMedia project={project} />
       </div>
       <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-6 relative z-10 py-4">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
               {project.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
               {project.description}
            </p>
          </div>
          
          <div className="space-y-4">
             <h4 className="text-sm font-semibold uppercase tracking-widest text-primary/80">Key Features</h4>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {project.features?.slice(0, 6).map((feature, i) => (
                   <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                   </li>
                ))}
             </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
             {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
                   {tag}
                </span>
             ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
             {project.githubUrl && (
                <Button variant="outline" size="lg" className="rounded-full gap-2 hover:scale-105 transition-transform" asChild>
                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                   </a>
                </Button>
             )}
             {project.liveUrl && (
                <Button size="lg" className="rounded-full gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20" asChild>
                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Future.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A curated selection of my most impactful projects, ranging from AI agents and scalable cloud architectures to modern full-stack web applications.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
"""

with open('src/components/ProjectsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Successfully updated ProjectsSection.tsx')
