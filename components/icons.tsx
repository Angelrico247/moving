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
      <g transform="translate(0.18 0.88)">
        <path d="M4 20l1.4-4.1A8 8 0 1 1 8.5 18.4z" />
        <g transform="translate(-0.7 -1.3)">
          <path d="M9 9.2c.2-.6.4-.6.7-.6h.5c.2 0 .4 0 .6.5l.6 1.4c0 .2 0 .3-.1.5l-.4.5c-.1.2-.2.3 0 .6a6 6 0 0 0 2.4 2.1c.3.2.4.1.6 0l.6-.7c.2-.2.3-.2.5-.1l1.4.7c.2.1.3.2.3.3 0 .6-.4 1.4-.8 1.6-.8.4-1.7.3-3.3-.4a8 8 0 0 1-3.8-3.9c-.5-1-.5-1.7-.4-2z" />
        </g>
      </g>
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

/* ── Set "Moving Service" (adaptado a currentColor) ─────────── */
const base64 = {
  width: 24,
  height: 24,
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Packing(props: IconProps) {
  return (
    <svg {...base64} {...props}>
      <g>
        <g>
          <polyline points="11.1 24.4 25.5 24.4 38.5 24.4 52.9 24.4" />
          <polyline points="52.9 34.8 52.9 61 11.1 61 11.1 34.8" />
          <polyline points="38.5 34.8 38.5 40.1 25.5 40.1 25.5 34.8" />
          <line x1="38.5" y1="24.4" x2="25.5" y2="24.4" />
          <rect x="34.6" y="52.3" width="14.8" height="5.2" />
        </g>
        <polygon points="57.5 34.8 6.5 34.8 11.1 24.4 52.9 24.4 57.5 34.8" />
      </g>
      <polygon points="36.4 13.9 36.4 3 27.6 3 27.6 13.9 21.5 13.9 32 21.8 42.5 13.9 36.4 13.9" />
    </svg>
  );
}

export function Trolley(props: IconProps) {
  return (
    <svg {...base64} {...props}>
      <g>
        <path d="M23.7,55.9h-3c-1.8,0-3.2-1.4-3.2-3.2V11.8h-3.2c-1.8,0-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2h6.5c1.8,0,3.2,1.4,3.2,3.2v40.9h25.8c1.8,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2h-5.1" />
        <line x1="38.8" y1="55.9" x2="29.6" y2="55.9" />
      </g>
      <g>
        <circle cx="26.7" cy="55.7" r="3" />
        <circle cx="41.7" cy="55.7" r="3" />
      </g>
      <g>
        <rect x="23.9" y="27.9" width="22.6" height="21.5" />
        <rect x="31.7" y="27.9" width="7.1" height="9.2" />
        <line x1="36.6" y1="45.8" x2="44.7" y2="45.8" />
      </g>
      <g>
        <rect x="23.9" y="12.8" width="18.3" height="15" />
        <rect x="30.2" y="12.8" width="5.7" height="6.4" />
        <line x1="36.3" y1="24.3" x2="39.6" y2="24.3" />
      </g>
    </svg>
  );
}

export function Storage(props: IconProps) {
  return (
    <svg {...base64} {...props}>
      <g>
        <polyline points="36.2 46 7.2 46 7.2 18 54.2 18 54.2 32.2" />
        <rect x="4.2" y="13" width="53" height="5" rx="2.5" ry="2.5" />
        <path d="M36.2,46H6.8c-1.4,0-2.5,1.1-2.5,2.5s.3,1.3.7,1.8c.5.4,1.1.7,1.8.7h48" />
        <g>
          <rect x="15.2" y="24" width="5" height="16" />
          <rect x="28.2" y="24" width="5" height="16" />
          <polyline points="41.2 32.2 41.2 24 46.2 24 46.2 32.2" />
        </g>
      </g>
      <g>
        <rect x="36.2" y="32.2" width="23.5" height="18.8" />
        <rect x="44.3" y="32.2" width="7.3" height="8.1" />
        <line x1="49.5" y1="47.8" x2="57.8" y2="47.8" />
      </g>
    </svg>
  );
}

export function Delivery(props: IconProps) {
  return (
    <svg {...base64} {...props}>
      <g>
        <g>
          <path d="M42,18.2h5.2l5.2,5v5h-10.5v-10ZM37.9,14.2h11.3l11.5,11v17h-5.1c-1-2.3-3.3-3.9-5.9-3.9s-5,1.6-5.9,3.9h-18.1c-1-2.3-3.3-3.9-5.9-3.9s-5,1.6-5.9,3.9h-5.1v-5.5" />
          <polygon points="52.5 23.2 52.5 28.2 42 28.2 42 18.2 47.3 18.2 52.5 23.2" />
          <g>
            <path d="M26.2,44.7c0,3.6-2.9,6.5-6.5,6.5s-6.4-2.9-6.4-6.5.2-1.7.5-2.5c1-2.3,3.3-3.9,5.9-3.9s5,1.6,5.9,3.9c.3.8.5,1.6.5,2.5Z" />
            <circle cx="19.8" cy="44.7" r="2.8" />
          </g>
          <g>
            <path d="M56.2,44.7c0,3.6-2.9,6.5-6.5,6.5s-6.4-2.9-6.4-6.5.2-1.7.5-2.5c1-2.3,3.3-3.9,5.9-3.9s5,1.6,5.9,3.9c.3.8.5,1.6.5,2.5Z" />
            <circle cx="49.8" cy="44.7" r="2.8" />
          </g>
          <line x1="42" y1="31.7" x2="44" y2="31.7" />
        </g>
        <polyline points="8.2 18.8 8.2 12.8 37.9 12.8 37.9 36.7 8.2 36.7 8.2 33.8" />
      </g>
      <rect x="4.2" y="28.8" width="15" height="5" rx="2.5" ry="2.5" />
      <rect x="7.2" y="23.8" width="15" height="5" rx="2.5" ry="2.5" />
      <rect x="3.2" y="18.8" width="15" height="5" rx="2.5" ry="2.5" />
    </svg>
  );
}

export function Safety(props: IconProps) {
  return (
    <svg {...base64} {...props}>
      <path d="M53,17.2v21.5c0,.6-.1,1.3-.4,1.8-1.2,3-5.8,12.3-18.8,17.1-1.1.4-2.4.4-3.6,0-13-4.8-17.6-14.1-18.8-17.1s-.4-1.2-.4-1.8v-21.5c0-1.9,1-3.6,2.7-4.4l16-6.2c1.5-.8,3.2-.8,4.7,0l16,6.2c1.6.9,2.7,2.6,2.7,4.4Z" />
      <path d="M48.5,20.1v17c0,.5,0,1-.3,1.5-.9,2.4-4.6,9.7-14.9,13.5s-1.9.3-2.8,0c-10.3-3.8-13.9-11.1-14.9-13.5s-.3-1-.3-1.5v-17c0-1.5.8-2.8,2.1-3.5l12.6-4.4c1.2-.6,2.5-.6,3.7,0l12.6,4.4c1.3.7,2.1,2,2.1,3.5Z" />
      <polyline points="23.2 28.5 32 37.3 40.8 23" />
    </svg>
  );
}

export function DeliveryTime(props: IconProps) {
  return (
    <svg {...base64} {...props}>
      <g>
        <g>
          <path d="M41.2,19.3h5.2l5.2,5v5h-10.5v-10ZM41.5,15.3h6.9l11.5,11v17h-5.1c-1-2.3-3.3-3.9-5.9-3.9s-5,1.6-6,3.9h-18.1c-1-2.3-3.3-3.9-5.9-3.9s-5,1.6-5.9,3.9h-5.1v-5.5" />
          <polygon points="51.7 24.3 51.7 29.3 41.2 29.3 41.2 19.3 46.4 19.3 51.7 24.3" />
          <g>
            <path d="M25.4,45.8c0,3.6-2.9,6.5-6.5,6.5s-6.4-2.9-6.4-6.5.2-1.7.5-2.5c1-2.3,3.3-3.9,5.9-3.9s5,1.6,5.9,3.9c.3.8.5,1.6.5,2.5Z" />
            <circle cx="18.9" cy="45.8" r="2.8" />
          </g>
          <g>
            <path d="M55.4,45.8c0,3.6-2.9,6.5-6.5,6.5s-6.4-2.9-6.4-6.5.2-1.7.5-2.5c1-2.3,3.3-3.9,5.9-3.9s5,1.6,5.9,3.9c.3.8.5,1.6.5,2.5Z" />
            <circle cx="48.9" cy="45.8" r="2.8" />
          </g>
          <line x1="41.2" y1="32.8" x2="43.2" y2="32.8" />
        </g>
        <polyline points="26.5 11.8 4.1 11.8 4.1 37.8 7.9 37.8 37.1 37.8 37.1 18.4" />
      </g>
      <g>
        <circle cx="34.8" cy="10.4" r="8.4" />
        <line x1="40.7" y1="16.3" x2="40" y2="15.6" />
        <line x1="29.6" y1="5.2" x2="28.9" y2="4.4" />
        <line x1="40.7" y1="4.4" x2="40" y2="5.2" />
        <line x1="29.6" y1="15.6" x2="28.9" y2="16.3" />
        <line x1="34.8" y1="18.7" x2="34.8" y2="17.7" />
        <line x1="34.8" y1="3" x2="34.8" y2="2" />
        <line x1="43.1" y1="10.4" x2="42.1" y2="10.4" />
        <line x1="27.4" y1="10.4" x2="26.4" y2="10.4" />
        <polyline points="32.7 6.3 34.8 10.4 38.8 9.1" />
      </g>
    </svg>
  );
}

export function TruckLine(props: IconProps) {
  return (
    <svg {...base64} {...props}>
      <g>
        <path d="M57.1,40.5h-18V15.5h14c3.9,0,7,3.1,7,7h0s-3,0-3,0v18Z" />
        <polyline points="57 25.5 46.1 25.5 46.1 33.5 57.1 33.5" />
        <line x1="48.1" y1="36.5" x2="49.1" y2="36.5" />
        <g>
          <line x1="40.8" y1="46.5" x2="22.7" y2="46.5" />
          <polyline points="10.8 46.5 5.8 46.5 5.8 40.5 57.1 40.5 57.1 46.5 52.7 46.5" />
          <g>
            <circle cx="16.8" cy="49" r="6.4" />
            <circle cx="16.8" cy="49" r="2.8" />
          </g>
          <g>
            <circle cx="46.8" cy="49" r="6.4" />
            <circle cx="46.8" cy="49" r="2.8" />
          </g>
        </g>
      </g>
      <rect x="3.9" y="8.5" width="35" height="32" />
    </svg>
  );
}
