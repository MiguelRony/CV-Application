import "../styles/EducationView.css"

function EducationView({ education }) {
  return (
    <div className="educationView">
      <div className="sectionTitle">Education</div>
      {education.map((edu, index) => (
        <div key={index} className="educationItem">
            <div className="educationDate">{edu.from} - {edu.to}</div>
            <div className="educationDetails">
                <p className="schoolName">{edu.name}</p>
                <p>{edu.degree}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default EducationView;