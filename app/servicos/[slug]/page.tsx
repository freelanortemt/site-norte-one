import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { getServiceBySlug, services } from "@/lib/services";

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
          url: "/brand/norte-one-logo.jpeg",
          width: 1254,
          height: 1254,
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
      <div className="animated-dark-bg pointer-events-none" aria-hidden="true">
        <div className="animated-dark-bg__grid" />
        <div className="animated-dark-bg__particles" />
        <div className="animated-dark-bg__scan" />
      </div>
      <div className="noise pointer-events-none fixed inset-0 z-50 opacity-[0.035]" />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/[0.07] bg-obsidian/62 backdrop-blur-2xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/#inicio" className="flex items-center gap-3" aria-label="Norte One">
            <Image
              src="/brand/norte-one-logo.jpeg"
              width={44}
              height={44}
              alt="Logo Norte One"
              className="rounded-full border border-gold/30 object-cover"
              priority
            />
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.28em]">Norte One</p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-titanium">Tech Studio</p>
            </div>
          </Link>

          <Link
            href="/#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-5 py-2.5 text-sm font-semibold text-soft backdrop-blur-xl transition hover:border-gold/50 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar aos serviços
          </Link>
        </nav>
      </header>

      <section className="relative z-10 px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.07] px-3 py-1 text-xs font-medium uppercase tracking-[0.26em] text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                {service.eyebrow}
              </div>
              <h1 className="max-w-4xl font-display text-[clamp(3rem,6vw,6.4rem)] font-semibold leading-[0.95]">
                {service.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-soft/70 sm:text-xl">{service.description}</p>
            </div>

            <div className="premium-border rounded-[32px] bg-white/[0.04] p-6 shadow-panel backdrop-blur-2xl sm:p-8">
              <p className="text-sm uppercase tracking-[0.26em] text-titanium">Ideal para</p>
              <p className="mt-4 text-2xl font-semibold leading-9">{service.idealFor}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.outcomes.slice(0, 4).map((outcome) => (
                  <div key={outcome} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <CheckCircle2 className="mb-4 h-5 w-5 text-gold" />
                    <p className="text-sm leading-6 text-soft/72">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="glass-panel rounded-[28px] p-6 sm:p-8">
            <p className="mb-6 font-display text-2xl font-semibold">O que entregamos</p>
            <div className="space-y-4">
              {service.deliverables.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-soft/70">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[28px] p-6 sm:p-8">
            <p className="mb-6 font-display text-2xl font-semibold">Processo</p>
            <div className="space-y-4">
              {service.process.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-gold/25 bg-gold/[0.08] text-sm text-gold">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="premium-border rounded-[28px] bg-[#111115]/80 p-6 sm:p-8">
            <p className="mb-6 font-display text-2xl font-semibold">Resultado esperado</p>
            <p className="text-base leading-8 text-soft/68">
              Um projeto com aparência premium, estrutura clara e execução técnica para aumentar confiança, gerar desejo e facilitar a decisão do cliente.
            </p>
            <Link
              href="mailto:contato@norteone.com.br?subject=Quero%20falar%20sobre%20um%20serviço%20da%20Norte%20One"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-soft px-6 text-sm font-semibold text-obsidian shadow-gold transition hover:bg-white"
            >
              Solicitar proposta
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <p className="mb-6 text-sm uppercase tracking-[0.28em] text-titanium">Outras soluções</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/servicos/${item.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold transition hover:border-gold/40 hover:text-gold"
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
