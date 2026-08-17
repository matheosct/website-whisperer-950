export type Skill = { name: string };

export type Project = {
  title: string;
  category: string;
  image: string;
  href?: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  details?: string[];
};

export const profile = {
  name: "Matheus Costa",
  role: "Designer Gráfico & de Produto",
  summary:
    "Designer gráfico e de produto com atuação em UX/UI, infografia e comunicação visual institucional.",
  location: "Rio de Janeiro, Brasil",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" as const },
    { label: "Behance", href: "https://www.behance.net/", icon: "behance" as const },
    { label: "E-mail", href: "mailto:contato@exemplo.com", icon: "mail" as const },
  ],
};

export const about = [
  "Mais de 6 anos de experiência em design gráfico e de produto, atuando em projetos de saúde pública, educação, moda e governo. Trabalho na interseção entre estética e funcionalidade, com foco em clareza da informação.",
  "Rotina baseada em pesquisa, prototipagem e refinamento, em colaboração com equipes multidisciplinares de pesquisa, desenvolvimento e gestão.",
];

export const skills: Skill[] = [
  { name: "Photoshop" },
  { name: "Illustrator" },
  { name: "InDesign" },
  { name: "Figma" },
];

export const projects: Project[] = [
  {
    title: "Brand Identity Design",
    category: "Design Gráfico",
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bde7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "App Interface Mobile",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Editorial Design Magazine",
    category: "Layout",
    image:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Web Dashboard",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800",
  },
];

export const education: TimelineEntry[] = [
  {
    period: "2025 — Hoje",
    title: "Pós-Graduação em Análise de Dados e Inteligência Artificial",
    org: "Faculdade IBMR",
  },
  {
    period: "2014 — 2019",
    title: "Bacharelado em Comunicação Visual Design",
    org: "UFRJ — Universidade Federal do Rio de Janeiro",
    details: ["Monitoria voluntária em Análise da Imagem A (2019.1 e 2019.2)"],
  },
  {
    period: "2017 — 2019",
    title: "Tecnólogo em Design Gráfico",
    org: "Faculdade de Tecnologia Senac Rio",
    details: [
      "Monitoria voluntária em Imagem Digital",
      "Monitoria voluntária em Construção de Páginas Web",
    ],
  },
];

export const experience: TimelineEntry[] = [
  {
    period: "10/2025 — Presente",
    title: "Infografista",
    org: "Draw the Law",
    details: [
      "Desenvolvimento de infográficos estáticos para impressão em Figma",
      "Produção de infográficos e documentos interativos para apresentações",
    ],
  },
  {
    period: "06/2021 — Presente",
    title: "Designer Gráfico",
    org: "Fiotec — Fundação de Apoio à Fiocruz",
    details: [
      "Projeto de interfaces UX/UI para aplicações web e mobile na área de saúde pública",
      "Produção de conteúdo visual institucional, incluindo infográficos e apresentações",
      "Criação de peças para campanhas de mídia social com objetivo educacional e informativo",
      "Colaboração com pesquisadores, desenvolvedores e gestores",
    ],
  },
  {
    period: "02/2022 — 03/2023",
    title: "Designer Gráfico e Social Media",
    org: "Monica Pondé",
    details: [
      "Criação de conteúdo visual para mídias sociais e loja online de moda",
      "Tratamento de fotografia de produto e de modelos para e-commerce e campanhas",
      "Produção de peças em motion design para Instagram Stories e Reels",
      "Manutenção da plataforma de e-commerce com foco em UX e branding",
    ],
  },
  {
    period: "02/2021 — 06/2021",
    title: "Designer Gráfico e Social Media",
    org: "SEINFRA — Secretaria de Infraestrutura do Rio de Janeiro",
    details: [
      "Criação de peças institucionais para campanhas impressas e digitais",
      "Reformulação da presença do órgão nas mídias sociais com identidade visual atualizada",
      "Desenvolvimento e manutenção do site oficial, com foco em usabilidade",
      "Apoio à comunicação interna e a materiais visuais de eventos",
    ],
  },
  {
    period: "05/2019 — 01/2021",
    title: "Designer de Produto",
    org: "isFactory",
    details: [
      "Design de UX/UI para dashboards, sites e landing pages de diferentes clientes",
      "Condução de pesquisas com usuários e entrevistas com stakeholders",
      "Produção de wireframes, protótipos interativos e design systems escaláveis",
      "Acompanhamento da implementação junto aos times de desenvolvimento",
    ],
  },
];
