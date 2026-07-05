import Image from "next/image";
import Reveal from "./Reveal";
import { Check } from "./icons";

const points = [
  {
    title: "Precio cerrado, no por sorpresa",
    desc: "Lo que cotizas es lo que pagas. La hora extra tiene tarifa fija y la apruebas tú.",
  },
  {
    title: "Cuadrillas capacitadas, no improvisadas",
    desc: "Equipo propio, uniformado y entrenado para proteger tus muebles y tu piso.",
  },
  {
    title: "Puntualidad garantizada",
    desc: "Si llegamos tarde por causas nuestras, la primera hora va por nuestra cuenta.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
        {/* Columna izquierda — texto */}
        <Reveal>
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-amber-deep">
              Por qué EnRuta
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Una mudanza que no se siente como una bronca
            </h2>
            <ul className="mt-8 space-y-6">
              {points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal/15 text-teal">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate">
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Columna derecha — foto con stats overlay */}
        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-3xl min-h-[300px] lg:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80"
              alt="Equipo EnRuta en acción"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradiente: imagen visible arriba, oscuro abajo para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />

            {/* Stats superpuestos */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-cream">
              <p className="font-display text-7xl font-extrabold leading-none text-amber">
                98%
              </p>
              <p className="mt-2 max-w-xs text-base text-cream/80">
                de nuestros clientes nos recomienda con un familiar o amigo.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-5 border-t border-cream/20 pt-5">
                <div>
                  <p className="font-display text-2xl font-extrabold">+5 años</p>
                  <p className="text-sm text-cream/60">moviendo Guadalajara</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold">0 letras chiquitas</p>
                  <p className="text-sm text-cream/60">en tu cotización</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
