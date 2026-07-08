export type Service = {
  id: string;
  title: string;
  desc: string;
};

export type SiteData = {
  company: string;
  slogan: string;
  location: string;
  contact: {
    instagram: string;
    whatsapp: string;
    link: string;
  };
  hero: {
    title: string;
    sub: string;
    cta: string;
  };
  awareness: {
    title: string;
    hook: string;
    desc: string;
    vision: string;
  };
  services: Service[];
};
