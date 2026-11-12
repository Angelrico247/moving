import Reveal from "./Reveal";
import { Phone, Packing, Trolley, Box } from "./icons";

const steps = [
  { icon: Phone, label: "Cotizas con nosotros" },
  { icon: Packing, label: "Empacamos tus cosas" },
  { icon: Trolley, label: "Movemos tus cosas" },
  { icon: Box, label: "Desempacamos y acomodamos" },
];

/** "Our moving process": franja café con cuatro pasos en línea y flechas entre ellos. */
export default function Process() {
  return (
    <section id="proceso" className="scroll-mt-20 bg-brown py-16 sm:py-20">
      <div className="mx-auto max-w-[1000px] px-5">
        <Reveal>
          <p className="font-display text-[15px] font-semibold text-white">Nuestro proceso</p>
          <h2 className="mt-3 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">Mudarte es fácil</h2>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, label }, i) => (
            <li key={label}>
              <Reveal delay={i * 90} className="flex items-center gap-4">
                <Icon className="h-12 w-12 shrink-0 text-white" strokeWidth={1.2} aria-hidden />
                <span className="font-display text-[15px] font-semibold leading-snug text-white">{label}</span>
                {i < steps.length - 1 && <span aria-hidden className="ml-auto hidden text-white/60 lg:block">›</span>}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
