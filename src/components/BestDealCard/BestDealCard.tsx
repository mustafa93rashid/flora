import './BestDealCard.css';

interface BestDealCardProps {
    data: string;
}

const BestDealCard: React.FC<BestDealCardProps> = ({ data }) => {
  return (
    <div className='bestDealCard' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <img src={data} alt="image" />
      <div className='badgeGroup'>
        <span>Featured</span>
        <span>3D</span>
      </div>
    </div>
  );
};

export default BestDealCard;