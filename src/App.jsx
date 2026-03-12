import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import { useState, useEffect, useRef } from "react";
import "./theme.css";

export default function App() {
  useScrollAnimation();

  const [theme, setTheme] = useState("dark");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetched = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    fetch("https://api.github.com/user/repos?per_page=100", {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

    if (loading) return <Loader />;

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="main-content">
        <Hero />
        <About />
        <Projects repos={repos} username="Nikhil8367" />
        <Skills repos={repos} />
        <Contact />
      </div>
    </>
  );
}