"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 gradient-ring"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-3 rounded-3xl border border-slate-800/80 bg-slate-900/80 px-10 py-8 shadow-2xl shadow-slate-950/80"
          >
            <div className="relative h-10 w-10">
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 blur-sm"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-slate-50">
                ME
              </span>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
              Chargement du portfolio
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

