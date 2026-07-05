import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Truck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 6.5A1.5 1.5 0 0 1 3.5 5h9A1.5 1.5 0 0 1 14 6.5V16H2z" />
      <path d="M14 9h3.6a2 2 0 0 1 1.7 1l2.2 3.4a2 2 0 0 1 .3 1.1V16h-8z" />
      <circle cx="6" cy="18.5" r="1.8" />
      <circle cx="17.5" cy="18.5" r="1.8" />
      <path d="M8 18.5h7.7M2 16h2.2M19.3 16H22" />
    </svg>
  );
}

export function Box(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
      <path d="M8 9.5 16 5" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Shield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4.5 6v5.2c0 4.6 3.1 7.6 7.5 9 4.4-1.4 7.5-4.4 7.5-9V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.5 13.4 9 18 10.5 13.4 12 12 16.5 10.6 12 6 10.5 10.6 9z" />
      <path d="M18.5 4.5v3M20 6h-3M5.5 16v2.5M6.75 17.25h-2.5" />
    </svg>
  );
}

export function Warehouse(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10 12 5l9 5v10H3z" />
      <path d="M7 20v-6h10v6M7 16.5h10" />
    </svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18" />
    </svg>
  );
}

export function Piano(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <path d="M3.5 14h17M8 5v9M12 5v9M16 5v9" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 4h3l1.3 3.3-1.8 1.4a11 11 0 0 0 5.3 5.3l1.4-1.8L19 16.5V19a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 4 6.6 4 5.7 4.7 5 5.5 4.9z" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 3.5 14.6 9l6 .8-4.4 4.2 1.1 6L12 17.1 6.7 20l1.1-6L3.4 9.8l6-.8z" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M9 6c-3 0-5 2.3-5 5.4 0 3 1.8 5 4.3 5 1.8 0 3-1.2 3-2.9 0-1.6-1-2.7-2.5-2.7-.3 0-.6 0-.8.1.3-1.3 1.4-2.3 3-2.6zM18 6c-3 0-5 2.3-5 5.4 0 3 1.8 5 4.3 5 1.8 0 3-1.2 3-2.9 0-1.6-1-2.7-2.5-2.7-.3 0-.6 0-.8.1.3-1.3 1.4-2.3 3-2.6z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Whatsapp(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20l1.4-4.1A8 8 0 1 1 8.5 18.4z" />
      <path d="M9 9.2c.2-.6.4-.6.7-.6h.5c.2 0 .4 0 .6.5l.6 1.4c0 .2 0 .3-.1.5l-.4.5c-.1.2-.2.3 0 .6a6 6 0 0 0 2.4 2.1c.3.2.4.1.6 0l.6-.7c.2-.2.3-.2.5-.1l1.4.7c.2.1.3.2.3.3 0 .6-.4 1.4-.8 1.6-.8.4-1.7.3-3.3-.4a8 8 0 0 1-3.8-3.9c-.5-1-.5-1.7-.4-2z" />
    </svg>
  );
}

export function Pin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
