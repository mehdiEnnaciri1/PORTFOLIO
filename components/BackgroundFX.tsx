"use client";

import { useEffect } from "react";

/**
 * Effets de fond globaux :
 * - grain cinéma
 * - halos bleus dérivants (réagissent au scroll)
 * - tracé causal : chemin ondulant + paquet de données + nœuds par section
 * - reveal au scroll (.rv → .vis)
 * - parallax du hero (#hbg)
 */
export function BackgroundFX() {
  useEffect(() => {
    // Reveal au scroll
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    const state: { len: number; top: number; h: number; nodes: { el: SVGGElement; l: number }[] } = {
      len: 0,
      top: 0,
      h: 0,
      nodes: [],
    };

    const buildSnake = () => {
      const svg = document.getElementById("snakesvg") as SVGSVGElement | null;
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      const wrap = document.getElementById("snake");
      if (!svg || !hero || !contact || !wrap) return;
      const w = document.documentElement.clientWidth;
      const top = hero.offsetTop + hero.offsetHeight;
      const end = contact.offsetTop + contact.offsetHeight * 0.75;
      const h = Math.max(600, end - top);
      wrap.style.top = top + "px";
      wrap.style.height = h + "px";
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      const A = Math.min(w * 0.17, 320);
      const cx = w / 2;
      const seg = Math.max(560, h / 10);
      let d = `M ${cx} 0`;
      let x = cx, y = 0, dir = 1;
      while (y < h - 10) {
        const ny = Math.min(h, y + seg);
        const nx = cx + dir * A;
        d += ` C ${x} ${y + seg * 0.55}, ${nx} ${ny - seg * 0.55}, ${nx} ${ny}`;
        x = nx; y = ny; dir = -dir;
      }
      const path = document.getElementById("snakepath") as unknown as SVGPathElement;
      const trail = document.getElementById("snaketrail") as unknown as SVGPathElement;
      path.setAttribute("d", d);
      trail.setAttribute("d", d);
      const len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
      state.len = len; state.top = top; state.h = h;
      svg.querySelectorAll("g.snode").forEach((n) => n.remove());
      state.nodes = [];
      const N = 260;
      const samples: { l: number; x: number; y: number }[] = [];
      for (let i = 0; i <= N; i++) {
        const pt = path.getPointAtLength((len * i) / N);
        samples.push({ l: (len * i) / N, x: pt.x, y: pt.y });
      }
      const ns = "http://www.w3.org/2000/svg";
      ["profil", "skills", "experience", "projects", "formation", "contact"].forEach((id) => {
        const s = document.getElementById(id);
        if (!s) return;
        const ty = s.offsetTop + 160 - top;
        if (ty < 20 || ty > h - 20) return;
        let best = samples[0];
        samples.forEach((pt) => {
          if (Math.abs(pt.y - ty) < Math.abs(best.y - ty)) best = pt;
        });
        const g = document.createElementNS(ns, "g") as SVGGElement;
        g.setAttribute("class", "snode");
        const ring = document.createElementNS(ns, "circle");
        ring.setAttribute("class", "nring");
        ring.setAttribute("cx", String(best.x)); ring.setAttribute("cy", String(best.y)); ring.setAttribute("r", "9");
        const dot = document.createElementNS(ns, "circle");
        dot.setAttribute("class", "ndot");
        dot.setAttribute("cx", String(best.x)); dot.setAttribute("cy", String(best.y)); dot.setAttribute("r", "3.5");
        g.appendChild(ring); g.appendChild(dot);
        svg.insertBefore(g, document.getElementById("snakeball"));
        state.nodes.push({ el: g, l: best.l });
      });
      updateSnake(window.scrollY);
    };

    const updateSnake = (y: number) => {
      if (!state.len) return;
      const path = document.getElementById("snakepath") as unknown as SVGPathElement;
      const ball = document.getElementById("snakeball");
      const halo = document.getElementById("snakehalo");
      if (!path || !ball || !halo) return;
      const cur = y + window.innerHeight * 0.6 - state.top;
      const p = Math.max(0, Math.min(1, cur / state.h));
      const L = state.len * p;
      path.style.strokeDashoffset = String(state.len - L);
      const pt = path.getPointAtLength(L);
      ball.setAttribute("cx", String(pt.x)); ball.setAttribute("cy", String(pt.y));
      halo.setAttribute("cx", String(pt.x)); halo.setAttribute("cy", String(pt.y));
      const show = p > 0.004 && p < 0.996;
      (ball as unknown as SVGElement).style.opacity = show ? "1" : "0";
      (halo as unknown as SVGElement).style.opacity = show ? "1" : "0";
      state.nodes.forEach((n) => n.el.classList.toggle("lit", L >= n.l - 4));
    };

    const hbg = document.getElementById("hbg");
    const b1 = document.querySelector<HTMLElement>(".b1");
    const b2 = document.querySelector<HTMLElement>(".b2");
    const b3 = document.querySelector<HTMLElement>(".b3");
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.2 && hbg) {
        hbg.style.transform = `translateY(${Math.min(y * 0.22, window.innerHeight * 0.38)}px) scale(1.05)`;
      }
      const p = y * 0.0006;
      if (b1) { b1.style.rotate = `${p * 40}deg`; b1.style.translate = `0 ${Math.sin(p * 2) * 40}px`; }
      if (b2) b2.style.translate = `${Math.cos(p * 2.4) * 50}px ${-y * 0.03}px`;
      if (b3) b3.style.translate = `${Math.sin(p * 1.8) * 60}px ${y * 0.02}px`;
      updateSnake(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", buildSnake);
    buildSnake();
    const t1 = setTimeout(buildSnake, 1500);
    const t2 = setTimeout(buildSnake, 4000);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", buildSnake);
      clearTimeout(t1); clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <div id="grain" />
      <div id="flow">
        <i className="fb b1" />
        <i className="fb b2" />
        <i className="fb b3" />
      </div>
      <div id="snake">
        <svg id="snakesvg" width="100%" height="100%">
          <path id="snaketrail" fill="none" stroke="rgba(122,160,210,.10)" strokeWidth="2" />
          <path id="snakepath" fill="none" stroke="url(#snakegrad)" strokeWidth="2.5" strokeLinecap="round" />
          <circle id="snakeball" r="6" />
          <circle id="snakehalo" r="22" />
          <defs>
            <linearGradient id="snakegrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="rgba(111,195,255,.05)" />
              <stop offset="0.7" stopColor="rgba(111,195,255,.45)" />
              <stop offset="1" stopColor="rgba(111,195,255,.9)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
