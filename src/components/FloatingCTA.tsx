"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/Icons";

export default function FloatingCTA() {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8, type: "spring", bounce: 0.5 }}
      className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-[90] flex items-center justify-center group"
    >
      <a 
        href="https://wa.me/5574999386412" 
        target="_blank" 
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-arata-crimson text-arata-offwhite rounded-full shadow-[0_4px_30px_rgba(227,74,88,0.5)] hover:scale-110 hover:shadow-[0_4px_40px_rgba(227,74,88,0.8)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group/btn"
      >
        <WhatsAppIcon className="w-7 h-7 lg:w-8 lg:h-8" />
        
        {/* Tooltip Hover no Desktop */}
        <span className="absolute right-full mr-6 bg-[#1C1C1C] text-[#F4F3EF] px-5 py-3 text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase rounded-sm opacity-0 pointer-events-none group-hover/btn:opacity-100 group-hover/btn:-translate-x-2 transition-all duration-500 whitespace-nowrap shadow-2xl hidden md:block border border-[#F4F3EF]/10">
          Inicie um Diálogo
        </span>

        {/* Efeito de Pulso (Ping) */}
        <div className="absolute inset-0 rounded-full border border-arata-crimson animate-ping opacity-50" style={{ animationDuration: '3s' }}></div>
      </a>
    </motion.div>
  );
}
