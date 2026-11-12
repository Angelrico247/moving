import { site, waLink } from "./site";

/** Franja café con una frase y un botón blanco, como "Take the stress out of moving!". */
export default function GuideBand() {
  return (
    <section className="bg-brown py-10">
      <div className="mx-auto flex max-w-[1000px] flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center">
        <p className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
          ¡Quítale el estrés a tu mudanza! Pide tu <span className="underline decoration-amber decoration-4 underline-offset-8">cotización gratis</span>
        </p>
        <a
          href={waLink(`Hola ${site.name}, quiero cotizar mi mudanza.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-white px-8 py-4 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-amber"
        >
          Cotizar por WhatsApp
          <span className="sr-only"> (abre en una pestaña nueva)</span>
        </a>
      </div>
    </section>
  );
}
