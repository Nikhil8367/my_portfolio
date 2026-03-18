import { useState, useEffect } from "react";
import Button from "./Buttons";
import styled from "styled-components";

export default function Hero() {

  const roles = [
    "Full-Stack Developer",
    "Problem Solver",
    "AI Enthusiast"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    const currentRole = roles[index];

    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {

      if (!isDeleting) {

        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }

      } else {

        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }

      }

    }, speed);

    return () => clearTimeout(timer);

  }, [text, isDeleting, index]);



  return (
    <StyledHero id="hero">

      <div className="hero-container">

        <div className="hero-image">
          <img
            src="/Nikhil.png"
            alt="Nikhil Repalle"
            className="profile-image"
          />
        </div>

        <div className="hero-content">

          <h1>Nikhil Repalle</h1>

          <h2 className="typing-text">
            {text}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-subtext">
            Building intelligent web applications with modern technologies
          </p>

          <Button text="Explore My Work!" transport="about" />

        </div>

      </div>

    </StyledHero>
  );
}

const StyledHero = styled.section`

  padding: 120px 20px;
  display: flex;
  justify-content: center;
  transition: background 0.4s ease, color 0.4s ease;

  .hero-container{
    display:flex;
    align-items:center;
    gap:80px;
    max-width:1100px;
  }

  .hero-content{
    display:flex;
    flex-direction:column;
    gap:10px;
  }


  /* ---------- DARK MODE ---------- */

  body.dark &{
    background:#0a0e1a;
  }

  body.dark & h1{
    color:white;
  }

  body.dark & .hero-subtext{
    color:#d1d1d1;
  }

  body.dark & .typing-text{
    color:#00d9ff;
  }

  /* ---------- LIGHT MODE ---------- */

  body.light &{
    background:#f0f0f0;
  }

  body.light & h1{
    color:#111;
  }

  body.light & .hero-subtext{
    color:#333;
  }

  body.light & .typing-text{
    color:#0077cc;
  }

  /* ---------- TYPING TEXT ---------- */

  .typing-text{
    font-size:1.4rem;
    margin-top:10px;
    min-height:32px;
    font-weight:600;
    letter-spacing:0.5px;
  }

  .cursor{
    animation:blink 1s infinite;
    margin-left:2px;
  }

  @keyframes blink{
    0%{opacity:1;}
    50%{opacity:0;}
    100%{opacity:1;}
  }

  .hero-subtext{
    margin-top:16px;
    opacity:0.9;
    font-size:1.05rem;
    line-height:1.6;
  }

`;