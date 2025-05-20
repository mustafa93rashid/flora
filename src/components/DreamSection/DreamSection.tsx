
import type { TitleData } from "../../types/Title";
import TitleComponent from '../TitleComponent/TitleComponent';
import './DreamSection.css';

interface DreamSectionProps {
  dataTitle: TitleData;
}

const DreamSection: React.FC<DreamSectionProps> = ({ dataTitle }) => {
  return (
    // Main section with background image and overlay
    <section className='dreamSection mt-160'  >
      {/* Centered content container */}
      <div className="dreamContentContainer" >
        <TitleComponent data={dataTitle}  />
      </div>
    </section>
  );
};

export default DreamSection;
