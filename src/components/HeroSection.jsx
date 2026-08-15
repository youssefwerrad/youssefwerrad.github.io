import { ArrowDown, Terminal } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-neon/10 blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-neon/8 blur-[120px] pointer-events-none animate-float-slow" />

      <div className="relative z-10 max-w-3xl text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6 opacity-0"
          style={{ animation: "fade-up 0.5s cubic-bezier(0.16,1,0.3,1) 0s forwards" }}
        >
          <Terminal size={13} className="text-neon" />
          <span className="text-xs font-mono-alt tracking-wide text-foreground/80">
            Software Engineer
          </span>
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6 opacity-0"
          style={{ animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s forwards" }}
        >
          Hi, I'm Youssef
          <br />
          I build things for
          <br />
          <span className="neon-glow-text">the web</span>.
        </h1>

        <p
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 opacity-0"
          style={{ animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s forwards" }}
        >
          I turn ideas into working products — and I build fast, clean, and scalable web applications.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          style={{ animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.35s forwards" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full neon-fill text-background font-semibold text-sm shadow-lg shadow-neon/20 hover:shadow-xl hover:shadow-neon/35 transition-[box-shadow,transform] duration-200 active:scale-[0.97]"
          >
            View Projects
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-card text-foreground font-medium text-sm hover:border-neon/40 transition-[background-color,border-color,transform] duration-200 active:scale-[0.97]"
          >
            Let's Connect
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animation: "fade-in 0.8s ease 1.2s forwards" }}
      >
        <div style={{ animation: "bounce-y 2s ease-in-out infinite" }}>
          <ArrowDown size={20} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
