"use client";

import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import { arataData } from "@/constants/arata-data";
import { MouseEvent } from "react";

export default function Hero() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const text3DVariants: Variants = {
    hidden: { opacity: 0, rotateX: -80, y: 80, transformPerspective: 1200 },
    show: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0, 
      transformPerspective: 1200,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Interatividade 3D com o Mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
      
      {/* Background Video (Elementor Style: Full Width, Cover, Center) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <motion.video 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/capa-hero.mp4" 
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-center grayscale-[20%]"
        />
        
        {/* Overlay Escuro para Legibilidade do Vídeo */}
        <div className="absolute inset-0 bg-black/65"></div>
        
        {/* Vignette (Escurece as bordas sutilmente para focar no centro) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>

        {/* Overlay em Degradê Superior para integrar a logo JPG perfeitamente */}
        <div className="absolute inset-0 bg-gradient-to-b from-arata-forest via-arata-forest/80 to-transparent h-[40vh]"></div>
        
        {/* Overlay em Degradê Inferior para integrar com a próxima seção */}
        <div className="absolute inset-0 bg-gradient-to-t from-arata-dark via-transparent to-transparent mt-auto h-[30vh]"></div>
      </div>

      {/* Conteúdo Centralizado sobre a Imagem */}
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center mt-12">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="flex flex-col items-center w-full"
        >
          <motion.span 
            variants={fadeUpVariants}
            className="font-sans text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-arata-crimson mb-8 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-[1px] bg-arata-crimson"></span>
            Viabilidade e Estrutura
            <span className="w-8 h-[1px] bg-arata-crimson"></span>
          </motion.span>
          
          {/* Container Interativo 3D */}
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
            className="w-full py-8 cursor-default flex justify-center"
          >
            <motion.h1 
              style={{ rotateX, rotateY }}
              className="font-serif text-[3.25rem] md:text-[5rem] lg:text-[7.5rem] leading-[0.9] tracking-tight flex flex-col items-center"
            >
              <motion.span 
                variants={text3DVariants} 
                className="block text-arata-offwhite text-3d-light"
              >
                {arataData.hero.titleLine1}
              </motion.span>
              <motion.span 
                variants={text3DVariants} 
                className="block italic text-arata-crimson text-3d-crimson"
              >
                {arataData.hero.titleLine2}.
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p 
            variants={fadeUpVariants}
            className="font-sans font-light text-arata-offwhite/80 text-lg lg:text-xl max-w-2xl mt-4 leading-relaxed drop-shadow-lg"
          >
            {arataData.hero.subtitle}
          </motion.p>
          
          <motion.div variants={fadeUpVariants} className="mt-16 flex items-center justify-center gap-8">
            <a 
              href="#visao" 
              className="group flex flex-col items-center gap-4 font-sans text-xs tracking-[0.2em] uppercase text-arata-offwhite hover:text-arata-crimson transition-colors duration-500"
            >
              <span>Nossa Visão</span>
              <div className="w-[1px] h-12 bg-arata-offwhite/30 group-hover:bg-arata-crimson group-hover:h-16 transition-all duration-500"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
