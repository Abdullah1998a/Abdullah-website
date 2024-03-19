import { Platform, University } from "../components";
import "./education.css";

function Education({ content }) {
  const { header_education, university, platform } = content;
  return (
    <section className="education">
      <header>
        <h1>{header_education[0]}</h1>
        <span>{header_education[1]}</span>
      </header>
      <div>
        <University content={university} />
        <Platform content={platform} />
      </div>
    </section>
  );
}

export default Education;
