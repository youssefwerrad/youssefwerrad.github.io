import { ScrollReveal } from "./ScrollReveal";

const tools = [
  { name: "Python", icon: "py", href: "https://www.python.org/" },
  { name: "JavaScript", icon: "js", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "C", icon: "c", href: "https://en.cppreference.com/w/c" },
  { name: "SQL", icon: "mysql", href: "https://www.mysql.com/" },
  { name: "React", icon: "react", href: "https://react.dev/" },
  { name: "HTML5", icon: "html", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: "css", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Django", icon: "django", href: "https://www.djangoproject.com/" },
  { name: "Flask", icon: "flask", href: "https://flask.palletsprojects.com/" },
  { name: "Docker", icon: "docker", href: "https://www.docker.com/" },
  { name: "Git", icon: "git", href: "https://git-scm.com/" },
  { name: "GitHub", icon: "github", href: "https://github.com/" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="skills-section-top">
            <div className="section-heading">
              <p className="eyebrow">Technologies</p>
              <h2 className="section-title">The tools I build with.</h2>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="tech-carousel" aria-label="Technologies I use">
            <div className="tech-track">
              {[0, 1].map((copy) => (
                <div className="tech-track-group" key={copy} aria-hidden={copy === 1}>
                  {tools.map((tool) => (
                    <a
                      className="tech-card"
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${tool.name} website (opens in a new tab)`}
                      tabIndex={copy === 1 ? -1 : undefined}
                      key={`${copy}-${tool.name}`}
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${tool.icon}`}
                        alt=""
                        width="64"
                        height="64"
                        loading="lazy"
                        decoding="async"
                      />
                      <span>{tool.name}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
