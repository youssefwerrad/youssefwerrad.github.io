import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DealerRate",
    description: "Car dealership directory with self-service dealer dashboards and ownership-based authorization.",
    url: "github.com/youssefwerrad/dealership_rate",
    image: { src: BASE + "screenshots/dr_home.webp", alt: "DealerRate dealer directory" },
    href: "https://github.com/youssefwerrad/dealership_rate",
  },
  {
    title: "Paradise Nursery",
    description: "E-commerce app for online plant shopping with real-time cart management.",
    url: "youssefwerrad.github.io/e-plantShopping",
    image: { src: BASE + "screenshots/plant_landing.webp", alt: "Paradise Nursery landing" },
    href: "https://youssefwerrad.github.io/e-plantShopping/",
  },
  {
    title: "Book Reviews",
    description: "Discover and review books via the Open Library API, with a library-inspired design system.",
    url: "github.com/youssefwerrad/bookreviews",
    image: { src: BASE + "screenshots/book_home.webp", alt: "Book Reviews home" },
    href: "https://github.com/youssefwerrad/bookreviews",
  },
  {
    title: "CarePoint",
    description: "Clinic management system with three roles, availability-aware booking, and inline ownership checks.",
    url: "github.com/youssefwerrad/CarePoint",
    image: { src: BASE + "screenshots/carepoint_dashboard.webp", alt: "CarePoint doctor dashboard" },
    href: "https://github.com/youssefwerrad/CarePoint",
  },
];

function ProjectCard({ project, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl overflow-hidden glass-card glow-hover"
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={16} className="text-neon" />
          </div>
        </div>

        <div className="p-5 flex flex-col gap-1.5">
          <h3 className="font-display text-xl text-foreground">{project.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          <span className="text-xs font-mono-alt text-neon mt-1">{project.url}</span>
        </div>
      </a>
    </ScrollReveal>
  );
}

export const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-32 px-6">
    <div className="container mx-auto max-w-4xl">
      <ScrollReveal>
        <p className="text-sm font-mono-alt tracking-widest uppercase neon-text mb-3">// Portfolio</p>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3 leading-tight">Projects</h2>
        <p className="text-muted-foreground mb-12">Explore some of the projects I've developed.</p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={0.08 * i} />
        ))}
      </div>
    </div>
  </section>
);
