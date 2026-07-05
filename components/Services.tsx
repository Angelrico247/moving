import Reveal from "./Reveal";
import { Box, Sparkles, Warehouse, Globe, Piano, Shield } from "./icons";

const services = [
  {
    icon: Box,
    title: "Empaque profesional",
    desc: "Cajas, burbuja y etiquetado por cuarto. Tú abres y todo aparece donde va.",
  },
  {
    icon: Piano,
    title: "Objetos pesados",
    desc: "Pianos, cajas fuertes y muebles voluminosos con equipo y técnica adecuada.",
  },
  {
    icon: Warehouse,
    title: "Almacenaje temporal",
    desc: "¿Aún no entregan tu casa? Guardamos tus cosas en bodega segura por días o meses.",
  },
  {
    icon: Globe,
    title: "Mudanza foránea",
    desc: "Salidas a otras ciudades del país con seguimiento y fecha de entrega cerrada.",
  },
  {
    icon: Sparkles,
    title: "Limpieza de salida",
    desc: "Dejamos limpio el lugar que dejas para que recuperes tu depósito sin broncas.",
  },
  {
    icon: Shield,
    title: "Seguro ampliado",
    desc: "Cobertura extra para artículos de alto valor. Tranquilidad de puerta a puerta.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-amber-deep">
              Más allá de cargar cajas
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Todo lo que tu mudanza necesita
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 80}>
              <div className="group h-full bg-paper p-7 transition-colors hover:bg-cream">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-amber transition-transform group-hover:-rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
