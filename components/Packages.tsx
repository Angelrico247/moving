import Reveal from "./Reveal";
import { photos, waLink, site } from "./site";

const packs = [
  { name: "Express", price: "1,290", hours: "3 horas", img: photos.express, note: "Departamento o estudio" },
  { name: "Hogar", price: "2,490", hours: "6 horas", img: photos.hogar, note: "Casa de 2 a 3 recámaras" },
  { name: "Total", price: "3,990", hours: "Jornada de 10 horas", img: photos.total, note: "Casa grande u oficina" },
];

/** "We can help you with": tres tarjetas con foto, nombre del paquete y precio inicial. */
export default function Packages() {
  return (
    <section id="precios" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1000px] px-5">
        <Reveal>
          <p className="font-display text-[15px] font-semibold text-gold">Servicios pensados para ti</p>
          <h2 className="mt-3 font-display text-5xl font-bold tracking-tight text-heading sm:text-6xl">Te ayudamos con:</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {packs.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <a
                href={waLink(`Hola ${site.name}, quiero cotizar el paquete ${p.name} (${p.hours}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden bg-heading"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-black/45" />
                <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-7">
                  <span className="font-display text-3xl font-bold leading-tight text-white">Paquete {p.name}</span>
                  <span className="font-display text-[15px] font-semibold text-gold">desde ${p.price} MXN</span>
                  <span className="text-[13px] text-white/90">{p.hours} · {p.note}</span>
                  <span className="sr-only">(abre WhatsApp en una pestaña nueva)</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a href="#servicios" className="mt-10 inline-block rounded-full bg-amber px-8 py-4 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-heading hover:text-white">
            Más servicios
          </a>
        </Reveal>
      </div>
    </section>
  );
}
