export function AboutSection() {
  return (
    <div className="grid gap-9 md:grid-cols-[1.5fr_1fr] md:items-start">
      <div className="rv">
        <p className="text-lg font-semibold leading-relaxed text-[#dfeaf8] mb-5">
          Software Engineer spécialisé en IA &amp; Full-Stack, actuellement Doctorant en Causal
          Machine Learning. Je conçois des systèmes complexes alliant performance back-end et
          intelligence artificielle.
        </p>
        <p className="text-[15px] leading-[1.75] text-[#b9c9de] mb-4">
          Computer Engineering graduate (Master&apos;s, Abdelmalek Essaadi University · Bachelor&apos;s in
          Mathematics and Computer Science, Ben M&apos;sik Faculty of Sciences, Casablanca), currently a
          PhD student in Artificial Intelligence focused on causality and causal machine learning —
          integrating large language models and formal causal inference to discover actionable
          causal rules from real-world data.
        </p>
        <p className="text-[15px] leading-[1.75] text-[#b9c9de] mb-4">
          I specialize in full-stack development, AI, and data engineering: Python (FastAPI, Django,
          Flask), React.js, TypeScript, Docker, PostgreSQL, Redis, Celery, real-time/asynchronous
          systems, and AI/ML (CNN, LSTM, TensorFlow, PyTorch, computer vision), with solid DevOps,
          testing, and optimization practices.
        </p>
        <p className="text-[15px] leading-[1.75] text-[#b9c9de]">
          Polyvalent — de la vision par ordinateur (combats UFC, Ellendir) aux dashboards réseau à
          grande échelle (Orange Maroc) — je livre du code propre, testé et déployé (CI/CD). Open to
          research collaborations and industry opportunities at the intersection of AI, causality,
          and data-intensive systems.
        </p>
      </div>

      <div className="panel rv p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="mono text-xs text-[#c6d6ec]">Research Focus: Causal ML &amp; LLMs</span>
          <span className="chip chipa mono" style={{ fontSize: 10, letterSpacing: ".15em" }}>
            PHD STUDENT
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
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
