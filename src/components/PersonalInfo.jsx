import "../styles/inputSection.css";
import { useState } from "react";


function PersonalInfo(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return(
        <div className="personalInfo">
            <h2>Personal Information</h2>
            <div className="inputDiv">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="inputDiv">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="inputDiv">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel"  pattern="[0-9]{10}" placeholder="555-555-5555" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button>Save</button>
        </div>
    );
}

export default PersonalInfo;