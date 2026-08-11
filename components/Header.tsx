"use client";

import { useEffect, useState } from "react";
import { Menu, Close, Phone, Truck } from "./icons";
import { nav, site } from "./site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="header-slide-in fixed inset-x-0 top-0 z-50 h-20 border-b border-line bg-white">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-6">

        {/* ── Logo ───────────────────────────────────────────── */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-amber transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110">
            <Truck className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">
            Mov<span className="text-amber">Ing</span>
          </span>
        </a>

        {/* ── Nav desktop ────────────────────────────────────── */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-ink transition-colors duration-300 hover:text-ink/70"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* ── Acciones desktop ───────────────────────────────── */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-slate transition-colors duration-300 hover:text-ink"
          >
            <Phone className="h-4 w-4 text-amber-deep" />
            {site.phoneDisplay}
          </a>

          <a
            href="#cotizar"
            className="btn-shine rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-ink shadow-md shadow-amber/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber/35"
          >
            Cotizar
          </a>
        </div>

        {/* ── Hamburger ──────────────────────────────────────── */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink transition-all duration-300 hover:bg-line md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-90 scale-75" : "rotate-0 scale-100"
            }`}
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </span>
        </button>
      </div>

      {/* ── Menú móvil ─────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 flex h-full w-72 flex-col bg-cream shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Cabecera del drawer */}
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <span className="font-display text-lg font-extrabold text-ink">
              Mov<span className="text-amber">Ing</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-lg text-ink hover:bg-line"
              aria-label="Cerrar menú"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          {/* Links con stagger al abrir */}
          <nav className="flex flex-col gap-1 p-4">
            {nav.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
                className={`rounded-xl px-4 py-3 text-base font-medium text-ink transition-all duration-300 hover:bg-paper hover:pl-5 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-3 opacity-0"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTAs al pie del drawer */}
          <div className="mt-auto space-y-3 border-t border-line p-6">
            <a
              href="#cotizar"
              onClick={() => setOpen(false)}
              className="btn-shine block rounded-full bg-amber px-5 py-3 text-center text-base font-bold text-ink shadow-md shadow-amber/20"
            >
              Cotizar mi mudanza
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-slate"
            >
              <Phone className="h-4 w-4 text-amber" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
