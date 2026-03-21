import { ScrollReveal } from "./ScrollReveal";

const experiences = [
  {
    role: "Full Stack Application Development Capstone",
    company: "IBM / Coursera",
    period: "2024",
    description: "Completed the IBM Full Stack Developer Professional Certificate capstone, building and deploying a full stack web application using React, Node.js, Express, and cloud services.",
  },
  {
    role: "CS50's Web Programming with Python and JavaScript",
    company: "Harvard University / edX",
    period: "2024",
    description: "Advanced web development course covering Django, JavaScript, SQL, and modern web technologies. Built several full-stack projects including e-commerce and social network applications.",
  },
  {
    role: "CS50's Introduction to Artificial Intelligence with Python",
    company: "Harvard University / edX",
    period: "2024",
    description: "Explored AI concepts including search algorithms, machine learning, neural networks, and natural language processing using Python.",
  },
  {
    role: "DevOps and Software Engineering Capstone",
    company: "IBM / Coursera",
    period: "2024",
    description: "Applied Agile/Scrum methodologies, CI/CD pipelines, Docker, and cloud deployment practices in a capstone software engineering project.",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Certifications</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12 leading-tight">
            What I've learned.
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-xs font-medium text-muted-foreground tabular-nums">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-primary mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
