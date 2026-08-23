"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "./icons";

const BG = "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=75";

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

const INTERVAL = 6000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (idx: number) => setCurrent((idx + reviews.length) % reviews.length),
    []
  );
  const next = useCallback(() => go(current + 1), [current, go]);

  useEffect(() => {
    timerRef.current = setTimeout(next, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next]);

  const r = reviews[current];

  return (
    <section id="opiniones" className="relative h-[60vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={BG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-5 sm:px-6">
        <span className="text-sm font-extrabold uppercase tracking-widest text-amber">
          Lo que dicen
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-5 max-w-2xl"
          >
            <blockquote className="font-display text-3xl font-black leading-snug text-cream sm:text-4xl">
              &ldquo;{r.text}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-cream/30"
              />
              <div>
                <p className="font-bold text-cream">{r.name},</p>
                <p className="text-sm text-cream/70">{r.place}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#cotizar"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-base font-bold text-ink transition-transform hover:-translate-y-0.5"
          >
            Más reseñas
          </a>
          <div className="flex items-center gap-2">
            <div className="flex text-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" />
              ))}
            </div>
            <span className="text-sm font-semibold text-cream/80">
              4.9 / 5 · +400 reseñas
            </span>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Ir a la reseña ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-amber" : "w-2 bg-cream/30 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
