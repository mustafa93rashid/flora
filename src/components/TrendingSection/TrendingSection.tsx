import type { TitleData } from '../../types/Title';
import type { Trending } from '../../types/Trending';
import TitleComponent from '../TitleComponent/TitleComponent';
import TrendingCard from '../TrendingCard/TrendingCard';
import './trendingSection.css';

interface TrendingSectionProps {
  dataTitle: TitleData;    // Title and description data for the section header
  dataCards: Trending[];   // Array of trending card objects
}

const TrendingSection: React.FC<TrendingSectionProps> = ({ dataTitle, dataCards }) => {
  return (
    // Main section wrapper with padding and margin
    <section className="trendingSection px-150 mt-160">
      
      {/* Section title component */}
      <TitleComponent data={dataTitle} />

      {/* Trending cards container */}
      <div className="trendingCardsWrapper" >
        {dataCards.map((item: Trending, index) => (
          <TrendingCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
