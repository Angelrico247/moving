import { Phone, Pin, Whatsapp } from "./icons";
import { site, waLink } from "./site";

/** Pie de página: tres columnas café (dirección, escríbenos, contacto), mapa y línea de derechos. */
export default function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-20">
      <div className="bg-brown text-white">
        <div className="mx-auto grid max-w-[1000px] gap-10 px-5 py-16 text-center md:grid-cols-3 md:gap-0">
          <div className="md:border-r md:border-white/20 md:px-6">
            <h3 className="font-display text-xl font-semibold">Dirección</h3>
            <p className="mt-6 flex items-center justify-center gap-2 text-[15px] leading-relaxed">
              <Pin className="h-4 w-4 shrink-0" aria-hidden />
              {site.city}
            </p>
          </div>

          <div className="md:border-r md:border-white/20 md:px-6">
            <h3 className="font-display text-xl font-semibold">Escríbenos</h3>
            <div className="mt-5 flex justify-center gap-3">
              <a
                href={waLink(`Hola ${site.name}, quiero cotizar mi mudanza.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp (abre en una pestaña nueva)"
                className="grid h-[52px] w-[52px] place-items-center rounded-full bg-white text-heading transition-colors hover:bg-amber"
              >
                <Whatsapp className="h-5 w-5" />
              </a>
              <a
                href={site.phoneHref}
                aria-label={`Llamar al ${site.phoneDisplay}`}
                className="grid h-[52px] w-[52px] place-items-center rounded-full bg-white text-heading transition-colors hover:bg-amber"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:px-6">
            <h3 className="font-display text-xl font-semibold">Contacto</h3>
            <p className="mt-6 text-[15px] leading-relaxed">
              <a href={site.phoneHref} className="font-display font-semibold hover:text-amber">{site.phoneDisplay}</a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-amber">{site.email}</a>
            </p>
          </div>
        </div>
      </div>

      <iframe
        title={`Mapa: ${site.city}`}
        src="https://www.google.com/maps?q=Guadalajara,+Jalisco&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[260px] w-full border-0 grayscale-[.4]"
      />

      <div className="bg-white py-6 text-center text-[13px] text-body">
        © {new Date().getFullYear()} {site.name} Mudanzas. Todos los derechos reservados.
      </div>
    </footer>
  );
}
