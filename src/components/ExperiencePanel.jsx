import "../styles/ExperiencePanel.css"
import { useState } from "react";
import ExperienceItem from "./ExperienceItem";

function ExperiencePanel({expList}) {
    const [ lastId, setLastId ] = useState(0);
    const [ experienceList, setExperienceList ] = useState([]);
    const [ viewStatus, setViewStatus ] = useState("addItemBtn active");
    const [ expanded, setExpanded ] = useState(false);


    const handleClick = (e) => {
        e.preventDefault();
        if (viewStatus === "addItemBtn active") {
            setViewStatus("addItemBtn hidden");
        } else {
            setViewStatus("addItemBtn active");
        }
    };

    const updateOrAddItem = (id, updatedItem) => {
        setExperienceList((prevList) => {
        const exists = prevList.some(item => item.id === id);
        let newList = [];
        if (exists) {
            newList = prevList.map((item) =>
                item.id === id ? { ...item, ...updatedItem } : item
            );
        } else {
            newList = [...prevList, { id, ...updatedItem }];
        }
        expList(newList);
        return newList;
    });
};

    const deleteItem = (id) => {
    setExperienceList((prevList) => {
        let newList = prevList.filter((job) => job.id !== id);
        expList(newList);
        return newList;
    });
};

    if (viewStatus === "addItemBtn hidden") {
        return (
            <div className="educationPanel expanded">
                <div className="panelHeader" onClick={() => expanded ? setExpanded(false) : setExpanded(true)}>
                    <h2>Experience</h2>
                    <span class="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </div>
                {experienceList.map((job) => (
                    <ExperienceItem key={job.id} edit={false} item={job} onUpdate={ (newData) => updateOrAddItem(job.id, newData)} onDelete={() => deleteItem(job.id)} />
                ))}
                <ExperienceItem key={lastId + 1} edit={true} item={{ id: lastId + 1, company: "", position: "", from: "", to: "", description: "" }} onUpdate={(newData, e) => {
                    updateOrAddItem(lastId + 1, newData);
                    setLastId(lastId + 1);
                    handleClick(e);
                }} onDelete={(e) => {deleteItem(lastId + 1);
                    handleClick(e);
                }} />
            </div>
        );
    }else if (!expanded) {
        return (
            <div className={expanded ? "educationPanel expanded" : "educationPanel"} onClick={() => expanded ? setExpanded(false) : setExpanded(true)}>
                <div className="panelHeader">
                    <h2>Experience</h2>
                    <span class="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </div>
            </div>
        );
    }else {
        return(
            <div className="educationPanel expanded">
                <div className="panelHeader" onClick={() => expanded ? setExpanded(false) : setExpanded(true)}>
                    <h2>Experience</h2>
                    <span class="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </div>
                {experienceList.map((job) => (
                    <ExperienceItem key={job.id} item={job} onUpdate={ (newData) => updateOrAddItem(job.id, newData)} onDelete={() => deleteItem(job.id)} />
                ))}
                <button  className={ viewStatus } onClick={handleClick}>Add Experience</button>
            </div>
        );
    }
}

export default ExperiencePanel;