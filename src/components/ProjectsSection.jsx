import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Full Stack Capstone Project",
    description: "A full stack web application built as part of the IBM Full Stack Developer Professional Certificate. Features user authentication, RESTful APIs, and cloud deployment.",
    tags: ["React", "Node.js", "Express", "IBM Cloud"],
    github: "https://github.com/youssefwerrad",
  },
  {
    title: "CS50 Web — Social Network",
    description: "A Twitter-like social network application built with Django and JavaScript. Supports posts, likes, following, and pagination.",
    tags: ["Django", "Python", "JavaScript", "SQL"],
    github: "https://github.com/youssefwerrad",
  },
  {
    title: "CS50 Web — E-Commerce",
    description: "An eBay-like auction site with listings, bidding, watchlists, and categories, built with Django and SQLite.",
    tags: ["Django", "Python", "HTML5", "CSS3"],
    github: "https://github.com/youssefwerrad",
  },
  {
    title: "Back-End API with Node.js",
    description: "A RESTful back-end API built with Node.js and Express as part of the IBM Back-end Application Development course, with full CRUD operations.",
    tags: ["Node.js", "Express.js", "REST API"],
    github: "https://github.com/youssefwerrad",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12 leading-tight">
            Selected work.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.08 * i}>
              <div className="group relative rounded-xl border border-border bg-card p-6 sm:p-8 transition-[box-shadow] duration-300 hover:shadow-lg hover:shadow-foreground/5 h-full flex flex-col">
                <h3 className="font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-highlight-muted text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors active:scale-95" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors active:scale-95" aria-label="Live demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
