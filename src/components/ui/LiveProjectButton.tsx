import { motion } from 'motion/react';

export default function LiveProjectButton() {
  return (
    <motion.a
      href="#"
      className="px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base transition-all hover:bg-[#D7E2EA]/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Live Project
    </motion.a>
  );
}
