import ContactButton from '../ui/ContactButton';
import { getStorageData } from '../../lib/data';

export default function Footer() {
  const { contact, hero } = getStorageData();

  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 sm:gap-16">
        {/* Left Side */}
        <div className="flex flex-col">
          <h2 className="hero-heading text-4xl sm:text-5xl font-black uppercase">
            {hero.name} Hossien
          </h2>
          <span className="text-[#D7E2EA] opacity-50 font-light uppercase tracking-widest text-[0.8rem] mt-2">
            AI Automation · Web Builder · Researcher
          </span>
          <p className="text-[#D7E2EA] opacity-40 font-light text-[0.78rem] mt-3 max-w-sm">
            {contact.futureGoal}
          </p>
        </div>

        {/* Right Side */}
        <div id="contact" className="flex flex-col items-start md:items-end gap-4">
          <ContactButton />
          
          <div className="flex flex-col items-start md:items-end gap-2 mt-4">
            <a 
              href={`https://wa.me/${contact.whatsapp.replace('+', '').replace('-', '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D7E2EA] opacity-60 font-light uppercase tracking-widest text-xs hover:opacity-100 transition-opacity"
            >
              WhatsApp: {contact.whatsapp}
            </a>
            <a 
              href={`mailto:${contact.email}`} 
              className="text-[#D7E2EA] opacity-60 font-light uppercase tracking-widest text-xs hover:opacity-100 transition-opacity"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
