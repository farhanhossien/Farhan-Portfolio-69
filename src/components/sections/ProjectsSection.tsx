import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import FadeIn from '../ui/FadeIn';
import LiveProjectButton from '../ui/LiveProjectButton';

interface ProjectCardProps {
  project: any;
  index: number;
  progress: any;
  range: [number, number];
  targetScale: number;
  key?: React.Key;
}

const ProjectCard = ({ project, index, progress, range, targetScale }: ProjectCardProps) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      key={index} 
      className="flex items-center justify-center sticky top-24 sm:top-32 md:top-32 mb-10 md:mb-0" 
      style={{ 
        top: `calc(100px + ${index * 15}px)` 
      }}
    >
      <motion.div
        style={{
          scale: typeof window !== 'undefined' && window.innerWidth >= 768 ? scale : 1,
        }}
        className="relative w-full max-w-7xl bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[30px] sm:rounded-[50px] md:rounded-[60px] p-5 sm:p-8 md:p-12 flex flex-col gap-4 md:gap-8 shadow-2xl"
      >
        {/* Top row */}
        <div className="flex flex-wrap justify-between items-end gap-3 sm:gap-4">
          <div className="flex flex-col">
            <span className="font-black text-[#D7E2EA] leading-none mb-1 sm:mb-2" style={{ fontSize: 'clamp(1.8rem, 8vw, 80px)' }}>
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-60 uppercase text-[9px] sm:text-xs tracking-widest mb-1">{project.category}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase leading-tight" style={{ fontSize: 'clamp(0.9rem, 3vw, 2.5rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>
          <div className="scale-75 sm:scale-100 origin-right">
            <LiveProjectButton />
          </div>
        </div>

        {/* Bottom row: Improved Image grid - More compact on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-3 md:gap-6">
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="rounded-[15px] sm:rounded-[40px] overflow-hidden border border-white/5 shadow-lg aspect-[16/9] md:aspect-auto md:h-[220px]">
              <img src={project.images.col1_1} alt={`${project.name} 1`} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
            </div>
            {/* Hide second small image on very small mobile to save vertical space */}
            <div className="hidden sm:block rounded-[20px] sm:rounded-[40px] overflow-hidden border border-white/5 shadow-lg aspect-[16/9] md:aspect-auto md:h-[300px]">
              <img src={project.images.col1_2} alt={`${project.name} 2`} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="rounded-[15px] sm:rounded-[40px] overflow-hidden border border-white/5 shadow-lg aspect-[16/9] md:aspect-auto md:h-[544px]">
            <img src={project.images.col2} alt={`${project.name} 3`} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};


export default function ProjectsSection({ projects }: { projects: any[] }) {
  const container = useRef(null);
  
  if (!projects) return null;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="relative z-10 bg-[#0C0C0C] -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pb-20 overflow-visible">
      <div className="py-20 md:py-32">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-20" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Projects
          </h2>
        </FadeIn>

        <div ref={container} className="relative">
          {projects.map((project: any, i: number) => {
            const targetScale = 1 - ( (projects.length - 1 - i) * 0.05);
            const step = 1 / Math.max(projects.length, 1);
            return (
              <ProjectCard 
                key={project.number} 
                project={project} 
                index={i} 
                progress={scrollYProgress} 
                range={[i * step, 1]} 
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
