"use client";

import { useState, useEffect } from "react";
import { Whatsapp } from "./icons";
import { site, waLink } from "./site";

export default function FloatingWA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={waLink(`Hola ${site.name}, quiero cotizar mi mudanza.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition-all duration-500 hover:scale-110 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
      <Whatsapp className="relative h-7 w-7" />
    </a>
  );
}
