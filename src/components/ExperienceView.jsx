
function ExperienceView({ experience }) {
  return (
    <div className="experienceView">
      <div className="sectionTitle">Experience</div>
      {experience.map((exp, index) => (
        <div key={index} className="experienceItem">
          <div className="experienceDate">{exp.from} - {exp.to}</div>
          <div className="experienceDetails">
            <p className="companyName">{exp.company}</p>
            <p>{exp.position}</p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceView;