import { useState, useEffect } from "react";
import styled from "styled-components";
import Switch from "./Switch";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledNav className={scrolled ? "glass-nav" : "top-nav"}>
      <div className="logo">NR</div>

      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><a href="#about" onClick={handleNavClick}>About</a></li>
        <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
        <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
        <li><a href="#testimonials" onClick={handleNavClick}>Testimonials</a></li>

        <li>
          <a href="#contact" onClick={handleNavClick}>
            <button className="cta-button">Contact Me</button>
          </a>
        </li>

        {/* theme switch */}
        <li>
          <Switch theme={theme} setTheme={setTheme} />
        </li>
      </ul>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.4s ease;

  /* Default (Top of page) */
  &.top-nav {
    background: transparent;
    box-shadow: none;
    border: 1px solid transparent;
  }

  /* Glass effect when scrolled */
  &.glass-nav {
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 10px 20px;
    border-radius: 18px;
    width: calc(100% - 40px);
  }

  /* -------- TEXT COLORS -------- */

  body.dark & .logo,
  body.dark & .nav-links li a,
  body.dark & .menu-icon {
    color: white;
  }

  body.light & .logo,
  body.light & .nav-links li a,
  body.light & .menu-icon {
    color: #111;
  }

  .logo {
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 2px;
    transition: color 0.3s ease;
  }

  .nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
  }

  .nav-links li a {
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-links li a:hover {
    color: #00d9ff;
  }

  .cta-button {
    padding: 8px 16px;
    border-radius: 10px;
    border: none;
    background: #00d9ff;
    color: black;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
  }

  .menu-icon {
    display: none;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    padding: 18px 20px;

    .nav-links {
      position: absolute;
      top: 80px;
      right: 20px;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(15px);
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      border-radius: 12px;
      display: none;
    }

    .nav-links.show {
      display: flex;
    }

    .menu-icon {
      display: block;
    }
  }
`;