import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6"
        >
          <Terminal size={13} className="text-neon" />
          <span className="text-xs font-mono-alt tracking-wide text-foreground/80">
            Full Stack Developer · Back-End Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6"
        >
          Hi, I'm Youssef
          <br />
          I build things for
          <br />
          <span className="neon-glow-text">the web</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
        >
          I turn ideas into working products — and I'm just getting started.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
