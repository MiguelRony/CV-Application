// import "../styles/inputSection.css";
import { useState } from "react";
import Education from "./Education";
import "../styles/educationPanel.css";


function EducationPanel(){
    const [ schoolsList, setSchoolsList ] = useState([]);
    const [ className, setClassName ] = useState("hidden");
    const [ viewStatus, setViewStatus ] = useState("addEducation");

    const handleClick = (e) => {
        e.preventDefault();
        setClassName("");
        setViewStatus("addEducation hidden");
    };

    return(
        <div className="educationPanel">
            <h2>Education</h2>
            {schoolsList.map((school) => {
                return(
                    <div key={school.school}>
                        <h3>{school.school}</h3>
                        <p>{school.degree}</p>
                        <p>{school.startDate} - {school.endDate}</p>
                        <p>{school.location}</p>
                    </div>
            )})}
            <button className={ viewStatus } onClick={handleClick}>Add Education</button>
            <Education setSchool={setSchoolsList} schoolList={ schoolsList} classN={className} />
        </div>
    );
}

export default EducationPanel;