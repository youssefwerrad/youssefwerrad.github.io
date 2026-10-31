import { ScrollReveal } from "./ScrollReveal";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/youssefwerrad", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/youssef-werrad-43b1aa401/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:youssefwerrad@gmail.com", label: "Email" },
];

export const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="section-wrap">
      <ScrollReveal>
        <div>
          <p className="eyebrow">Have a good one in mind?</p>
          <h2 className="section-title">Let’s make something useful.</h2>
          <p className="section-description">
            I’m open to interesting conversations, new opportunities, and thoughtful collaborations.
          </p>
          <div className="contact-socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon size={15} aria-hidden="true" />
                {label}
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
        <a href="mailto:youssefwerrad@gmail.com" className="button-primary">
          <Mail size={17} />
          Say hello
          <ArrowUpRight size={16} />
        </a>
      </ScrollReveal>
    </div>
  </section>
);
