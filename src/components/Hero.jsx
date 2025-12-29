import { heroData } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero split-hero">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <p className="hero-intro">Hi, I'm</p>

        <h1 className="hero-name gradient-text">
          {heroData.name}
        </h1>

        <h2 className="hero-title">{heroData.title}</h2>

        <p className="hero-tagline">{heroData.tagline}</p>

        <div className="hero-buttons">
          <a
  href="/assets/Yogeswari_Resume.pdf"
  download="Yogeswari_Resume.pdf"
  className="resume-btn"
>
  📄 Download Resume
</a>

          <a href="#contact" className="outline">
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img
            src="/assets/profile.jpg"
            alt="Boreddi Yogeswari"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}