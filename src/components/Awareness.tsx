"use client";

import { motion } from "framer-motion";
import { arataData } from "@/constants/arata-data";

export default function Awareness() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const textRevealVariants = {
    hidden: { y: "120%", opacity: 0, rotate: 2 },
    show: {
      y: "0%",
      opacity: 1,
      rotate: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="visao" className="relative w-full py-32 lg:py-56 bg-arata-dark text-arata-offwhite overflow-hidden border-b border-arata-offwhite/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          className="grid grid-cols-12 gap-x-6 gap-y-16"
        >
          {/* Label Blueprint */}
          <div className="col-span-12 lg:col-span-3 flex items-start gap-4">
            <span className="w-8 h-[1px] bg-arata-crimson mt-2"></span>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-arata-crimson uppercase font-semibold">
                {arataData.awareness.title}
              </span>
              <span className="font-sans text-[0.55rem] tracking-[0.2em] text-white/30 uppercase">
                SEC. 01 — IDENTIDADE
              </span>
            </div>
          </div>

          {/* Tipografia Editorial Massiva */}
          <div className="col-span-12 lg:col-span-9 flex flex-col">
            
            <h2 className="font-serif text-[2.75rem] md:text-[5rem] lg:text-[7rem] leading-[0.85] tracking-tighter">
              <span className="text-mask block overflow-hidden pb-4">
                <motion.span className="inline-block origin-bottom-left" variants={textRevealVariants}>
                  Onde a engenharia
                </motion.span>
              </span>
              <span className="text-mask block overflow-hidden pb-4 ml-[5vw] lg:ml-[10vw]">
                <motion.span className="inline-block italic text-arata-crimson origin-bottom-left" variants={textRevealVariants}>
                  encontra a sua
                </motion.span>
              </span>
              <span className="text-mask block overflow-hidden pb-4">
                <motion.span className="inline-block text-white/40 origin-bottom-left" variants={textRevealVariants}>
                  própria natureza.
                </motion.span>
              </span>
            </h2>

            {/* Grid Interno do Texto (Estilo Planta Baixa) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 mt-24 lg:mt-32 pt-16 border-t border-arata-offwhite/10 relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-arata-offwhite/30 -mt-[1px] -ml-[1px]"></div>
              
              <div className="col-span-1 md:col-span-6 lg:col-span-5 flex flex-col gap-8">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="font-sans font-light text-lg lg:text-xl leading-relaxed text-white/80"
                >
                  {arataData.awareness.desc}
                </motion.p>
              </div>

              <div className="col-span-1 md:col-span-6 lg:col-span-5 lg:col-start-8 flex flex-col gap-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="flex flex-col gap-8"
                >
                  <p className="font-serif text-3xl lg:text-4xl text-white/90 leading-snug">
                    “{arataData.awareness.vision}”
                  </p>
                  <div className="p-8 border border-white/10 relative group overflow-hidden bg-white/[0.02]">
                    <div className="absolute top-0 left-0 w-1 h-full bg-arata-crimson scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out"></div>
                    <p className="font-sans text-[0.65rem] tracking-[0.2em] leading-relaxed text-white/70 uppercase">
                      <strong className="text-arata-crimson block mb-4 tracking-[0.3em]">Atenção Crítica</strong> 
                      {arataData.awareness.alert}
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
