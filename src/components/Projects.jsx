import Card from "./Card";

export default function Projects({ repos, username }) {
  const validRepos = repos.filter(
    (repo) =>
      repo.description &&
      repo.description.trim() !== "" &&
      repo.name !== "ClubSite"
  );

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {validRepos.map((repo) => (
          <Card
            key={repo.id}
            title={repo.name}
            stack={repo.language || "Not detected"}
            description={repo.description}
            highlights={`⭐ ${repo.stargazers_count}`}
            image={`https://raw.githubusercontent.com/${username}/${repo.name}/main/preview/preview.jpg`}
            link={repo.homepage || repo.html_url}
          />
        ))}
      </div>
    </section>
  );
}