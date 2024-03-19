import { Link } from "react-router-dom";
import "./about.css";

export default function About({ content, theme }) {
  const {
    header_about,
    about,
    works,
    header_quotation,
    quotation,
    img_cup,
    img_dark_cup,
    img_desc,
  } = content;
  return (
    <section className="about">
      <div className="who-I-am">
        <h1>{header_about}</h1>
        <p>{about}</p>
        <div className="quotation">
          <h3>{header_quotation}</h3>
          <p>{quotation}</p>
        </div>
        <button>
          <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
            {works}
          </Link>
        </button>
      </div>
      <div className="hero">
        <img src={theme === "dark" ? img_dark_cup : img_cup} alt={img_desc} />
      </div>
    </section>
  );
}
