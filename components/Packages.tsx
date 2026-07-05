import Image from "next/image";
import Reveal from "./Reveal";
import { Check, Clock, ArrowRight } from "./icons";
import { site, waLink } from "./site";

type Pkg = {
  name: string;
  hours: string;
  price: string;
  best?: boolean;
  ideal: string;
  crew: string;
  features: string[];
  img: string;
};

/*
  Imágenes de cabecera: reemplaza cada `img` por la ruta real
  (p.ej. "/images/paquete-express.jpg"). Las URLs de abajo son placeholders.
*/
const packages: Pkg[] = [
  {
    name: "Express",
    hours: "3 horas",
    price: "1,290",
    ideal: "Departamento o estudio",
    crew: "Camión chico + 2 cargadores",
    features: [
      "Carga, traslado y descarga",
      "Cobijas y cinchos para proteger",
      "1 destino dentro de la ciudad",
    ],
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=75",
  },
  {
    name: "Hogar",
    hours: "6 horas",
    price: "2,490",
    best: true,
    ideal: "Casa de 2 a 3 recámaras",
    crew: "Camión mediano + 3 cargadores",
    features: [
      "Todo lo del Express",
      "Desarmado y armado de camas",
      "Seguro de carga incluido",
      "Hasta 2 destinos",
    ],
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=75",
  },
  {
    name: "Total",
    hours: "Jornada (10 h)",
    price: "3,990",
    ideal: "Casa grande u oficina",
    crew: "Camión grande + 4 cargadores",
    features: [
      "Todo lo del Hogar",
      "Empaque de cocina y frágiles",
      "Coordinador de mudanza",
      "Rutas foráneas bajo cotización",
    ],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
  },
];

export default function Packages() {
  return (
    <section id="paquetes" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-amber-deep">
              Paga solo por el tiempo que necesitas
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Paquetes por horas
            </h2>
            <p className="mt-4 text-lg text-slate">
              Eliges un bloque de horas con camión y cuadrilla incluidos. Si
              acabas antes, te queda de sobra; si necesitas más, la hora extra
              tiene precio fijo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`flex h-full flex-col overflow-hidden rounded-3xl border transition-transform hover:-translate-y-1 ${
                  p.best
                    ? "border-transparent shadow-2xl shadow-ink/25 lg:-mt-4"
                    : "border-line"
                }`}
              >
                {/* Cabecera con imagen de fondo */}
                <div className="relative h-44 shrink-0 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={`Paquete ${p.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 ${
                      p.best ? "bg-ink/70" : "bg-ink/55"
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl font-extrabold text-cream">
                        {p.name}
                      </h3>
                      {p.best && (
                        <span className="rounded-full bg-amber px-3 py-1 text-xs font-bold text-ink">
                          Más elegido
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sm text-cream/70">
                      <Clock className="h-4 w-4" />
                      {p.hours}
                    </div>
                  </div>
                </div>

                {/* Cuerpo de la tarjeta */}
                <div
                  className={`flex flex-1 flex-col p-7 ${
                    p.best ? "bg-ink text-cream bg-route" : "bg-paper text-ink"
                  }`}
                >
                  <div className="flex items-end gap-1.5">
                    <span
                      className={`text-sm ${
                        p.best ? "text-cream/60" : "text-slate"
                      }`}
                    >
                      desde
                    </span>
                    <span className="font-display text-5xl font-extrabold">
                      ${p.price}
                    </span>
                    <span
                      className={`mb-1.5 text-sm ${
                        p.best ? "text-cream/60" : "text-slate"
                      }`}
                    >
                      MXN
                    </span>
                  </div>

                  <p
                    className={`mt-4 text-sm font-semibold ${
                      p.best ? "text-amber" : "text-amber-deep"
                    }`}
                  >
                    {p.ideal}
                  </p>
                  <p
                    className={`text-sm ${
                      p.best ? "text-cream/70" : "text-slate"
                    }`}
                  >
                    {p.crew}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                        <span
                          className={p.best ? "text-cream/90" : "text-ink/80"}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(
                      `Hola ${site.name}, me interesa el Paquete ${p.name} (${p.hours}). ¿Me ayudan a cotizar?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group mt-auto pt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-bold transition-transform hover:-translate-y-0.5 ${
                      p.best ? "bg-amber text-ink" : "bg-ink text-cream"
                    }`}
                  >
                    Elegir {p.name}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-sm text-slate">
            ¿No sabes qué paquete te toca? Mándanos fotos por WhatsApp y te
            decimos en minutos. Hora extra desde{" "}
            <strong className="text-ink">$290</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
