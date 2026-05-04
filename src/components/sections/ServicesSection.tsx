import FadeIn from '../ui/FadeIn';
import { getStorageData } from '../../lib/data';

export default function ServicesSection() {
  const { services } = getStorageData();

  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn delay={0}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Services
          </h2>
        </FadeIn>

        <div className="w-full max-w-5xl">
          {services.map((service: any, i: number) => (
            <FadeIn key={service.number} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0">
                <span className="font-black text-[#0C0C0C] leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                  {service.number}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium text-[#0C0C0C] uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                    {service.name}
                  </h3>
                  <p className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
