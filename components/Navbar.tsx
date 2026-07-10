"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const links = [
  { id: "profil", label: "Profil" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "formation", label: "Formation" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let cur: string | null = null;
      links.forEach(({ id }) => {
        const s = document.getElementById(id);
        if (s && s.offsetTop <= y) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav">
      <a className="nlogo" href="#hero">
        <span className="lgm">
          ME
          <i className="lga" />
        </span>
        <span className="lgt">
          <b>Mehdi Ennaciri</b>
          <span>Portfolio — 2026</span>
        </span>
      </a>
      <div className="npills">
        {links.map(({ id, label }) => (
          <a key={id} className={`nl${active === id ? " on" : ""}`} href={`#${id}`}>
            {label}
          </a>
        ))}
      </div>
      <a
        className="btn"
        style={{ padding: "8px 18px", fontSize: 12 }}
        href={`${basePath}/CV_Mehdi_ENNACIRI.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        CV ↓
      </a>
    </nav>
  );
}
