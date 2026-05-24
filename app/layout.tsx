import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://norteone.com.br"),
  title: "Norte One | Tecnologia inteligente para empresas que querem crescer",
  description:
    "Sites premium, IA, automações, chatbots inteligentes, cartões NFC, branding digital e soluções tecnológicas para empresas.",
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
    title: "Norte One | Tecnologia, IA, Design e Resultados",
    description:
      "Soluções inteligentes para empresas que querem autoridade, presença digital e crescimento.",
    url: "https://norteone.com.br",
    siteName: "Norte One",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/brand/norte-one-logo.jpeg",
        width: 1254,
        height: 1254,
        alt: "Logo Norte One"
      }
    ]
  },
  icons: {
    icon: "/brand/norte-one-logo.jpeg",
    apple: "/brand/norte-one-logo.jpeg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
