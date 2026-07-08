import { SiteData } from "../types";

export const SITE_DATA: SiteData = {
  company: "Aratã Consultoria Ambiental",
  slogan: "Soluções ambientais para um futuro melhor!",
  location: "Irecê/BA e Região",
  contact: { 
    instagram: "@arataambiental", 
    whatsapp: "(74) 99938-6412", 
    link: "https://wa.me/5574999386412" 
  },
  hero: { 
    title: "Seja bem-vindo(a) à\nARATÃ CONSULTORIA\nAMBIENTAL", 
    sub: "Soluções ambientais para empreendimentos, produtores rurais e órgãos públicos.", 
    cta: "Solicitar Orçamento" 
  },
  awareness: { 
    title: "O que faz uma Consultoria Ambiental?", 
    hook: "Muito além do licenciamento ambiental.", 
    desc: "Ajuda seu empreendimento a crescer de forma legal e sustentável, evitando problemas futuros.", 
    vision: "Regularizar é proteger o meio ambiente, seu negócio e o futuro." 
  },
  services: [
    { id: "s1", title: "Licenciamento Ambiental", desc: "Obtenção das licenças necessárias para o funcionamento." },
    { id: "s2", title: "Projetos Ambientais", desc: "Foco em sustentabilidade." },
    { id: "s3", title: "Inventário Florestal", desc: "Análise de recursos florestais." },
    { id: "s4", title: "Monitoramento de Fauna", desc: "Conservação da biodiversidade." },
    { id: "s5", title: "Consultoria Técnica", desc: "Levantamentos em campo e acompanhamentos." }
  ]
};
