import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogs = [
  {
    title: "Inter-Pod Affinity & Anti-Affinity",
    description:
      "Learn how Kubernetes intelligently places workloads to improve performance, availability, and resilience using Pod Affinity and Anti-Affinity rules.",
    image: "affinity.png",
    date: "June 2026",
    readTime: "6 min read",
    tags: ["Kubernetes", "Scheduling", "Cloud Native"],
    episode: "Episode #4",
    link: "https://www.linkedin.com/posts/eranga-kavisanka-7249592a8_kubernetes-k8s-devops-ugcPost-7475145781620928512-PF07/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEouAcwBLFoJr-teZm0z89rST1LN-ILosYk",
  },
  {
  title: "Kubernetes Annotations",
  description:
    "Learn how Kubernetes Annotations store rich metadata that enables tooling, automation, monitoring, and integrations without affecting object selection.",
  image: "Annotations.png", // Replace with your Annotations article image
  date: "June 2026",
  readTime: "6 min read",
  tags: ["Kubernetes", "Annotations", "Cloud Native"],
  episode: "Episode #2",
  link: "https://www.linkedin.com/pulse/kubernetes-hidden-gems-3-annotations-eranga-kavisanka-h8g7c",
},
  {
    title: "Kubernetes Probes",
    description:
      "Understand Liveness, Readiness, and Startup Probes and how they help build highly available Kubernetes applications.",
    date: "June 2026",
    image: "probes.png", // Replace with your Probes article image
    readTime: "5 min read",
    tags: ["Kubernetes", "Probes", "Reliability"],
    episode: "Episode #3",
    link: "https://www.linkedin.com/pulse/kubernetes-hidden-gems-2-startup-probes-eranga-kavisanka-dzauc",
  },

];

export const BlogsSection = () => {
  return (
    <section id="blogs" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

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
            Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on software development, cloud architecture, and the tech industry.
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                {/* Image */}
        <div className="relative bg-[#080b17] p-4">
  <div className="overflow-hidden rounded-xl border border-primary/20">
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full object-contain transition duration-500 group-hover:scale-105"
    />
  </div>

 

  <div className="absolute top-7 right-7 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
    {blog.readTime}
  </div>
</div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                 <a
  href={blog.link}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
>
  Read Article
  <ArrowRight className="w-4 h-4" />
</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
         <a
  href="https://www.linkedin.com/newsletters/%E2%98%B8%EF%B8%8F-kubernetes-hidden-gems-7463101252302692352"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="heroOutline" size="lg">
    View All Articles
  </Button>
</a>
        </motion.div>
      </div>
    </section>
  );
};
