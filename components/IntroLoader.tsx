"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TruckDetailed } from "./icons";

const IntroContext = createContext(true);

export function useIntroReady() {
  return useContext(IntroContext);
}

/** Pantalla de carga inicial con el logo — mismo patrón que los demás
 * proyectos de TWID (Terra Inmobiliaria, Dental). Se muestra una sola vez
 * al cargar el sitio y se desvanece sola. */
export function IntroProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const readyTimer = setTimeout(() => setReady(true), 550);
    const overlayTimer = setTimeout(() => {
      setShowOverlay(false);
      document.body.style.overflow = "";
    }, 950);

    return () => {
      clearTimeout(readyTimer);
      clearTimeout(overlayTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <IntroContext.Provider value={ready}>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center gap-3"
            >
              <TruckDetailed className="h-20 w-20 text-ink sm:h-24 sm:w-24" />
              <span className="font-display text-2xl font-black tracking-tight text-ink sm:text-3xl">
                Mov<span className="text-amber">Ing</span>
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
