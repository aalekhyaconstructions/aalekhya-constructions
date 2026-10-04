import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyAalekhya from '@/components/home/WhyAalekhya';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Process from '@/components/home/Process';
import Stats from '@/components/home/Stats';
import FAQ from '@/components/home/FAQ';
import ResortShowcase from '@/components/home/ResortShowcase';
import { InquiryCTA } from '@/components/Section';
import BeforeAfter from '@/components/BeforeAfter';
import { FadeIn, SectionHeading } from '@/components/Section';
import { getFeaturedProjects } from '@/lib/projects';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />
      <ServicesPreview />
      <ResortShowcase />
      <WhyAalekhya />

      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Before & After"
            title={<>See the <span className="text-gradient-gold">Transformation</span></>}
            subtitle="Drag the slider to experience the impact of premium renovation and redevelopment."
          />
          <FadeIn delay={0.15}>
            <div className="mx-auto mt-12 max-w-4xl">
              <BeforeAfter
                before="https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
                after="https://images.pexels.com/photos/24805054/pexels-photo-24805054.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
                labelBefore="Before"
                labelAfter="After"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <FeaturedProjects projects={featuredProjects} />
      <Process />
      <Stats />
      <InquiryCTA />
      <FAQ />
    </>
  );
}
