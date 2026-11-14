const BASE = import.meta.env.BASE_URL;

const issuers = [
  { name: "IBM", mark: "ibm", logo: "issuer-logos/ibm.svg" },
  { name: "Cisco", mark: "cisco", logo: "issuer-logos/cisco.svg" },
  { name: "HarvardX", mark: "harvard", logo: "issuer-logos/harvard-shield.svg" },
];

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

        <aside
          className="hero-aside"
          aria-label="Certified by HarvardX, IBM, and Cisco"
        >
          <p className="hero-certification-note">Coursework &amp; credentials from</p>
          <div className="hero-issuer-links">
            {issuers.map((issuer) => (
              <div className="hero-issuer" key={issuer.name}>
                <img
                  className={`hero-issuer-mark hero-issuer-mark--${issuer.mark}`}
                  src={`${BASE}${issuer.logo}`}
                  alt={`${issuer.name} logo`}
                  loading="eager"
                  decoding="async"
                />
                <span className="hero-issuer-name">{issuer.name}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};
