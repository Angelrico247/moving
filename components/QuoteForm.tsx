"use client";

import { useState } from "react";
import { Check } from "./icons";
import { site, waLink } from "./site";

const tipos = ["Departamento", "Casa", "Oficina", "Otro"];
const paquetes = ["Express · 3 h", "Hogar · 6 h", "Total · jornada", "No sé aún"];

/** Franja café con el formulario de cotización (como "Request a quote" de MoveMe). El envío abre WhatsApp. */
export default function QuoteForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", tipo: tipos[0], origen: "", destino: "", fecha: "", paquete: paquetes[1] });
  const [sent, setSent] = useState(false);

  const update =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola ${site.name}, quiero cotizar mi mudanza.
• Nombre: ${form.nombre}
• Teléfono: ${form.telefono}
• Tipo: ${form.tipo}
• Paquete: ${form.paquete}
• De: ${form.origen}
• A: ${form.destino}
• Fecha: ${form.fecha || "por definir"}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field =
    "h-12 w-full rounded-full border-0 bg-[#3d322c]/45 px-5 text-[14px] text-white placeholder:text-white/85 outline-none transition focus:bg-[#3d322c]/60 [&>option]:text-heading";
  const label = "mb-2 block font-display text-[14px] font-semibold text-white";

  return (
    <section id="cotizar" className="scroll-mt-20 bg-brown py-16 sm:py-20">
      <div className="mx-auto max-w-[1000px] px-5">
        <p className="font-display text-[15px] font-semibold text-white">Cotiza tu mudanza sin costo</p>
        <h2 className="mt-3 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">Pide tu cotización</h2>

        {sent ? (
          <div role="status" className="mt-10 flex items-center gap-4 rounded-3xl bg-white/20 p-6 text-white">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-brown">
              <Check className="h-6 w-6" />
            </span>
            <p className="text-[15px]">
              ¡Listo, {form.nombre || "vecino"}! Abrimos WhatsApp con tu información. Si no se abrió,{" "}
              <a className="font-semibold underline" href={waLink(`Hola ${site.name}, quiero cotizar mi mudanza.`)} target="_blank" rel="noopener noreferrer">
                toca aquí
              </a>
              .{" "}
              <button type="button" onClick={() => setSent(false)} className="font-semibold underline">
                Enviar otra cotización
              </button>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-x-4 gap-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="nombre">Nombre</label>
                <input id="nombre" required value={form.nombre} onChange={update("nombre")} placeholder="Nombre" autoComplete="name" className={field} />
              </div>
              <div>
                <label className={label} htmlFor="telefono">Teléfono</label>
                <input id="telefono" required type="tel" value={form.telefono} onChange={update("telefono")} placeholder="Teléfono" autoComplete="tel" className={field} />
              </div>
            </div>

            <div className="grid items-end gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto]">
              <div>
                <label className={label} htmlFor="tipo">Tipo</label>
                <select id="tipo" value={form.tipo} onChange={update("tipo")} className={field}>
                  {tipos.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="origen">Desde</label>
                <input id="origen" required value={form.origen} onChange={update("origen")} placeholder="Colonia/Ciudad" className={field} />
              </div>
              <div>
                <label className={label} htmlFor="destino">Hasta</label>
                <input id="destino" required value={form.destino} onChange={update("destino")} placeholder="Colonia/Ciudad" className={field} />
              </div>
              <div>
                <label className={label} htmlFor="fecha">Fecha</label>
                <input id="fecha" type="date" value={form.fecha} onChange={update("fecha")} className={field} />
              </div>
              <div>
                <label className={label} htmlFor="paquete">Paquete</label>
                <select id="paquete" value={form.paquete} onChange={update("paquete")} className={field}>
                  {paquetes.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <button
                type="submit"
                className="h-12 rounded-full bg-white px-8 font-display text-[13px] font-semibold uppercase tracking-wide text-heading transition-colors hover:bg-amber"
              >
                Enviar
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
