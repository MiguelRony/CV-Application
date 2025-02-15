import { useState } from "react";
import "../styles/education.css";


function Education({ setSchool, schoolList, classN }){
    const [ formData, setFormData ] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSchool([...schoolList, formData]);
    };

    return(
        <div className={classN}>
            <form className="education" onSubmit={ handleSubmit }>
                <div className="inputDiv">
                    <label htmlFor="school">School</label>
                    <input id="school" name="school" type="text" value={formData.school} onChange={ handleChange} placeholder="School Name" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="degree">Degree</label>
                    <input id="degree" name="degree" type="text"value={formData.degree} onChange={ handleChange} placeholder="Degree" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="startDate">Start Date</label>
                    <input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={ handleChange} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="endDate">End Date</label>
                    <input id="endDate" name="endDate" type="date" value={formData.endDate} onChange={ handleChange}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="location">Location</label>
                    <input id="location" name="location" type="text" value={formData.location} onChange={ handleChange} placeholder="Location" />
                </div>
                <button type="submit" >Save</button>
            </form>
        </div>
    );
}

export default Education;