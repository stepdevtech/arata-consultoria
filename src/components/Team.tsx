"use client";

import { motion } from "framer-motion";
import { arataData } from "@/constants/arata-data";

export default function Team() {
  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="equipe" className="relative w-full py-32 lg:py-48 bg-arata-dark text-arata-offwhite overflow-hidden z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header da Seção */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 mb-24 lg:mb-32 border-t border-arata-offwhite/10 pt-16">
          <div className="col-span-12 lg:col-span-4 flex items-start">
            <span className="font-sans text-[0.65rem] tracking-[0.25em] text-arata-crimson uppercase">
              Quem Somos
            </span>
          </div>
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            <h2 className="font-serif text-[3.25rem] md:text-[5rem] lg:text-[7rem] leading-[0.9] tracking-tight">
              <span className="italic text-arata-offwhite/50">{arataData.team.title}</span>
            </h2>
            <p className="font-sans font-light text-arata-offwhite/70 text-lg lg:text-xl max-w-xl leading-relaxed">
              {arataData.team.desc}
            </p>
          </div>
        </div>

        {/* Membros da Equipe (Layout Assimétrico e Alternado) */}
        <div className="flex flex-col gap-32 lg:gap-48 mt-16">
          {arataData.team.members.map((member, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div key={index} className="grid grid-cols-12 gap-x-6 gap-y-12 items-center">
                
                {/* Bloco da Imagem */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`col-span-12 lg:col-span-5 relative ${isReverse ? 'lg:order-2 lg:col-start-8' : 'lg:col-start-2'}`}
                >
                  {/* Máscara em arco invertido superior para um ar clássico e imponente */}
                  <div className="relative w-full aspect-[3/4] bg-arata-forest overflow-hidden rounded-t-[12rem] filter grayscale-[50%] hover:grayscale-0 transition-all duration-700 ease-out group">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center border border-arata-offwhite/10 m-4 rounded-t-[11rem] border-dashed">
                        <span className="font-sans text-[0.65rem] tracking-[0.2em] text-arata-offwhite/40 uppercase mb-2">Espaço para Foto</span>
                        <span className="font-sans text-xs tracking-widest text-arata-crimson opacity-50 uppercase">{member.name}</span>
                      </div>
                    )}
                  </div>
                  {/* Etiqueta lateral */}
                  <div className="absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 -rotate-90 origin-center hidden md:block">
                    <span className="font-sans text-[0.6rem] tracking-[0.25em] text-arata-offwhite/30 uppercase">
                      Integrador(a) Estratégico(a)
                    </span>
                  </div>
                </motion.div>

                {/* Bloco de Texto */}
                <div className={`col-span-12 lg:col-span-4 flex flex-col gap-6 ${isReverse ? 'lg:order-1 lg:text-right' : ''}`}>
                  <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="overflow-hidden"
                  >
                    <motion.h3 variants={textRevealVariants} className="font-serif text-4xl lg:text-5xl text-arata-offwhite">
                      {member.name}
                    </motion.h3>
                  </motion.div>
                  
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-arata-crimson block"
                  >
                    {member.role}
                  </motion.span>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className={`font-sans font-light text-arata-offwhite/70 leading-relaxed text-lg ${isReverse ? 'lg:ml-auto' : ''} max-w-sm`}
                  >
                    {member.bio}
                  </motion.p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
