// import "../styles/inputSection.css";
import { useState } from "react";


function EducationPanel(){
    const [ schoolsList, setSchoolsList ] = useState([]);

    console.log(schoolsList);
    return(
        <div className="education">
            <h2>Education</h2>
            {schoolsList.map((school, index) => {
            })}
        </div>
    );
}

export default EducationPanel;