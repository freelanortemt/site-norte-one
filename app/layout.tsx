import type { Metadata } from "next";
import "./globals.css";
import { brandLogo } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://norteone.com.br"),
  title: "Norte One | Tecnologia estratégica para empresas locais",
  description:
    "A Norte One estrutura presença digital, atendimento e processos para empresas locais transmitirem mais confiança, responderem melhor e venderem com mais organização.",
  keywords: [
    "Norte One",
    "tecnologia estratégica",
    "empresas locais",
    "presença digital",
    "atendimento com IA",
    "automação de processos",
    "sistemas para empresas",
    "diagnóstico digital",
    "Sinop MT"
  ],
  authors: [{ name: "Norte One" }],
  openGraph: {
    title: "Norte One | Tecnologia estratégica para empresas locais",
    description:
      "Presença digital, atendimento e processos estruturados para empresas locais deixarem de perder oportunidades.",
    url: "https://norteone.com.br",
    siteName: "Norte One",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: brandLogo,
        width: 220,
        height: 220,
        alt: "Logo Norte One"
      }
    ]
  },
  icons: {
    icon: brandLogo,
    apple: brandLogo
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
