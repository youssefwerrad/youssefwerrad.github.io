import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DealerRate",
    description: "A full-stack car dealership review platform with sentiment analysis, real-time search, async reviews, and a dual-role user system.",
    url: "dealer-rate.onrender.com",
    screens: [
      { label: "Home",   img: BASE + "screenshots/dr_home.webp",   alt: "DealerRate homepage" },
      { label: "Detail", img: BASE + "screenshots/dr_detail.webp", alt: "DealerRate detail" },
      { label: "Cars",   img: BASE + "screenshots/dr_cars.webp",   alt: "DealerRate cars" },
    ],
    tags: ["Django", "Python", "JavaScript", "SQLite"],
    github: "https://github.com/youssefwerrad/Dealer_Rate",
    link: "https://dealer-rate.onrender.com/",
  },
  {
    title: "Paradise Nursery",
    description: "A responsive e-commerce app for online plant shopping built with React and Redux Toolkit with real-time cart management.",
    url: "youssefwerrad.github.io/e-plantShopping",
    screens: [
      { label: "Landing", img: BASE + "screenshots/plant_landing.webp", alt: "Paradise Nursery landing" },
      { label: "Shop",    img: BASE + "screenshots/plant_shop.webp",    alt: "Paradise Nursery shop" },
      { label: "Cart",    img: BASE + "screenshots/plant_cart.webp",    alt: "Paradise Nursery cart" },
    ],
    tags: ["React", "Redux Toolkit", "Vite", "JavaScript"],
    github: "https://github.com/youssefwerrad/e-plantShopping",
    link: "https://youssefwerrad.github.io/e-plantShopping/",
  },
  {
    title: "Book Nook Finder",
    description: "A React + Express full-stack app searching millions of books via the Open Library API with trending discovery and a rich detail modal.",
    url: "github.com/youssefwerrad/book-nook-finder",
    screens: [
      { label: "Discover", img: BASE + "screenshots/book_home.webp",    alt: "Bookwise home" },
      { label: "Results",  img: BASE + "screenshots/book_results.webp", alt: "Bookwise results" },
      { label: "Detail",   img: BASE + "screenshots/book_modal.webp",   alt: "Bookwise detail" },
    ],
    tags: ["React", "Express.js", "Open Library API", "Vite"],
    github: "https://github.com/youssefwerrad/book-nook-finder",
  },
];

function BrowserMockup({ screens, url }) {
  const [active, setActive] = useState(0);
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-md flex flex-col">
      <div className="flex items-center px-4 py-3 bg-secondary border-b border-border gap-3 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-xs font-mono text-muted-foreground">{url}</span>
        </div>
        <div className="flex gap-1">
          {screens.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={active === i ? "px-2 py-0.5 rounded text-xs font-medium bg-primary text-primary-foreground" : "px-2 py-0.5 rounded text-xs font-medium text-muted-foreground hover:text-foreground"}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          key={active}
          src={screens[active].img}
          alt={screens[active].alt}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function ProjectRow({ project, index }) {
  const reversed = index % 2 !== 0;
  return (
    <ScrollReveal delay={0.05}>
      <div className={reversed ? "grid md:grid-cols-2 gap-12 lg:gap-20 items-center md:[direction:rtl]" : "grid md:grid-cols-2 gap-12 lg:gap-20 items-center"}>
        <div className={reversed ? "[direction:ltr]" : ""}>
          <BrowserMockup screens={project.screens} url={project.url} />
        </div>
        <div className={reversed ? "flex flex-col gap-5 [direction:ltr]" : "flex flex-col gap-5"}>
          <div>
            <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-3">{project.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-highlight-muted text-primary">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-1">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all">
                Visit Project
                <ExternalLink size={15} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all">
                <Github size={15} />
                Code
              </a>
            )}
          </div>
          {project.link && (
            <p className="text-sm text-muted-foreground font-mono">{project.url} →</p>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

export const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-32 px-6">
    <div className="container mx-auto max-w-5xl">
      <ScrollReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Portfolio</p>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3 leading-tight">Projects</h2>
        <p className="text-muted-foreground mb-16">Projects and client work.</p>
      </ScrollReveal>
      <div className="flex flex-col gap-24">
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);
