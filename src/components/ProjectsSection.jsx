import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DealerRate",
    description: "A dealership directory with self-service dealer dashboards and ownership-based authorization.",
    url: "github.com/youssefwerrad/dealership_rate",
    image: { src: `${BASE}screenshots/dr_home.webp`, alt: "DealerRate dealership directory" },
    href: "https://github.com/youssefwerrad/dealership_rate",
  },
  {
    title: "Paradise Nursery",
    description: "A plant shop with a live cart, dynamic filtering, and a complete visual redesign.",
    url: "youssefwerrad.github.io/e-plantShopping",
    image: { src: `${BASE}screenshots/plant_landing.webp`, alt: "Paradise Nursery plant collection" },
    href: "https://youssefwerrad.github.io/e-plantShopping/",
  },
  {
    title: "Book Reviews",
    description: "Discover and review books through the Open Library API in a library-inspired interface.",
    url: "github.com/youssefwerrad/bookreviews",
    image: { src: `${BASE}screenshots/book_home.webp`, alt: "Book Reviews book detail and reader reviews" },
    href: "https://github.com/youssefwerrad/bookreviews",
  },
  {
    title: "CarePoint",
    description: "A clinic management system with role-based access, availability-aware booking, and doctor dashboards.",
    url: "github.com/youssefwerrad/CarePoint",
    image: { src: `${BASE}screenshots/carepoint_dashboard.webp`, alt: "CarePoint doctor appointment dashboard" },
    href: "https://github.com/youssefwerrad/CarePoint",
  },
];

function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={0.06 * index}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
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
    </ScrollReveal>
  );
}

export const ProjectsSection = () => (
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
      <span className="projects-count">04 projects</span>
    </div>

    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  </section>
);
