export const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-shell">
        <div className="hero-copy-wrap">
          <div className="hero-name-line">
            <h1 className="hero-title">Youssef Werrad</h1>
            <span className="hero-name-role">Software Engineer</span>
          </div>
          <p className="hero-role">Full-Stack Developer · Python & React</p>
          <p className="hero-copy hero-copy-primary">
            Building thoughtful software for real-world problems.
          </p>
          <p className="hero-copy">
            I turn ideas into useful digital products, blending practical engineering with clear, human-centered design.
          </p>
        </div>

        <aside className="hero-aside" aria-hidden="true">
          <span className="hero-signature">YW</span>
        </aside>
      </div>
    </section>
  );
};
