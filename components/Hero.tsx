"use client";

import { motion, type Variants } from "framer-motion";
import { photos } from "./site";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.16, delayChildren: 0.3 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Hero a todo el ancho con foto, como el de MoveMe: título grande a la izquierda y botón. */
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[560px] items-center overflow-hidden bg-heading lg:min-h-[640px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photos.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
      <div className="absolute inset-0 bg-black/45" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-[1000px] px-5 py-20"
      >
        <motion.p variants={item} className="font-display text-sm font-semibold uppercase tracking-wider text-amber">
          Cotización gratis
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 font-display text-6xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Mudanzas
          <br />
          hechas
          <br />
          fáciles
        </motion.h1>
        <motion.a
          variants={item}
          href="#cotizar"
          className="mt-9 inline-block rounded-full bg-amber px-8 py-4 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-white"
        >
          Pide tu cotización gratis
        </motion.a>
      </motion.div>
    </section>
  );
}
