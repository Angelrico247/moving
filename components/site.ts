export const site = {
  name: "MovIng",
  tagline: "Mudanzas sin estrés en Guadalajara",
  phoneDisplay: "33 1234 5678",
  phoneHref: "tel:+523312345678",
  // Cambia este número por el WhatsApp real (formato internacional, sin +)
  whatsapp: "523312345678",
  email: "hola@MovIng.mx",
  city: "Guadalajara, Jalisco",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Inicio", href: "#top" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Consejos", href: "#consejos" },
  { label: "Contacto", href: "#contacto" },
];

/** Fotos del sitio (Unsplash, licencia libre). Cámbialas por fotos propias cuando las tengas. */
const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=75`;
export const photos = {
  hero: u("1758523671826-d7f8217ffac3", 1920),
  express: u("1714647211902-bb711d643a17"),
  hogar: u("1758523671071-4e3c43d055e6"),
  total: u("1776885008664-68b2988373e6"),
  welcome: u("1758523670969-dd1b1254062d"),
  ask: u("1714647211923-a3881cd1300f"),
  reviews: u("1786396798391-8c3f330cf3a8", 1920),
  rug: u("1714647211955-95c3104dc418"),
  mattress: u("1769972557854-7eae6f95585b"),
  truck: u("1776885008664-68b2988373e6"),
  heavy: u("1698917414969-feade59e3343"),
  boxes: u("1766040923580-16ad32fae8b4"),
  plant: u("1758523671071-4e3c43d055e6"),
  storage: u("1707407087163-7ab35bca9ffc"),
  phone: u("1758523671285-9ff3f4e0ff38", 700),
};
