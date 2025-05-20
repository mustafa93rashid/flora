import type { TitleData } from '../../types/Title';
import type { WorkItem } from '../../types/Work';
import TitleComponent from '../TitleComponent/TitleComponent';
import WorkCard from '../WorkCard/WorkCard';
import './workSection.css';

interface WorkSectionProps {
  dataTitle: TitleData;    // Title and description for section header
  dataCards: WorkItem[];   // List of work cards to render
}

const WorkSection: React.FC<WorkSectionProps> = ({ dataTitle, dataCards }) => {
  return (
    // Section wrapper with padding and spacing
    <section className="workSection px-150 mt-160">
      
      {/* Section title component */}
      <TitleComponent data={dataTitle} />

      {/* Work cards container */}
      <div className="workCardsWrapper">
        {dataCards.map((item: WorkItem, index) => (
          <WorkCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
