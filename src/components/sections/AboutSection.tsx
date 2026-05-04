import FadeIn from '../ui/FadeIn';
import AnimatedText from '../ui/AnimatedText';
import ContactButton from '../ui/ContactButton';

export default function AboutSection({ about }: { about: any }) {
  if (!about) return null;

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* Decorative Images */}
      {/* Moon icon top-left */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px]"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* 3D Object bottom-left */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Object"
          className="w-[100px] sm:w-[140px] md:w-[180px]"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* Lego icon top-right */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px]"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      {/* 3D Group bottom-right */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group"
          className="w-[130px] sm:w-[170px] md:w-[220px]"
          referrerPolicy="no-referrer"
        />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={about.paragraph}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}
          />

          <FadeIn delay={0.4}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
