import { ScrollReveal } from "./ScrollReveal";
import { Mail, Github, Linkedin } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/youssefwerrad", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/youssef-werrad-43b1aa401/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:youssefwerrad@gmail.com", label: "Email" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="relative container mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <p className="text-sm font-mono-alt tracking-widest uppercase neon-text mb-3">// Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4 leading-tight">
            Let's connect.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            I'm always open to interesting conversations, new opportunities, and collaboration on meaningful projects.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <a
            href="mailto:youssefwerrad@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full neon-fill text-background font-semibold shadow-lg shadow-neon/20 hover:shadow-xl hover:shadow-neon/35 transition-[box-shadow,transform] duration-200 active:scale-[0.97] mb-10"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex items-center justify-center gap-5 mt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-neon hover:border-neon/40 transition-[color,border-color,transform] duration-200 active:scale-95"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
