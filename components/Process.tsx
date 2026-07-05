import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Cotizas",
    desc: "Nos dices qué mueves y a dónde. Te damos precio cerrado por WhatsApp o teléfono.",
  },
  {
    n: "02",
    title: "Agendamos",
    desc: "Eliges día y hora. Confirmamos camión y cuadrilla para tu mudanza.",
  },
  {
    n: "03",
    title: "Empacamos y cargamos",
    desc: "Llegamos puntuales, protegemos todo y lo subimos con cuidado a la unidad.",
  },
  {
    n: "04",
    title: "Entregamos y acomodamos",
    desc: "Descargamos en tu nuevo lugar y dejamos los muebles donde los quieres.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28 bg-route">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-amber">
              Así de fácil
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Mudarte en 4 pasos
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* línea conectora en desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-cream/15 lg:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="relative lg:pr-8">
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-amber font-display text-lg font-extrabold text-ink">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/70">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
