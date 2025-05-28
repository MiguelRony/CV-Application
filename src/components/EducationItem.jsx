import { useState } from "react";
import "../styles/EducationItem.css"

function EducationItem({edit, item, onUpdate, onDelete}) {

    const [name, setName] = useState(item.name);
    const [degree, setDegree] = useState(item.degree);
    const [from, setFrom] = useState(item.from);
    const [to, setTo] = useState(item.to);

    const [viewStatus, setViewStatus] = useState( edit ? "editItem" : "panelItem");

    const handleClickItem = (e) => {
        e.preventDefault();
        if (viewStatus === "panelItem") {
            setViewStatus("editItem");
        } else {
            setViewStatus("panelItem");
        }
    }

    
    if (viewStatus === "editItem") {
        return (
            <div className={viewStatus}>
                <div className="inputDiv">
                    <label htmlFor="School">School</label>
                    <input id="School" name="School" type="text" placeholder="School" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="Degree">Degree</label>
                    <input id="Degree" name="Degree" type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
                </div>
                <div className="dateDiv">
                    <div className="inputDiv">
                        <label htmlFor="From">From</label>
                        <input id="From" name="From" type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="To">To</label>
                        <input id="To" name="To" type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
                    </div>
                </div>
                <div className="buttons">
                    <button className="saveBtn" onClick={(e) => {
                        if (edit) {
                            onUpdate({ name, degree, from, to }, e);
                        }else {
                            onUpdate({ name, degree, from, to });
                            handleClickItem(e);
                        }
                    }}>
                        Save
                    </button>
                    <button className="cancelBtn" onClick={(e) => {
                            if (edit) {
                                onDelete(e);
                                handleClickItem(e)
                            }else {
                                setName(item.name);
                                setDegree(item.degree);
                                setFrom(item.from);
                                setTo(item.to);
                                handleClickItem(e)
                            }
                        }}>
                        Cancel
                    </button>
                    {
                        edit ? null : (
                            <button className="deleteBtn" onClick={(e) => {
                                onDelete(e);
                                handleClickItem(e);
                                }}>
                                Delete
                            </button>)
                    }
                    
                </div>
            </div>

        );
    }else {
        return (
        <div className={viewStatus} onClick={handleClickItem}>
            <h4>{item.name} </h4>
            <span class="material-symbols-outlined">
                keyboard_arrow_down
            </span>
        </div>
        );
    }
}

export default EducationItem;