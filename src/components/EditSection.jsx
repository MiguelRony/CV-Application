import '../styles/EditSection.css'

import PersonalInfo from './PersonalInfo';
import EducationPanel from './EducationPanel';
import ExperiencePanel from './ExperiencePanel';
import OptionsBar from './OptionsBar';

function EditSection({ setInfo, educationList, experienceList }) {

  return (
    // This component is a placeholder for the EditSection components
    <div className="edit-section">
            <OptionsBar />
            <div className="edit-section-content">
                <PersonalInfo setInfo={setInfo}/>
                <EducationPanel educationList={educationList} />
                <ExperiencePanel expList={experienceList} />
            </div>
            
    </div>
  );
}

export default EditSection;