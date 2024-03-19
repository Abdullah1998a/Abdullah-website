import { Link } from "react-router-dom";
import "./not-found.css";

export default function NotFound({ content }) {
  const { backHomeBtn, name } = content;
  return (
    <section className="not-found">
      <h1>{name[0]}</h1>
      <p>{name[1]}</p>
      <button>
        <Link to="/">{backHomeBtn}</Link>
      </button>
    </section>
  );
}
