import { TruckDetailed } from "./icons";

const SIZES = {
  sm: { mark: "h-8 w-8", icon: "h-5 w-5", text: "text-lg" },
  md: { mark: "h-10 w-10", icon: "h-6 w-6", text: "text-xl" },
  lg: { mark: "h-16 w-16", icon: "h-10 w-10", text: "text-3xl" },
} as const;

export function LogoMark({
  size = "md",
  className = "",
}: {
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-amber text-heading ${s.mark} ${className}`}
    >
      <TruckDetailed className={s.icon} strokeWidth={2.2} />
    </span>
  );
}

/** Isotipo (camión en círculo) + wordmark "MovIng" — fuente única para
 * header, footer y el loader, en vez de repetir el markup en cada uno. */
export function Logo({
  size = "md",
  className = "",
}: {
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      <span className="leading-none">
        <span className={`block font-display font-bold tracking-tight text-heading ${s.text}`}>
          Mov<span className="text-amber">Ing</span>
        </span>
        <span className="mt-1 block text-[11px] font-medium text-body">Mudanzas</span>
      </span>
    </span>
  );
}
