"use client";

import { useEffect } from "react";

/**
 * Effets de fond globaux (v2 — Silk Wave) :
 * - grain cinéma
 * - vague de soie lumineuse qui ondule avec le scroll (remplace le serpent)
 * - horizon lumineux pulsant en bas du hero
 * - poussière d'étoiles scintillante avec parallax
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

    let sy = window.scrollY;
    const hbg = document.getElementById("hbg");
    const onScroll = () => {
      sy = window.scrollY;
      if (sy < window.innerHeight * 1.2 && hbg) {
        hbg.style.transform = `translateY(${Math.min(sy * 0.22, window.innerHeight * 0.38)}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Poussière d'étoiles
    const dust = Array.from({ length: 90 }, () => ({
      x: Math.random(), y: Math.random(), r: Math.random() * 1.4 + 0.3,
      tw: Math.random() * 6.28, sp: 0.2 + Math.random() * 0.6,
    }));

    const silk = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      ctx.globalCompositeOperation = "lighter";
      const N = 34;
      const cx = w * (0.62 - 0.22 * Math.sin(sy * 0.00045));
      const cy = h * 0.52 + Math.sin(sy * 0.0006) * h * 0.22;
      for (let k = 0; k < N; k++) {
        const f = k / (N - 1);
        const spread = (f - 0.5) * h * 0.42;
        const tw = Math.sin(t * 0.22 + f * 2.4);
        ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
          const u = i / 60;
          const x = -80 + u * (w + 160);
          const bend = Math.sin(u * 2.6 + t * 0.3 + f * 1.1) * h * 0.16;
          const pinch = Math.sin(u * 3.14);
          const y = cy + (x - cx) * 0.34 + bend + spread * (0.25 + 0.75 * Math.abs(Math.sin(u * 3.14 + tw)));
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          if (pinch < 0) break;
        }
        const a = 0.028 + 0.05 * Math.pow(Math.sin(f * 3.14), 2);
        const grad = ctx.createLinearGradient(0, cy - h * 0.3, w, cy + h * 0.3);
        grad.addColorStop(0, "rgba(30,80,180,0)");
        grad.addColorStop(0.4, `rgba(90,170,255,${a.toFixed(3)})`);
        grad.addColorStop(0.65, `rgba(160,220,255,${(a * 1.5).toFixed(3)})`);
        grad.addColorStop(1, "rgba(40,100,200,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const stars = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      for (const s of dust) {
        const a = 0.12 + 0.3 * Math.abs(Math.sin(t * s.sp + s.tw));
        ctx.fillStyle = `rgba(180,215,255,${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x * w, ((s.y * h * 2 - sy * 0.06) % h + h) % h, s.r, 0, 6.283);
        ctx.fill();
      }
    };

    const horizon = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      const y0 = h * 0.88 - sy * 0.25;
      if (y0 > -h * 0.3) {
        ctx.globalCompositeOperation = "lighter";
        const g = ctx.createRadialGradient(w / 2, y0 + h * 0.55, h * 0.1, w / 2, y0 + h * 0.55, h * 0.9);
        g.addColorStop(0, "rgba(80,160,255,.28)");
        g.addColorStop(0.5, "rgba(30,80,180,.1)");
        g.addColorStop(1, "rgba(10,30,80,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
        const pulse = 0.75 + 0.25 * Math.sin(t * 0.8);
        ctx.strokeStyle = `rgba(170,220,255,${(0.55 * pulse).toFixed(3)})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(111,195,255,.9)";
        ctx.shadowBlur = 22;
        ctx.beginPath();
        ctx.ellipse(w / 2, y0 + h * 0.62, w * 0.75, h * 0.6, 0, Math.PI * 1.15, Math.PI * 1.85);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.globalCompositeOperation = "source-over";
      }
      stars(ctx, w, h, t);
    };

    let raf = 0;
    const draw = (tm: number) => {
      const t = tm / 1000;
      const c = document.getElementById("fx") as HTMLCanvasElement | null;
      if (c) {
        const w = window.innerWidth, h = window.innerHeight;
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        if (c.width !== w * dpr || c.height !== h * dpr) {
          c.width = w * dpr; c.height = h * dpr;
          c.style.width = w + "px"; c.style.height = h + "px";
        }
        const ctx = c.getContext("2d")!;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        horizon(ctx, w, h, t);
        silk(ctx, w, h, t);
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="grain" />
      <canvas id="fx" />
    </>
  );
}
