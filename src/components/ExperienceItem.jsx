import { useState } from 'react';
import "../styles/ExperienceItem.css";

function ExperienceItem({edit, item, onUpdate, onDelete}) {
    const [company, setCompany] = useState(item.company);
    const [position, setPosition] = useState(item.position);
    const [from, setFrom] = useState(item.from);
    const [to, setTo] = useState(item.to);
    const [description, setDescription] = useState(item.description || "");

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
                    <label htmlFor="Company">Company</label>
                    <input id="Company" name="Company" type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="Position">Position</label>
                    <input id="Position" name="Position" type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
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
                <div className="inputDiv">
                    <label htmlFor="Description">Description</label>
                    <textarea id="Description" name="Description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="buttons">
                    <button className="saveBtn" onClick={(e) => {
                        if (edit) {
                            onUpdate({ company, position, from, to, description }, e);
                        }else {
                            onUpdate({ company, position, from, to, description });
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
                                setCompany(item.company);
                                setPosition(item.position);
                                setFrom(item.from);
                                setTo(item.to);
                                setDescription(item.description);
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
            <h4>{item.company} </h4>
            <span class="material-symbols-outlined">
                keyboard_arrow_down
            </span>
        </div>
        );
    }
}

export default ExperienceItem;