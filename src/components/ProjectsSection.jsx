import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Best Cars",
    description: "A full-stack car dealership review app with dealer listings, ratings, and customer reviews.",
    url: "github.com/youssefwerrad/best-cars",
    image: { src: `${BASE}screenshots/best_cars_preview.svg`, alt: "Best Cars dealer search and customer review interface" },
    href: "https://github.com/youssefwerrad/best-cars",
    demoUrl: "https://best-cars-1.onrender.com/",
  },
  {
    title: "Paradise Nursery",
    description: "A plant shop with a live cart, dynamic filtering, and a complete visual redesign.",
    url: "youssefwerrad.github.io/e-plantShopping",
    image: { src: `${BASE}screenshots/plant_landing_preview.svg`, alt: "Paradise Nursery plant shop and product collection" },
    href: "https://youssefwerrad.github.io/e-plantShopping/",
    demoUrl: "https://youssefwerrad.github.io/e-plantShopping/",
  },
  {
    title: "Book Reviews",
    description: "Discover and review books through the Open Library API in a library-inspired interface.",
    url: "github.com/youssefwerrad/bookreviews",
    image: { src: `${BASE}screenshots/book_home_preview.svg`, alt: "Book Reviews book discovery, search, and reader ratings" },
    href: "https://github.com/youssefwerrad/bookreviews",
    demoUrl: "https://bookreviews-rwud.onrender.com/",
  },
  {
    title: "CarePoint",
    description: "A clinic management system with role-based access, availability-aware booking, and doctor dashboards.",
    url: "github.com/youssefwerrad/CarePoint",
    image: { src: `${BASE}screenshots/carepoint_dashboard_preview.svg`, alt: "CarePoint clinic dashboard and weekly appointment schedule" },
    href: "https://github.com/youssefwerrad/CarePoint",
    demoUrl: "https://carepoint-yhq2.onrender.com/login",
  },
];

function ProjectCard({ project, index }) {
  return (
    <div className="project-card-container">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-carousel-card"
      >
        <div className="project-image">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
          />
          <span className="project-arrow" aria-hidden="true">
            <ArrowUpRight size={19} />
          </span>
        </div>
        <div className="project-meta">
          <h3>{project.title}</h3>
          <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <span className="project-url">{project.url}</span>
      </a>
      {project.demoUrl && (
        <div className="project-card-actions">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-demo-link"
          >
            Live demo
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}

export const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
  };
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % projects.length);
  };

  return (
    <section id="projects" className="section-wrap">
      <div className="projects-heading">
        <ScrollReveal>
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">A few things I’ve built.</h2>
            <p className="section-description">
              A selection of products and experiments, each made to solve a different problem.
            </p>
          </div>
        </ScrollReveal>
        <span className="projects-count">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      </div>

      <div className="projects-carousel">
        <div className="projects-carousel-slide" aria-live="polite">
          <ProjectCard
            key={activeProject.title}
            project={activeProject}
            index={activeIndex}
          />
        </div>
        <div className="projects-carousel-controls" aria-label="Project carousel controls">
          <div className="projects-carousel-dots" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                className={`projects-carousel-dot${index === activeIndex ? " is-active" : ""}`}
                aria-label={`Show project ${index + 1}: ${project.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <div className="projects-carousel-arrows">
            <button type="button" onClick={showPrevious} aria-label="Previous project">
              <ArrowLeft size={18} />
            </button>
            <button type="button" onClick={showNext} aria-label="Next project">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
