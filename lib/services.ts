export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  process: string[];
  idealFor: string;
};

export const services: ServiceDetail[] = [
  {
    slug: "sites-premium",
    title: "Sites Premium",
    eyebrow: "Presença digital de alto impacto",
    summary: "Experiências digitais de alto impacto, pensadas para autoridade, conversão e performance.",
    description:
      "Criamos sites institucionais e comerciais com acabamento premium, narrativa estratégica e performance técnica. A proposta é fazer sua empresa parecer mais forte, confiável e desejável desde o primeiro clique.",
    outcomes: [
      "Mais autoridade para a marca",
      "Experiência visual sofisticada em desktop e mobile",
      "Estrutura pensada para conversão e contato comercial",
      "SEO técnico e carregamento otimizado"
    ],
    deliverables: [
      "Arquitetura de informação",
      "Design responsivo premium",
      "Desenvolvimento Next.js",
      "Otimização de performance e SEO",
      "Integração com canais de contato"
    ],
    process: ["Diagnóstico", "Direção visual", "Protótipo", "Desenvolvimento", "Publicação"],
    idealFor: "Empresas que precisam transmitir confiança, vender valor e sair da aparência genérica."
  },
  {
    slug: "chatbots-inteligentes",
    title: "Chatbots Inteligentes",
    eyebrow: "Atendimento com IA",
    summary: "Atendimento automatizado com fluxos comerciais, contexto e linguagem natural.",
    description:
      "Desenvolvemos chatbots inteligentes para qualificar leads, responder dúvidas, orientar clientes e acelerar atendimentos. O foco é criar uma experiência fluida, útil e alinhada ao posicionamento da sua empresa.",
    outcomes: [
      "Atendimento disponível 24 horas",
      "Respostas consistentes e alinhadas à marca",
      "Qualificação automática de oportunidades",
      "Redução de tarefas repetitivas no time comercial"
    ],
    deliverables: [
      "Mapeamento de perguntas e fluxos",
      "Roteiro conversacional",
      "Configuração do assistente",
      "Integração com WhatsApp, site ou CRM",
      "Testes e ajustes de comportamento"
    ],
    process: ["Mapeamento", "Base de conhecimento", "Fluxos", "Integração", "Monitoramento"],
    idealFor: "Negócios que recebem muitas mensagens e querem atender melhor sem perder velocidade."
  },
  {
    slug: "automacao-com-ia",
    title: "Automação com IA",
    eyebrow: "Operações mais inteligentes",
    summary: "Processos mais rápidos, inteligentes e conectados ao que sua empresa já usa.",
    description:
      "Automatizamos rotinas comerciais, administrativas e operacionais com inteligência artificial. Conectamos ferramentas, organizamos dados e criamos fluxos para reduzir trabalho manual e aumentar previsibilidade.",
    outcomes: [
      "Menos retrabalho e tarefas manuais",
      "Processos integrados entre ferramentas",
      "Mais velocidade na operação",
      "Decisões apoiadas por dados e IA"
    ],
    deliverables: [
      "Diagnóstico de processos",
      "Desenho dos fluxos de automação",
      "Integrações com sistemas existentes",
      "Automações com IA generativa",
      "Documentação e treinamento"
    ],
    process: ["Auditoria", "Priorização", "Integração", "Automação", "Evolução"],
    idealFor: "Empresas que querem escalar sem depender de processos lentos e manuais."
  },
  {
    slug: "cartoes-nfc",
    title: "Cartões NFC",
    eyebrow: "Networking premium em um toque",
    summary: "Networking moderno com cartões digitais, páginas de contato e rastreabilidade.",
    description:
      "Criamos cartões NFC e páginas digitais de apresentação para transformar contatos presenciais em experiências modernas. O cartão leva clientes e parceiros para uma página profissional com links, contatos e informações essenciais.",
    outcomes: [
      "Primeira impressão mais moderna",
      "Contato instantâneo via aproximação",
      "Página digital personalizável",
      "Mais praticidade para equipes comerciais"
    ],
    deliverables: [
      "Design do cartão",
      "Página de perfil digital",
      "Configuração NFC",
      "Links de contato e redes sociais",
      "Orientação de uso"
    ],
    process: ["Identidade", "Página digital", "Configuração", "Teste", "Entrega"],
    idealFor: "Empresários, equipes comerciais e marcas que querem se apresentar com mais sofisticação."
  },
  {
    slug: "branding-digital",
    title: "Branding Digital",
    eyebrow: "Marca com percepção premium",
    summary: "Identidade visual, narrativa e presença para marcas que precisam ser lembradas.",
    description:
      "Construímos uma presença de marca mais consistente para o ambiente digital, com identidade, linguagem, direção visual e materiais que elevam a percepção de valor.",
    outcomes: [
      "Marca mais profissional e memorável",
      "Consistência visual nos canais digitais",
      "Mensagem mais clara para o público",
      "Percepção de valor superior"
    ],
    deliverables: [
      "Diagnóstico de marca",
      "Direção visual",
      "Paleta e tipografia",
      "Elementos gráficos digitais",
      "Guia de aplicação"
    ],
    process: ["Imersão", "Posicionamento", "Sistema visual", "Aplicações", "Guia final"],
    idealFor: "Empresas que cresceram e precisam que a marca acompanhe o novo nível do negócio."
  },
  {
    slug: "presenca-digital",
    title: "Presença Digital",
    eyebrow: "Ecossistema digital completo",
    summary: "Ecossistema completo para gerar confiança antes do primeiro contato.",
    description:
      "Organizamos a presença digital da empresa para que site, perfis, páginas, links e canais de contato trabalhem juntos. A ideia é criar uma jornada mais confiável e coerente para quem descobre sua marca.",
    outcomes: [
      "Canais digitais mais profissionais",
      "Mais confiança antes do contato",
      "Comunicação centralizada",
      "Jornada mais clara para clientes"
    ],
    deliverables: [
      "Auditoria de presença digital",
      "Estratégia de canais",
      "Página central de links",
      "Padronização visual",
      "Plano de evolução"
    ],
    process: ["Auditoria", "Estratégia", "Organização", "Padronização", "Lançamento"],
    idealFor: "Negócios que querem parar de parecer improvisados no digital."
  },
  {
    slug: "sistemas-personalizados",
    title: "Sistemas Personalizados",
    eyebrow: "Software sob medida",
    summary: "Dashboards, painéis e operações sob medida para negócios em crescimento.",
    description:
      "Desenvolvemos sistemas, painéis administrativos e dashboards personalizados para empresas que precisam operar melhor, visualizar indicadores e centralizar processos importantes.",
    outcomes: [
      "Operação mais organizada",
      "Informações centralizadas",
      "Dashboards para tomada de decisão",
      "Ferramentas alinhadas ao fluxo real da empresa"
    ],
    deliverables: [
      "Mapeamento de requisitos",
      "UX e interface do sistema",
      "Desenvolvimento web",
      "Banco de dados e autenticação",
      "Deploy e documentação"
    ],
    process: ["Descoberta", "Arquitetura", "Interface", "Desenvolvimento", "Entrega"],
    idealFor: "Empresas que já não conseguem resolver tudo com planilhas e ferramentas genéricas."
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    eyebrow: "Campanhas com conversão",
    summary: "Páginas estratégicas, rápidas e orientadas a campanhas de alta conversão.",
    description:
      "Criamos landing pages para campanhas, lançamentos, tráfego pago e ofertas específicas. Cada página é desenhada para comunicar rápido, eliminar ruído e conduzir o visitante para uma ação clara.",
    outcomes: [
      "Mais clareza para campanhas",
      "Melhor aproveitamento do tráfego pago",
      "Mensagem focada em conversão",
      "Testes e otimizações mais simples"
    ],
    deliverables: [
      "Copy estratégica",
      "Design responsivo",
      "Desenvolvimento otimizado",
      "Integração com formulário ou WhatsApp",
      "Configuração de eventos essenciais"
    ],
    process: ["Oferta", "Copy", "Design", "Implementação", "Otimização"],
    idealFor: "Empresas que precisam vender uma oferta, serviço ou lançamento com foco e velocidade."
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
