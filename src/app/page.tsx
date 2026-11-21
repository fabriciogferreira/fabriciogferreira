import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { CreditsSection } from "@/components/credits-section"
import { EducationSection } from "@/components/education-section"
import { HeroSection } from "@/components/hero-section"
import { JobsSection } from "@/components/jobs-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <JobsSection />
        <EducationSection />
        <SkillsSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
        <AboutSection />
        <CreditsSection />
      </main>
      <SiteFooter />
    </>
  )
}
