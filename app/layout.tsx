import type { Metadata } from "next";
import { Raleway, Barlow } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EnRuta · Mudanzas sin estrés en Guadalajara",
  description:
    "Paquetes de mudanza por horas en Guadalajara: camión, cuadrilla y seguro incluidos. Cotiza tu mudanza local o foránea en minutos.",
  keywords: ["mudanzas guadalajara", "fletes guadalajara", "mudanza por horas", "camión de mudanza", "servicio de mudanza zapopan"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "EnRuta · Mudanzas sin estrés en Guadalajara",
    description:
      "Paquetes de mudanza por horas. Camión, cuadrilla y seguro incluidos. Precio cerrado, sin sorpresas.",
    type: "website",
    locale: "es_MX",
    siteName: "EnRuta Mudanzas",
  },
  twitter: {
    card: "summary_large_image",
    title: "EnRuta · Mudanzas sin estrés en Guadalajara",
    description: "Paquetes de mudanza por horas. Camión, cuadrilla y seguro incluidos.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "EnRuta Mudanzas",
  description:
    "Paquetes de mudanza por horas en Guadalajara. Camión, cuadrilla y seguro incluidos. Precio cerrado, sin sorpresas.",
  url: "https://enruta.mx",
  telephone: "+52-33-1234-5678",
  email: "hola@enruta.mx",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "400",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${raleway.variable} ${barlow.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
