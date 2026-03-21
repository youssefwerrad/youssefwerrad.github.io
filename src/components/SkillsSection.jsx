import { ScrollReveal } from "./ScrollReveal";

const skillGroups = [
  { category: "Languages", skills: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"] },
  { category: "Front-End", skills: ["React", "Responsive Design", "HTML5", "CSS3"] },
  { category: "Back-End", skills: ["Node.js", "Express.js", "REST APIs", "Flask"] },
  { category: "Cloud & DevOps", skills: ["Google Cloud Platform", "IBM Cloud", "Docker", "CI/CD", "Git & GitHub"] },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={0.08 * i}>
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
