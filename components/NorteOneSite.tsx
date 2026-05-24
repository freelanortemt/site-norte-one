"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Cpu,
  Fingerprint,
  Globe2,
  MessageSquareText,
  Orbit,
  Palette,
  PanelsTopLeft,
  RadioTower,
  Rocket,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Zap
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/services";
import { assetPath, brandLogo } from "@/lib/site";

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
  "Design premium com percepção imediata de valor",
  "Inteligência artificial aplicada a vendas e atendimento",
  "Automações modernas para reduzir trabalho manual",
  "Suporte estratégico do conceito ao lançamento",
  "Experiência visual refinada em todos os dispositivos",
  "Foco real em autoridade, conversão e resultado"
];

const process = ["Estratégia", "Design", "Desenvolvimento", "Automação", "Lançamento"];

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
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={
        variant === "primary"
          ? "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-soft px-6 text-sm font-semibold text-obsidian shadow-gold transition hover:bg-white"
          : "group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 text-sm font-semibold text-soft shadow-sm backdrop-blur-xl transition hover:border-gold/50 hover:bg-white"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </motion.a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.07] px-3 py-1 text-xs font-medium uppercase tracking-[0.26em] text-gold">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function FloatingDashboard() {
  return (
    <motion.div
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 34, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="premium-border relative mx-auto w-full max-w-[560px] rounded-[28px] bg-white/70 p-3 shadow-panel backdrop-blur-2xl"
    >
      <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle,rgba(200,169,107,0.18),transparent_58%)] blur-3xl" />
      <div className="glass-panel overflow-hidden rounded-[22px]">
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#69db7c]" />
          </div>
          <div className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] text-gold">AI Operating Layer</div>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-black/10 bg-graphite/70 p-4">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs text-titanium">Pipeline digital</p>
                <p className="mt-1 font-display text-2xl font-semibold">+284%</p>
              </div>
              <div className="rounded-full bg-gold/15 p-2 text-gold">
                <Zap className="h-5 w-5" />
              </div>
            </div>
            <div className="flex h-32 items-end gap-2">
              {[42, 58, 47, 72, 64, 86, 76, 94].map((height, index) => (
                <motion.span
                  key={height}
                  initial={{ height: 12 }}
                  animate={{ height }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.08 }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-gold/35 to-gold"
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              ["Chatbot", "Lead qualificado", "98%"],
              ["Website", "Velocidade", "0.8s"],
              ["NFC", "Interações", "1.2k"]
            ].map(([label, status, metric]) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="rounded-2xl border border-black/10 bg-white/70 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-xs text-titanium">{status}</p>
                  </div>
                  <p className="font-display text-xl text-gold">{metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-black/10 p-4">
          <div className="rounded-2xl border border-gold/20 bg-gold/[0.08] p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/15 p-2 text-gold">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">IA Norte One</p>
                <p className="mt-1 text-sm leading-6 text-soft/70">
                  Analisei o perfil do visitante e recomendo uma proposta premium com site, chatbot e automação comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function NorteOneSite() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 90, damping: 24 });
  const springY = useSpring(cursorY, { stiffness: 90, damping: 24 });
  const heroRef = useRef<HTMLElement>(null);
  const y = useTransform(springY, [0, 900], [0, 46]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%"
            }
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef} className="relative overflow-hidden bg-obsidian text-soft [&>footer]:relative [&>footer]:z-10 [&>section]:relative [&>section]:z-10">
      <motion.div className="cursor-glow hidden lg:block" style={{ left: springX, top: springY }} />
      <div className="noise pointer-events-none fixed inset-0 z-50 opacity-[0.018]" />
      <div className="animated-dark-bg pointer-events-none" aria-hidden="true">
        <div className="animated-dark-bg__grid" />
        <div className="animated-dark-bg__particles" />
        <div className="animated-dark-bg__scan" />
      </div>
      <div className="tech-grid pointer-events-none absolute inset-x-0 top-0 z-[1] h-[980px] opacity-55" />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-black/[0.07] bg-obsidian/78 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Norte One">
            <Image
              src={brandLogo}
              width={48}
              height={48}
              alt="Logo Norte One"
              className="h-11 w-11 rounded-full border border-gold/30 object-cover shadow-sm sm:h-12 sm:w-12"
              priority
            />
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.28em]">Norte One</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-titanium sm:text-[11px] sm:tracking-[0.24em]">Tech Studio</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-soft/62 lg:flex">
            <a className="transition hover:text-soft" href="#sobre">Sobre</a>
            <a className="transition hover:text-soft" href="#servicos">Serviços</a>
            <a className="transition hover:text-soft" href="#demonstracao">Demo</a>
            <a className="transition hover:text-soft" href="#processo">Processo</a>
          </div>

          <a
            href="#contato"
            className="hidden rounded-full border border-black/10 bg-soft px-5 py-2.5 text-sm font-semibold text-obsidian shadow-sm transition hover:-translate-y-0.5 hover:bg-gold sm:inline-flex"
          >
            Falar agora
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative px-4 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-screen lg:pt-36">
        <motion.div style={{ y }} className="absolute right-[-180px] top-20 h-[480px] w-[480px] rounded-full border border-gold/20 opacity-40 blur-[1px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-soft/68 shadow-sm backdrop-blur-xl sm:mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_rgba(200,169,107,0.9)]" />
              Tecnologia, IA, Design e Resultados
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.08 }}
              className="max-w-4xl font-display text-[clamp(2.45rem,5.25vw,5.55rem)] font-semibold leading-[0.96] tracking-normal"
            >
              Tecnologia inteligente para empresas que querem <span className="gold-text">crescer.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.16 }}
              className="mt-5 max-w-2xl text-base leading-7 text-soft/68 sm:mt-8 sm:text-xl sm:leading-8"
            >
              Sites premium, IA, automações e soluções digitais modernas para negócios que querem autoridade e resultados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.24 }}
              className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row"
            >
              <MagneticButton href="#contato">
                Solicitar demonstração
              </MagneticButton>
              <MagneticButton href="#servicos" variant="secondary">
                Conhecer serviços
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.55 }}
              className="mt-8 hidden max-w-2xl grid-cols-3 gap-3 border-t border-black/10 pt-5 sm:mt-14 sm:grid sm:pt-6"
            >
              {["IA aplicada", "UX premium", "Automação"].map((item) => (
                <div key={item}>
                  <p className="text-xs uppercase tracking-[0.22em] text-titanium">{item}</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-soft">01</p>
                </div>
              ))}
            </motion.div>
          </div>

          <FloatingDashboard />
        </div>
      </section>

      <section id="sobre" className="relative px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div data-reveal>
            <SectionLabel>Sobre</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              A Norte One transforma presença digital em percepção de valor.
            </h2>
          </div>
          <div data-reveal className="glass-panel rounded-[28px] p-7 sm:p-10">
            <p className="text-xl leading-9 text-soft/78">
              Unimos design premium, inteligência artificial, automações e estratégia para criar experiências digitais que elevam marcas, simplificam operações e aceleram oportunidades comerciais.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Design", "interfaces memoráveis"],
                ["Inteligência", "IA conectada ao negócio"],
                ["Resultados", "presença que converte"]
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-black/10 bg-white/65 p-4 shadow-sm">
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
          <div data-reveal className="mb-12 max-w-3xl">
            <SectionLabel>Serviços</SectionLabel>
            <h2 className="font-display text-4xl font-semibold sm:text-6xl">Soluções digitais com acabamento de empresa global.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
              return (
                <motion.article
                  data-reveal
                  key={service.title}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="group premium-border rounded-[24px] bg-white/70 p-6 shadow-panel backdrop-blur-xl"
                >
                  <div className="mb-6 overflow-hidden rounded-2xl border border-black/10 bg-white/70">
                    <Image
                      src={assetPath(service.visual)}
                      alt={`Visual estratégico de ${service.title}`}
                      width={720}
                      height={520}
                      className="aspect-[1.55] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mb-7 flex items-center justify-between">
                    <div className="rounded-2xl border border-gold/20 bg-gold/[0.08] p-3 text-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs text-titanium">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-soft/62">{service.summary}</p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-soft"
                    aria-label={`Saiba mais sobre ${service.title}`}
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="demonstracao" className="px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>Demonstração visual</SectionLabel>
              <h2 className="font-display text-4xl font-semibold sm:text-6xl">Interfaces que parecem produto, não promessa.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-soft/62">
              Mockups premium para website, dashboard IA, chatbot, painel administrativo e cartão NFC, todos pensados para vender valor em segundos.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <div data-reveal className="glass-panel min-h-[440px] rounded-[28px] p-5 sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-titanium">Norte One Suite</p>
                  <p className="mt-1 font-display text-2xl font-semibold">Digital command center</p>
                </div>
                <Orbit className="h-7 w-7 text-gold" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm md:col-span-2">
                  <div className="h-44 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(200,169,107,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.86),rgba(239,236,230,0.7))]" />
                  <div className="mt-5 h-3 w-2/3 rounded-full bg-black/10" />
                  <div className="mt-3 h-3 w-1/2 rounded-full bg-black/5" />
                </div>
                <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm">
                  <Fingerprint className="mb-10 h-9 w-9 text-gold" />
                  <p className="font-display text-2xl font-semibold">NFC</p>
                  <p className="mt-3 text-sm leading-6 text-soft/62">Contato inteligente em um toque.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {["Website premium", "Chatbot ativo", "Painel admin"].map((item) => (
                  <div key={item} className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm">
                    <p className="text-sm font-medium">{item}</p>
                    <div className="mt-4 h-2 rounded-full bg-black/10">
                      <div className="h-2 w-4/5 rounded-full bg-gold" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal className="space-y-4">
              <div className="glass-panel rounded-[28px] p-6">
                <Image
                  src={brandLogo}
                  alt="Logo Norte One"
                  width={220}
                  height={220}
                  className="mx-auto w-40 rounded-full border border-gold/30 object-cover shadow-gold sm:w-48"
                />
                <p className="mt-6 text-center font-display text-2xl font-semibold">Brand signal premium</p>
              </div>
              <div className="rounded-[28px] border border-gold/20 bg-gold/[0.06] p-6">
                <WandSparkles className="h-7 w-7 text-gold" />
                <p className="mt-5 text-lg font-semibold">Motion discreto, brilho preciso e hierarquia clara.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal>
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="font-display text-4xl font-semibold sm:text-6xl">O nível de detalhe que muda a percepção da marca.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div data-reveal key={item} className="flex gap-4 rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-gold" />
                <p className="text-sm leading-7 text-soft/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 max-w-3xl">
            <SectionLabel>Processo</SectionLabel>
            <h2 className="font-display text-4xl font-semibold sm:text-6xl">Da estratégia ao lançamento com precisão.</h2>
          </div>

          <div className="relative grid gap-4 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block" />
            {process.map((step, index) => (
              <div data-reveal key={step} className="relative rounded-[24px] border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-obsidian text-gold">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold">{step}</h3>
                <p className="mt-4 text-sm leading-7 text-soft/58">
                  Etapa conduzida com clareza, refinamento visual e foco no impacto final para o cliente.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div data-reveal className="premium-border relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-white/80 px-5 py-14 text-center shadow-panel backdrop-blur-2xl sm:rounded-[36px] sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-radial-gold opacity-80" />
          <div className="relative mx-auto max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.32em] text-gold">Próximo nível</p>
            <h2 className="font-display text-5xl font-semibold leading-tight sm:text-7xl">Transforme sua presença digital.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-soft/66">
              Uma marca premium precisa de uma experiência digital que pareça tão forte quanto a solução que ela entrega.
            </p>
            <div className="mt-10">
              <MagneticButton href="mailto:contato@norteone.com.br?subject=Quero%20falar%20com%20a%20Norte%20One">
                Falar com a Norte One
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={brandLogo}
              alt="Logo Norte One"
              width={58}
              height={58}
              className="h-14 w-14 rounded-full border border-gold/30 object-cover"
            />
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.28em]">Norte One</p>
              <p className="mt-1 text-sm text-soft/58">Soluções inteligentes. Resultados reais.</p>
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
