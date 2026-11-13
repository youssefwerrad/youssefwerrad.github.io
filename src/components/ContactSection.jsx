import { ScrollReveal } from "./ScrollReveal";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/youssefwerrad", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/youssef-werrad-43b1aa401/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:youssefwerrad@gmail.com", label: "Email" },
];

export const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="section-wrap contact-wrap">
      <ScrollReveal>
        <div className="contact-copy">
          <p className="eyebrow">Let&apos;s build something meaningful</p>
          <h2 className="section-title">I&apos;m open to thoughtful collaborations.</h2>
          <p className="section-description">
            If you&apos;re building a product, shaping a brand, or exploring a new idea, I&apos;d love to hear what you&apos;re working on.
          </p>

          <div className="contact-socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
              </a>
            ))}
          </div>

          <a className="contact-email-link" href="mailto:youssefwerrad@gmail.com">
            youssefwerrad@gmail.com
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <a href="mailto:youssefwerrad@gmail.com" className="button-primary contact-button">
          <Mail size={17} />
          Say hello
          <ArrowUpRight size={16} />
        </a>
      </ScrollReveal>
    </div>
  </section>
);
