export function AboutSection() {
  return (
    <div className="grid gap-9 md:grid-cols-[1.2fr_1fr] md:items-start">
      <div className="rv">
        <p className="text-lg font-semibold leading-relaxed text-[#dfeaf8] mb-5">
          Software Engineer spécialisé en IA &amp; Full-Stack, avec une expertise en Causal
          Machine Learning. Je conçois des systèmes complexes alliant performance back-end et
          intelligence artificielle.
        </p>
        <p className="text-[15px] leading-[1.75] text-[#b9c9de] mb-4">
          Ingénieur en informatique (Master, Abdelmalek Essaâdi), passionné par l&apos;IA appliquée
          à la causalité et au Causal Machine Learning — combinant LLMs et inférence causale
          formelle pour extraire des règles actionnables de données réelles.
        </p>
        <p className="text-[15px] leading-[1.75] text-[#b9c9de]">
          Polyvalent — de la vision par ordinateur (UFC, Ellendir) aux dashboards réseau à grande
          échelle (Orange Maroc) — je livre du code propre, testé et déployé (CI/CD). Ouvert aux
          collaborations de recherche et opportunités industrie à l&apos;intersection IA, causalité
          et systèmes data-intensifs.
        </p>
      </div>

      <div className="panel rv p-7">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="mono text-[13px] text-[#c6d6ec]">Research Focus: Causal ML &amp; LLMs</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            ["Full-Stack", "Python, FastAPI, Django, Flask, React.js, TypeScript, PostgreSQL, Redis."],
            ["AI & ML", "Causal ML, LLMs, TensorFlow, PyTorch, CNN, LSTM, Computer Vision."],
            ["DevOps & Systems", "Docker, Celery, real-time/async systems, testing, optimization."],
            ["Research & Innovation", "Open to collaborations in AI, causality, and data-intensive systems."],
          ].map(([label, txt]) => (
            <div key={label} className="rounded-[14px] border border-[rgba(122,160,210,.15)] bg-[rgba(6,12,24,.8)] p-4">
              <p className="mono mb-2 text-[10px] uppercase tracking-[.2em] text-[#6fc3ff]">{label}</p>
              <p className="text-[13px] leading-relaxed text-[#c6d6ec]">{txt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
