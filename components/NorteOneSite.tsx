"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { domAnimation, LazyMotion, m, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  CircleCheck,
  ClipboardCheck,
  Cpu,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  MapPin,
  MessageSquareText,
  Network,
  PanelsTopLeft,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
  type LucideIcon
} from "lucide-react";
import { AmbientTechBackground } from "@/components/AmbientTechBackground";
import { CinematicMotionEngine } from "@/components/CinematicMotionEngine";
import { whatsappDisplay, whatsappUrl } from "@/lib/contact";
import { brandLogoSmall } from "@/lib/site";

const diagnosisUrl = "https://tally.so/r/Bz9gle";

const heroSignals: Array<{ title: string; text: string; Icon: LucideIcon }> = [
  { title: "Confiança", text: "Sua empresa precisa parecer forte antes do primeiro contato.", Icon: ShieldCheck },
  { title: "Atendimento", text: "Interesse no WhatsApp precisa virar conversa organizada.", Icon: MessageSquareText },
  { title: "Processos", text: "Menos improviso para conduzir oportunidades com clareza.", Icon: Workflow },
  { title: "Oportunidades", text: "Contatos não podem esfriar por falta de resposta ou rotina.", Icon: LineChart },
  { title: "WhatsApp", text: "O principal canal de venda precisa ter direção e contexto.", Icon: Bot },
  { title: "Presença digital", text: "O cliente pesquisa, compara e decide antes de chamar.", Icon: Globe2 }
];

const painCards = [
  {
    title: "Sua empresa é boa, mas pode estar sendo percebida como comum.",
    text: "O cliente compara sua empresa antes de falar com você. Quando a presença digital não transmite valor, a decisão já começa enfraquecida.",
    Icon: Store
  },
  {
    title: "O WhatsApp recebe interesse, mas nem sempre vira oportunidade.",
    text: "Mensagens acumulam, retornos são esquecidos e contatos esfriam quando não existe um processo claro de atendimento.",
    Icon: MessageSquareText
  },
  {
    title: "Ferramentas soltas não resolvem uma operação desorganizada.",
    text: "Site, IA, automação e sistemas só geram valor quando fazem parte de uma estrutura conectada ao negócio.",
    Icon: Layers3
  },
  {
    title: "O improviso cobra caro.",
    text: "O maior custo muitas vezes não aparece em relatório: clientes que não chamaram, contatos que não voltaram e oportunidades que se perderam no caminho.",
    Icon: Gauge
  }
];

const structurePillars = [
  {
    title: "Presença",
    text: "Construímos uma presença digital que transmite confiança, clareza e valor antes do primeiro contato.",
    Icon: Globe2
  },
  {
    title: "Atendimento",
    text: "Organizamos como sua empresa recebe, responde e conduz oportunidades, com IA e automações quando fizer sentido.",
    Icon: Bot
  },
  {
    title: "Processos",
    text: "Estruturamos fluxos, dados, sistemas e etapas para reduzir improviso e tornar a operação mais organizada.",
    Icon: Workflow
  }
];

const improvisedItems = [
  "Instagram como única vitrine",
  "WhatsApp sem processo",
  "Site inexistente ou desatualizado",
  "Atendimento dependente de memória",
  "Planilhas soltas",
  "Retornos esquecidos",
  "Baixa percepção de valor",
  "Cliente sem clareza para decidir"
];

const structuredItems = [
  "Presença digital profissional",
  "Site orientado à confiança",
  "Atendimento mais claro e organizado",
  "IA e automações aplicadas com estratégia",
  "Processos conectados",
  "Melhor condução de oportunidades",
  "Mais percepção de valor",
  "Caminho claro para o cliente agir"
];

const solutionGroups = [
  {
    title: "Confiança e presença digital",
    text: "Para empresas que precisam ser percebidas com mais profissionalismo, clareza e valor antes do primeiro contato.",
    includes: ["Sites profissionais", "Landing pages", "Posicionamento digital", "Páginas institucionais", "Vitrine de serviços", "Estrutura para Google e WhatsApp"],
    Icon: PanelsTopLeft
  },
  {
    title: "Atendimento e conversão de oportunidades",
    text: "Para empresas que recebem interesse, mas precisam responder melhor, organizar contatos e reduzir oportunidades perdidas.",
    includes: ["IA no WhatsApp", "Chatbots", "Fluxos de atendimento", "Qualificação de contatos", "Respostas automáticas", "Direcionamento para equipe"],
    Icon: MessageSquareText
  },
  {
    title: "Processos e automações",
    text: "Para empresas que dependem muito de tarefas manuais e querem ganhar organização, velocidade e previsibilidade.",
    includes: ["Automações", "Integrações", "Organização de dados", "Fluxos internos", "Acompanhamento de retornos", "Rotinas operacionais"],
    Icon: Workflow
  },
  {
    title: "Sistemas e soluções sob medida",
    text: "Para empresas que precisam de uma solução própria para organizar operações, clientes, dados ou processos comerciais.",
    includes: ["Sistemas personalizados", "Painéis internos", "Aplicações web", "Aplicativos", "Experiências digitais", "Plataformas específicas"],
    Icon: Cpu
  }
];

const ownerBenefits = [
  ["Mais confiança antes do contato", "Sua empresa passa a causar uma primeira impressão mais forte e profissional."],
  ["Mais clareza para o cliente agir", "O visitante entende o que você oferece, por que confiar e qual o próximo passo."],
  ["Menos oportunidades perdidas", "O atendimento fica mais organizado e os contatos deixam de depender apenas de memória ou esforço manual."],
  ["Mais percepção de valor", "Sua empresa deixa de competir apenas por preço e começa a ser percebida com mais autoridade."],
  ["Mais organização comercial", "Atendimento, dados, retornos e processos passam a seguir uma lógica mais clara."],
  ["Mais base para crescer", "A tecnologia deixa de ser ferramenta solta e passa a sustentar uma operação mais preparada."]
];

const sinopHighlights = [
  "Atuação em Sinop-MT",
  "Visão de mercado local",
  "Atendimento próximo",
  "Tecnologia aplicada à realidade regional",
  "Estrutura profissional",
  "Soluções sob medida"
];

const process = [
  {
    title: "Diagnóstico",
    text: "Entendemos presença digital, atendimento, processos, gargalos e objetivos da empresa."
  },
  {
    title: "Estratégia",
    text: "Definimos quais pontos precisam ser estruturados primeiro para gerar mais valor."
  },
  {
    title: "Construção",
    text: "Criamos site, fluxos, automações, IA, sistemas ou páginas conforme a necessidade real."
  },
  {
    title: "Implementação",
    text: "Colocamos a estrutura em funcionamento de forma clara, prática e profissional."
  },
  {
    title: "Evolução",
    text: "Ajustamos, melhoramos e ampliamos a estrutura conforme a empresa amadurece."
  }
];

const diagnosticBenefits = [
  "Identificar pontos fracos na presença digital",
  "Entender gargalos no atendimento",
  "Avaliar oportunidades de automação",
  "Encontrar melhorias de processo",
  "Indicar o caminho mais estratégico antes de qualquer proposta"
];

function ButtonLink({
  children,
  href,
  variant = "primary"
}: {
  children: ReactNode;
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

function SectionLabel({ children }: { children: ReactNode }) {
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
      <h2 className="font-display text-[clamp(1.72rem,3.8vw,4.3rem)] font-semibold leading-[1.08] tracking-normal text-off-white">{title}</h2>
      {text ? <p className={align === "center" ? "mx-auto mt-4 max-w-2xl text-sm leading-7 text-azul-nevoa/72 sm:mt-5 sm:text-base sm:leading-8" : "mt-4 max-w-2xl text-sm leading-7 text-azul-nevoa/72 sm:mt-5 sm:text-base sm:leading-8"}>{text}</p> : null}
    </div>
  );
}

function HeroCommandCenter() {
  return (
    <div className="interface-shell premium-border relative mx-auto w-full max-w-[560px] rounded-[26px] bg-azul-norte/78 p-2.5 shadow-panel sm:rounded-[32px] sm:p-3">
      <div className="glass-panel overflow-hidden rounded-[21px] sm:rounded-[25px]">
        <div className="flex items-center justify-between gap-3 border-b border-off-white/10 px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex items-center gap-3">
            <Image src={brandLogoSmall} alt="Logo Norte One" width={40} height={40} className="h-9 w-9 rounded-full border border-cobre/30 object-cover sm:h-10 sm:w-10" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-off-white sm:text-xs sm:tracking-[0.24em]">Estrutura Norte One</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-cinza-pedra sm:text-[11px] sm:tracking-[0.18em]">Presença • Atendimento • Processos</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-cobre/25 bg-cobre/10 px-3 py-1 text-[11px] font-semibold text-cobre min-[420px]:flex">
            <span className="signal-dot" />
            Diagnóstico
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 p-3 sm:gap-3 sm:p-4">
          {heroSignals.map(({ title, text, Icon }) => (
            <div key={title} className="deep-panel rounded-2xl p-3 sm:p-4">
              <div className="flex items-center justify-between gap-2 sm:mb-4 sm:gap-3">
                <p className="text-[12px] font-semibold text-off-white sm:text-sm">{title}</p>
                <Icon className="h-4 w-4 shrink-0 text-cobre sm:h-5 sm:w-5" />
              </div>
              <p className="mt-2 hidden text-xs leading-5 text-azul-nevoa/62 sm:block">{text}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-off-white/10 p-3 sm:p-4">
          <div className="rounded-2xl border border-cobre/24 bg-cobre/[0.08] p-3 sm:p-4">
            <p className="text-sm font-semibold text-off-white">O problema raramente é uma ferramenta isolada.</p>
            <p className="mt-2 text-xs leading-5 text-azul-nevoa/72 sm:text-sm sm:leading-6">
              O que muda resultado é conectar percepção, atendimento e processo comercial em uma estrutura prática.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MechanismMap() {
  return (
    <div className="network-map premium-border">
      <div className="network-node left-[8%] top-[18%]">
        <Globe2 className="h-4 w-4 text-cobre" />
        Presença
      </div>
      <div className="network-node right-[8%] top-[24%]">
        <MessageSquareText className="h-4 w-4 text-cobre" />
        Atendimento
      </div>
      <div className="network-node bottom-[20%] left-[14%]">
        <Workflow className="h-4 w-4 text-cobre" />
        Processos
      </div>
      <div className="network-node bottom-[14%] right-[12%]">
        <LineChart className="h-4 w-4 text-cobre" />
        Oportunidades
      </div>
      <div className="absolute left-1/2 top-1/2 z-[1] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cobre/35 bg-azul-norte/84 text-center shadow-gold">
        <Image src={brandLogoSmall} alt="Logo Norte One" width={58} height={58} className="h-[58px] w-[58px] rounded-full object-cover" />
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-cobre">Estrutura</p>
      </div>
    </div>
  );
}

export function NorteOneSite() {
  return (
    <main className="relative overflow-hidden bg-azul-norte text-off-white [&>footer]:relative [&>footer]:z-10 [&>section]:relative [&>section]:z-10">
      <CinematicMotionEngine />
      <AmbientTechBackground />

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
              <p className="text-[10px] uppercase tracking-[0.18em] text-cinza-pedra sm:text-[11px] sm:tracking-[0.24em]">Tech local</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-off-white/[0.08] bg-off-white/[0.035] p-1 text-sm text-azul-nevoa/68 lg:flex">
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#problema">Problema</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#estrutura">Estrutura</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#solucoes">Soluções</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#diagnostico">Diagnóstico</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-off-white/[0.07] hover:text-off-white" href="#contato">Contato</a>
          </div>

          <a
            href={diagnosisUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-off-white/10 bg-off-white px-4 py-2 text-xs font-semibold text-azul-norte shadow-sm transition hover:-translate-y-0.5 hover:bg-cobre hover:text-off-white sm:min-h-11 sm:px-5 sm:text-sm"
          >
            Fazer diagnóstico
          </a>
        </nav>
      </header>

      <section id="inicio" className="hero-stage relative isolate px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:min-h-screen lg:pt-28">
        <div className="hero-stage__atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />
        <LazyMotion features={domAnimation}>
          <MotionConfig reducedMotion="user">
            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div>
                <m.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-5 inline-flex items-center gap-3 rounded-full border border-off-white/10 bg-azul-norte/70 px-4 py-2 text-sm text-azul-nevoa/76 shadow-sm sm:mb-6"
                >
                  <span className="signal-dot" />
                  Tecnologia estratégica para empresas locais
                </m.div>

                <m.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-5xl font-display text-[clamp(2.1rem,5.1vw,5.35rem)] font-semibold leading-[1.02] tracking-normal text-off-white"
                >
                  Sua empresa pode estar perdendo clientes antes mesmo da <span className="copper-text">primeira conversa.</span>
                </m.h1>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5 max-w-2xl text-base leading-7 text-azul-nevoa/78 sm:mt-6 sm:text-lg sm:leading-8"
                >
                  A Norte One estrutura presença digital, atendimento e processos para empresas locais transmitirem mais confiança, responderem melhor e venderem com mais organização.
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 max-w-2xl border-l border-cobre/40 pl-4 text-sm leading-7 text-azul-nevoa/62 sm:text-base"
                >
                  O diferencial está em conectar percepção, atendimento e processo comercial em uma estrutura simples de operar.
                </m.p>

                <m.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row"
                >
                  <ButtonLink href={diagnosisUrl}>Fazer diagnóstico da minha empresa</ButtonLink>
                  <ButtonLink href="#estrutura" variant="secondary">
                    Entender como funciona
                  </ButtonLink>
                </m.div>

                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.42, duration: 0.9 }}
                  className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-azul-nevoa/56"
                >
                  {["Diagnóstico rápido", "Estratégia sob medida", "Tecnologia aplicada ao seu negócio"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-cobre" />
                      {item}
                    </span>
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

      <section id="problema" className="px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div className="section-rule mx-auto mb-12 max-w-7xl" />
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Dor real do negócio"
            title="O problema não é falta de ferramenta. É falta de estrutura."
            text="Muitas empresas já têm Instagram, WhatsApp, anúncios ou site. Mesmo assim, perdem oportunidades porque esses pontos não trabalham juntos: a presença não transmite valor, o atendimento depende de esforço manual e os processos ficam espalhados."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {painCards.map(({ title, text, Icon }) => (
              <article key={title} data-cinematic className="deep-panel interactive-lift rounded-[28px] p-6">
                <Icon className="mb-8 h-6 w-6 text-cobre" />
                <h3 className="font-display text-xl font-semibold text-off-white sm:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-azul-nevoa/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estrutura" className="px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div data-cinematic>
            <SectionLabel>Categoria estratégica</SectionLabel>
            <h2 className="font-display text-[clamp(1.72rem,3.8vw,4.3rem)] font-semibold leading-[1.08]">
              Tecnologia estratégica para empresas locais venderem melhor.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-azul-nevoa/72 sm:mt-5 sm:text-base sm:leading-8">
              Antes de indicar qualquer solução, entendemos o que está travando a percepção, o atendimento e os processos da sua empresa. A tecnologia entra depois, com função clara.
            </p>

            <div className="mt-8 rounded-[30px] border border-cobre/24 bg-cobre/[0.08] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cobre">Mecanismo próprio</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-off-white">Estrutura Norte One</h3>
              <p className="mt-3 text-sm leading-7 text-azul-nevoa/72">Presença, Atendimento e Processos trabalhando juntos.</p>
            </div>
          </div>

          <div data-cinematic>
            <MechanismMap />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3">
          {structurePillars.map(({ title, text, Icon }) => (
            <article key={title} data-cinematic className="service-card premium-border rounded-[30px] bg-azul-norte/74 p-6 shadow-panel">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-cobre/24 bg-cobre/[0.1] text-cobre">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-off-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-azul-nevoa/66">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="improviso" className="px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Contra o improviso"
            title="O verdadeiro concorrente pode não ser outra empresa. Pode ser o improviso."
            text="Quando presença, atendimento e operação não conversam entre si, o cliente sente insegurança e oportunidades se perdem no caminho."
            align="center"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article data-cinematic className="rounded-[32px] border border-off-white/10 bg-off-white/[0.045] p-6">
              <p className="mb-6 font-display text-2xl font-semibold text-off-white">Jeito improvisado</p>
              <div className="grid gap-3">
                {improvisedItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-off-white/10 bg-azul-norte/55 px-4 py-3 text-sm text-azul-nevoa/72">
                    <span className="h-1.5 w-1.5 rounded-full bg-cinza-pedra" />
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article data-cinematic className="premium-border premium-surface rounded-[32px] bg-azul-norte/78 p-6 shadow-panel">
              <p className="mb-6 font-display text-2xl font-semibold text-off-white">Estrutura Norte One</p>
              <div className="grid gap-3">
                {structuredItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-cobre/20 bg-cobre/[0.07] px-4 py-3 text-sm text-azul-nevoa/78">
                    <Check className="h-4 w-4 flex-none text-cobre" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="solucoes" className="px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Soluções por resultado"
              title="A solução certa começa pelo gargalo certo."
              text="Cada entrega resolve um ponto específico da jornada do cliente ou da operação da empresa, sem tecnologia solta."
            />
            <ButtonLink href={diagnosisUrl} variant="secondary">
              Fazer diagnóstico
            </ButtonLink>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {solutionGroups.map(({ title, text, includes, Icon }) => (
              <article key={title} data-cinematic className="service-card premium-border rounded-[30px] bg-azul-norte/74 p-6 shadow-panel">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div className="rounded-2xl border border-cobre/24 bg-cobre/[0.1] p-3 text-cobre">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cinza-pedra">Resultado</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-off-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-azul-nevoa/68">{text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {includes.map((item) => (
                    <span key={item} className="rounded-full border border-off-white/10 bg-off-white/[0.045] px-3 py-1.5 text-xs text-azul-nevoa/72">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Para o dono da empresa"
            title="O que muda quando sua empresa deixa de parecer improvisada."
            align="center"
          />
          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {ownerBenefits.map(([title, text]) => (
              <div key={title} data-cinematic className="deep-panel interactive-lift rounded-[28px] p-6">
                <ShieldCheck className="mb-8 h-6 w-6 text-cobre" />
                <h3 className="font-display text-xl font-semibold sm:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-azul-nevoa/66">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sinop" className="px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div data-cinematic>
            <SectionLabel>Sinop MT e região</SectionLabel>
            <h2 className="font-display text-[clamp(1.72rem,3.8vw,4.3rem)] font-semibold leading-[1.08]">
              Empresas locais competem com o padrão das grandes marcas digitais.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-azul-nevoa/72 sm:mt-5 sm:text-base sm:leading-8">
              Hoje, o cliente de Sinop e região também pesquisa, compara, avalia e decide com base na percepção digital. Uma empresa local pode entregar muito bem, mas precisa se apresentar com clareza e profissionalismo para não perder espaço.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-azul-nevoa/62">
              A Norte One nasce com foco em empresas locais que querem usar tecnologia de forma prática, estratégica e acessível, sem depender de equipes complexas ou soluções distantes da realidade do negócio.
            </p>
          </div>
          <div data-cinematic className="premium-border premium-surface rounded-[34px] bg-azul-norte/74 p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-cobre">
              <MapPin className="h-5 w-5" />
              Norte de Mato Grosso
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {sinopHighlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-off-white/10 bg-off-white/[0.045] p-4">
                  <CircleCheck className="mt-0.5 h-4 w-4 flex-none text-cobre" />
                  <p className="text-sm leading-6 text-azul-nevoa/72">{item}</p>
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

      <section id="processo" className="px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Processo Norte One"
              title="Antes de indicar uma solução, entendemos onde sua empresa está perdendo oportunidades."
            />
            <ButtonLink href={diagnosisUrl} variant="secondary">
              Fazer diagnóstico da minha empresa
            </ButtonLink>
          </div>

          <div className="relative mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-cobre/50 to-transparent lg:block" />
            {process.map((step, index) => (
              <div key={step.title} data-cinematic className="process-step interactive-lift relative rounded-[28px] border border-off-white/10 bg-azul-norte/78 p-6 shadow-sm">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-cobre/30 bg-cobre/10 text-cobre">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-azul-nevoa/66">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostico" className="px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div data-cinematic className="premium-border premium-surface mx-auto grid max-w-7xl gap-8 rounded-[36px] bg-azul-norte/80 p-6 shadow-panel sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <div>
            <SectionLabel>Diagnóstico Digital Norte One</SectionLabel>
            <h2 className="font-display text-[clamp(1.9rem,4vw,4.8rem)] font-semibold leading-[1.06] text-off-white">
              Descubra onde sua empresa pode estar perdendo oportunidades.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-azul-nevoa/72 sm:text-base sm:leading-8">
              Criamos um diagnóstico rápido para entender como sua empresa está posicionada hoje, como atende seus clientes e quais processos podem ser melhorados com tecnologia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={diagnosisUrl}>Responder diagnóstico agora</ButtonLink>
            </div>
            <p className="mt-5 text-xs text-azul-nevoa/52">Leva poucos minutos • Sem compromisso • Análise inicial estratégica</p>
          </div>

          <div className="grid content-center gap-3">
            {diagnosticBenefits.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-off-white/10 bg-off-white/[0.045] p-4 text-sm text-azul-nevoa/76">
                <SearchCheck className="h-4 w-4 flex-none text-cobre" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-4 py-12 sm:px-8 sm:py-20 lg:py-24">
        <div data-cinematic className="cta-panel premium-border relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-azul-norte/86 px-5 py-14 text-center shadow-panel sm:rounded-[42px] sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-radial-gold opacity-90" />
          <div className="cta-panel__grid absolute inset-0" />
          <ClipboardCheck className="absolute left-8 top-8 h-6 w-6 text-cobre/70" />
          <div className="relative mx-auto max-w-4xl">
            <Image src={brandLogoSmall} alt="Logo Norte One" width={82} height={82} className="mx-auto mb-8 h-[82px] w-[82px] rounded-full border border-cobre/35 object-cover" />
            <p className="mb-5 text-sm uppercase tracking-[0.32em] text-cobre">Próximo passo</p>
            <h2 className="font-display text-[clamp(1.9rem,4.2vw,4.8rem)] font-semibold leading-[1.08]">
              Sua empresa pode ser percebida com o valor que realmente tem.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-azul-nevoa/72 sm:text-base sm:leading-8">
              A Norte One une estratégia, presença digital e tecnologia para ajudar empresas locais a atenderem melhor, organizarem processos e venderem com mais confiança.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={diagnosisUrl}>Fazer diagnóstico da minha empresa</ButtonLink>
              <ButtonLink href={whatsappUrl("Olá! Quero falar com a Norte One sobre presença digital, atendimento e processos.")} variant="secondary">
                Falar com a Norte One pelo WhatsApp
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-azul-nevoa/56">
              {["Presença digital", "Atendimento", "Processos", "Tecnologia"].map((item) => (
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
              <p className="mt-1 text-sm text-azul-nevoa/58">Tecnologia estratégica para empresas locais.</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cinza-pedra">Sinop-MT • Presença digital • Atendimento • Processos • Tecnologia</p>
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
