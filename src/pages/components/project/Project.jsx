import { Link } from "react-router-dom";
import "./project.css";

export default function Project({ project, details_btn }) {
  const { id, project_name, project_preview, preview_desc, project_summary } =
    project;
  return (
    <section className="project">
      <div className="img-holder">
        <img src={project_preview} alt={preview_desc} />
      </div>
      <div className="content">
        <h2>{project_name}</h2>
        <p>{project_summary}</p>
        <button>
          <Link
            to={`/portfolio/projects/${id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            {details_btn}
          </Link>
        </button>
      </div>
    </section>
  );
}
