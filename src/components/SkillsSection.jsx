import { ScrollReveal } from "./ScrollReveal";

const skills = [
  { name: "Python",      icon: "py" },
  { name: "JavaScript",  icon: "js" },
  { name: "C",           icon: "c" },
  { name: "SQL",         icon: "mysql" },
  { name: "HTML5",       icon: "html" },
  { name: "CSS3",        icon: "css" },
  { name: "React",       icon: "react" },
  { name: "Tailwind",    icon: "tailwind" },
  { name: "Node.js",     icon: "nodejs" },
  { name: "Express",     icon: "express" },
  { name: "Flask",       icon: "flask" },
  { name: "Django",      icon: "django" },
  { name: "Docker",      icon: "docker" },
  { name: "Git",         icon: "git" },
  { name: "GitHub",      icon: "github" },
  { name: "GCP",         icon: "gcp" },
  { name: "Vite",        icon: "vite" },
  { name: "Redux",       icon: "redux" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12 leading-tight">
            What I work with.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={0.03 * i}>
              <div className="flex flex-col items-center gap-2.5 p-4 rounded-xl border border-border bg-background hover:border-foreground/20 transition-colors duration-200 group">
                <img
                  src={"https://skillicons.dev/icons?i=" + skill.icon}
                  alt={skill.name}
                  width={36}
                  height={36}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-xs text-muted-foreground font-medium text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}; 