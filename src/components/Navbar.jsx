import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Moon, Sun, Command } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/youssefwerrad", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/youssef-werrad-43b1aa401/", icon: Linkedin },
  { label: "Email", href: "mailto:youssefwerrad@gmail.com", icon: Mail },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#home" className="nav-brand" aria-label="Youssef Werrad home">
          <span className="brand-mark">YW</span>
        </a>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-icon-button theme-toggle"
            onClick={() => setDark((value) => !value)}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            title={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={`nav-icon-button menu-toggle${mobileOpen ? " is-open" : ""}`}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="navbar-menu"
          >
            {mobileOpen ? <X size={18} /> : <><Command className="command-icon" size={18} /><Menu className="mobile-menu-icon" size={18} /></>}
          </button>
        </div>
      </div>

      <div id="navbar-menu" className={`mobile-nav${mobileOpen ? " is-open" : ""}`} aria-hidden={!mobileOpen}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1}>
            {link.label}
          </a>
        ))}
        <div className="mobile-socials">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} tabIndex={mobileOpen ? 0 : -1}>
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
