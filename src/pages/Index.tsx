import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ImpactSection from '@/components/ImpactSection';
import CTASection from '@/components/CTASection';
import SmoothScroll from '@/components/SmoothScroll';

const Index = () => {
  return (
    <SmoothScroll>
      <main className="overflow-x-hidden">
        <Hero />
        <ProcessSection />
        <ServicesSection />
        <ProjectsSection />
        <ImpactSection />
        <CTASection />
      </main>
    </SmoothScroll>
  );
};

export default Index;
