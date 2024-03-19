import {Project} from "../components";
import "./portfolio.css";

export default function Portfolio({ content }) {
  const { header_portfolio, details_btn, projects } = content;
  const projectsTemp = projects.map((project) => (
    <Project key={project.id} details_btn={details_btn} project={project} />
  ));
  return (
    <section className="portfolio">
      <header>
        <h1>{header_portfolio[0]}</h1>
        <span>{header_portfolio[1]}</span>
      </header>
      <div className="projects">{projectsTemp}</div>
    </section>
  );
}
