import Reveal from "./Reveal";
import { photos } from "./site";

const articles = [
  { title: "15 formas creativas de conseguir cajas para tu mudanza", tag: "Empaque", img: photos.boxes },
  { title: "Mudar tus plantas: cómo hacerlo sin que sufran", tag: "Consejos", img: photos.plant },
  { title: "Qué guardar en bodega y cuándo conviene", tag: "Almacenaje", img: photos.storage },
];

/** "Recent articles": tres fotos con velo, etiqueta en amarillo y título en blanco. */
export default function Articles() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-[1000px] px-5">
        <Reveal>
          <p className="font-display text-[15px] font-semibold text-gold">Información útil</p>
          <h2 className="mt-3 font-display text-5xl font-bold tracking-tight text-heading sm:text-6xl">Artículos recientes</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <article className="relative aspect-square overflow-hidden bg-heading">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-white">{a.title}</h3>
                  <p className="mt-3 font-display text-[13px] font-semibold text-amber">{a.tag}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a href="#faq" className="mt-10 inline-block rounded-full bg-amber px-8 py-4 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-heading hover:text-white">
            Ver preguntas frecuentes
          </a>
        </Reveal>
      </div>
    </section>
  );
}
