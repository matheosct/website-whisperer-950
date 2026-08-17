export type Skill = { name: string };

export type ProjectBlock =
  | { type: "text"; content: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Project = {
  title: string;
  category: string;
  image: string;
  href?: string;
  tags: string[];
  summary: string;
  blocks: ProjectBlock[];
};

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  details?: string[];
};

export const profile = {
  name: "Matheus Costa",
  role: "Product Designer · UX/UI",
  summary:
    "Product designer focado em UX/UI: pesquisa, arquitetura de informação, design systems e interfaces de produtos digitais.",
  location: "Rio de Janeiro, Brasil",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" as const },
    { label: "Behance", href: "https://www.behance.net/", icon: "behance" as const },
    { label: "E-mail", href: "mailto:contato@exemplo.com", icon: "mail" as const },
  ],
};

export const about = [
  "Mais de 6 anos projetando produtos digitais — web e mobile — em saúde pública, educação, governo e e-commerce. Atuo do problema à entrega: pesquisa com usuários, fluxos, wireframes, protótipos e interface final.",
  "Trabalho orientado a evidências e a design systems escaláveis, em colaboração diária com pesquisa, engenharia e gestão de produto, acompanhando a implementação e a evolução das interfaces.",
];

export const skills: Skill[] = [
  { name: "Photoshop" },
  { name: "Illustrator" },
  { name: "InDesign" },
  { name: "Figma" },
];

export const projects: Project[] = [
  {
    title: "Design System de Produto",
    category: "UI · Design System",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    tags: ["Design System", "UI", "Figma", "Documentação"],
    summary:
      "Criação de uma biblioteca de componentes e tokens para unificar interfaces de produtos web e mobile de um mesmo ecossistema.",
    blocks: [
      {
        type: "text",
        content:
          "O projeto começou com uma auditoria de interface: mapeamento de componentes duplicados, inconsistências de espaçamento, tipografia e cor entre as aplicações existentes.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
        alt: "Grade de componentes de interface e tokens de cor",
        caption: "Inventário de componentes e definição dos tokens base.",
      },
      {
        type: "text",
        content:
          "A biblioteca foi estruturada em tokens (cor, tipografia, espaçamento e raio), componentes base e padrões compostos, documentados em Figma com regras de uso, estados e acessibilidade.",
      },
      {
        type: "text",
        content:
          "Resultado: menos retrabalho entre design e desenvolvimento e um vocabulário visual consistente para novas telas.",
      },
    ],
  },
  {
    title: "App Mobile de Saúde",
    category: "UX/UI · Mobile",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
    tags: ["Mobile", "UX/UI", "Saúde pública", "Protótipo"],
    summary:
      "Aplicativo para acompanhamento de pacientes e registro de dados em campo por equipes de saúde.",
    blocks: [
      {
        type: "text",
        content:
          "A concepção partiu de entrevistas com profissionais de campo, que precisavam registrar informações com pouco tempo, sob luz solar direta e conexão instável.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
        alt: "Telas de aplicativo mobile exibidas em um smartphone",
        caption: "Fluxo de registro simplificado, com alto contraste.",
      },
      {
        type: "text",
        content:
          "O fluxo principal foi reduzido a quatro etapas, com salvamento local e sincronização posterior. A interface prioriza alvos de toque grandes, contraste elevado e leitura rápida.",
      },
    ],
  },
  {
    title: "Pesquisa e Fluxos de Usuário",
    category: "UX Research",
    image:
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
    tags: ["Pesquisa", "Entrevistas", "Jornada", "Wireframes"],
    summary:
      "Estudo qualitativo para entender pontos de atrito em um produto existente e redesenhar seus fluxos críticos.",
    blocks: [
      {
        type: "text",
        content:
          "Foram conduzidas entrevistas em profundidade e testes de usabilidade moderados, sintetizados em mapas de jornada e uma matriz de oportunidades priorizada com o time de produto.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
        alt: "Quadro com anotações e post-its de síntese de pesquisa",
        caption: "Síntese das entrevistas e priorização de oportunidades.",
      },
      {
        type: "text",
        content:
          "A partir das evidências, os fluxos críticos foram redesenhados em wireframes de baixa fidelidade e validados em nova rodada de testes antes da interface final.",
      },
    ],
  },
  {
    title: "Dashboard de Dados",
    category: "Product Design · Web",
    image:
      "https://images.unsplash.com/photo-1551288049-bbda6465f74a?auto=format&fit=crop&q=80&w=800",
    tags: ["Dataviz", "Web", "Arquitetura de informação"],
    summary:
      "Painel de indicadores para acompanhamento de metas e desempenho operacional em tempo quase real.",
    blocks: [
      {
        type: "text",
        content:
          "O desafio era exibir um grande volume de indicadores sem sobrecarregar a leitura. A solução organizou a informação em camadas: visão geral, comparativos e detalhamento por recorte.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200",
        alt: "Gráficos e indicadores em um painel de dados",
        caption: "Hierarquia visual entre indicadores primários e secundários.",
      },
      {
        type: "text",
        content:
          "A escolha dos gráficos seguiu o tipo de comparação de cada métrica, com paleta neutra e uso pontual de cor para destacar desvios relevantes.",
      },
    ],
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
