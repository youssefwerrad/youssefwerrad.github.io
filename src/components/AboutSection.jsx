import { ScrollReveal } from "./ScrollReveal";
import { Code2, Zap, Brain, Cloud, GitBranch, Layout } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building modern web applications with React, Node.js, Express, Django, and Flask — from UI to database.",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Crafting clean, accessible interfaces that work seamlessly across all devices using HTML5, CSS3, and Tailwind.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Foundations in search algorithms, neural networks, and NLP through Harvard's CS50 AI with Python.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Deploying and managing applications on Google Cloud Platform and IBM Cloud with Docker and CI/CD pipelines.",
  },
  {
    icon: GitBranch,
    title: "DevOps & Agile",
    description: "Applying Agile/Scrum methodologies, Git workflows, and software engineering best practices on every project.",
  },
  {
    icon: Zap,
    title: "Self-Directed Learning",
    description: "Built a strong foundation through Harvard's CS50 program series and IBM's professional development curriculum.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">About</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12 leading-tight">
            What I do.
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.07 * i} className="h-full">
              <div className="h-full flex flex-col gap-3 p-6 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-colors duration-200">
                <div className="w-10 h-10 rounded-xl bg-highlight-muted flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};