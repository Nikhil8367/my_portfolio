export default function About() {
  return (
    <section id="about" className="fade-in">
      <h2>About Me</h2>
      <div className="about-content">
        <p className="intro-text">
          I'm Nikhil Repalle, a dedicated full-stack developer with a passion for creating innovative solutions that solve real-world problems. With expertise in both frontend and backend technologies, I specialize in building scalable, user-friendly applications that combine elegant design with robust functionality.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">💻</div>
            <h3>My Expertise</h3>
            <p>I excel at developing RESTful APIs, building interactive web applications using React, working with databases like MongoDB, and integrating AI/ML capabilities into applications. I'm also experienced in game development and competitive programming, which strengthens my problem-solving abilities.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🚀</div>
            <h3>What Drives Me</h3>
            <p>I'm motivated by challenges that push me to learn new technologies and methodologies. I believe in writing clean, maintainable code and following best practices in software development. Outside of coding, I enjoy competitive programming and exploring emerging technologies like generative AI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
