import Magnet from '../ui/Magnet';
import ContactButton from '../ui/ContactButton';
import FadeIn from '../ui/FadeIn';

export default function HeroSection({ hero }: { hero: any }) {
  const navLinks = hero?.navLinks || ["About", "Services", "Projects", "Contact"];

  if (!hero) return null;

  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-50">
        <FadeIn delay={0} y={-20} className="w-full">
          <div className="flex justify-between items-center w-full">
            {navLinks.map((link: string) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity hover:opacity-70 duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </FadeIn>
      </nav>

      {/* Hero Heading */}
      <div className="flex-grow flex flex-col justify-start relative px-6 md:px-10 pt-10 sm:pt-16 md:pt-24">
        <div className="w-full z-0 relative">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading text-[12vw] sm:text-[8vw] md:text-[9vw] lg:text-[10vw] font-black uppercase tracking-tight leading-[0.9] sm:leading-none sm:whitespace-nowrap w-full text-center">
              HI, I'm {hero.name}
            </h1>
          </FadeIn>
        </div>

        {/* Hero Portrait - Adjusted for mobile visibility to bridge the gap */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 translate-y-[-110%] sm:translate-y-[35%] md:translate-y-[40%] pointer-events-none sm:pointer-events-auto">
          <FadeIn delay={0.6} y={30}>
            <Magnet padding={150} strength={3}>
              <div className="w-[180px] sm:w-[280px] md:w-[340px] lg:w-[420px]">
                <img
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                  alt="Farhan Hossien Portrait"
                  className="w-full h-auto object-contain brightness-110 contrast-105 saturate-110 drop-shadow-[0_0_30px_rgba(182,0,168,0.2)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            {hero.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
