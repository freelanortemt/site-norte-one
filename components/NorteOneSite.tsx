"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { domAnimation, LazyMotion, m, MotionConfig } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Building2,
  CalendarCheck2,
  Check,
  CircleCheck,
  Cpu,
  Globe2,
  Layers3,
  LineChart,
  MapPin,
  MessageSquareText,
  Network,
  Palette,
  PanelsTopLeft,
  Quote,
  RadioTower,
  Rocket,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  UserRoundCheck,
  Workflow,
  Zap
} from "lucide-react";
import { CinematicMotionEngine } from "@/components/CinematicMotionEngine";
import { whatsappDisplay, whatsappUrl } from "@/lib/contact";
import { services } from "@/lib/services";
import { assetPath, brandLogoSmall } from "@/lib/site";

const AdaptiveHeroScene = dynamic(() => import("@/components/AdaptiveHeroScene"), {
  loading: () => <div className="hero-webgl hero-webgl--loading" aria-hidden="true" />,
  ssr: false
});

const serviceIcons = {
  "sites-premium": PanelsTopLeft,
  "chatbots-inteligentes": Bot,
  "automacao-com-ia": BrainCircuit,
  aplicativos: Smartphone,
  "cartoes-nfc": RadioTower,
  "branding-digital": Palette,
  "presenca-digital": Globe2,
  "sistemas-personalizados": Cpu,
  "landing-pages": Rocket
};

const heroSignals = [
  ["Sites", "presença digital premium"],
  ["IA", "atendimento inteligente"],
  ["Automações", "menos oportunidades perdidas"],
  ["Sistemas", "operações mais claras"]
];

const positioningPillars = [
  ["Percepção", "Sua empresa precisa parecer confiável antes mesmo do primeiro contato."],
  ["Estrutura", "Sites, automações e canais digitais organizados para facilitar a decisão do cliente."],
  ["Crescimento", "Tecnologia aplicada para criar mais clareza, velocidade e recorrência comercial."]
];

const automationSteps = [
  ["Cliente chama", MessageSquareText],
  ["IA responde", Bot],
  ["Lead qualifica", UserRoundCheck],
  ["Equipe recebe", CalendarCheck2],
  ["Venda acompanha", LineChart],
  ["Cliente retorna", CircleCheck]
];

const benefits = [
  ["Mais confiança no primeiro contato", "A percepção visual e a mensagem reduzem insegurança antes da conversa comercial."],
  ["Mais agilidade no atendimento", "Fluxos inteligentes ajudam a responder melhor sem depender apenas de esforço manual."],
  ["Mais organização de leads", "Oportunidades deixam de ficar espalhadas entre mensagens, anotações e planilhas."],
  ["Mais percepção de valor", "Empresas bem posicionadas não precisam disputar apenas preço."],
  ["Mais recorrência", "A experiência digital facilita retorno, relacionamento e continuidade."],
  ["Menos oportunidades perdidas", "O cliente encontra o caminho certo para avançar no momento em que demonstra interesse."]
];

const showcaseCases = [
  {
    title: "Projeto institucional premium",
    segment: "Empresas de serviço",
    image: "/portfolio/optimized/aurora-prime-imoveis.jpg",
    text: "Estrutura preparada para apresentar autoridade, serviços e contato rápido sem depender de excesso de texto.",
    tags: ["Institucional", "Posicionamento", "WhatsApp"]
  },
  {
    title: "Site para clínica",
    segment: "Saúde e atendimento",
    image: "/portfolio/optimized/odontovitta-clinic.jpg",
    text: "Experiência clara para mostrar especialidades, facilitar agendamento e transmitir segurança ao paciente.",
    tags: ["Mobile first", "Agendamento", "Confiança"]
  },
  {
    title: "Site para imobiliária",
    segment: "Negócios locais",
    image: "/portfolio/optimized/mendes-valenca-advocacia.jpg",
    text: "Vitrine digital para organizar ofertas, elevar percepção e conduzir interessados para uma conversa comercial.",
    tags: ["Catálogo", "Captação", "Busca"]
  },
  {
    title: "Sistema de atendimento",
    segment: "Operação e vendas",
    image: "/portfolio/optimized/sante-prime-clinic.jpg",
    text: "Interface conceitual para organizar contatos, acompanhar etapas e reduzir ruído na operação comercial.",
    tags: ["Fluxos", "Equipe", "IA"]
  }
];

const testimonials = [
  {
    label: "Depoimento de cliente",
    role: "Cliente de site premium",
    text: "A Norte One nos ajudou a organizar nossa presença digital e transmitir uma imagem mais profissional para nossos clientes."
  },
  {
    label: "Empresa local atendida",
    role: "Cliente de automação",
    text: "O atendimento ficou mais claro, rápido e alinhado com a experiência que queríamos oferecer."
  },
  {
    label: "Avaliação substituível",
    role: "Cliente de posicionamento",
    text: "O projeto trouxe mais clareza para apresentar nossos serviços e conduzir contatos comerciais com mais segurança."
  }
];

const sinopPoints = [
  "Negócios locais precisam transmitir autoridade no mesmo nível das grandes marcas.",
  "O consumidor compara, pesquisa e decide antes de chamar no WhatsApp.",
  "Presença digital bem construída ajuda empresas de Sinop e região a serem percebidas como escolha certa."
];

const chatbotScenarios = [
  {
    id: "servicos",
    title: "Serviços",
    prompt: "Olá, quero saber mais sobre os serviços.",
    response:
      "Claro. Posso te ajudar com site premium, atendimento automático, automações ou posicionamento digital. Qual dessas soluções faz mais sentido para sua empresa hoje?",
    steps: ["Intenção identificada", "Solução sugerida", "Contato encaminhado"]
  },
  {
    id: "atendimento",
    title: "Atendimento",
    prompt: "Quero melhorar meu atendimento.",
    response:
      "Perfeito. Podemos estruturar um fluxo para responder clientes, qualificar contatos e encaminhar oportunidades para sua equipe.",
    steps: ["Dúvida respondida", "Lead qualificado", "Equipe avisada"]
  },
  {
    id: "site",
    title: "Site premium",
    prompt: "Minha empresa precisa parecer mais profissional online.",
    response:
      "Esse é exatamente o papel de uma presença digital estratégica: organizar mensagem, design e tecnologia para aumentar confiança antes do orçamento.",
    steps: ["Contexto entendido", "Prioridade definida", "Diagnóstico iniciado"]
  }
];

const process = [
  {
    title: "Diagnóstico",
    text: "Entendemos o momento da empresa, seus pontos de contato e suas oportunidades digitais."
  },
  {
    title: "Estratégia",
    text: "Definimos como a marca deve ser percebida e quais soluções geram mais impacto."
  },
  {
    title: "Construção",
    text: "Criamos site, automações, interfaces e experiências alinhadas ao posicionamento."
  },
  {
    title: "Crescimento",
    text: "Acompanhamos melhorias, ajustes e evolução da presença digital."
  }
];

function ButtonLink({
  children,
  href,
  variant = "primary"
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const opensInNewTab = href.startsWith("http");
  const classes = {
    primary:
      "premium-cta group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-off-white px-6 py-3 text-sm font-semibold text-azul-norte transition hover:-translate-y-0.5 hover:bg-cobre hover:text-off-white",
    secondary:
      "interactive-lift group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-off-white/12 bg-off-white/[0.06] px-6 py-3 text-sm font-semibold text-off-white transition hover:border-cobre/50 hover:bg-cobre/10",
    ghost:
      "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-off-white/72 transition hover:text-off-white"
  };

  return (
    <a href={href} target={opensInNewTab ? "_blank" : undefined} rel={opensInNewTab ? "noreferrer" : undefined} className={classes[variant]}>
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label mb-5 inline-flex items-center gap-2 rounded-full border border-cobre/25 bg-cobre/[0.1] px-3 py-1 text-xs font-semibold uppercase text-cobre">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div data-cinematic className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="font-display text-[clamp(2.35rem,5vw,5.8rem)] font-semibold leading-[0.98] tracking-normal text-off-white">{title}</h2>
      {text ? <p className={align === "center" ? "mx-auto mt-6 max-w-2xl text-base leading-8 text-azul-nevoa/72" : "mt-6 max-w-2xl text-base leading-8 text-azul-nevoa/72"}>{text}</p> : null}
    </div>
  );
}

function HeroCommandCenter() {
  return (
    <div className="interface-shell premium-border relative mx-auto w-full max-w-[560px] rounded-[32px] bg-azul-norte/78 p-3 shadow-panel">
      <div className="glass-panel overflow-hidden rounded-[25px]">
        <div className="flex items-center justify-between border-b border-off-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <Image src={brandLogoSmall} alt="Logo Norte One" width={40} height={40} className="h-10 w-10 rounded-full border border-cobre/30 object-cover" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-off-white">Norte One</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-cinza-pedra">Digital growth system</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-cobre/25 bg-cobre/10 px-3 py-1 text-[11px] font-semibold text-cobre">
            <span className="signal-dot" />
            Ativo
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-[1fr_0.9fr]">
          <div className="deep-panel rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-cinza-pedra">Percepção digital</p>
            <p className="mt-3 font-display text-4xl font-semibold text-off-white">+ valor</p>
            <div className="mt-7 flex h-32 items-end gap-2">
              {[38, 58, 46, 74, 66, 88, 82, 96].map((height) => (
                <span key={height} style={{ height }} className="flex-1 rounded-t-md bg-gradient-to-t from-cobre/30 to-cobre" />
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {[
              ["Site premium", "Autoridade", PanelsTopLeft],
              ["IA no atendimento", "Velocidade", Bot],
              ["Automação", "Consistência", Workflow]
            ].map(([label, status, Icon]) => (
              <div key={label as string} className="deep-panel rounded-2xl p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-off-white">{label as string}</p>
                    <p className="mt-1 text-xs text-cinza-pedra">{status as string}</p>
                  </div>
                  <Icon className="h-5 w-5 text-cobre" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-off-white/10 p-4">
          <div className="rounded-2xl border border-cobre/24 bg-cobre/[0.08] p-4">
            <p className="text-sm font-semibold text-off-white">Diagnóstico estratégico</p>
            <p className="mt-2 text-sm leading-6 text-azul-nevoa/72">
              Presença digital, atendimento e posicionamento conectados para transformar interesse em conversa comercial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PositioningMap() {
  return (
    <div className="network-map premium-border">
      <div className="network-node left-[8%] top-[18%]">
        <span className="signal-dot" />
        Marca percebida
      </div>
      <div className="network-node right-[8%] top-[24%]">
        <Globe2 className="h-4 w-4 text-cobre" />
        Presença digital
      </div>
      <div className="network-node bottom-[20%] left-[14%]">
        <Bot className="h-4 w-4 text-cobre" />
        Atendimento IA
      </div>
      <div className="network-node bottom-[14%] right-[12%]">
        <LineChart className="h-4 w-4 text-cobre" />
        Oportunidades
      </div>
      <div className="absolute left-1/2 top-1/2 z-[1] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cobre/35 bg-azul-norte/80 shadow-gold">
        <Image src={brandLogoSmall} alt="Logo Norte One" width={74} height={74} className="h-[74px] w-[74px] rounded-full object-cover" />
      </div>
    </div>
  );
}

function AutomationSection() {
  return (
    <section id="tecnologia" className="px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
          <SectionHeader
            eyebrow="IA e automações"
            title="Automação não substitui relacionamento. Ela impede que oportunidades sejam perdidas."
            text="Fluxos inteligentes organizam respostas, qualificam contatos e entregam contexto para a equipe agir com mais precisão."
          />
          <div data-cinematic className="premium-border premium-surface rounded-[32px] bg-azul-norte/72 p-4 sm:p-6">
            <div className="automation-flow">
              {automationSteps.map(([label, Icon], index) => (
                <div key={label as string} className="automation-node interactive-lift">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cinza-pedra">0{index + 1}</span>
                    <Icon className="h-5 w-5 text-cobre" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-off-white">{label as string}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-off-white/10 bg-off-white/[0.05] p-5">
              <div className="flex flex-wrap items-center gap-3 text-sm text-azul-nevoa/72">
                <Workflow className="h-5 w-5 text-cobre" />
                Cliente chama → IA responde → lead é qualificado → equipe recebe contexto → venda é acompanhada.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatbotExperience() {
  const [activeId, setActiveId] = useState(chatbotScenarios[0].id);
  const active = chatbotScenarios.find((scenario) => scenario.id === activeId) ?? chatbotScenarios[0];

  return (
    <section id="chatbot" className="px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <SectionHeader
          eyebrow="Chatbot interativo"
          title="Atendimento inteligente com clareza de próximo passo."
          text="Uma interface viva para demonstrar como a conversa pode responder, qualificar e encaminhar oportunidades sem perder o tom da marca."
        />

        <div data-cinematic className="premium-border overflow-hidden rounded-[34px] bg-azul-norte/78 shadow-panel">
          <div className="grid border-b border-off-white/10 sm:grid-cols-3">
            {chatbotScenarios.map((scenario) => (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveId(scenario.id)}
                aria-pressed={scenario.id === active.id}
                className={`flex items-center justify-center gap-2 border-b border-off-white/10 px-4 py-4 text-sm font-semibold transition sm:border-b-0 sm:border-r sm:last:border-r-0 ${
                  scenario.id === active.id ? "bg-cobre/12 text-off-white" : "text-azul-nevoa/62 hover:bg-off-white/[0.04] hover:text-off-white"
                }`}
              >
                <span className="signal-dot" />
                {scenario.title}
              </button>
            ))}
          </div>
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-off-white/10 p-6 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cinza-pedra">Fluxo em tempo real</p>
              <div className="mt-6 grid gap-3">
                {active.steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-2xl border border-off-white/10 bg-off-white/[0.045] p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cobre/30 bg-cobre/10 text-xs text-cobre">0{index + 1}</span>
                    <p className="text-sm font-semibold text-off-white/78">{step}</p>
                    <CircleCheck className="ml-auto h-4 w-4 text-cobre" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="mb-5 flex items-center justify-between border-b border-off-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cobre/30 bg-cobre/10 text-cobre">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Assistente Norte One</p>
                    <p className="mt-1 text-xs text-cinza-pedra">Atendimento com IA</p>
                  </div>
                </div>
                <span className="rounded-full border border-cobre/25 bg-cobre/10 px-3 py-1 text-xs text-cobre">online</span>
              </div>
              <div className="space-y-3">
                <p className="chat-message chat-message--visitor">{active.prompt}</p>
                <p className="chat-message chat-message--assistant">{active.response}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-azul-nevoa/54">
                <Sparkles className="h-4 w-4 text-cobre" />
                Conversa preparada para gerar contexto antes do atendimento humano.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NorteOneSite() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [activePortfolio, setActivePortfolio] = useState(0);

  const scrollPortfolio = (direction: "previous" | "next") => {
    const track = portfolioRef.current;

    if (!track) {
      return;
    }

    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-portfolio-card]"));
    const targetIndex =
      direction === "next" ? Math.min(activePortfolio + 1, cards.length - 1) : Math.max(activePortfolio - 1, 0);
    const target = cards[targetIndex];

    if (!target) {
      return;
    }

    track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActivePortfolio(targetIndex);
  };

  const syncPortfolioPosition = () => {
    const track = portfolioRef.current;

    if (!track) {
      return;
    }

    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-portfolio-card]"));

    if (cards.length === 0) {
      return;
    }

    const nearest = cards.reduce((current, card, index) => {
      const currentDistance = Math.abs(cards[current].offsetLeft - track.offsetLeft - track.scrollLeft);
      const nextDistance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);

      return nextDistance < currentDistance ? index : current;
    }, 0);

    setActivePortfolio(nearest);
  };

  return (
    <main className="relative overflow-hidden bg-azul-norte text-off-white [&>footer]:relative [&>footer]:z-10 [&>section]:relative [&>section]:z-10">
      <CinematicMotionEngine />
      <div className="animated-dark-bg pointer-events-none" aria-hidden="true">
        <div className="animated-dark-bg__grid" />
      </div>
      <AdaptiveHeroScene />

      <header className="topbar fixed left-0 right-0 top-0 z-40 border-b border-off-white/10">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Norte One">
            <Image
              src={brandLogoSmall}
              width={48}
              height={48}
              alt="Logo Norte One"
              className="h-11 w-11 rounded-full border border-cobre/35 object-cover shadow-sm sm:h-12 sm:w-12"
              loading="eager"
              priority
            />
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-off-white sm:text-sm sm:tracking-[0.28em]">Norte One</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-cinza-pedra sm:text-[11px] sm:tracking-[0.24em]">Tech Studio</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-off-white/[0.08] bg-off-white/[0.035] p-1 text-sm text-azul-nevoa/68 lg:flex">
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#servicos">Soluções</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#tecnologia">Tecnologia</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#portfolio">Projetos</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#avaliacoes">Avaliações</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#contato">Contato</a>
          </div>

          <a
            href={whatsappUrl("Olá! Quero falar com a Norte One sobre presença digital e tecnologia.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-off-white/10 bg-off-white px-4 py-2 text-xs font-semibold text-azul-norte shadow-sm transition hover:-translate-y-0.5 hover:bg-cobre hover:text-off-white sm:min-h-11 sm:px-5 sm:text-sm"
          >
            Falar com a Norte One
          </a>
        </nav>
      </header>

      <section id="inicio" className="hero-stage relative isolate px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:min-h-screen lg:pt-28">
        <div className="hero-stage__atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />
        <LazyMotion features={domAnimation}>
          <MotionConfig reducedMotion="user">
            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div>
                <m.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-5 inline-flex items-center gap-3 rounded-full border border-off-white/10 bg-azul-norte/70 px-4 py-2 text-sm text-azul-nevoa/76 shadow-sm sm:mb-6"
                >
                  <span className="signal-dot" />
                  Sites • IA • Automações • Sistemas • Posicionamento
                </m.div>

                <m.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-5xl font-display text-[clamp(2.5rem,5.15vw,5.65rem)] font-semibold leading-[0.95] tracking-normal text-off-white"
                >
                  Tecnologia, posicionamento e presença digital para empresas que querem ser <span className="copper-text">escolhidas.</span>
                </m.h1>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5 max-w-2xl text-base leading-7 text-azul-nevoa/78 sm:mt-6 sm:text-lg sm:leading-8"
                >
                  Criamos sites premium, automações inteligentes e experiências digitais que fortalecem marcas, melhoram o atendimento e geram mais oportunidades de negócio.
                </m.p>

                <m.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row"
                >
                  <ButtonLink href={whatsappUrl("Olá! Quero construir minha presença digital com a Norte One.")}>
                    Construir minha presença digital
                  </ButtonLink>
                  <ButtonLink href="#servicos" variant="secondary">
                    Ver soluções
                  </ButtonLink>
                </m.div>

                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.42, duration: 0.9 }}
                  className="mt-8 grid max-w-3xl grid-cols-2 gap-3 border-t border-off-white/10 pt-5 sm:mt-10 sm:grid-cols-4 sm:pt-6"
                >
                  {heroSignals.map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-off-white/10 bg-off-white/[0.04] p-4">
                      <p className="font-display text-lg font-semibold text-off-white">{title}</p>
                      <p className="mt-2 text-xs leading-5 text-cinza-pedra">{text}</p>
                    </div>
                  ))}
                </m.div>
              </div>

              <m.div
                initial={{ opacity: 0, scale: 0.98, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.92, ease: [0.16, 1, 0.3, 1] }}
              >
                <HeroCommandCenter />
              </m.div>
            </div>
          </MotionConfig>
        </LazyMotion>
      </section>

      <section id="posicionamento" className="px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="section-rule mx-auto mb-12 max-w-7xl" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div data-cinematic>
            <SectionLabel>Posicionamento estratégico</SectionLabel>
            <h2 className="font-display text-[clamp(2.35rem,5vw,5.9rem)] font-semibold leading-[0.98]">
              Empresas fortes não apenas aparecem. Elas são percebidas como escolha certa.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-azul-nevoa/72">
              Presença digital, atendimento inteligente e posicionamento estratégico transformam a forma como clientes enxergam, confiam e compram de uma empresa.
            </p>
            <div className="mt-8 grid gap-3">
              {positioningPillars.map(([title, text]) => (
                <div key={title} className="benefit-line pb-5">
                  <p className="font-display text-xl text-cobre">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-azul-nevoa/66">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-cinematic>
            <PositioningMap />
          </div>
        </div>
      </section>

      <section id="servicos" className="px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Soluções premium"
              title="Estrutura digital para marcas que precisam transmitir valor antes do orçamento."
              text="Cada solução conecta estratégia, design e tecnologia para melhorar percepção, atendimento e clareza comercial."
            />
            <ButtonLink href={whatsappUrl("Olá! Quero entender qual solução faz mais sentido para minha empresa.")} variant="secondary">
              Conversar sobre soluções
            </ButtonLink>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Sparkles;
              const featured = index === 0 || index === 1 || index === 2;

              return (
                <article
                  key={service.title}
                  className={`service-card premium-border group rounded-[30px] bg-azul-norte/72 p-6 shadow-panel ${
                    featured ? "xl:col-span-4" : "xl:col-span-3"
                  }`}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="rounded-2xl border border-cobre/24 bg-cobre/[0.1] p-3 text-cobre">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-cinza-pedra">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-off-white">{service.title}</h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-cobre">{service.eyebrow}</p>
                  <p className="mt-5 text-sm leading-7 text-azul-nevoa/66">{service.summary}</p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cobre transition hover:text-off-white"
                    aria-label={`Saiba mais sobre ${service.title}`}
                  >
                    Entender solução
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <AutomationSection />

      <section id="beneficios" className="px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Benefícios para empresas"
            title="Quando a estrutura digital melhora, o crescimento deixa de depender apenas de esforço manual."
            text="A presença certa não faz barulho demais. Ela reduz dúvidas, organiza caminhos e deixa o cliente mais seguro para avançar."
            align="center"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([title, text]) => (
              <div key={title} data-cinematic className="deep-panel interactive-lift rounded-[28px] p-6">
                <ShieldCheck className="mb-8 h-6 w-6 text-cobre" />
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-azul-nevoa/66">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="overflow-hidden px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Showcase de sites"
              title="Uma vitrine preparada para receber projetos reais sem parecer genérica."
              text="Estruturas visuais conceituais para demonstrar direção, qualidade e possibilidades de aplicação em diferentes mercados."
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollPortfolio("previous")}
                disabled={activePortfolio === 0}
                className="interactive-lift inline-flex h-11 w-11 items-center justify-center rounded-full border border-off-white/10 bg-off-white/[0.06] text-off-white transition hover:border-cobre/50 hover:text-cobre disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Ver projeto anterior"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollPortfolio("next")}
                disabled={activePortfolio === showcaseCases.length - 1}
                className="interactive-lift inline-flex h-11 w-11 items-center justify-center rounded-full border border-off-white/10 bg-off-white text-azul-norte shadow-gold transition hover:bg-cobre hover:text-off-white disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Ver próximo projeto"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-cobre">
            {String(activePortfolio + 1).padStart(2, "0")} / {String(showcaseCases.length).padStart(2, "0")}
          </p>
        </div>

        <div className="portfolio-carousel -mx-4 sm:-mx-8">
          <div ref={portfolioRef} onScroll={syncPortfolioPosition} className="portfolio-carousel__track" aria-label="Showcase de projetos conceito da Norte One">
            {showcaseCases.map((item) => (
              <article
                key={item.title}
                data-portfolio-card
                className="group w-[84vw] max-w-[820px] shrink-0 overflow-hidden rounded-[32px] border border-off-white/10 bg-azul-norte/82 p-3 shadow-panel sm:w-[680px] sm:p-4 lg:w-[780px]"
              >
                <div className="overflow-hidden rounded-[24px] border border-off-white/10 bg-grafite">
                  <Image
                    src={assetPath(item.image)}
                    alt={`Mockup conceitual de ${item.title}`}
                    width={960}
                    height={620}
                    className="aspect-[1.55] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="grid gap-6 px-2 pb-3 pt-6 sm:grid-cols-[1fr_0.82fr] sm:px-4 sm:pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cobre">{item.segment}</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-off-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-azul-nevoa/66">{item.text}</p>
                  </div>
                  <div className="grid content-start gap-2">
                    {item.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-3 rounded-2xl border border-off-white/10 bg-off-white/[0.045] px-4 py-3 text-sm text-azul-nevoa/76">
                        <span className="h-1.5 w-1.5 rounded-full bg-cobre shadow-[0_0_12px_rgba(184,121,69,0.75)]" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Avaliações"
            title="Espaço preparado para depoimentos reais de clientes e empresas."
            text="Sem inventar resultados. A estrutura já está pronta para receber avaliações reais conforme os projetos forem publicados."
            align="center"
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.role} data-cinematic className="testimonial-card interactive-lift rounded-[30px] p-7">
                <div className="mb-8 flex items-center justify-between">
                  <Quote className="h-7 w-7 text-cobre" />
                  <div className="flex gap-1 text-cobre" aria-label="Avaliação de exemplo com cinco estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-lg leading-8 text-off-white/82">“{testimonial.text}”</p>
                <div className="mt-8 border-t border-off-white/10 pt-5">
                  <p className="text-sm font-semibold text-off-white">{testimonial.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-cinza-pedra">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sinop" className="px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div data-cinematic>
            <SectionLabel>Sinop MT e região</SectionLabel>
            <h2 className="font-display text-[clamp(2.35rem,5vw,5.8rem)] font-semibold leading-[0.98]">
              Tecnologia de alto padrão para empresas que querem crescer em Sinop e região.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-azul-nevoa/72">
              Negócios locais também precisam transmitir autoridade, atender melhor e criar experiências digitais à altura do novo comportamento do consumidor.
            </p>
          </div>
          <div data-cinematic className="premium-border premium-surface rounded-[34px] bg-azul-norte/74 p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobre">
              <MapPin className="h-5 w-5" />
              Norte de Mato Grosso
            </div>
            <div className="grid gap-4">
              {sinopPoints.map((point, index) => (
                <div key={point} className="flex gap-4 rounded-2xl border border-off-white/10 bg-off-white/[0.045] p-4">
                  <span className="font-display text-sm text-cobre">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-7 text-azul-nevoa/72">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 h-32 overflow-hidden rounded-3xl border border-cobre/20 bg-[radial-gradient(circle_at_50%_50%,rgba(184,121,69,0.18),transparent_42%),linear-gradient(135deg,rgba(216,225,232,0.08),rgba(7,22,36,0.72))]">
              <div className="flex h-full items-center justify-center gap-6 text-cobre/80">
                <Building2 className="h-7 w-7" />
                <Network className="h-10 w-10" />
                <MapPin className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChatbotExperience />

      <section id="processo" className="px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Processo"
            title="Uma entrega organizada para sair da ideia e chegar à presença digital ativa."
            text="O projeto evolui com clareza, decisões bem conduzidas e foco no impacto que a empresa precisa gerar."
          />

          <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-cobre/50 to-transparent lg:block" />
            {process.map((step, index) => (
              <div key={step.title} className="process-step interactive-lift relative rounded-[28px] border border-off-white/10 bg-azul-norte/78 p-6 shadow-sm">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-cobre/30 bg-cobre/10 text-cobre">
                  {index + 1}
                </div>
                <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-azul-nevoa/66">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div data-cinematic className="cta-panel premium-border relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-azul-norte/86 px-5 py-14 text-center shadow-panel sm:rounded-[42px] sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-radial-gold opacity-90" />
          <div className="cta-panel__grid absolute inset-0" />
          <ScanLine className="absolute left-8 top-8 h-6 w-6 text-cobre/70" />
          <div className="relative mx-auto max-w-4xl">
            <Image src={brandLogoSmall} alt="Logo Norte One" width={82} height={82} className="mx-auto mb-8 h-[82px] w-[82px] rounded-full border border-cobre/35 object-cover" />
            <p className="mb-5 text-sm uppercase tracking-[0.32em] text-cobre">Próximo passo</p>
            <h2 className="font-display text-[clamp(2.55rem,5.4vw,6.1rem)] font-semibold leading-[0.98]">
              Sua empresa pode parecer maior, mais confiável e mais preparada para crescer.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-azul-nevoa/72">
              Com presença digital estratégica, atendimento inteligente e tecnologia bem aplicada, cada contato pode se transformar em uma oportunidade real.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={whatsappUrl("Olá! Quero falar com a Norte One sobre presença digital, IA e automações.")}>
                Falar com a Norte One
              </ButtonLink>
              <ButtonLink href="#servicos" variant="secondary">
                Ver soluções
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-azul-nevoa/56">
              {["Diagnóstico inicial", "Estratégia sob medida", "WhatsApp direto"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-cobre" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-off-white/10 px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={brandLogoSmall}
              alt="Logo Norte One"
              width={58}
              height={58}
              className="h-14 w-14 rounded-full border border-cobre/35 object-cover"
            />
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.28em]">Norte One</p>
              <p className="mt-1 text-sm text-azul-nevoa/58">Tecnologia, posicionamento e presença digital para empresas.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-azul-nevoa/58">
            <a href="https://instagram.com" className="hover:text-cobre">Instagram</a>
            <a href="https://linkedin.com" className="hover:text-cobre">LinkedIn</a>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-cobre">WhatsApp: {whatsappDisplay}</a>
            <a href="mailto:contato@norteone.com.br" className="hover:text-cobre">contato@norteone.com.br</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
