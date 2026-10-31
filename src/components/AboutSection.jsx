import { ScrollReveal } from "./ScrollReveal";
import { Code2, Zap, Brain, Cloud, GitBranch, Layout } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Full stack development",
    description: "Building web applications with Python, JavaScript, React, Django, and Flask.",
  },
  {
    icon: Layout,
    title: "Responsive interfaces",
    description: "Creating clear, accessible experiences that work across devices.",
  },
  {
    icon: Brain,
    title: "AI & machine learning",
    description: "Exploring search algorithms, neural networks, and natural language processing.",
  },
  {
    icon: Cloud,
    title: "Cloud & deployment",
    description: "Shipping applications with AWS, Docker, and CI/CD workflows.",
  },
  {
    icon: GitBranch,
    title: "Team workflows",
    description: "Working with Git, Agile practices, and thoughtful engineering fundamentals.",
  },
  {
    icon: Zap,
    title: "Always learning",
    description: "Building a strong foundation through Harvard CS50 and IBM programs.",
  },
];

export const AboutSection = () => (
  <section id="about" className="section-wrap">
    <div className="about-layout">
      <ScrollReveal className="about-statement">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title">Curiosity meets craft.</h2>
          <p className="section-description">
            I enjoy taking a problem from the first sketch to a working product—bringing
            together practical engineering and a considered user experience.
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
