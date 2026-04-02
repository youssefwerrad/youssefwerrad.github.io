import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const DR_SCREENS = [
  { label: "Home",   img: `${BASE}screenshots/dr_home.webp`,   alt: "DealerRate homepage" },
  { label: "Detail", img: `${BASE}screenshots/dr_detail.webp`, alt: "DealerRate dealership detail" },
  { label: "Cars",   img: `${BASE}screenshots/dr_cars.webp`,   alt: "DealerRate car manager" },
];

const PLANT_SCREENS = [
  { label: "Landing", img: `${BASE}screenshots/plant_landing.webp`, alt: "Paradise Nursery landing page" },
  { label: "Shop",    img: `${BASE}screenshots/plant_shop.webp`,    alt: "Paradise Nursery plant shop" },
  { label: "Cart",    img: `${BASE}screenshots/plant_cart.webp`,    alt: "Paradise Nursery cart" },
];

const BOOK_SCREENS = [
  { label: "Discover", img: `${BASE}screenshots/book_home.webp`,    alt: "Bookwise homepage" },
  { label: "Results",  img: `${BASE}screenshots/book_results.webp`, alt: "Bookwise search results" },
  { label: "Detail",   img: `${BASE}screenshots/book_modal.webp`,   alt: "Bookwise book detail modal" },
];

function ScreenshotCard({ screens, title, badge, description, tags, github, link, tall = false }) {
  const [active, setActive] = useState(0);
  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden transition-[box-shadow] duration-300 hover:shadow-lg hover:shadow-foreground/5 flex flex-col">
      {/* Screenshot */}
      <div className={`relative border-b border-border overflow-hidden ${tall ? "h-52" : "h-40"}`}>
        <div className="absolute top-2.5 left-2.5 z-10 flex gap-1.5">
          {screens.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background/90 text-muted-foreground hover:bg-background hover:text-foreground border border-border"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        {link && (
          <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-background/90 border border-border text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Live
          </div>
        )}
        <img
          key={active}
          src={screens[active].img}
          alt={screens[active].alt}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Card body — simple vertical stack */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title + badge */}
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-base text-foreground">{title}</h3>
          {badge && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-highlight-muted text-primary">
              {badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-highlight-muted text-primary">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1">
          {github && (
            <a href={github} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={16} />
            </a>
          )}
          {link && (
            <a href={link} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live demo">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-32 px-6">
    <div className="container mx-auto max-w-5xl">
      <ScrollReveal>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Projects</p>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12 leading-tight">
          Selected work.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">

        {/* DealerRate — spans both columns */}
        <div className="md:col-span-2">
          <ScreenshotCard
            screens={DR_SCREENS}
            title="DealerRate"
            badge="Featured"
            description="A full-stack car dealership review platform — buyers discover, research, and review dealerships with automatic sentiment analysis, real-time search, async reviews, helpful voting, and a dual-role user system for consumers and dealers."
            tags={["Django", "Python", "JavaScript", "SQLite"]}
            github="https://github.com/youssefwerrad/Dealer_Rate"
            link="https://dealer-rate.onrender.com/"
            tall
          />
        </div>

        {/* Paradise Nursery */}
        <ScreenshotCard
          screens={PLANT_SCREENS}
          title="Paradise Nursery"
          description="A responsive e-commerce app for online plant shopping built with React and Redux Toolkit. Features real-time cart management, product categorization, quantity controls, and an admin panel for inventory management."
          tags={["React", "Redux Toolkit", "Vite", "JavaScript", "CSS3"]}
          github="https://github.com/youssefwerrad/e-plantShopping"
          link="https://youssefwerrad.github.io/e-plantShopping/"
        />

        {/* Book Nook Finder */}
        <ScreenshotCard
          screens={BOOK_SCREENS}
          title="Book Nook Finder"
          description="A React + Express full-stack app for searching millions of books via the Open Library API. Features title, author and genre search, trending discovery, paginated results, and a rich book detail modal."
          tags={["React", "JavaScript", "Express.js", "Open Library API", "Vite"]}
          github="https://github.com/youssefwerrad/book-nook-finder.git"
        />

      </div>
    </div>
  </section>
);
