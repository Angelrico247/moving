"use client";

import { useState } from "react";
import { ArrowRight, Check, Whatsapp } from "./icons";
import { site, waLink } from "./site";

const tipos = ["Departamento", "Casa", "Oficina", "Otro"];
const paquetes = ["Express · 3 h", "Hogar · 6 h", "Total · jornada", "No sé aún"];

export default function QuoteForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    tipo: tipos[0],
    paquete: paquetes[1],
    origen: "",
    destino: "",
    fecha: "",
  });
  const [sent, setSent] = useState(false);

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement
      >
    ) =>
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
    "w-full rounded-xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-slate/60 outline-none transition-colors focus:border-amber focus:bg-paper";
  const label = "mb-1.5 block text-sm font-semibold text-ink";

  return (
    <section id="cotizar" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-10 rounded-[2rem] bg-ink p-8 text-cream sm:p-12 lg:grid-cols-[0.9fr_1.1fr] bg-route">
          {/* Lado izquierdo */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-amber">
              Cotización gratis
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Dinos qué mueves y te damos precio cerrado
            </h2>
            <p className="mt-4 max-w-md text-cream/75">
              Llena el formulario y te llega tu cotización por WhatsApp en
              minutos. Sin compromiso y sin letras chiquitas.
            </p>
            <a
              href={waLink(`Hola ${site.name}, quiero cotizar mi mudanza.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-[#0b3d28] transition-transform hover:-translate-y-0.5"
            >
              <Whatsapp className="h-5 w-5" />
              Prefiero escribir directo
            </a>
          </div>

          {/* Formulario */}
          <div className="rounded-3xl bg-paper p-6 sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-teal/15 text-teal">
                  <Check className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-ink">
                  ¡Listo, {form.nombre || "vecino"}!
                </h3>
                <p className="mt-2 max-w-xs text-slate">
                  Abrimos WhatsApp con tu información. Si no se abrió,{" "}
                  <a
                    className="font-semibold text-amber-deep underline"
                    href={waLink(`Hola ${site.name}, quiero cotizar mi mudanza.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    toca aquí
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-ink underline"
                >
                  Enviar otra cotización
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      required
                      value={form.nombre}
                      onChange={update("nombre")}
                      placeholder="Tu nombre"
                      className={field}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="telefono">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      required
                      type="tel"
                      value={form.telefono}
                      onChange={update("telefono")}
                      placeholder="33 0000 0000"
                      className={field}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="tipo">
                      Tipo de lugar
                    </label>
                    <select
                      id="tipo"
                      value={form.tipo}
                      onChange={update("tipo")}
                      className={field}
                    >
                      {tipos.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={label} htmlFor="paquete">
                      Paquete
                    </label>
                    <select
                      id="paquete"
                      value={form.paquete}
                      onChange={update("paquete")}
                      className={field}
                    >
                      {paquetes.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="origen">
                      De (origen)
                    </label>
                    <input
                      id="origen"
                      required
                      value={form.origen}
                      onChange={update("origen")}
                      placeholder="Colonia / zona"
                      className={field}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="destino">
                      A (destino)
                    </label>
                    <input
                      id="destino"
                      required
                      value={form.destino}
                      onChange={update("destino")}
                      placeholder="Colonia / zona"
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label className={label} htmlFor="fecha">
                    Fecha tentativa
                  </label>
                  <input
                    id="fecha"
                    type="date"
                    value={form.fecha}
                    onChange={update("fecha")}
                    className={field}
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-base font-bold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Obtener mi cotización
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-center text-xs text-slate">
                  Al enviar abrimos WhatsApp con tus datos listos. No guardamos
                  nada sin tu permiso.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
