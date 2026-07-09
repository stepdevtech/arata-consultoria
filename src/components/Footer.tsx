"use client";

import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer id="contato" className="relative w-full bg-arata-dark text-arata-offwhite pt-32 lg:pt-48 pb-8 overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] -mt-12 z-20">
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col">
        
        {/* Superior: Call to Action & Formulário */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 mb-24 lg:mb-32 border-b border-arata-offwhite/10 pb-24">
          
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <span className="font-sans text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-arata-offwhite/40">
                Pronto para evoluir?
              </span>
              <h2 className="font-serif text-[3.25rem] md:text-[5rem] lg:text-[6rem] leading-[0.9] tracking-tight">
                Inicie um <br />
                <span className="italic text-arata-crimson">Diálogo.</span>
              </h2>
            </div>
            
            <a href="https://wa.me/5574999386412" target="_blank" rel="noreferrer" className="group flex items-center gap-6 font-sans text-xs tracking-[0.2em] uppercase text-arata-offwhite hover:text-arata-crimson transition-colors duration-500 w-max">
              <div className="w-16 h-16 rounded-full border border-arata-offwhite/20 flex items-center justify-center group-hover:border-arata-crimson group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <span>Falar com Especialista</span>
            </a>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
            <form className="flex flex-col gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Nome completo" 
                className="w-full bg-transparent border-b border-arata-offwhite/20 py-4 font-sans font-light text-arata-offwhite placeholder:text-arata-offwhite/30 focus:outline-none focus:border-arata-crimson transition-colors rounded-none appearance-none" 
              />
              <input 
                type="email" 
                placeholder="E-mail corporativo" 
                className="w-full bg-transparent border-b border-arata-offwhite/20 py-4 font-sans font-light text-arata-offwhite placeholder:text-arata-offwhite/30 focus:outline-none focus:border-arata-crimson transition-colors rounded-none appearance-none" 
              />
              <textarea 
                placeholder="Como podemos acelerar o seu licenciamento?" 
                rows={3} 
                className="w-full bg-transparent border-b border-arata-offwhite/20 py-4 font-sans font-light text-arata-offwhite placeholder:text-arata-offwhite/30 focus:outline-none focus:border-arata-crimson transition-colors resize-none rounded-none appearance-none" 
              />
              <button 
                type="button" 
                className="self-start mt-4 border border-arata-offwhite/20 px-8 py-4 rounded-full font-sans text-xs tracking-[0.2em] uppercase text-arata-offwhite hover:bg-arata-crimson hover:border-arata-crimson hover:text-white transition-all duration-500"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>

        {/* Inferior: Infos em Grade */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 mb-24">
          
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <img src="/logo-image.jpg" alt="Aratã Logo" className="w-16 h-16 object-contain rounded-full shadow-2xl mb-4 grayscale hover:grayscale-0 transition-all duration-500" />
            <p className="font-sans font-light text-sm text-arata-offwhite/60 max-w-xs leading-relaxed">
              Consultoria ambiental estratégica e inteligência regulatória para empreendimentos de alta complexidade.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-6 lg:pl-12">
            <span className="font-sans text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-arata-offwhite/40">Contato</span>
            <a href="mailto:contato@arata.com.br" className="font-sans font-light text-lg text-arata-offwhite hover:text-arata-crimson transition-colors duration-300">
              contato@arata.com.br
            </a>
            <a href="https://wa.me/5574999386412" target="_blank" rel="noreferrer" className="font-sans font-light text-lg text-arata-offwhite hover:text-arata-crimson transition-colors duration-300">
              +55 74 99938-6412
            </a>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-6 lg:pl-12">
            <span className="font-sans text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-arata-offwhite/40">Sede & Redes</span>
            <p className="font-sans font-light text-lg text-arata-offwhite/75 leading-relaxed">
              Irecê/BA — Brasil
            </p>
            <div className="flex items-center gap-6 mt-2">
              <a href="https://instagram.com/arataambiental" target="_blank" rel="noreferrer" className="text-arata-offwhite/60 hover:text-arata-crimson transition-colors duration-300 group">
                <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://wa.me/5574999386412" target="_blank" rel="noreferrer" className="text-arata-offwhite/60 hover:text-arata-crimson transition-colors duration-300 group">
                <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

        </div>
        
        {/* Linha de Copyright */}
        <div className="w-full pt-8 border-t border-arata-offwhite/10 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-[0.65rem] font-light tracking-[0.2em] text-arata-offwhite/30 uppercase">
          <span>© {new Date().getFullYear()} Aratã Consultoria. Todos os direitos reservados.</span>
          <span>Engenharia & Inteligência Ambiental</span>
        </div>
      </div>
    </footer>
  );
}
