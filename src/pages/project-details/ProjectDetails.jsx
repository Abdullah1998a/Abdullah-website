import { Link, useNavigate, useParams } from "react-router-dom";
import "./project-details.css";

export default function ProjectDetails({ content }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const states = {
    next: "next",
    prev: "prev",
  };
  const {
    projects,
    return_portfolio,
    project_header,
    previews_header,
    links,
    slider,
  } = content;
  const project = projects.filter((item) => item.id === id);
  const getPosition = () => {
    let projectsLength = projects.length;
    let currentPosition = id;
    let prevPosition = parseInt(id) - 1;
    let nextPosition = parseInt(id) + 1;
    if (currentPosition == projectsLength) {
      nextPosition = 1;
    }
    if (currentPosition == 1) {
      prevPosition = projectsLength;
    }
    return { prevPosition, nextPosition };
  };
  const handlePosition = (state) => {
    if (state === "next") {
      navigate(`/portfolio/projects/${getPosition().nextPosition}`);
    } else {
      navigate(`/portfolio/projects/${getPosition().prevPosition}`);
    }
  };
  const {
    project_name,
    preview_desc,
    project_summary,
    project_details: {
      project_desc,
      previews: { desktop, mobile },
      technologies,
    },
  } = project[0];
  return (
    <section className="project-details">
      <button>
        <Link to="/portfolio">{return_portfolio}</Link>
      </button>
      <div>
        <div className="project-summary">
          <h2>{project_name}</h2>
          <p>{project_summary}</p>
          <ul className="tech">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="links">
            {links.map((link) => (
              <button key={link}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://frontendmentor.com"
                >
                  {link}
                </a>
              </button>
            ))}
          </div>
        </div>
        <div className="project-background">
          <h2>{project_header}</h2>
          {project_desc.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <h3>{previews_header}</h3>
          <div className="previews">
            <div className="img-holder">
              <img src={desktop} alt={preview_desc} />
            </div>
            <div className="img-holder">
              <img src={mobile} alt={preview_desc} />
            </div>
          </div>
        </div>
      </div>
      <div className="slide-control">
        <button
          className="prev-btn"
          onClick={() => {
            handlePosition(states.prev);
            window.scrollTo(0, 0);
          }}
        >
          <span>{projects[getPosition().prevPosition - 1].project_name}</span>
          <span>{slider[0]}</span>
        </button>
        <button
          className="next-btn"
          onClick={() => {
            handlePosition(states.next);
            window.scrollTo(0, 0);
          }}
        >
          <span>{projects[getPosition().nextPosition - 1].project_name}</span>
          <span>{slider[1]}</span>
        </button>
      </div>
    </section>
  );
}
