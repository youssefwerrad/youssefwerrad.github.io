import { ScrollReveal } from "./ScrollReveal";
import { Code2, Zap, Brain, Cloud, GitBranch, Layout } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building modern web applications with React, Node.js, Express, Django, and Flask — from UI to database.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Clean, accessible interfaces across every device using HTML5, CSS3, and Tailwind.",
    span: "",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Search algorithms, neural networks, and NLP through Harvard's CS50 AI.",
    span: "",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Deploying and managing applications on Google Cloud and IBM Cloud with Docker and CI/CD pipelines.",
    span: "lg:col-span-2",
  },
  {
    icon: GitBranch,
    title: "DevOps & Agile",
    description: "Agile/Scrum methodologies, Git workflows, and software engineering best practices.",
    span: "",
  },
  {
    icon: Zap,
    title: "Self-Directed Learning",
    description: "A strong foundation through Harvard's CS50 series and IBM's professional curriculum.",
    span: "",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-mono-alt tracking-widest uppercase neon-text mb-3">// About</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-12 leading-tight">
            What I do.
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:auto-rows-[180px]">
          {capabilities.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.07 * i} className={`h-full ${item.span}`}>
              <div className="group relative h-full flex flex-col gap-3 p-6 rounded-2xl glass-card glow-hover overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-neon/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-11 h-11 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center">
                  <item.icon size={20} className="text-neon" />
                </div>
                <h3 className="relative font-semibold text-foreground">{item.title}</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
