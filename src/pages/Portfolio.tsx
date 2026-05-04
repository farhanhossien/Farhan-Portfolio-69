import { usePortfolioData } from '../lib/data';
import HeroSection from '../components/sections/HeroSection';
import MarqueeSection from '../components/sections/MarqueeSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import Footer from '../components/sections/Footer';

export default function Portfolio() {
  const data = usePortfolioData();

  return (
    <main className="w-full overflow-x-clip bg-[#0C0C0C]">
      <HeroSection hero={data.hero} />
      <MarqueeSection text="Let's build something unforgettable" />
      <AboutSection about={data.about} />
      <ServicesSection services={data.services} />
      <ProjectsSection projects={data.projects} />
      <Footer contact={data.contact} />
    </main>
  );
}
