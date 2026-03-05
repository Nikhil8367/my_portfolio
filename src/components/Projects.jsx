import Card from "./Card";

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>Featured Projects</h2>

      <div className="project-list">

        <Card
          title="Quiz Platform"
          stack="Flask, MongoDB, React, JWT Authentication"
          description="A comprehensive quiz management system with user authentication, real-time scoring, and analytics. Features include custom quiz creation, progress tracking, and detailed performance reports for educators and students."
          highlights="• RESTful API • User Auth • Real-time Updates • Data Analytics"
        />

        <Card
          title="Flappy Bird Enhanced"
          stack="JavaScript, Canvas API, Physics Engine"
          description="A modern, fully-featured recreation of Flappy Bird with smooth animations, sound effects, leaderboards, and multiple difficulty levels. Implements advanced collision detection and physics simulation for realistic gameplay."
          highlights="• Game Physics • Smooth Animations • Leaderboard System • Progressive Difficulty"
        />

        <Card
          title="Rubik's Cube FMC Solver"
          stack="Python, Algorithm Optimization, 3D Visualization"
          description="An intelligent solver for Rubik's Cube Fewest Moves Challenge using advanced algorithms. Generates optimal or near-optimal solutions and visualizes the solution steps in 3D, helping speedcubers improve their technique."
          highlights="• Algorithm Optimization • 3D Graphics • Solution Visualization • Performance Analysis"
        />

        <Card
          title="AI-Powered Content Assistant"
          stack="Node.js, Gemini API, React"
          description="An intelligent content generation tool leveraging Gemini API for real-time content generation, tone adjustment, and SEO optimization."
          highlights="• AI Integration • Real-time Processing • Content Optimization • API Integration"
        />

        <Card
          title="Portfolio Management Dashboard"
          stack="React, Node.js, MongoDB, Chart.js"
          description="A responsive dashboard for tracking projects with real-time updates, analytics, and GitHub integration."
          highlights="• Dashboard Design • Real-time Sync • GitHub Integration • Data Visualization"
        />

        <Card
          title="This Portfolio Website"
          stack="React, Vite, Modern CSS, Node.js"
          description="A modern, fully-responsive portfolio with interactive background, smooth animations, and auto GitHub deployment."
          highlights="• Auto-Deployment • GitHub Webhooks • Responsive Design • Performance Optimized"
        />

      </div>
    </section>
  );
}