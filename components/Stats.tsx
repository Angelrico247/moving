"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const value = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(value, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) {
          ref.current.textContent = prefix + v.toFixed(decimals) + suffix;
        }
      },
    });
    return ctrl.stop;
  }, [inView, to, prefix, suffix, decimals, value]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

const stats = [
  { prefix: "+", to: 1200, suffix: "",     decimals: 0, label: "mudanzas completadas" },
  { prefix: "",  to: 5,    suffix: " años", decimals: 0, label: "en Guadalajara" },
  { prefix: "",  to: 4.9,  suffix: " ★",   decimals: 1, label: "calificación promedio" },
  { prefix: "",  to: 98,   suffix: "%",    decimals: 0, label: "clientes satisfechos" },
];

export default function Stats() {
  return (
    <section className="bg-ink py-16 sm:py-20 bg-route">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="font-display text-5xl font-extrabold text-amber sm:text-6xl">
                <Counter
                  prefix={s.prefix}
                  to={s.to}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </p>
              <p className="mt-3 text-sm leading-snug text-cream/65">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
