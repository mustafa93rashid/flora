import type { Trending } from '../../types/Trending';
import './trendingCard.css';

interface TrendingCardProps {
  data: Trending; // Object containing image, price, title, and location
}

const TrendingCard: React.FC<TrendingCardProps> = ({ data }) => {
  return (
    // Container for the entire card
    <div className="trendingCardContainer" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      {/* Card image */}
      <img src={data.image} alt="image" />

      {/* Price and title block */}
      <div className="cardHeader">
        <span className="fs-24">{data.price}</span>
        <h3 className="fs-24">{data.title}</h3>
      </div>

      {/* Location block */}
      <div className="cardLocation">
        <img src="/flora/Images/Trending/location.svg" alt="icon" />
        <p className="fs-20">{data.location}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
