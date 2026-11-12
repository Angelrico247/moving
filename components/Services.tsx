import Reveal from "./Reveal";
import { Packing, Sparkles, Storage, Safety, Trolley, Delivery } from "./icons";
import { photos, site, waLink } from "./site";

const services = [
  { icon: Packing, title: "Empaque", desc: "Cajas, burbuja y etiquetado por cuarto. Tú abres y todo aparece donde va." },
  { icon: Sparkles, title: "Limpieza", desc: "Dejamos limpio el lugar que dejas para que recuperes tu depósito sin broncas." },
  { icon: Storage, title: "Almacenaje", desc: "¿Aún no entregan tu casa? Guardamos tus cosas en bodega segura por días o meses." },
  { icon: Safety, title: "Seguro", desc: "Cobertura extra para artículos de alto valor. Tranquilidad de puerta a puerta." },
  { icon: Trolley, title: "Objetos pesados", desc: "Pianos, cajas fuertes y muebles voluminosos con equipo y técnica adecuada." },
  { icon: Delivery, title: "Mudanza foránea", desc: "Salidas a otras ciudades del país con seguimiento y fecha de entrega cerrada." },
];

/** "Our services": rejilla de servicios con círculo amarillo a la izquierda y tarjeta con foto a la derecha. */
export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1000px] gap-12 px-5 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="font-display text-[15px] font-semibold text-gold">Servicios pensados para ti</p>
            <h2 className="mt-3 font-display text-5xl font-bold tracking-tight text-heading sm:text-6xl">Nuestros servicios</h2>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={(i % 2) * 90}>
                <div className="flex items-center gap-4">
                  <span className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-amber text-heading">
                    <Icon className="h-8 w-8" strokeWidth={1.4} aria-hidden />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-heading">{title}</h3>
                </div>
                <p className="mt-4 text-[14px] leading-[1.9] text-body">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="self-start">
          <div className="relative flex min-h-[340px] flex-col justify-center overflow-hidden bg-heading p-8 sm:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.ask} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative">
              <p className="font-display text-[15px] font-semibold text-white">¿Mudarte parece difícil?</p>
              <p className="mt-3 font-display text-4xl font-bold leading-[1.05] text-white">¿Tienes una pregunta?</p>
              <a
                href={waLink(`Hola ${site.name}, tengo una pregunta sobre mi mudanza.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-full bg-amber px-7 py-4 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-white"
              >
                Pregunta a nuestro experto
                <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
