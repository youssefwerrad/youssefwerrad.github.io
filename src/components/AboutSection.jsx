import { ScrollReveal } from "./ScrollReveal";
import { Palette, Sparkles, Rocket, Workflow } from "lucide-react";

const capabilities = [
  {
    icon: Palette,
    title: "Product design",
    description: "Crafting clear interfaces and deliberate experiences with a strong visual point of view.",
  },
  {
    icon: Workflow,
    title: "Systems thinking",
    description: "Designing workflows, automations, and structures that scale without complexity.",
  },
  {
    icon: Sparkles,
    title: "Creative direction",
    description: "Turning raw ideas into digital products that feel useful, sharp, and personal.",
  },
  {
    icon: Rocket,
    title: "Independent building",
    description: "Shipping experiments and products with focus, curiosity, and a bias for real value.",
  },
];

export const AboutSection = () => (
  <section id="about" className="section-wrap">
    <div className="about-layout">
      <ScrollReveal className="about-statement">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title">I design for leverage.</h2>
          <p className="section-description">
            I&apos;m interested in the intersection of product, systems, and personal craft: building things that feel elegant, useful, and worth returning to.
          </p>
        </div>
      </ScrollReveal>

      <div className="capability-grid">
        {capabilities.map((item, i) => (
          <ScrollReveal key={item.title} delay={0.05 * i}>
            <article className="capability-card">
              <item.icon size={20} strokeWidth={1.7} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
