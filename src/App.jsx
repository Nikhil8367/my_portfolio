import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import "./theme.css";

export default function App() {
  useScrollAnimation();

  // default DARK mode
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>

      {/* pass theme to navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}