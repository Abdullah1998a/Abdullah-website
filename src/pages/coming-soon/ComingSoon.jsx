import { Link } from "react-router-dom";
import "./coming-soon.css";

export default function ComingSoon({ content }) {
  const { backHomeBtn, name } = content;
  return (
    <section className="coming-soon">
      <h1>{name[0]}</h1>
      <p>{name[1]}</p>
      <button>
        <Link to="/">{backHomeBtn}</Link>
      </button>
    </section>
  );
}
