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
    <main className="relative min-h-screen overflow-hidden bg-obsidian text-soft">
      <CinematicMotionEngine />
      <AmbientTechBackground />

      <header className="topbar fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-obsidian/95">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
          <Link href="/#inicio" className="flex items-center gap-3" aria-label="Norte One">
            <Image
              src={brandLogoSmall}
              width={46}
              height={46}
              alt="Logo Norte One"
              className="h-11 w-11 rounded-full border border-gold/30 object-cover shadow-sm sm:h-12 sm:w-12"
              loading="eager"
              priority
            />
            <div data-cinematic>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.28em]">Norte One</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-titanium sm:text-[11px] sm:tracking-[0.24em]">Tech Studio</p>
            </div>
          </Link>

          <Link
            href="/#servicos"
            className="interactive-lift inline-flex items-center gap-2 rounded-full border border-white/10 bg-graphite/90 px-3 py-2 text-xs font-semibold text-soft shadow-sm transition hover:border-gold/50 hover:bg-graphite hover:text-gold sm:px-5 sm:py-2.5 sm:text-sm"
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.07] px-3 py-1 text-xs font-medium uppercase tracking-[0.26em] text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                {service.eyebrow}
              </div>
              <h1 className="max-w-4xl font-display text-[clamp(2.7rem,6vw,6.4rem)] font-semibold leading-[0.95]">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-soft/70 sm:mt-7 sm:text-xl sm:leading-8">{service.description}</p>
            </div>

            <div data-cinematic className="premium-border premium-surface rounded-[32px] bg-graphite/95 p-4 shadow-panel sm:p-6">
              <Image
                src={assetPath(service.visual)}
                alt={`Visual premium de ${service.title}`}
                width={720}
                height={520}
                className="mb-6 aspect-[1.55] w-full rounded-[24px] border border-white/10 object-cover"
                priority
              />
              <p className="text-sm uppercase tracking-[0.26em] text-titanium">Indicado para</p>
              <p className="mt-4 text-2xl font-semibold leading-9">{service.idealFor}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.outcomes.slice(0, 4).map((outcome) => (
                  <div key={outcome} className="interactive-lift rounded-2xl border border-white/10 bg-graphite/70 p-4 shadow-sm transition">
                    <CheckCircle2 className="mb-4 h-5 w-5 text-gold" />
                    <p className="text-sm leading-6 text-soft/72">{outcome}</p>
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
                <div key={item} className="flex gap-3 text-sm leading-6 text-soft/70">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article data-cinematic className="glass-panel premium-surface rounded-[28px] p-6 sm:p-8">
            <p className="mb-6 font-display text-2xl font-semibold">Como conduzimos</p>
            <div className="space-y-4">
              {service.process.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-graphite/70 p-4 shadow-sm">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-gold/25 bg-gold/[0.08] text-sm text-gold">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article data-cinematic className="premium-border premium-surface rounded-[28px] bg-graphite/95 p-6 shadow-panel sm:p-8">
            <p className="mb-6 font-display text-2xl font-semibold">Valor para o negócio</p>
            <p className="text-base leading-8 text-soft/68">
              Uma solução mais profissional, clara e confiável para fortalecer sua imagem, melhorar a experiência do cliente e aumentar a chance de contato comercial.
            </p>
            <a
              href={whatsappUrl(`Olá! Gostaria de solicitar um orçamento para ${service.title}.`)}
              target="_blank"
              rel="noreferrer"
              className="premium-cta mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-soft px-6 text-sm font-semibold text-obsidian shadow-gold transition hover:bg-gold"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </section>

      <section className="relative z-10 px-4 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <p className="mb-6 text-sm uppercase tracking-[0.28em] text-titanium">Outras soluções</p>
          <div data-cinematic className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/servicos/${item.slug}`}
                  className="interactive-lift rounded-2xl border border-white/10 bg-graphite/70 p-4 text-sm font-semibold shadow-sm transition hover:border-gold/40 hover:bg-graphite hover:text-gold"
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
