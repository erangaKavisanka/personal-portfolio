import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SocialSidebar } from "@/components/SocialSidebar";
import { VerifiedBadgesSection } from "@/components/VerifiedBadgesSection";
import LearningJourneySection from "@/components/learningJourney";
import LeadershipSection from "@/components/leadership";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <SocialSidebar />
      <HeroSection />
      <ServicesSection />
      <VerifiedBadgesSection />
      <ResumeSection />
      <ProjectsSection />
      <SkillsSection />
      <LearningJourneySection />
      <LeadershipSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
