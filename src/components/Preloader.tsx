"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o tempo de carregamento cinematográfico
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-arata-forest overflow-hidden"
        >
          {/* Grid Blueprint no Preloader para imersão técnica */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(245, 243, 237, 1) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 243, 237, 1) 1px, transparent 1px)`,
              backgroundSize: '120px 120px'
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic text-4xl lg:text-6xl text-arata-offwhite"
              >
                Aratã
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 h-[1px] bg-arata-crimson origin-center"
            ></motion.div>
            
            <div className="overflow-hidden mt-4">
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-arata-offwhite/50"
              >
                Engenharia & Ambiental
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 font-sans text-[0.5rem] tracking-[0.2em] text-arata-offwhite/30 uppercase"
          >
            Carregando Sistema
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
