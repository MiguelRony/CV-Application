// import "../styles/inputSection.css";
import { useState } from "react";
import "../styles/educationPanel.css";
import EducationItem from "./EducationItem";


function EducationPanel({ educationList}){
    const [ expanded, setExpanded ] = useState(false);
    const [ lastId, setLastId ] = useState(0);
    const [ schoolsList, setSchoolsList ] = useState([]);
    const [ viewStatus, setViewStatus ] = useState("addItemBtn active");


    const handleClick = (e) => {
        e.preventDefault();
        if (viewStatus === "addItemBtn active") {
            setViewStatus("addItemBtn hidden");
        } else {
            setViewStatus("addItemBtn active");
        }
    };

    const updateOrAddItem = (id, updatedItem) => {
        setSchoolsList((prevList) => {
        const exists = prevList.some(item => item.id === id);
        let newList = [];
        if (exists) {
            newList = prevList.map((item) =>
                item.id === id ? { ...item, ...updatedItem } : item
            );
        } else {
            newList = [...prevList, { id, ...updatedItem }];
        }
        educationList(newList);
        return newList;
    });
};

    const deleteItem = (id) => {
    setSchoolsList((prevList) => {
        let newList = prevList.filter((school) => school.id !== id);
        educationList(newList);
        return newList;
    });
};

    if (viewStatus === "addItemBtn hidden") {
        return (
            <div className="educationPanel expanded">
                <div className="panelHeader" onClick={() => expanded ? setExpanded(false) : setExpanded(true)}>
                    <h2>Education</h2>
                    <span class="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </div>
                {schoolsList.map((school) => (
                    <EducationItem key={school.id} edit={false} item={school} onUpdate={ (newData) => updateOrAddItem(school.id, newData)} onDelete={() => deleteItem(school.id)} />
                ))}
                    <EducationItem key={lastId + 1} edit={true} item={{ id: lastId + 1, name: "", degree: "", from: "", to: "" }} onUpdate={(newData, e) => {
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
                    <h2>Education</h2>
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
                    <h2>Education</h2>
                    <span class="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </div>
                {schoolsList.map((school) => (
                    <EducationItem key={school.id} item={school} onUpdate={ (newData) => updateOrAddItem(school.id, newData)} onDelete={() => deleteItem(school.id)} />
                ))}
                <button  className={ viewStatus } onClick={handleClick}>Add Education</button>
            </div>
        );
    }
    
}

export default EducationPanel;