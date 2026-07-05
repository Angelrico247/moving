import Reveal from "./Reveal";
import { Quote, Star } from "./icons";

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

export default function Testimonials() {
  return (
    <section id="opiniones" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-deep">
                Lo que dicen
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Mudanzas que terminan en gracias
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-amber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">
                4.9 / 5 · +400 reseñas
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-cream">
                {/* Franja superior con foto de fondo desenfocada */}
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={r.avatar}
                    alt=""
                    aria-hidden
                    className="h-full w-full scale-150 object-cover blur-lg brightness-75"
                  />
                  <div className="absolute inset-0 bg-ink/40" />
                  {/* Avatar circular centrado */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full object-cover ring-4 ring-cream/30"
                    />
                  </div>
                  {/* Estrellas sobre la franja */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-0.5 text-amber">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="flex flex-1 flex-col p-7">
                  <Quote className="h-7 w-7 text-amber" />
                  <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/85">
                    {r.text}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <p className="font-semibold text-ink">{r.name}</p>
                    <p className="text-sm text-slate">{r.place}</p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
