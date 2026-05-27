export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  visual: string;
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
    eyebrow: "Autoridade digital",
    visual: "/visuals/optimized/sites-premium.jpg",
    summary: "Sites profissionais que posicionam sua empresa com autoridade e transformam visitantes em oportunidades.",
    description:
      "Seu site é muitas vezes a primeira impressão da empresa. Criamos experiências digitais premium para apresentar sua marca com clareza, gerar confiança imediata e facilitar o contato de clientes prontos para avançar.",
    outcomes: [
      "Imagem mais profissional e confiável",
      "Mensagem clara para o cliente certo",
      "Mais caminhos para orçamento, WhatsApp ou contato comercial",
      "Site rápido, responsivo e preparado para busca"
    ],
    deliverables: [
      "Estratégia de conteúdo e páginas",
      "Design premium responsivo",
      "Desenvolvimento otimizado",
      "SEO técnico essencial",
      "Integração com WhatsApp, formulário ou CRM"
    ],
    process: ["Diagnóstico", "Estrutura", "Design", "Desenvolvimento", "Publicação"],
    idealFor: "Empresas que querem sair da aparência comum e vender mais confiança desde o primeiro clique."
  },
  {
    slug: "chatbots-inteligentes",
    title: "Chatbots Inteligentes",
    eyebrow: "Atendimento inteligente",
    visual: "/visuals/optimized/chatbots-inteligentes.jpg",
    summary: "Chatbots que atendem, qualificam e encaminham clientes com mais velocidade e consistência.",
    description:
      "Clientes não querem esperar. Criamos assistentes inteligentes para responder dúvidas, organizar informações, qualificar interessados e reduzir a carga do seu time sem perder o padrão da sua marca.",
    outcomes: [
      "Atendimento mais rápido em canais digitais",
      "Respostas consistentes e alinhadas à empresa",
      "Leads mais organizados antes do contato humano",
      "Menos tarefas repetitivas para a equipe"
    ],
    deliverables: [
      "Mapeamento das dúvidas e objeções",
      "Fluxos de conversa comerciais",
      "Configuração do assistente com IA",
      "Integração com site, WhatsApp ou CRM",
      "Testes, ajustes e orientação de uso"
    ],
    process: ["Mapeamento", "Base de conhecimento", "Fluxos", "Integração", "Monitoramento"],
    idealFor: "Empresas que recebem muitas mensagens e querem atender melhor, responder mais rápido e não perder oportunidades."
  },
  {
    slug: "automacao-com-ia",
    title: "Automação com IA",
    eyebrow: "Mais eficiência operacional",
    visual: "/visuals/optimized/automacao-com-ia.jpg",
    summary: "Automações que reduzem trabalho manual, conectam ferramentas e deixam sua operação mais previsível.",
    description:
      "Muitas empresas crescem, mas continuam presas a tarefas manuais. Nós estruturamos automações com IA para organizar rotinas, acelerar respostas e conectar processos que hoje consomem tempo da equipe.",
    outcomes: [
      "Menos retrabalho no dia a dia",
      "Ferramentas conectadas em fluxos claros",
      "Mais velocidade em processos comerciais e administrativos",
      "Informações organizadas para melhores decisões"
    ],
    deliverables: [
      "Diagnóstico das rotinas atuais",
      "Desenho dos fluxos prioritários",
      "Integração entre ferramentas",
      "Automação com IA quando fizer sentido",
      "Documentação simples para a equipe"
    ],
    process: ["Auditoria", "Priorização", "Integração", "Automação", "Evolução"],
    idealFor: "Empresas que querem crescer sem aumentar a complexidade operacional."
  },
  {
    slug: "cartoes-nfc",
    title: "Cartões NFC",
    eyebrow: "Primeira impressão moderna",
    visual: "/visuals/optimized/cartoes-nfc.jpg",
    summary: "Cartões NFC e páginas digitais para apresentar sua marca com mais sofisticação em qualquer encontro.",
    description:
      "Um cartão NFC transforma uma apresentação rápida em uma experiência memorável. Criamos a página digital, organizamos seus canais e deixamos o contato pronto para acontecer em um toque.",
    outcomes: [
      "Apresentação mais profissional em reuniões e eventos",
      "Contato instantâneo por aproximação",
      "Links, redes e canais organizados em uma página",
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
    idealFor: "Empresários, profissionais e equipes comerciais que querem causar uma primeira impressão mais premium."
  },
  {
    slug: "branding-digital",
    title: "Branding Digital",
    eyebrow: "Percepção de marca",
    visual: "/visuals/optimized/branding-digital.jpg",
    summary: "Branding digital para sua empresa parecer mais clara, consistente e valiosa em todos os pontos de contato.",
    description:
      "Quando a marca parece improvisada, o cliente sente insegurança. Organizamos identidade, linguagem e direção visual para sua empresa comunicar valor com mais consistência.",
    outcomes: [
      "Marca mais profissional e memorável",
      "Comunicação visual consistente",
      "Mensagem mais clara para o público certo",
      "Percepção de valor mais alta"
    ],
    deliverables: [
      "Diagnóstico de marca",
      "Direção visual",
      "Paleta e tipografia",
      "Elementos gráficos digitais",
      "Guia de aplicação"
    ],
    process: ["Imersão", "Posicionamento", "Sistema visual", "Aplicações", "Guia final"],
    idealFor: "Empresas que cresceram e precisam que a marca comunique esse novo nível."
  },
  {
    slug: "presenca-digital",
    title: "Presença Digital",
    eyebrow: "Presença consistente",
    visual: "/visuals/optimized/presenca-digital.jpg",
    summary: "Organização completa da presença digital para sua empresa ser encontrada, entendida e acionada com facilidade.",
    description:
      "Sua empresa não precisa apenas estar online. Ela precisa ser encontrada, transmitir confiança e levar o cliente ao próximo passo. Organizamos seus canais para que tudo trabalhe junto.",
    outcomes: [
      "Canais digitais mais profissionais",
      "Mais confiança antes do primeiro contato",
      "Links, páginas e perfis organizados",
      "Jornada mais simples para o cliente"
    ],
    deliverables: [
      "Auditoria de presença digital",
      "Estratégia de canais",
      "Página central de links",
      "Padronização visual",
      "Plano de evolução"
    ],
    process: ["Auditoria", "Estratégia", "Organização", "Padronização", "Lançamento"],
    idealFor: "Negócios que querem deixar de parecer improvisados e construir uma presença digital mais forte."
  },
  {
    slug: "sistemas-personalizados",
    title: "Sistemas Personalizados",
    eyebrow: "Soluções sob medida",
    visual: "/visuals/optimized/sistemas-personalizados.jpg",
    summary: "Sistemas e painéis personalizados para organizar dados, processos e decisões importantes do negócio.",
    description:
      "Quando planilhas e ferramentas genéricas deixam de acompanhar a operação, criamos sistemas sob medida para centralizar informações, simplificar fluxos e dar mais controle ao negócio.",
    outcomes: [
      "Operação mais organizada",
      "Informações importantes em um só lugar",
      "Dashboards para acompanhar indicadores",
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
    idealFor: "Empresas que precisam de controle, clareza e uma solução feita para a sua rotina."
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    eyebrow: "Campanhas que vendem",
    visual: "/visuals/optimized/landing-pages.jpg",
    summary: "Landing pages focadas em apresentar uma oferta com clareza e transformar tráfego em ação.",
    description:
      "Uma campanha boa perde força quando a página não convence. Criamos landing pages objetivas, rápidas e persuasivas para apresentar sua oferta e conduzir o visitante para uma decisão.",
    outcomes: [
      "Mensagem clara para uma oferta específica",
      "Melhor aproveitamento do tráfego pago",
      "CTA direto para contato, compra ou cadastro",
      "Estrutura simples de medir e otimizar"
    ],
    deliverables: [
      "Copy estratégica",
      "Design responsivo",
      "Desenvolvimento otimizado",
      "Integração com formulário ou WhatsApp",
      "Configuração de eventos essenciais"
    ],
    process: ["Oferta", "Copy", "Design", "Implementação", "Otimização"],
    idealFor: "Empresas que querem divulgar uma oferta, serviço ou lançamento com foco e velocidade."
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
