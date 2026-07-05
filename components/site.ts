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
  { label: "Paquetes", href: "#paquetes" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#proceso" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Preguntas", href: "#faq" },
];
