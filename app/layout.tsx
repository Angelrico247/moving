import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { IntroProvider } from "@/components/IntroLoader";
import "./globals.css";
import DemoNotice from "@/components/DemoNotice";

// Poppins: títulos, menú y botones (como el tema MoveMe). Roboto Slab: texto corrido.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Roboto Slab va alojada en el proyecto (fuente variable 300–500): la descarga desde Google en CI fallaba.
const robotoSlab = localFont({
  src: "./fonts/roboto-slab-latin.woff2",
  weight: "300 500",
  style: "normal",
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MovIng · Mudanzas sin estrés en Guadalajara",
  description:
    "Paquetes de mudanza por horas en Guadalajara: camión, cuadrilla y seguro incluidos. Cotiza tu mudanza local o foránea en minutos.",
  keywords: ["mudanzas guadalajara", "fletes guadalajara", "mudanza por horas", "camión de mudanza", "servicio de mudanza zapopan"],
  robots: { index: false, follow: false },
  openGraph: {
    title: "MovIng · Mudanzas sin estrés en Guadalajara",
    description:
      "Paquetes de mudanza por horas. Camión, cuadrilla y seguro incluidos. Precio cerrado, sin sorpresas.",
    type: "website",
    locale: "es_MX",
    siteName: "MovIng Mudanzas",
  },
  twitter: {
    card: "summary_large_image",
    title: "MovIng · Mudanzas sin estrés en Guadalajara",
    description: "Paquetes de mudanza por horas. Camión, cuadrilla y seguro incluidos.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "MovIng Mudanzas",
  description:
    "Paquetes de mudanza por horas en Guadalajara. Camión, cuadrilla y seguro incluidos. Precio cerrado, sin sorpresas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  areaServed: [
    { "@type": "City", name: "Guadalajara" },
    { "@type": "City", name: "Zapopan" },
    { "@type": "City", name: "Tlaquepaque" },
    { "@type": "City", name: "Tonalá" },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} ${robotoSlab.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-6 focus:py-3 focus:font-display focus:text-sm focus:font-semibold focus:text-heading"
        >
          Saltar al contenido
        </a>
        <IntroProvider>{children}</IntroProvider>
        <DemoNotice />
      </body>
    </html>
  );
}
