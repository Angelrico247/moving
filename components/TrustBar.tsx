import { Shield, Clock, Check, Truck } from "./icons";

const items = [
  { icon: Shield, text: "Carga 100% asegurada" },
  { icon: Clock, text: "Llegamos puntuales o es gratis la 1ª hora" },
  { icon: Truck, text: "Unidades propias y limpias" },
  { icon: Check, text: "Precio cerrado, sin sorpresas" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 px-5 py-7 sm:px-6 lg:grid-cols-4">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cream text-amber-deep">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium leading-snug text-ink">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
