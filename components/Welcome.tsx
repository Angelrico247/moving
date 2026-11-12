import Reveal from "./Reveal";
import { Check } from "./icons";
import { photos } from "./site";

const points = [
  "Precio cerrado: lo que cotizas es lo que pagas; la hora extra tiene tarifa fija y la apruebas tú.",
  "Cuadrillas capacitadas, con equipo propio y uniformado, que protegen tus muebles y tu piso.",
  "Puntualidad garantizada: si llegamos tarde por causas nuestras, la primera hora va por nuestra cuenta.",
];

/** "Welcome to moving company": foto a la izquierda, texto y tres puntos con círculo amarillo a la derecha. */
export default function Welcome() {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-cream py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1000px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.welcome} alt="Pareja cargando una caja y una planta al llegar a su nueva casa" loading="lazy" className="aspect-[4/4.2] w-full object-cover" />
        </Reveal>

        <Reveal delay={100}>
          <p className="font-display text-[15px] font-semibold text-gold">Bienvenido a MovIng</p>
          <h2 className="mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight text-heading">
            Empresa de mudanzas de servicio completo
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-body">
            No es un secreto que mudarse puede ser estresante, y nuestro equipo está aquí para ayudarte a manejarlo. Cuenta con
            nuestros cargadores para guiarte en el proceso, de puerta a puerta.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((t) => (
              <li key={t} className="flex items-start gap-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber text-heading">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="font-display text-[15px] font-semibold leading-snug text-heading">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
