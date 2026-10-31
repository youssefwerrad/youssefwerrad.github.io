import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      <div className="hero-content">
        <p className="availability">
          <span className="availability-dot" />
          Open to opportunities
        </p>
        <p className="eyebrow">Youssef Werrad · Software engineer</p>
        <h1 className="hero-title">
          Thoughtful software,
          <br />
          built for the <em>real world.</em>
        </h1>
        <p className="hero-copy">
          I turn ideas into useful digital products, from thoughtful interfaces to dependable back-end systems.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            Explore my work <ArrowDown size={16} />
          </a>
          <a href="#contact" className="button-secondary">
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="A thoughtful approach to building software">
        <div className="work-panel">
          <div className="work-panel-bar">
            <span className="work-window-dots" aria-hidden="true"><i /><i /><i /></span>
            <span>BUILDING WITH INTENT</span>
            <Code2 size={16} aria-hidden="true" />
          </div>
          <p className="work-panel-label">A simple approach</p>
          <h2 className="work-panel-title">
            Good ideas deserve to become <em>useful things.</em>
          </h2>
          <div className="work-steps">
            <div className="work-step">
              <span className="work-step-number">01</span>
              <div>
                <h3>Understand</h3>
                <p>Get clear on the problem.</p>
              </div>
              <Check size={16} aria-hidden="true" />
            </div>
            <div className="work-step">
              <span className="work-step-number">02</span>
              <div>
                <h3>Build</h3>
                <p>Make it simple and dependable.</p>
              </div>
              <Check size={16} aria-hidden="true" />
            </div>
            <div className="work-step">
              <span className="work-step-number">03</span>
              <div>
                <h3>Keep improving</h3>
                <p>Learn from how people use it.</p>
              </div>
              <ArrowRight size={16} aria-hidden="true" />
            </div>
          </div>
          <a
            href="#projects"
            className="work-panel-link"
          >
            See what I’ve made <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="work-note">
          <span className="availability-dot" />
          Thoughtful by design
        </div>
      </div>
    </section>
  );
};
