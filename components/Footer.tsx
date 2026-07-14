import { Phone, Pin, Truck, Whatsapp } from "./icons";
import { nav, site, waLink } from "./site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream bg-route">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber text-ink">
                <Truck className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight">
                Mov<span className="text-amber">Ing</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Mudanzas por horas en {site.city}. Camión, cuadrilla y seguro, sin
              estrés y sin sorpresas.
            </p>
            <a
              href={waLink(`Hola ${site.name}, quiero cotizar mi mudanza.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-ink"
            >
              <Whatsapp className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-cream/50">
              Navega
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-cream/80 transition-colors hover:text-amber"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-cream/50">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-cream/80 transition-colors hover:text-amber"
                >
                  <Phone className="h-4 w-4 text-amber" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-cream/80">
                <Pin className="h-4 w-4 text-amber" />
                {site.city}
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-cream/80 transition-colors hover:text-amber"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-sm text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cream">
              Aviso de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
