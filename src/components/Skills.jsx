import styled from "styled-components";

export default function Skills() {

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "Vite", "JavaScript (ES6+)", "HTML5",
        "CSS3 / Tailwind", "Canvas API", "Responsive Design", "UI/UX"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js", "Express.js", "Python", "Flask",
        "RESTful APIs", "JWT Auth", "Middleware Design", "Server Management"
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        "MongoDB", "SQL", "Git & GitHub", "Docker",
        "PM2", "CI/CD Pipelines", "Postman"
      ]
    },
    {
      title: "Specialized Skills",
      skills: [
        "AI Integration (Gemini API)", "Game Development",
        "Algorithm Optimization", "Competitive Programming",
        "Performance Tuning", "Real-time Features",
        "Data Visualization"
      ]
    }
  ];

  return (
    <StyledSkills id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  padding: 80px 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 50px;
    background: linear-gradient(90deg, #00d9ff, #7b61ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .skill-card {
    padding: 35px;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    background: rgb(163 216 255 / 22%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
    text-align: left;
  }

  .skill-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
  }

  .skill-card h3 {
    color: #00d9ff;
    margin-bottom: 25px;
    font-size: 1.3rem;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .skill-tags span {
    padding: 8px 14px;
    border-radius: 20px;
    background: rgba(0, 217, 255, 0.1);
    border: 1px solid rgba(0, 217, 255, 0.2);
    font-size: 0.85rem;
    transition: all 0.3s ease;
    cursor: default;
  }

  .skill-tags span:hover {
    background: #00d9ff;
    color: black;
    transform: scale(1.05);
  }
`;