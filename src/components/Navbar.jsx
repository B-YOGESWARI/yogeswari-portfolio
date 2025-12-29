import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo"></h2>

      <ul className="nav-links">
        <li>
          <a href="#home" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>

        <li>
          <a href="#skills" className={active === "skills" ? "active" : ""}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            Projects
          </a>
        </li>

        <li>
          <a href="#experience" className={active === "experience" ? "active" : ""}>
            Experience
          </a>
        </li>
        <a
  href="/assets/Yogeswari_Resume.pdf"
  download
  className="nav-link"
>
  Resume
</a>

        <li>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </ul>

      <ThemeToggle />
    </nav>
  );
}