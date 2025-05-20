import type { WorkItem } from '../../types/Work';
import './workCard.css';

interface WorkCardProps {
  data: WorkItem; // Contains icon, title, and description
}

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
  return (
    // Container for individual work card
    <div className="workCardContainer" data-aos="flip-left">
      {/* Icon */}
      <img src={data.icon} alt="icon" />

      {/* Title and description */}
      <div className="workCardDescription" >
        <h3 className="fs-24">{data.title}</h3>
        <p className="fs-20-6">{data.description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
