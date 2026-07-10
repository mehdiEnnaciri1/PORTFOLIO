import type { ReactNode } from "react";

export function SectionShell({
  id,
  num,
  title,
  tint,
  children,
}: {
  id: string;
  num: string;
  title: string;
  tint?: "a" | "b" | "c";
  children: ReactNode;
}) {
  return (
    <section id={id} className={`sec${tint ? ` sec-${tint}` : ""}`} data-nav="1">
      <div className="wrap">
        <div className="slab rv">
          <span className="snum">{num}</span>
          <h2 className="stitle">{title}</h2>
          <div className="sline" />
        </div>
        {children}
      </div>
    </section>
  );
}
