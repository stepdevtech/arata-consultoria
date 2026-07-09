"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[100] px-6 lg:px-12 py-4 text-arata-offwhite flex justify-between items-center transition-all duration-500 pointer-events-none ${scrolled ? 'bg-arata-dark/80 backdrop-blur-md border-b border-arata-offwhite/10 py-4 shadow-2xl' : 'py-6 bg-transparent'}`}
    >
      <div className="pointer-events-auto cursor-pointer flex items-center">
        {/* A logo JPG tem fundo #313628, que agora é a cor exata do site. Fusão perfeita. */}
        <img src="/logo-image.jpg" alt="Aratã Logo" className="h-10 lg:h-14 w-auto object-contain rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500" />
      </div>
      <div className="hidden lg:flex gap-12 font-sans text-xs uppercase tracking-[0.2em] pointer-events-auto">
        <a href="#visao" className="hover:text-arata-crimson transition-colors duration-300">Visão</a>
        <a href="#servicos" className="hover:text-arata-crimson transition-colors duration-300">Expertise</a>
        <a href="#equipe" className="hover:text-arata-crimson transition-colors duration-300">Quem Somos</a>
        <a href="#contato" className="hover:text-arata-crimson transition-colors duration-300">Contato</a>
      </div>
      <div 
        className="lg:hidden font-sans text-xs uppercase tracking-[0.2em] pointer-events-auto cursor-pointer p-4 -mr-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Fechar' : 'Menu'}
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 w-full h-screen bg-arata-dark z-[-1] pointer-events-auto flex flex-col items-center justify-center gap-12"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-arata-forest/30 to-arata-dark z-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-10 font-serif text-4xl">
          <a href="#visao" onClick={() => setMenuOpen(false)} className="hover:text-arata-crimson transition-colors duration-300">Visão</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)} className="hover:text-arata-crimson transition-colors duration-300">Expertise</a>
          <a href="#equipe" onClick={() => setMenuOpen(false)} className="hover:text-arata-crimson transition-colors duration-300">Equipe</a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="hover:text-arata-crimson transition-colors duration-300">Contato</a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
