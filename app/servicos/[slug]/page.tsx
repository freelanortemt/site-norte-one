import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { AmbientTechBackground } from "@/components/AmbientTechBackground";
import { CinematicMotionEngine } from "@/components/CinematicMotionEngine";
import { whatsappUrl } from "@/lib/contact";
import { getServiceBySlug, services } from "@/lib/services";
import { assetPath, brandLogo, brandLogoSmall } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const diagnosisUrl = "https://tally.so/r/Bz9gle";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Serviço não encontrado | Norte One"
    };
  }

  return {
    title: `${service.title} | Norte One`,
    description: service.summary,
    openGraph: {
      title: `${service.title} | Norte One`,
      description: service.summary,
      images: [
        {
          url: brandLogo,
          width: 220,
          height: 220,
          alt: "Logo Norte One"
        }
      ]
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-azul-norte text-off-white">
      <CinematicMotionEngine />
      <AmbientTechBackground />

      <header className="topbar fixed left-0 right-0 top-0 z-40 border-b border-off-white/10">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
          <Link href="/#inicio" className="flex items-center gap-3" aria-label="Norte One">
            <Image
              src={brandLogoSmall}
              width={46}
              height={46}
              alt="Logo Norte One"
              className="h-11 w-11 rounded-full border border-cobre/30 object-cover shadow-sm sm:h-12 sm:w-12"
              loading="eager"
              priority
            />
            <div data-cinematic>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.28em]">Norte One</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-cinza-pedra sm:text-[11px] sm:tracking-[0.24em]">Tech local</p>
            </div>
          </Link>

          <Link
            href="/#solucoes"
            className="interactive-lift inline-flex items-center gap-2 rounded-full border border-off-white/10 bg-grafite/90 px-3 py-2 text-xs font-semibold text-off-white shadow-sm transition hover:border-cobre/50 hover:bg-grafite hover:text-cobre sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Ver soluções
          </Link>
        </nav>
      </header>

      <section className="relative z-10 px-4 pb-12 pt-24 sm:px-8 sm:pb-20 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cobre/20 bg-cobre/[0.07] px-3 py-1 text-xs font-medium uppercase tracking-[0.26em] text-cobre">
                <Sparkles className="h-3.5 w-3.5" />
                Estrutura Norte One • {service.eyebrow}
              </div>
              <h1 className="max-w-4xl font-display text-[clamp(2.2rem,6vw,6rem)] font-semibold leading-[1.02]">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-azul-nevoa/72 sm:mt-7 sm:text-xl sm:leading-8">{service.description}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={diagnosisUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-off-white px-6 text-sm font-semibold text-azul-norte transition hover:-translate-y-0.5 hover:bg-cobre hover:text-off-white"
                >
                  Fazer diagnóstico
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={whatsappUrl(`Olá! Quero falar com a Norte One sobre ${service.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-off-white/12 bg-off-white/[0.06] px-6 text-sm font-semibold text-off-white transition hover:border-cobre/50 hover:bg-cobre/10"
                >
                  Falar pelo WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div data-cinematic className="premium-border premium-surface rounded-[32px] bg-grafite/95 p-4 shadow-panel sm:p-6">
              <Image
                src={assetPath(service.visual)}
                alt={`Visual premium de ${service.title}`}
                width={720}
                height={520}
                className="mb-6 aspect-[1.55] w-full rounded-[24px] border border-off-white/10 object-cover"
                priority
              />
              <p className="text-sm uppercase tracking-[0.26em] text-cinza-pedra">Indicado para</p>
              <p className="mt-4 text-2xl font-semibold leading-9">{service.idealFor}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.outcomes.slice(0, 4).map((outcome) => (
                  <div key={outcome} className="interactive-lift rounded-2xl border border-off-white/10 bg-azul-norte/60 p-4 shadow-sm transition">
                    <CheckCircle2 className="mb-4 h-5 w-5 text-cobre" />
                    <p className="text-sm leading-6 text-azul-nevoa/72">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-10 sm:px-8 sm:py-16">
        <div className="section-rule mx-auto mb-10 max-w-7xl" />
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article data-cinematic className="glass-panel premium-surface rounded-[28px] p-6 sm:p-8">
            <p className="mb-6 font-display text-2xl font-semibold">O que sua empresa recebe</p>
            <div className="space-y-4">
              {service.deliverables.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-azul-nevoa/72">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cobre" />
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article data-cinematic className="glass-panel premium-surface rounded-[28px] p-6 sm:p-8">
            <p className="mb-6 font-display text-2xl font-semibold">Como conduzimos</p>
            <div className="space-y-4">
              {service.process.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-off-white/10 bg-azul-norte/60 p-4 shadow-sm">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-cobre/25 bg-cobre/[0.08] text-sm text-cobre">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article data-cinematic className="premium-border premium-surface rounded-[28px] bg-grafite/95 p-6 shadow-panel sm:p-8">
            <p className="mb-6 font-display text-2xl font-semibold">Valor para o negócio</p>
            <p className="text-base leading-8 text-azul-nevoa/72">
              Uma solução mais profissional, clara e confiável para fortalecer sua imagem, melhorar a experiência do cliente e conduzir oportunidades com mais organização.
            </p>
            <a
              href={diagnosisUrl}
              target="_blank"
              rel="noreferrer"
              className="premium-cta mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-off-white px-6 text-sm font-semibold text-azul-norte shadow-gold transition hover:bg-cobre hover:text-off-white"
            >
              Fazer diagnóstico
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </section>

      <section className="relative z-10 px-4 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl border-t border-off-white/10 pt-10">
          <p className="mb-6 text-sm uppercase tracking-[0.28em] text-cinza-pedra">Outras soluções</p>
          <div data-cinematic className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/servicos/${item.slug}`}
                  className="interactive-lift rounded-2xl border border-off-white/10 bg-grafite/70 p-4 text-sm font-semibold shadow-sm transition hover:border-cobre/40 hover:bg-grafite hover:text-cobre"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
