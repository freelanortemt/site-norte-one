import type { Metadata } from "next";
import "./globals.css";
import { brandLogo } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://norteone.com.br"),
  title: "Norte One | Sites, IA e automações para empresas",
  description:
    "Presença digital premium para empresas que precisam transmitir autoridade, melhorar o atendimento e gerar mais oportunidades comerciais.",
  keywords: [
    "Norte One",
    "sites premium",
    "inteligência artificial",
    "automações",
    "chatbots",
    "cartão NFC",
    "branding digital"
  ],
  authors: [{ name: "Norte One" }],
  openGraph: {
    title: "Norte One | Presença digital premium para empresas",
    description:
      "Sites profissionais, IA, chatbots, automações e soluções digitais para empresas que querem parecer mais fortes e vender com mais confiança.",
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
