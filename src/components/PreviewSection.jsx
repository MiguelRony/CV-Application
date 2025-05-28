import '../styles/PreviewSection.css'; // Importing CSS for styling
import EducationView from './EducationView';
import PersonalInfoView from './PersonalInfoView';
import ExperienceView from './ExperienceView';

function PreviewSection({ readInfo, educationList, experienceList }) {

    // This component is responsible for displaying the preview of the content
  return (
    <div className="preview-section">
      <PersonalInfoView user={readInfo} />
      <EducationView education={educationList} />
      <ExperienceView experience={experienceList} />
    </div>
  );
}

export default PreviewSection;