"use client";

import { motion } from "framer-motion";
import { arataData } from "@/constants/arata-data";

export default function Services() {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="servicos" className="relative w-full py-32 lg:py-48 bg-arata-forest text-arata-offwhite overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 mb-24 lg:mb-40">
          <div className="col-span-12 lg:col-span-3 flex items-start gap-4">
            <span className="w-8 h-[1px] bg-arata-crimson mt-2"></span>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[0.65rem] tracking-[0.3em] text-arata-crimson uppercase font-semibold">
                Expertise Técnica
              </span>
              <span className="font-sans text-[0.55rem] tracking-[0.2em] text-white/30 uppercase">
                SEC. 02 — DOMÍNIO
              </span>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-9 flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-serif text-[3.25rem] md:text-[5rem] lg:text-[7rem] leading-[0.85] tracking-tighter"
            >
              Domínio <br/>
              <span className="italic text-arata-crimson">Absoluto.</span>
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col w-full border-t border-arata-offwhite/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-arata-offwhite/30 -mt-[1px] -mr-[1px]"></div>
          
          {arataData.services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              className="group relative grid grid-cols-12 gap-x-6 py-12 lg:py-16 border-b border-arata-offwhite/10 cursor-pointer"
            >
              {/* Animated Background on Hover */}
              <div className="absolute inset-0 bg-white/[0.01] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
              
              <motion.div variants={itemVariants} className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 relative z-10">
                <span className="font-sans text-xs lg:text-sm font-semibold tracking-widest text-arata-offwhite/40 group-hover:text-arata-crimson transition-colors duration-500">
                  {service.id}
                </span>
              </motion.div>

              <motion.div variants={itemVariants} className="col-span-12 lg:col-span-5 mb-6 lg:mb-0 relative z-10 flex items-center">
                <h3 className="font-serif text-3xl lg:text-5xl leading-tight text-arata-offwhite group-hover:translate-x-4 transition-transform duration-700 ease-out">
                  {service.title}
                </h3>
              </motion.div>
              
              <motion.div variants={itemVariants} className="col-span-12 lg:col-span-4 lg:col-start-9 flex lg:justify-end items-center relative z-10">
                <p className="font-sans font-light text-sm lg:text-base text-arata-offwhite/50 leading-relaxed lg:text-right group-hover:text-arata-offwhite/90 transition-colors duration-700 ease-out">
                  {service.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
