"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="section-padding scroll-mt-24">
      <div className="container-xl">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow && (
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.22em] text-indigo-400">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              {title}
            </h2>
            {description && (
              <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

