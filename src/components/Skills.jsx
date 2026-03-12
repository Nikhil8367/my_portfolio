import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

export default function Skills({ repos }) {
  const cardsRef = useRef([]);

  // aliases
  const aliases = {
    js: "JavaScript",
    javascript: "JavaScript",
    ts: "TypeScript",
    typescript: "TypeScript",
    py: "Python",
    python: "Python",
    reactjs: "React",
    react: "React",
    nodejs: "Node.js",
    "node.js": "Node.js",
    mongodb: "MongoDB",
    html: "HTML",
    html5: "HTML",
    css: "CSS",
    css3: "CSS",
    github: "GitHub",
    git: "Git",
    flask: "Flask",
    java: "Java",
    backend: "Backend",
    frontend: "Frontend",
    "gemini-api": "Gemini API",
    streamlit: "Streamlit",
    c: "C",
    "c++": "C++"
  };

  const normalizeSkill = (skill) => {
    const key = skill.toLowerCase().trim();
    return aliases[key] || skill;
  };

  // icon aliases
  const iconAliases = {
    "Node.js": "nodedotjs",
    "C++": "cplusplus",
    Java: "openjdk",
    HTML: "html5",
    CSS: "css",
    "Gemini API": "google"
  };

  const iconName = (skill) =>
    iconAliases[skill] ||
    skill.toLowerCase().replace(/\s+/g, "").replace(".", "dot");

  // collect skills
  const repoTopics = [
    ...new Set(
      [
        ...repos.flatMap((repo) => repo.topics || []),
        ...repos.map((repo) => repo.language).filter(Boolean)
      ].map(normalizeSkill)
    )
  ];

  // tilt init
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 18,
          speed: 500,
          glare: true,
          "max-glare": 0.28,
          scale: 1.05,
          perspective: 1300
        });
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card?.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, [repoTopics]);

  return (
    <StyledSkills id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {repoTopics.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card-layer">
              <img
                src={`https://cdn.simpleicons.org/${iconName(skill)}`}
                alt={skill}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/1822/1822920.png";
                }}
              />
              <span>{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  padding: 100px 20px;
  text-align: center;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 60px;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: auto;
  }

  .skill-card {
    height: 190px;
    border-radius: 24px;
    position: relative;

    background: ${({ theme }) => theme.cardBg};
    border: 1px solid ${({ theme }) => theme.cardBorder};
    backdrop-filter: blur(20px);

    box-shadow: ${({ theme }) => theme.cardShadow};

    display: flex;
    justify-content: center;
    align-items: center;

    transform-style: preserve-3d;
    transition: all 0.4s ease;
    overflow: hidden;
  }

  .skill-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.cardHighlight};
    pointer-events: none;
  }

  .card-layer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    transform: translateZ(45px);
  }

  .skill-card img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    filter: drop-shadow(0 10px 14px rgba(0,0,0,0.25));
  }

  .skill-card span {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    letter-spacing: 0.4px;
  }

  .skill-card:hover {
    box-shadow: ${({ theme }) => theme.cardHoverShadow};
    transform: translateY(-6px);
  }
`;
