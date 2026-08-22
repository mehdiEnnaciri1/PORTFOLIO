const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function HeroSection() {
  return (
    <section id="hero" data-screen-label="Hero">
      <picture>
        <source media="(max-width: 760px)" srcSet={`${basePath}/hero-mobile.jpeg`} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img id="hbg" src={`${basePath}/hero1.jpg`} alt="Mehdi Ennaciri en conférence" />
      </picture>
      <div className="hshade" />
      <div className="htint" />
      <div className="hcap mono">IANLP 2026 · Intelligent System Design Lab — Abdelmalek Essaâdi University</div>
      <div className="wrap" style={{ width: "100%" }}>
        <div className="hkick a1" style={{ paddingTop: 18 }}>Hello, I am</div>
        <h1 className="htitle">
          <span className="a2" style={{ display: "block" }}>Mehdi</span>
          <span className="a3" style={{ display: "block" }}>
            Ennaciri<span className="acc">.</span>
          </span>
        </h1>
        <p className="hsub a4">Software Engineer &amp; Full-Stack Developer</p>
        <div className="a4" style={{ marginBottom: 26 }}>
          <span className="hbadge">
            <span className="hdot" />
            Disponible immédiatement · Open to opportunities
          </span>
        </div>
        <div className="a5" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <a className="btn btnp" href="#projects">Voir mes projets →</a>
          <a className="btn" href="#contact">Me contacter</a>
          <a className="btn" href={`${basePath}/CV_Mehdi_ENNACIRI.pdf`} target="_blank" rel="noopener noreferrer">Voir le CV</a>
          <a className="btn" href="https://www.linkedin.com/in/mehdi-ennaciri-099a4925b/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href="https://github.com/mehdiEnnaciri1" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
