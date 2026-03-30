import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DealerRate",
    description: "A full-stack car dealership review platform where buyers can discover, research, and review dealerships. Features automatic sentiment analysis, real-time search, async reviews, helpful voting, and a dual-role user system (consumers & dealers).",
    tags: ["Django", "Python", "JavaScript", "SQLite"],
    github: "https://github.com/youssefwerrad/Dealer_Rate",
    link: "https://dealer-rate.onrender.com/",
  },
  {
    title: "Paradise Nursery — Plant Shop",
    description: "A responsive e-commerce app for online plant shopping built with React and Redux Toolkit. Features real-time cart management, product categorization, quantity controls, and an admin panel for inventory management.",
    tags: ["React", "Redux Toolkit", "Vite", "JavaScript", "CSS3"],
    github: "https://github.com/youssefwerrad/e-plantShopping",
    link: "https://youssefwerrad.github.io/e-plantShopping/",
  },
  {
    title: "Book Nook Finder",
    description: "A React + Express full-stack app for searching millions of books via the [Open Library](https://openlibrary.org) API.",
    tags: ["React", "JavaScript", "Express.js", "Open Library API", "Vite"],
    github: "https://github.com/youssefwerrad/book-nook-finder.git",
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
