import { ArrowUpRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export const FeaturedProject = () => (
  <section className="featured-project" aria-labelledby="featured-project-title">
    <div className="featured-project-inner">
      <div className="featured-project-copy">
        <p className="eyebrow">Featured build</p>
        <h2 id="featured-project-title">Best Cars</h2>
        <p>
          A full-stack dealership discovery and review experience, bringing listings,
          ratings, and customer feedback together.
        </p>
        <a
          href="https://best-cars-1.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View live project
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <a
        className="featured-project-preview"
        href="https://best-cars-1.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View the Best Cars live project (opens in a new tab)"
      >
        <img
          src={`${BASE}screenshots/best_cars_preview.svg`}
          alt=""
          width="1440"
          height="960"
          loading="eager"
          decoding="async"
        />
      </a>
    </div>
  </section>
);
