import "./university.css";

function University({ content }) {
  const { header_university, labels, degrees } = content;
  return (
    <div className="university">
      <h2>{header_university}</h2>
      <ul>
        {degrees.map(
          ({ id, name, logo, organization, skills, date, grade }) => (
            <li key={id}>
              <img src={logo} />
              <h3 className="name-degree">{name}</h3>
              <span className="organization">{organization}</span>
              {skills && <span>{labels.skills}:</span>}
              {skills && (
                <ul className="skills">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
              <span className="date">
                <i>{date[0]}</i> <strong>{date[1]}</strong>
              </span>
              {grade && (
                <span className="grade">
                  {labels.grade}: {grade}
                </span>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default University;
