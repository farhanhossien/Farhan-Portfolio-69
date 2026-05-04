import { motion } from 'motion/react';

export default function ContactButton() {
  return (
    <motion.a
      href="https://wa.me/8801756252356"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base outline-[#D7E2EA] outline-[2px] -outline-offset-[3px] transition-all hover:scale-105 active:scale-95"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      Contact Me
    </motion.a>
  );
}
