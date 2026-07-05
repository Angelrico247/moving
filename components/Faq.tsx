"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Qué incluye el precio del paquete?",
    a: "Camión, cuadrilla, cobijas y cinchos para proteger tus muebles, y el seguro de carga (en Hogar y Total). No hay cuotas escondidas: lo que cotizas es lo que pagas.",
  },
  {
    q: "¿Y si me paso de las horas contratadas?",
    a: "No hay problema. Cada hora extra tiene un precio fijo desde $290 y la apruebas tú antes de continuar. Nunca cobramos algo sin avisarte.",
  },
  {
    q: "¿Hacen mudanzas foráneas fuera de Guadalajara?",
    a: "Sí. Salimos a otras ciudades del país con el paquete Total. Te damos fecha de entrega cerrada y seguimiento durante el traslado.",
  },
  {
    q: "¿Empacan mis cosas o yo las empaco?",
    a: "Como prefieras. Puedes empacar tú para ahorrar, o contratar nuestro empaque profesional con cajas, burbuja y etiquetado por cuarto.",
  },
  {
    q: "¿Cómo aparto mi fecha?",
    a: "Cotizas por WhatsApp o con el formulario, confirmamos disponibilidad y apartas con un anticipo. El resto lo liquidas el día de la mudanza.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-deep">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Antes de que preguntes
          </h2>
        </div>

        <div className="mt-12 divide-y divide-line rounded-3xl border border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-bold text-ink">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-ink transition-transform ${
                      isOpen ? "rotate-45 bg-amber border-amber" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-slate">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
