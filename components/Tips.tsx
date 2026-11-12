"use client";

import { useRef, useState } from "react";
import { Box, Clock, Packing, Storage, Trolley } from "./icons";
import { photos, site, waLink } from "./site";

const tips = [
  {
    id: "alfombras",
    icon: Packing,
    label: "Alfombras",
    img: photos.rug,
    alt: "Pareja enrollando una alfombra entre cajas de mudanza",
    title: "Alfombras",
    text: "Lava tus alfombras antes de la mudanza. Regresan enrolladas y listas para empacarse, y llegan limpias a tu nuevo hogar sin ocupar espacio extra en el camión.",
  },
  {
    id: "muebles",
    icon: Storage,
    label: "Muebles",
    img: photos.mattress,
    alt: "Persona cargando un colchón en la banqueta",
    title: "Muebles",
    text: "Desarma lo que se pueda (camas, mesas, libreros) y guarda los tornillos en una bolsa pegada a cada mueble. Así armarlos en el nuevo lugar toma minutos.",
  },
  {
    id: "puntualidad",
    icon: Clock,
    label: "Puntualidad",
    img: photos.truck,
    alt: "Equipo descargando muebles de un camión de mudanza",
    title: "Puntualidad",
    text: "Ten todo empacado y las cajas etiquetadas antes de que llegue la cuadrilla. Cada minuto que se ahorra en la mañana es una hora menos en tu paquete.",
  },
  {
    id: "pesados",
    icon: Trolley,
    label: "Objetos pesados",
    img: photos.heavy,
    alt: "Camión de mudanza cargado con muebles pesados",
    title: "Objetos pesados",
    text: "Avísanos de pianos, cajas fuertes o refrigeradores al cotizar. Llevamos el equipo y la gente adecuados, y revisamos escaleras y accesos antes del día de la mudanza.",
  },
  {
    id: "pequenos",
    icon: Box,
    label: "Objetos pequeños",
    img: photos.boxes,
    alt: "Pila de cajas de cartón cerradas con cinta",
    title: "Objetos pequeños",
    text: "Usa cajas chicas para libros y vajilla, y grandes para cosas ligeras. Rellena los huecos con ropa o papel y marca por cuarto lo que va en cada caja.",
  },
];

/** "Moving tips": lista de pestañas a la izquierda; foto, título y texto de la pestaña activa a la derecha. */
export default function Tips() {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = tips[i];

  function onKeyDown(e: React.KeyboardEvent) {
    let n = -1;
    if (e.key === "ArrowDown") n = (i + 1) % tips.length;
    if (e.key === "ArrowUp") n = (i - 1 + tips.length) % tips.length;
    if (n < 0) return;
    e.preventDefault();
    setI(n);
    refs.current[n]?.focus();
  }

  return (
    <section id="consejos" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1000px] px-5">
        <p className="font-display text-[15px] font-semibold text-gold">Quítale el estrés a tu mudanza</p>
        <h2 className="mt-3 font-display text-5xl font-bold tracking-tight text-heading sm:text-6xl">Consejos de mudanza</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div role="tablist" aria-label="Consejos" aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-col">
            {tips.map((tp, n) => {
              const Icon = tp.icon;
              const on = n === i;
              return (
                <button
                  key={tp.id}
                  ref={(el) => {
                    refs.current[n] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${tp.id}`}
                  aria-selected={on}
                  aria-controls="tip-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setI(n)}
                  className={`flex items-center gap-4 px-5 py-4 text-left font-display text-[15px] font-semibold transition-colors ${
                    on ? "bg-cream text-heading" : "text-heading hover:bg-cream/60"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${on ? "text-heading" : "text-body"}`} aria-hidden />
                  {tp.label}
                  {on && <span aria-hidden className="ml-auto grid h-6 w-6 place-items-center rounded-full bg-amber text-heading">›</span>}
                </button>
              );
            })}
          </div>

          <div id="tip-panel" role="tabpanel" aria-labelledby={`tab-${t.id}`} tabIndex={0} className="grid gap-6 outline-none sm:grid-cols-[1.15fr_1fr]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.img} alt={t.alt} loading="lazy" className="aspect-[4/3.2] w-full object-cover sm:aspect-auto sm:h-full" />
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold text-heading">{t.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.9] text-body">{t.text}</p>
              <a
                href={waLink(`Hola ${site.name}, tengo una duda sobre: ${t.title.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block self-start rounded-full bg-cream px-7 py-3.5 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-amber"
              >
                Más
                <span className="sr-only"> sobre {t.title.toLowerCase()} (abre WhatsApp en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
