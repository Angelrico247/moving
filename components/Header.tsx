"use client";

import { useEffect, useState } from "react";
import { Menu, Close } from "./icons";
import { Logo } from "./Logo";
import { nav } from "./site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Píldora activa según la sección visible.
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="header-slide-in sticky top-0 z-50 border-b border-line/60 bg-white">
      <div className="mx-auto flex h-20 max-w-[1000px] items-center justify-between px-5">
        <a href="#top" aria-label="MovIng, ir al inicio" className="text-heading">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              aria-current={active === n.href ? "true" : undefined}
              className={`rounded-full px-4 py-2.5 font-display text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                active === n.href ? "bg-cream text-heading" : "text-body hover:text-heading"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center bg-brown text-white lg:hidden"
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal (móvil)" className="border-t border-line bg-white lg:hidden">
          <ul className="mx-auto max-w-[1000px] px-5 py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/60 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-heading"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
