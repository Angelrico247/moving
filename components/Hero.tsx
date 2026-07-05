"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];
import { ArrowRight } from "./icons";
import { site, waLink } from "./site";

const slides = [
  {
    tag: "Cotiza hoy, mudas esta semana",
    headline: "Tu mudanza,",
    highlight: "sin estrés",
    sub: "Contratas un paquete por horas y nosotros llegamos con camión, cuadrilla y seguro. Tú solo dinos a dónde.",
    bg: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=75",
  },
  {
    tag: "Precio cerrado, sin sorpresas",
    headline: "Camión, cuadrilla",
    highlight: "y seguro incluidos",
    sub: "Paga solo por las horas que necesitas. La hora extra tiene tarifa fija y la apruebas tú antes de continuar.",
    bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=75",
  },
  {
    tag: "Más de 1,200 mudanzas exitosas",
    headline: "Expertos en mudanzas",
    highlight: "en Guadalajara",
    sub: "5 años moviendo familias y oficinas en la ZMG. Puntuales, cuidadosos y con precio justo.",
    bg: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=75",
  },
];

const INTERVAL = 5500;

// Stagger del bloque de texto: espera 0.42 s para que la imagen sea visible
const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.42 } },
  exit:   { transition: { staggerChildren: 0.07, staggerDirection: -1 } },
};

// Cada hijo: sube, se deblurra y aparece
const textItem: Variants = {
  hidden:  { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0, y: -10, filter: "blur(4px)",
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (idx: number) => setCurrent((idx + slides.length) % slides.length),
    []
  );
  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  return (
    <section
      id="top"
      className="relative h-screen min-h-150 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── 1. Imagen de fondo — aparece primero ───────────── */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[current].bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-ink/65" />
      {/* Patrón de puntos */}
      <div className="absolute inset-0 bg-route opacity-40" />

      {/* ── 2. Texto — entra en cascada después de la imagen ─ */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={textContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-2xl text-cream"
            >
              {/* Badge */}
              <motion.span
                variants={textItem}
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream/80 backdrop-blur-sm"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-amber" />
                {slides[current].tag}
              </motion.span>

              {/* Headline */}
              <motion.h1
                variants={textItem}
                className="mt-5 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
              >
                {slides[current].headline}
                <br />
                <span className="relative inline-block text-amber">
                  {slides[current].highlight}
                  <svg
                    aria-hidden
                    viewBox="0 0 300 18"
                    className="absolute -bottom-1 left-0 w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4 14 C 80 4, 220 4, 296 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      className="text-amber/50"
                    />
                  </svg>
                </span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                variants={textItem}
                className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80"
              >
                {slides[current].sub}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={textItem} className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#cotizar"
                  className="group inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-base font-bold text-ink shadow-lg shadow-ink/30 transition-transform hover:-translate-y-0.5"
                >
                  Cotizar mi mudanza
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={waLink(
                    `Hola ${site.name}, quiero información sobre los paquetes de mudanza.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-7 py-4 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
                >
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── 3. Controles — aparecen al final ───────────────── */}
      {/* Flecha anterior */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-cream/20 bg-ink/40 text-cream backdrop-blur-sm transition hover:bg-ink/70 sm:left-6"
        aria-label="Slide anterior"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>

      {/* Flecha siguiente */}
      <motion.button
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-cream/20 bg-ink/40 text-cream backdrop-blur-sm transition hover:bg-ink/70 sm:right-6"
        aria-label="Slide siguiente"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>

      {/* Dots */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-amber" : "w-2 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </motion.div>

      {/* Barra de progreso */}
      {!paused && (
        <div
          key={`progress-${current}`}
          className="absolute bottom-0 left-0 z-20 h-0.75 bg-amber hero-progress"
        />
      )}
    </section>
  );
}
