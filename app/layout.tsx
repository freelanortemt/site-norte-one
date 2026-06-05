import type { Metadata } from "next";
import "./globals.css";
import { brandLogo } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://norteone.com.br"),
  title: "Norte One | Tecnologia, posicionamento e presença digital",
  description:
    "Tecnologia, sites premium, IA, automações e posicionamento digital para empresas que querem transmitir valor, atender melhor e gerar mais oportunidades.",
  keywords: [
    "Norte One",
    "sites premium",
    "inteligência artificial",
    "automações",
    "chatbots",
    "aplicativos",
    "sistemas web",
    "cartão NFC",
    "branding digital",
    "Sinop MT"
  ],
  authors: [{ name: "Norte One" }],
  openGraph: {
    title: "Norte One | Tecnologia premium para empresas",
    description:
      "Sites premium, IA, automações e experiências digitais para empresas que querem ser percebidas como escolha certa.",
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
