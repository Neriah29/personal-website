import React, { useCallback, useEffect, useRef, useState } from "react";
import "../assets/styles/portfolio.scss";

// org logos
import nsbelogo from "../assets/images/nsbelogo.png";
import handshakelogo from "../assets/images/handshakelogo.jpg";
import ricelogo from "../assets/images/ricelogo.png";
import codeworldlogo from "../assets/images/Codeworld Innovations Abuja.jpeg";
import twosigmalogo from "../assets/images/logos/twosigma.png";
import tfalogo from "../assets/images/logos/teachforamerica.png";
import janestreetlogo from "../assets/images/logos/janestreet.png";
import questbridgelogo from "../assets/images/logos/questbridge.png";

// project thumbnails
import v11 from "../assets/images/logos/v11-logo.png";
import resumeImg from "../assets/images/resume-blurred.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock10 from "../assets/images/mock10.png";

/* ----------------------------- data ----------------------------- */

const GITHUB = "https://github.com/Neriah29";
const LINKEDIN = "https://www.linkedin.com/in/neriah-okolo/";
const EMAIL = "no32@rice.edu";

type Experience = {
  role: string;
  org: string;
  logo?: string; // omit to render an initials monogram
  mono?: string; // marker class for the monogram background
  where: string;
  date: string;
  note?: string;
};

const EXPERIENCE: Experience[] = [
  {
    role: "Founder",
    org: "V11",
    logo: v11,
    where: "FIFA 2026 World Cup prediction platform · 5 ML models",
    date: "2026 — present",
  },
  {
    role: "Software Engineer Intern",
    org: "Two Sigma",
    logo: twosigmalogo,
    where: "Manhattan, NY",
    date: "May 2026 — Aug 2026",
    note: "Multi-agent automation tooling with AgenTSKit",
  },
  {
    role: "Vision-Language Model Researcher",
    org: "Handshake AI",
    logo: handshakelogo,
    where: "Houston, TX",
    date: "Oct 2025 — Dec 2025",
    note: "Project Hedgehog · invite-only research cohort (1 in 1,000)",
  },
  {
    role: "Outreach Senator",
    org: "National Society of Black Engineers",
    logo: nsbelogo,
    where: "Rice Chapter · Houston, TX",
    date: "2026 — present",
    note: "APEx Honors scholar",
  },
  {
    role: "Tutor",
    org: "Teach for America",
    logo: tfalogo,
    where: "Houston, TX",
    date: "2026 — present",
    note: "K–12 mathematics",
  },
  {
    role: "Treasurer",
    org: "Rice African Students Association",
    logo: ricelogo,
    where: "Houston, TX",
    date: "2025 — 2026",
    note: "Building bridges across Rice's African community",
  },
  {
    role: "Software & Web Developer Intern",
    org: "CodeWorld Innovations",
    logo: codeworldlogo,
    where: "Abuja, Nigeria",
    date: "2021 — 2023",
    note: "Built and shipped client web applications",
  },
];

type Recognition = {
  label: string;
  logo?: string;
};

const RECOGNITION: Recognition[] = [
  { label: "Jane Street FOCUS", logo: janestreetlogo },
  { label: "Questbridge Scholar", logo: questbridgelogo },
  { label: "National Merit" },
  { label: "NSBE APEx", logo: nsbelogo },
  { label: "NTIC Math Olympiad Champion" },
];

type Project = {
  title: string;
  desc: string;
  href: string;
  img: string;
  tags: { label: string; mk: string }[];
};

const PROJECTS: Project[] = [
  {
    title: "V11 — World Cup Simulator",
    desc: "Full-stack FIFA 2026 World Cup predictor: 5 ML models trained on 40,000+ matches, 69% accuracy. Monte Carlo mode called the top 4 — Argentina, Spain, France & England.",
    href: "https://v11-worldcup.vercel.app/",
    img: v11,
    tags: [
      { label: "Next.js", mk: "mk-purple" },
      { label: "FastAPI", mk: "mk-green" },
      { label: "Python", mk: "mk-blue" },
      { label: "ML", mk: "mk-pink" },
    ],
  },
  {
    title: "Stock Market Model",
    desc: "A Markov-chain model predicting price moves for Google, First Solar & the Dow — 75% accuracy across test periods, packaged as a modular, unit-tested Python library.",
    href: "https://github.com/Neriah29/Market-dynamics-markov-model",
    img: mock08,
    tags: [
      { label: "Python", mk: "mk-blue" },
      { label: "NumPy", mk: "mk-purple" },
      { label: "Markov", mk: "mk-green" },
    ],
  },
  {
    title: "Six Degrees Traversal",
    desc: "A graph system linking 5,000 actors across 3,400 films — BFS shortest-path queries in under 0.03s, O(V+E).",
    href: "https://github.com/Neriah29/Six-Degrees-Graph-Traversal-System",
    img: mock07,
    tags: [
      { label: "Python", mk: "mk-blue" },
      { label: "Graphs", mk: "mk-pink" },
      { label: "BFS", mk: "mk-green" },
    ],
  },
  {
    title: "CartMax",
    desc: "An e-commerce web app that trims the hassle of in-person shopping — browse, search, and find items fast.",
    href: "https://github.com/Neriah29/Cart_max",
    img: mock10,
    tags: [
      { label: "JavaScript", mk: "mk-yellow" },
      { label: "HTML5", mk: "mk-orange" },
      { label: "CSS3", mk: "mk-blue" },
    ],
  },
];

const SKILLS = [
  {
    lbl: "Languages",
    tags: [
      { label: "Python", mk: "mk-yellow" },
      { label: "Java", mk: "mk-orange" },
      { label: "C", mk: "mk-blue" },
      { label: "TypeScript", mk: "mk-blue" },
      { label: "JavaScript", mk: "mk-yellow" },
    ],
  },
  {
    lbl: "Frontend",
    tags: [
      { label: "React", mk: "mk-blue" },
      { label: "Next.js", mk: "mk-purple" },
      { label: "Node", mk: "mk-green" },
      { label: "TailwindCSS", mk: "mk-green" },
    ],
  },
  {
    lbl: "ML & GenAI",
    tags: [
      { label: "Pandas", mk: "mk-green" },
      { label: "NumPy", mk: "mk-purple" },
      { label: "FastAPI", mk: "mk-green" },
      { label: "TensorFlow", mk: "mk-orange" },
      { label: "AgenTSKit", mk: "mk-blue" },
      { label: "Claude", mk: "mk-orange" },
    ],
  },
  {
    lbl: "Tools",
    tags: [
      { label: "Git", mk: "mk-orange" },
      { label: "GitHub", mk: "mk-blue" },
      { label: "Cursor", mk: "mk-purple" },
      { label: "CI/CD", mk: "mk-green" },
      { label: "Jupyter", mk: "mk-yellow" },
    ],
  },
];

const TABS = ["home", "experience", "projects", "contact"];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

/* ----------------------------- icons ----------------------------- */

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.8 18 5.1 18 5.1c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
  </svg>
);
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04s-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const IconSun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const IconMoon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

/* ----------------------------- component ----------------------------- */

function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      return (localStorage.getItem("pf-theme") as "light" | "dark") || "light";
    } catch {
      return "light";
    }
  });
  const [active, setActive] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const activeRef = useRef(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem("pf-theme", theme);
    } catch {}
  }, [theme]);

  const goTo = useCallback((i: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.scrollTo({ left: i * stage.clientWidth, behavior: "smooth" });
  }, []);

  // Update the progress bar via ref (no re-render) and only setState when the
  // active panel actually changes — re-rendering on every scroll event fights
  // scroll-snap: mandatory and snaps the stage back to panel 0.
  const onScroll = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const max = stage.scrollWidth - stage.clientWidth;
    const p = max > 0 ? stage.scrollLeft / max : 0;
    if (barRef.current) barRef.current.style.width = `${8 + p * 92}%`;
    const idx = Math.round(stage.scrollLeft / stage.clientWidth);
    if (idx !== activeRef.current) {
      activeRef.current = idx;
      setActive(idx);
    }
  }, []);

  // translate vertical wheel to horizontal, unless the panel needs to scroll vertically
  const onWheel = useCallback((e: React.WheelEvent) => {
    const stage = stageRef.current;
    if (!stage) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // real horizontal gesture
    const panel = stage.children[activeRef.current] as HTMLElement | undefined;
    if (panel && panel.scrollHeight > panel.clientHeight + 2) {
      const atTop = panel.scrollTop <= 0;
      const atBottom =
        panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 2;
      if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) return;
    }
    stage.scrollLeft += e.deltaY;
  }, []);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setResumeOpen(false);
        return;
      }
      if (e.key === "ArrowRight")
        goTo(Math.min(activeRef.current + 1, TABS.length - 1));
      if (e.key === "ArrowLeft") goTo(Math.max(activeRef.current - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  return (
    <div className={`portfolio ${theme === "dark" ? "dark" : ""}`}>
      {/* top bar */}
      <header className="pf-nav">
        <div className="pf-brand" onClick={() => goTo(0)}>
          <span>neriah okolo<span className="dot">.</span></span>
          <span className="role">software engineer</span>
        </div>

        <nav className="pf-tabs">
          {TABS.map((t, i) => (
            <button
              key={t}
              className={`pf-tab ${i === active ? "active" : ""}`}
              onClick={() => goTo(i)}
            >
              <span className="idx">0{i + 1}</span>
              {t}
            </button>
          ))}
        </nav>

        <div className="pf-actions">
          <a className="pf-icon-btn" href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGitHub />
          </a>
          <a className="pf-icon-btn" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
          <button
            className="pf-icon-btn"
            onClick={() => setTheme((m) => (m === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </header>

      {/* horizontal stage */}
      <div className="pf-stage" ref={stageRef} onScroll={onScroll} onWheel={onWheel}>
        {/* 01 — home */}
        <section className="pf-panel">
          <div className="pf-inner">
            <div className="pf-kicker">01 — hello</div>
            <h1 className="home-lead">
              I'm Neriah, a <span className="accent">software engineer</span> studying{" "}
              <span className="mk mk-blue">Computer Science &amp; AI</span>
              <span className="home-fr"> — et un peu de <span className="accent">français</span> —</span>{" "}
              at <span className="mk mk-purple">Rice University</span>.
            </h1>
            <p className="home-sub">
              Building{" "}
              <a
                className="home-build"
                href="https://v11-worldcup.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                V11
                <IconArrow />
              </a>
              . Previously a <b>Software Engineer Intern at Two Sigma</b> and a
              vision-language model researcher at <b>Handshake AI</b>.
            </p>

            <div className="home-recog">
              {RECOGNITION.map((r, i) => (
                <React.Fragment key={r.label}>
                  {i > 0 && <span className="recog-div">|</span>}
                  <span className="recog">
                    {r.logo && <img src={r.logo} alt="" />}
                    {r.label}
                  </span>
                </React.Fragment>
              ))}
            </div>

            <div className="home-skills">
              {SKILLS.map((s) => (
                <div className="skill-line" key={s.lbl}>
                  <span className="lbl">{s.lbl}</span>
                  {s.tags.map((t, i) => (
                    <React.Fragment key={t.label}>
                      <span className={`mk ${t.mk}`}>{t.label}</span>
                      {i < s.tags.length - 1 ? " " : ""}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>

            <div className="home-links" style={{ marginTop: 34 }}>
              <button className="pf-pill solid" onClick={() => setResumeOpen(true)}>
                Résumé
              </button>
              <a className="pf-pill" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
          </div>
        </section>

        {/* 02 — experience */}
        <section className="pf-panel">
          <div className="pf-inner">
            <div className="pf-kicker">02 — experience</div>
            <div className="xp-list">
              {EXPERIENCE.map((x) => (
                <div className="xp-row" key={x.org + x.role}>
                  <div className="xp-main">
                    <span className="xp-role">{x.role}</span> at{" "}
                    <span className="xp-org">
                      {x.logo ? (
                        <img src={x.logo} alt="" />
                      ) : (
                        <span className={`xp-mono ${x.mono || "mk-blue"}`}>
                          {initials(x.org)}
                        </span>
                      )}
                      {x.org}
                    </span>
                    <span className="xp-note">
                      {x.where}
                      {x.note ? ` — ${x.note}` : ""}
                    </span>
                  </div>
                  <div className="xp-date">{x.date}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — projects */}
        <section className="pf-panel">
          <div className="pf-inner">
            <div className="pf-kicker">03 — selected work</div>
            <div className="pj-grid">
              {PROJECTS.map((p) => (
                <a
                  className="pj-card"
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="pj-thumb">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <div className="pj-body">
                    <div className="pj-head">
                      <span className="pj-title">{p.title}</span>
                      <span className="pj-arrow"><IconArrow /></span>
                    </div>
                    <p className="pj-desc">{p.desc}</p>
                    <div className="pj-tags">
                      {p.tags.map((t) => (
                        <span className={`pj-tag ${t.mk}`} key={t.label}>
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — contact */}
        <section className="pf-panel">
          <div className="pf-inner">
            <div className="pf-kicker">04 — contact</div>
            <h2 className="ct-lead">
              Let's <span className="accent">build</span> something.
            </h2>
            <p className="ct-sub">
              Open to collabs. The fastest way to reach me is email, otherwise I'm
              around on GitHub and LinkedIn.
            </p>
            <div className="ct-rows">
              <a className="ct-row" href={`mailto:${EMAIL}`}>
                <span className="k">email</span>
                <span>{EMAIL}</span>
              </a>
              <a className="ct-row" href={GITHUB} target="_blank" rel="noreferrer">
                <span className="k">github</span>
                <span>@Neriah29</span>
              </a>
              <a className="ct-row" href={LINKEDIN} target="_blank" rel="noreferrer">
                <span className="k">linkedin</span>
                <span>neriah-okolo</span>
              </a>
              <button className="ct-row" onClick={() => setResumeOpen(true)}>
                <span className="k">résumé</span>
                <span>view</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* progress + hint */}
      <div className="pf-progress">
        <div className="bar" ref={barRef} style={{ width: "8%" }} />
      </div>
      {active < TABS.length - 1 && (
        <div className="pf-hint">
          scroll <span className="arrow">→</span>
        </div>
      )}

      {/* résumé modal — current résumé with select details blurred */}
      {resumeOpen && (
        <div className="pf-modal" onClick={() => setResumeOpen(false)}>
          <div className="pf-modal-inner" onClick={(e) => e.stopPropagation()}>
            <div className="pf-modal-bar">
              <span className="pf-modal-title">résumé</span>
              <button
                className="pf-modal-close"
                onClick={() => setResumeOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="pf-modal-scroll">
              <img src={resumeImg} alt="Neriah Okolo résumé (some details blurred)" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
