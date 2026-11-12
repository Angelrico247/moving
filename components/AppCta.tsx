import Reveal from "./Reveal";
import { Menu, Phone, Whatsapp } from "./icons";
import { LogoMark } from "./Logo";
import { photos, site, waLink } from "./site";

/** "Get a moving quote on your go": teléfono con la versión móvil del sitio y botones para cotizar. */
export default function AppCta() {
  return (
    <section className="overflow-hidden bg-white pt-16 sm:pt-24">
      <div className="mx-auto grid max-w-[1000px] items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          {/* Teléfono hecho con CSS: marco, bocina y la portada del sitio adentro */}
          <div aria-hidden className="mx-auto h-[420px] w-[250px] overflow-hidden rounded-t-[42px] border-[7px] border-b-0 border-[#d5d2cd] bg-white lg:mx-0">
            <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-[#d5d2cd]" />
            <div className="flex items-center justify-between px-4 py-5">
              <span className="flex items-center gap-2 text-heading">
                <LogoMark size="sm" />
                <b className="font-display text-lg">Mov<span className="text-gold">Ing</span></b>
              </span>
              <span className="grid h-8 w-8 place-items-center bg-brown text-white"><Menu className="h-5 w-5" /></span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.phone} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
          </div>
        </Reveal>

        <Reveal delay={100} className="pb-16 sm:pb-24">
          <p className="font-display text-[15px] font-semibold text-gold">Cotiza desde donde estés</p>
          <h2 className="mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight text-heading">Cotizar tu mudanza es muy sencillo</h2>
          <div className="mt-9 flex flex-col items-start gap-4">
            <a
              href={waLink(`Hola ${site.name}, quiero cotizar mi mudanza.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-amber px-7 py-4 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-heading hover:text-white"
            >
              <Whatsapp className="h-5 w-5" />
              Cotizar por WhatsApp
              <span className="sr-only"> (abre en una pestaña nueva)</span>
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-3 rounded-full bg-amber px-7 py-4 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-heading hover:text-white"
            >
              <Phone className="h-5 w-5" />
              Llamar ahora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
