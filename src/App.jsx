import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import useScrollReveal from "./hooks/useScrollReveal";
import "./styles/global.css";

export default function App() {
  useScrollReveal();

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}