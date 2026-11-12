import { Phone } from "./icons";
import { site } from "./site";

/** Franja superior del tema MoveMe: lema a la izquierda, teléfono a la derecha. */
export default function TopBar() {
  return (
    <aside aria-label="Información de contacto" className="hidden bg-cream text-[13px] text-body md:block">
      <div className="mx-auto flex h-10 max-w-[1000px] items-center justify-between px-5">
        <p>Mudanzas aseguradas en {site.city}</p>
        <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-heading">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-amber text-heading">
            <Phone className="h-3.5 w-3.5" />
          </span>
          ¿Necesitas ayuda? Llama
          <b className="font-display font-semibold text-gold">{site.phoneDisplay}</b>
        </a>
      </div>
    </aside>
  );
}
