import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const skillGroups = [
  {
    title: "Languages",
    tools: [
      { name: "Python", icon: "py" },
      { name: "JavaScript", icon: "js" },
      { name: "C", icon: "c" },
      { name: "SQL", icon: "mysql" },
    ],
  },
  {
    title: "Frontend",
    tools: [
      { name: "React", icon: "react" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ],
  },
  {
    title: "Backend",
    tools: [
      { name: "Django", icon: "django" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    title: "Tools & workflow",
    tools: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
];

const allSkills = skillGroups.flatMap((group) =>
  group.tools.map((tool) => ({ ...tool, category: group.title }))
);

const layouts = [
  { id: "logo-grid", label: "Logo grid" },
  { id: "bento", label: "Bento" },
  { id: "ticker", label: "Ticker" },
  { id: "minimal", label: "Minimal" },
];

function LogoGrid() {
  return (
    <div className="skills-logo-grid">
      {allSkills.map((skill) => (
        <article className="skills-logo-card" key={skill.name}>
          <img
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt=""
            width="36"
            height="36"
            loading="lazy"
            decoding="async"
          />
          <span>{skill.name}</span>
        </article>
      ))}
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="skills-bento">
      {skillGroups.map((group, groupIndex) => (
        <article className={`skills-bento-card skills-bento-card-${groupIndex + 1}`} key={group.title}>
          <span className="skills-bento-category">{group.title}</span>
          <div className="skills-bento-tools">
            {group.tools.map((tool) => (
              <span className="skills-bento-tool" key={tool.name}>
                <img
                  src={`https://skillicons.dev/icons?i=${tool.icon}`}
                  alt=""
                  width="30"
                  height="30"
                  loading="lazy"
                  decoding="async"
                />
                {tool.name}
              </span>
            ))}
          </div>
          <span className="skills-bento-number">0{groupIndex + 1}</span>
        </article>
      ))}
    </div>
  );
}

function Ticker() {
  return (
    <div className="skills-ticker-wrap">
      <div className="skills-ticker" aria-label="Technologies: Python, JavaScript, C, SQL, React, HTML5, CSS3, Django, Flask, Docker, Git, GitHub">
        {[0, 1].map((row) => (
          <div className={`skills-ticker-track skills-ticker-track-${row + 1}`} key={row}>
            {[...allSkills, ...allSkills].map((skill, index) => (
              <span className="skills-ticker-item" aria-hidden={index >= allSkills.length} key={`${row}-${index}`}>
                {skill.name}
                <span className="skills-ticker-separator" aria-hidden="true">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function MinimalList() {
  return (
    <div className="skills-minimal-list">
      {skillGroups.map((group, index) => (
        <article className="skills-minimal-row" key={group.title}>
          <span className="skills-minimal-number">0{index + 1}</span>
          <h3>{group.title}</h3>
          <p>{group.tools.map((tool) => tool.name).join("  ·  ")}</p>
        </article>
      ))}
    </div>
  );
}

export const SkillsSection = () => {
  const [layout, setLayout] = useState("bento");

  return (
    <section id="skills" className="skills-section">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="skills-section-top">
            <div className="section-heading">
              <p className="eyebrow">The toolkit</p>
              <h2 className="section-title">Tools I reach for.</h2>
              <p className="section-description">
                Pick a layout to explore the languages, frameworks, and tools I use.
              </p>
            </div>
            <div className="skills-layout-picker" role="group" aria-label="Choose skills display style">
              {layouts.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={layout === option.id ? "is-selected" : ""}
                  aria-pressed={layout === option.id}
                  onClick={() => setLayout(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal key={layout} className="skills-layout-preview">
          {layout === "logo-grid" && <LogoGrid />}
          {layout === "bento" && <BentoGrid />}
          {layout === "ticker" && <Ticker />}
          {layout === "minimal" && <MinimalList />}
        </ScrollReveal>
      </div>
    </section>
  );
};
