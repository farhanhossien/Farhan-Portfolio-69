import { Facebook, Instagram, MessageCircle, Mail } from 'lucide-react';
import ContactButton from '../ui/ContactButton';

export default function Footer({ contact }: { contact: any }) {
  if (!contact) return null;

  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 sm:gap-16">
        {/* Left Side */}
        <div className="flex flex-col">
          <h2 className="hero-heading text-4xl sm:text-5xl font-black uppercase">
            Farhan Hossien
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
          
          <div className="flex flex-row flex-wrap items-center md:justify-end gap-3 mt-6">
            <a 
              href={`https://wa.me/${contact.whatsapp.replace('+', '').replace('-', '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D7E2EA] opacity-80 font-light uppercase tracking-widest text-xs hover:opacity-100 hover:text-[#25D366] transition-all flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a 
              href={`mailto:${contact.email}`} 
              className="text-[#D7E2EA] opacity-80 font-light uppercase tracking-widest text-xs hover:opacity-100 hover:text-white transition-all flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10"
            >
              <Mail size={18} /> Email
            </a>
            {contact.facebook && (
              <a 
                href={contact.facebook}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#D7E2EA] opacity-80 font-light uppercase tracking-widest text-xs hover:opacity-100 hover:text-[#1877F2] transition-all flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10"
              >
                <Facebook size={18} fill="currentColor" strokeWidth={0} /> Facebook
              </a>
            )}
            {contact.instagram && (
              <a 
                href={contact.instagram}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#D7E2EA] opacity-80 font-light uppercase tracking-widest text-xs hover:opacity-100 hover:text-[#E4405F] transition-all flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10"
              >
                <Instagram size={18} /> Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
