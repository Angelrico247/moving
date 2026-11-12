"use client";

import { useEffect, useState } from "react";
import { photos } from "./site";

const reviews = [
  {
    text: "Llegaron a tiempo, envolvieron todo y en 5 horas ya estaba en mi casa nueva. Ni un rayón. Vale cada peso.",
    name: "Mariana Ríos",
    place: "Providencia, GDL",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    text: "Pedí el paquete de 6 horas para una casa de 3 recámaras y alcanzó perfecto. El coordinador súper atento.",
    name: "Luis Fernando G.",
    place: "Zapopan",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    text: "Movieron la oficina un domingo para no parar operaciones. Profesionales y sin sorpresas en el precio.",
    name: "Daniela Pérez",
    place: "Andares",
    avatar: "https://i.pravatar.cc/80?img=56",
  },
];

const INTERVAL = 6500;

/** "People about us": opiniones grandes en blanco sobre una foto con velo; avanzan solas y se pueden pausar. */
export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setTimeout(() => setPage((p) => (p + 1) % reviews.length), INTERVAL);
    return () => clearTimeout(t);
  }, [page, paused]);

  const r = reviews[page];

  return (
    <section
      id="opiniones"
      aria-roledescription="carrusel"
      aria-label="Opiniones de clientes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative scroll-mt-20 overflow-hidden bg-heading py-20 sm:py-28"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photos.reviews} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#3d322c]/70" />

      <div className="relative mx-auto max-w-[1000px] px-5">
        <p className="font-display text-[15px] font-semibold text-amber">Lo que dicen de nosotros</p>

        <figure key={page} className="mt-8 max-w-3xl" aria-live={paused ? "polite" : "off"}>
          <blockquote className="font-display text-3xl font-bold leading-[1.25] text-white sm:text-4xl">“{r.text}”</blockquote>
          <figcaption className="mt-8 flex items-center gap-4 text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.avatar} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
            <span className="text-[15px] leading-snug">
              {r.name},
              <br />
              {r.place}
            </span>
          </figcaption>
        </figure>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href="#cotizar" className="rounded-full bg-amber px-8 py-4 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-white">
            Cotiza tu mudanza
          </a>
          <div className="flex gap-2" role="group" aria-label="Elegir opinión">
            {reviews.map((rv, i) => (
              <button
                key={rv.name}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Ver la opinión de ${rv.name}`}
                aria-current={i === page ? "true" : undefined}
                className="grid h-7 w-7 place-items-center"
              >
                <span className={`block h-2.5 rounded-full transition-all ${i === page ? "w-7 bg-amber" : "w-2.5 bg-white/60"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
