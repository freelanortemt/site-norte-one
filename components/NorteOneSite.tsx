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
  CalendarCheck2,
  Check,
  CircleCheck,
  Cpu,
  Globe2,
  MessageSquareText,
  Palette,
  PanelsTopLeft,
  RadioTower,
  Rocket,
  ScanLine,
  Sparkles,
  UserRoundCheck,
  Workflow,
  Zap
} from "lucide-react";
import { CinematicMotionEngine } from "@/components/CinematicMotionEngine";
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
  "cartoes-nfc": RadioTower,
  "branding-digital": Palette,
  "presenca-digital": Globe2,
  "sistemas-personalizados": Cpu,
  "landing-pages": Rocket
};

const differentiators = [
  "Estratégia antes do design: cada projeto nasce para resolver um problema comercial real.",
  "Acabamento visual premium para sua empresa ser percebida com mais autoridade.",
  "Tecnologia moderna, rápida e preparada para crescer junto com o negócio.",
  "IA e automações aplicadas ao atendimento, vendas e operação, sem complexidade para o cliente.",
  "Experiência mobile refinada para transformar visitantes em conversas qualificadas.",
  "Acompanhamento próximo, comunicação clara e entrega organizada do início ao lançamento."
];

const heroSignals = [
  ["Estratégia", "orientada ao negócio"],
  ["Design", "alto valor percebido"],
  ["Tecnologia", "pronta para escalar"]
];

const intelligenceFlows = [
  {
    id: "atendimento",
    title: "Atendimento",
    icon: MessageSquareText,
    status: "Resposta imediata",
    prompt: "Olá, quero entender qual solução faz sentido para minha empresa.",
    response: "Perfeito. Posso identificar sua necessidade e encaminhar você para uma conversa mais objetiva com nosso time.",
    steps: ["Contato recebido", "Contexto identificado", "Atendimento direcionado"]
  },
  {
    id: "qualificacao",
    title: "Qualificação",
    icon: UserRoundCheck,
    status: "Oportunidade organizada",
    prompt: "Preciso de um site profissional e também quero automatizar meu atendimento.",
    response: "Entendi. Sua empresa pode se beneficiar de uma presença premium conectada a um fluxo inteligente de atendimento.",
    steps: ["Necessidade mapeada", "Perfil qualificado", "Prioridade definida"]
  },
  {
    id: "agendamento",
    title: "Agendamento",
    icon: CalendarCheck2,
    status: "Próximo passo claro",
    prompt: "Quero conversar com um especialista sobre o projeto.",
    response: "Ótimo. Vou deixar seu contato preparado para avançarmos com um diagnóstico estratégico da sua empresa.",
    steps: ["Interesse confirmado", "Briefing preparado", "Conversa agendada"]
  }
];

const process = [
  {
    title: "Diagnóstico",
    text: "Entendemos seu negócio, público, oferta e pontos que hoje limitam sua presença digital."
  },
  {
    title: "Estratégia",
    text: "Definimos a mensagem, a jornada do cliente e a estrutura ideal para gerar confiança e contato."
  },
  {
    title: "Design",
    text: "Criamos uma experiência visual premium, clara e alinhada ao valor que sua empresa entrega."
  },
  {
    title: "Execução",
    text: "Desenvolvemos o site, automação ou solução digital com performance, responsividade e cuidado técnico."
  },
  {
    title: "Lançamento",
    text: "Publicamos, testamos e deixamos tudo pronto para sua empresa começar a captar oportunidades."
  }
];

const portfolioCases = [
  {
    name: "Aurora Prime Imóveis",
    segment: "Imobiliária de alto padrão",
    image: "/portfolio/optimized/aurora-prime-imoveis.jpg",
    scope: "Experiência digital para apresentar imóveis de alto padrão com mais desejo, confiança e contato rápido.",
    details: ["Catálogo premium", "Busca por perfil", "Captação via WhatsApp"],
    metrics: ["Foco: consultas qualificadas", "Oferta: alto padrão", "Praça: Cuiabá MT"]
  },
  {
    name: "Mendes & Valença Advocacia",
    segment: "Escritório jurídico empresarial",
    image: "/portfolio/optimized/mendes-valenca-advocacia.jpg",
    scope: "Site institucional para uma banca que precisa transmitir seriedade, autoridade e segurança na primeira visita.",
    details: ["Áreas de atuação", "Perfil da banca", "Jornada de consulta"],
    metrics: ["Foco: confiança", "Perfil: empresarial", "Tom: institucional"]
  },
  {
    name: "OdontoVitta Clinic",
    segment: "Clínica odontológica premium",
    image: "/portfolio/optimized/odontovitta-clinic.jpg",
    scope: "Site para destacar tratamentos, facilitar agendamentos e posicionar a clínica com percepção premium.",
    details: ["Agendamento online", "Tratamentos claros", "Prova visual"],
    metrics: ["Foco: novos pacientes", "Área: estética dental", "Mobile: prioridade"]
  },
  {
    name: "Santé Prime Clinic",
    segment: "Clínica médica particular",
    image: "/portfolio/optimized/sante-prime-clinic.jpg",
    scope: "Presença digital para clínica particular com navegação simples, agendamento direto e imagem confiável.",
    details: ["Especialidades médicas", "Corpo clínico", "Portal do paciente"],
    metrics: ["Foco: pré-consultas", "Modelo: particular", "Jornada: paciente"]
  }
];

function MagneticButton({
  children,
  href,
  variant = "primary"
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={
        variant === "primary"
          ? "premium-cta group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-soft px-6 text-sm font-semibold text-obsidian shadow-gold transition hover:bg-gold"
          : "interactive-lift group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-graphite/90 px-6 text-sm font-semibold text-soft shadow-sm transition hover:border-gold/50 hover:bg-graphite"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.07] px-3 py-1 text-xs font-medium uppercase tracking-[0.26em] text-gold">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function FloatingDashboard() {
  return (
    <div
      className="interface-shell premium-border relative mx-auto w-full max-w-[560px] rounded-[28px] bg-graphite/90 p-3 shadow-panel"
    >
      <div className="glass-panel overflow-hidden rounded-[22px]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#69db7c]" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] text-gold">
            <span className="signal-dot" />
            Sistema ativo
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-graphite/70 p-4">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs text-titanium">Oportunidades</p>
                <p className="mt-1 font-display text-2xl font-semibold">+ clareza</p>
              </div>
              <div className="rounded-full bg-gold/15 p-2 text-gold">
                <Zap className="h-5 w-5" />
              </div>
            </div>
            <div className="flex h-32 items-end gap-2">
              {[42, 58, 47, 72, 64, 86, 76, 94].map((height) => (
                <span
                  key={height}
                  style={{ height }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-gold/35 to-gold"
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              ["Site premium", "Autoridade digital", "24/7"],
              ["Chatbot", "Atendimento imediato", "IA"],
              ["Automação", "Menos trabalho manual", "Fluxos"]
            ].map(([label, status, metric]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-graphite/70 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-xs text-titanium">{status}</p>
                  </div>
                  <p className="font-display text-xl text-gold">{metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 p-4">
          <div className="rounded-2xl border border-gold/20 bg-gold/[0.08] p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/15 p-2 text-gold">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Diagnóstico Norte One</p>
                <p className="mt-1 text-sm leading-6 text-soft/70">
                  Sua empresa pode ter uma presença digital mais forte, mais clara e preparada para gerar conversas comerciais todos os dias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 hidden items-center gap-2 rounded-full border border-white/10 bg-obsidian/95 px-4 py-2 text-xs text-soft/72 shadow-panel sm:flex">
        <BadgeCheck className="h-4 w-4 text-gold" />
        Experiência digital sob medida
      </div>
    </div>
  );
}

function IntelligenceExperience() {
  const [activeFlowId, setActiveFlowId] = useState(intelligenceFlows[0].id);
  const activeFlow = intelligenceFlows.find((flow) => flow.id === activeFlowId) ?? intelligenceFlows[0];

  return (
    <section id="inteligencia" className="relative px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div data-cinematic className="mb-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <SectionLabel>IA em operação</SectionLabel>
            <h2 className="font-display text-4xl font-semibold sm:text-6xl">
              Atendimento inteligente que transforma interesse em próximo passo.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-soft/62">
            Uma experiência conectada para responder com velocidade, entender o cliente e organizar oportunidades com mais consistência.
          </p>
        </div>

        <div className="intelligence-stage premium-border">
          <div className="intelligence-stage__modes">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-titanium">Simular jornada</p>
            <div className="grid gap-2">
              {intelligenceFlows.map((flow) => {
                const Icon = flow.icon;
                const active = flow.id === activeFlow.id;

                return (
                  <button
                    key={flow.id}
                    type="button"
                    onClick={() => setActiveFlowId(flow.id)}
                    className={`intelligence-mode ${active ? "intelligence-mode--active" : ""}`}
                    aria-pressed={active}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{flow.title}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-7 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold">
                <span className="signal-dot" />
                Fluxo monitorado
              </div>
              <p className="mt-3 text-sm leading-6 text-soft/54">
                A interface responde ao cenário escolhido sem interromper sua navegação.
              </p>
            </div>
          </div>

          <div className="intelligence-stage__flow">
            <div className="intelligence-stage__flow-grid" aria-hidden="true" />
            <div className="relative">
              <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-soft">
                <Workflow className="h-5 w-5 text-gold" />
                Jornada automatizada
              </div>
              <div className="grid gap-3">
                {activeFlow.steps.map((step, index) => (
                  <div key={step} className="intelligence-node">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.08] text-xs text-gold">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-semibold text-soft/76">{step}</p>
                    <CircleCheck className="ml-auto h-4 w-4 text-gold" />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.18em] text-titanium">
                <Zap className="h-4 w-4 text-gold" />
                {activeFlow.status}
              </div>
            </div>
          </div>

          <div className="intelligence-stage__chat">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.1] text-gold">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Assistente Norte One</p>
                  <p className="mt-1 text-xs text-titanium">Atendimento inteligente</p>
                </div>
              </div>
              <span className="signal-dot" />
            </div>
            <div className="mt-5 space-y-3">
              <p className="chat-message chat-message--visitor">{activeFlow.prompt}</p>
              <p className="chat-message chat-message--assistant">{activeFlow.response}</p>
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-soft/48">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Conversa contextual, objetiva e preparada para avançar.
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
      direction === "next"
        ? Math.min(activePortfolio + 1, cards.length - 1)
        : Math.max(activePortfolio - 1, 0);
    const target = cards[targetIndex];

    if (!target) {
      return;
    }

    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: "smooth"
    });
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
    <main className="relative overflow-hidden bg-obsidian text-soft [&>footer]:relative [&>footer]:z-10 [&>section]:relative [&>section]:z-10">
      <CinematicMotionEngine />
      <div className="animated-dark-bg pointer-events-none" aria-hidden="true">
        <div className="animated-dark-bg__grid" />
      </div>

      <header className="topbar fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-obsidian/95">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Norte One">
            <Image
              src={brandLogoSmall}
              width={48}
              height={48}
              alt="Logo Norte One"
              className="h-11 w-11 rounded-full border border-gold/30 object-cover shadow-sm sm:h-12 sm:w-12"
              loading="eager"
              priority
            />
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.28em]">Norte One</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-titanium sm:text-[11px] sm:tracking-[0.24em]">Tech Studio</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.025] p-1 text-sm text-soft/62 lg:flex">
            <a className="rounded-full px-4 py-2 transition hover:bg-white/[0.06] hover:text-soft" href="#sobre">Sobre</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-white/[0.06] hover:text-soft" href="#servicos">Serviços</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-white/[0.06] hover:text-soft" href="#portfolio">Portfólio</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-white/[0.06] hover:text-soft" href="#processo">Processo</a>
          </div>

          <a
            href="#contato"
            className="hidden rounded-full border border-white/10 bg-soft px-5 py-2.5 text-sm font-semibold text-obsidian shadow-sm transition hover:-translate-y-0.5 hover:bg-gold sm:inline-flex"
          >
            Solicitar orçamento
          </a>
        </nav>
      </header>

      <section id="inicio" className="hero-stage relative isolate px-4 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-screen lg:pt-36">
        <AdaptiveHeroScene />
        <div className="hero-stage__atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />
        <LazyMotion features={domAnimation}>
          <MotionConfig reducedMotion="user">
            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div>
                <m.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-graphite/90 px-4 py-2 text-sm text-soft/68 shadow-sm sm:mb-8"
                >
                  <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_rgba(200,169,107,0.9)]" />
                  Sites, IA e automações para empresas
                </m.div>

                <m.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-4xl font-display text-[clamp(2.45rem,5.25vw,5.55rem)] font-semibold leading-[0.96] tracking-normal"
                >
                  Sua empresa com presença digital de <span className="gold-text">alto padrão.</span>
                </m.h1>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5 max-w-2xl text-base leading-7 text-soft/68 sm:mt-8 sm:text-xl sm:leading-8"
                >
                  Criamos sites profissionais, chatbots e automações que fortalecem sua marca, melhoram o atendimento e abrem caminho para mais oportunidades.
                </m.p>

                <m.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row"
                >
                  <MagneticButton href="#contato">
                    Solicitar orçamento
                  </MagneticButton>
                  <MagneticButton href="#servicos" variant="secondary">
                    Ver soluções
                  </MagneticButton>
                </m.div>

                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.42, duration: 0.9 }}
                  className="mt-8 hidden max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-5 sm:mt-14 sm:grid sm:pt-6"
                >
                  {heroSignals.map(([title, text]) => (
                    <div key={title}>
                      <p className="font-display text-lg font-semibold text-soft">{title}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-titanium">{text}</p>
                    </div>
                  ))}
                </m.div>
              </div>

              <m.div
                initial={{ opacity: 0, scale: 0.98, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.92, ease: [0.16, 1, 0.3, 1] }}
              >
                <FloatingDashboard />
              </m.div>
            </div>
          </MotionConfig>
        </LazyMotion>
      </section>

      <section id="sobre" className="relative px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="section-rule mx-auto mb-12 max-w-7xl" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div data-cinematic>
            <SectionLabel>Para empresas exigentes</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Transformamos presença digital em confiança, desejo e contato comercial.
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-soft/58">
              Uma presença digital forte não é decoração. É uma parte estratégica da decisão de compra.
            </p>
          </div>
          <div data-cinematic className="glass-panel premium-surface rounded-[28px] p-7 sm:p-10">
            <p className="text-xl leading-9 text-soft/78">
              A NORTE ONE desenvolve experiências digitais para empresas que precisam parecer tão profissionais online quanto são na prática. Cada projeto une estratégia, design e tecnologia para tornar sua marca mais clara, confiável e pronta para vender melhor.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Autoridade", "uma imagem digital à altura do seu negócio"],
                ["Eficiência", "atendimento e processos mais inteligentes"],
                ["Conversão", "jornadas pensadas para gerar contato"]
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-graphite/70 p-4 shadow-sm">
                  <p className="font-display text-lg text-gold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-soft/62">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div data-cinematic className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Soluções</SectionLabel>
              <h2 className="font-display text-4xl font-semibold sm:text-6xl">O que sua empresa precisa para vender confiança no digital.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-soft/58">
              Soluções conectadas para elevar percepção, melhorar atendimento e deixar sua operação mais inteligente.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
              const featured = index < 2;

              return (
                <article
                  key={service.title}
                  className={`service-card group premium-border rounded-[24px] bg-graphite/90 p-6 shadow-panel ${
                    featured ? "xl:col-span-6" : "xl:col-span-4"
                  }`}
                >
                  <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-graphite/70">
                    <Image
                      src={assetPath(service.visual)}
                      alt={`Visual estratégico de ${service.title}`}
                      width={720}
                      height={520}
                      className={`w-full object-cover transition duration-700 group-hover:scale-[1.045] ${
                        featured ? "aspect-[1.8]" : "aspect-[1.55]"
                      }`}
                    />
                  </div>
                  <div className="mb-7 flex items-center justify-between">
                    <div className="rounded-2xl border border-gold/20 bg-gold/[0.08] p-3 text-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-titanium">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold/80">{service.eyebrow}</p>
                  <p className="mt-4 text-sm leading-7 text-soft/62">{service.summary}</p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-soft"
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

      <IntelligenceExperience />

      <section id="portfolio" className="overflow-hidden px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div data-cinematic className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Projetos conceito</SectionLabel>
              <h2 className="font-display text-4xl font-semibold sm:text-6xl">
                Como um projeto premium pode posicionar negócios de diferentes mercados.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-soft/62">
              Exemplos visuais de sites pensados para gerar percepção de valor, facilitar a decisão do cliente e transformar visitas em conversas.
            </p>
          </div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm leading-6 text-soft/58">
                Navegue pelos projetos e veja como cada segmento pode ganhar uma presença digital mais forte.
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {String(activePortfolio + 1).padStart(2, "0")} / {String(portfolioCases.length).padStart(2, "0")}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollPortfolio("previous")}
                disabled={activePortfolio === 0}
                className="interactive-lift inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-graphite/80 text-soft transition hover:border-gold/50 hover:text-gold disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Ver projeto anterior"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollPortfolio("next")}
                disabled={activePortfolio === portfolioCases.length - 1}
                className="interactive-lift inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-soft text-obsidian shadow-gold transition hover:bg-gold disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Ver próximo projeto"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="portfolio-carousel -mx-4 sm:-mx-8">
          <div ref={portfolioRef} onScroll={syncPortfolioPosition} className="portfolio-carousel__track" aria-label="Projetos conceito da Norte One">
            {portfolioCases.map((item) => (
              <article
                key={item.name}
                data-portfolio-card
                className="group w-[82vw] max-w-[760px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-graphite/95 p-3 shadow-panel sm:w-[640px] sm:p-4 lg:w-[720px]"
              >
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-graphite">
                  <Image
                    src={assetPath(item.image)}
                    alt={`Mockup premium do projeto ${item.name}`}
                    width={960}
                    height={620}
                    className="aspect-[1.55] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="grid gap-5 px-2 pb-3 pt-5 sm:grid-cols-[1fr_0.86fr] sm:px-3 sm:pb-4 sm:pt-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{item.segment}</p>
                      <span className="rounded-full border border-white/10 bg-graphite/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-titanium">
                        Conceito premium
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{item.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-soft/62">{item.scope}</p>
                  </div>
                  <div className="grid content-start gap-2">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {item.metrics.map((metric) => (
                        <div key={metric} className="rounded-2xl border border-gold/20 bg-gold/[0.07] px-3 py-3">
                          <p className="text-[11px] font-semibold leading-4 text-soft/74">{metric}</p>
                        </div>
                      ))}
                    </div>
                    {item.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-graphite/70 px-4 py-3 text-sm text-soft/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(200,169,107,0.75)]" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-1 flex max-w-7xl gap-2">
          {portfolioCases.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                const track = portfolioRef.current;
                const cards = track?.querySelectorAll<HTMLElement>("[data-portfolio-card]");
                const target = cards?.[index];

                if (!track || !target) {
                  return;
                }

                track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
                setActivePortfolio(index);
              }}
              className={`h-1 flex-1 rounded-full transition ${
                activePortfolio === index ? "bg-gold" : "bg-white/10 hover:bg-white/20"
              }`}
              aria-label={`Ver projeto ${item.name}`}
            />
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-cinematic>
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="font-display text-4xl font-semibold sm:text-6xl">Por que empresas escolhem a NORTE ONE para construir presença digital.</h2>
            <div className="mt-8 flex items-center gap-3 text-sm text-soft/58">
              <BadgeCheck className="h-5 w-5 text-gold" />
              Estratégia, design e execução em uma única experiência.
            </div>
          </div>
          <div className="premium-surface overflow-hidden rounded-[28px] border border-white/10 bg-graphite/55 px-5 sm:px-7">
            {differentiators.map((item, index) => (
              <div key={item} className="group flex gap-5 border-b border-white/[0.08] py-5 last:border-b-0 sm:py-6">
                <span className="font-display text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-7 text-soft/72 transition group-hover:text-soft">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div data-cinematic className="mb-14 max-w-3xl">
            <SectionLabel>Processo</SectionLabel>
            <h2 className="font-display text-4xl font-semibold sm:text-6xl">Uma entrega organizada, clara e segura do início ao lançamento.</h2>
          </div>

          <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block" />
            {process.map((step, index) => (
              <div key={step.title} className="process-step interactive-lift relative rounded-[24px] border border-white/10 bg-graphite/90 p-6 shadow-sm">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-obsidian text-gold">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-soft/58">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div data-cinematic className="cta-panel premium-border relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-graphite/95 px-5 py-14 text-center shadow-panel sm:rounded-[36px] sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-radial-gold opacity-80" />
          <div className="cta-panel__grid absolute inset-0" />
          <ScanLine className="absolute left-8 top-8 h-6 w-6 text-gold/60" />
          <div className="relative mx-auto max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.32em] text-gold">Próximo passo</p>
            <h2 className="font-display text-5xl font-semibold leading-tight sm:text-7xl">Sua empresa pode estar perdendo oportunidades por não transmitir a imagem certa.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-soft/66">
              Vamos construir uma presença digital mais profissional, persuasiva e preparada para transformar interesse em contato.
            </p>
            <div className="mt-10">
              <MagneticButton href="mailto:contato@norteone.com.br?subject=Quero%20solicitar%20um%20orçamento%20com%20a%20Norte%20One">
                Quero meu projeto profissional
              </MagneticButton>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-soft/52">
              {["Diagnóstico inicial", "Atendimento estratégico", "Projeto sob medida"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-gold" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={brandLogoSmall}
              alt="Logo Norte One"
              width={58}
              height={58}
              className="h-14 w-14 rounded-full border border-gold/30 object-cover"
            />
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.28em]">Norte One</p>
              <p className="mt-1 text-sm text-soft/58">Presença digital premium para empresas que querem crescer.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-soft/58">
            <a href="https://instagram.com" className="hover:text-gold">Instagram</a>
            <a href="https://linkedin.com" className="hover:text-gold">LinkedIn</a>
            <a href="mailto:contato@norteone.com.br" className="hover:text-gold">contato@norteone.com.br</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
