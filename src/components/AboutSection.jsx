import { ScrollReveal } from "./ScrollReveal";
import { Code2, Globe, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full Stack & Back-End", description: "Proficient in Python, JavaScript, Node.js, React, Express, and REST APIs." },
  { icon: Globe, title: "Multilingual", description: "Fluent in Arabic (native), Portuguese (C1/C2), French (C1/C2), and English (B1/B2)." },
  { icon: Zap, title: "Cloud & DevOps", description: "Experienced with GCP, IBM Cloud, Docker basics, and CI/CD pipelines." },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">About</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6 leading-tight">
            A little context.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Junior Full Stack and Back-End Developer based in Olhão, Portugal, with a strong self-taught foundation built through Harvard's CS50 program series and IBM's professional development curriculum.
              </p>
              <p>
                I'm passionate about building impactful software and continuously growing my skills. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-highlight-muted flex items-center justify-center">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
