import "./platform.css";

function Platform({ content }) {
  const { header_platform, labels, credentials } = content;
  const check = (variable) => {
    return Array.isArray(variable);
  };
  return (
    <div className="platform">
      <h2>{header_platform}</h2>
      <ul>
        {credentials.map(
          ({
            id,
            name,
            logo,
            organization,
            skills,
            link: { text, url },
            date,
            grade,
          }) => (
            <li key={id}>
              <img src={logo} />
              <h3 className="name-degree">{name}</h3>
              <span className="organization">
                {Array.isArray(organization) ? (
                  <>
                    {organization[0]} <i>{organization[1]}</i>
                  </>
                ) : (
                  <>{organization}</>
                )}
              </span>
              <span>{labels.skills}:</span>
              <ul className="skills">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <a href={url} className="certification">
                {text}
              </a>
              <span className="date">
                <i>{date[0]}</i> <strong>{date[1]}</strong>
              </span>
              <span className="grade">
                {labels.grade}: {grade}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Platform;
