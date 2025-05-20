import { useState } from 'react';
import type { BestDealsTabItem } from '../../types/BestDealsTabItem';
import type { TitleData } from "../../types/Title";
import BestDealCard from '../BestDealCard/BestDealCard';
import TitleComponent from '../TitleComponent/TitleComponent';
import './BestDealSection.css';

interface BestDealSectionProps {
  dataTitle: TitleData;
  dataCards: BestDealsTabItem[];
}

const BestDealSection: React.FC<BestDealSectionProps> = ({ dataTitle, dataCards }) => {
  const [activeTab, setActiveTab] = useState(dataCards[0].name); 

  const selectedTab = dataCards.find(item => item.name === activeTab);

  return (
    <section className='bestDealSection px-150 mt-160'>
      <TitleComponent data={dataTitle} />

      <div>
        {/* Tab navigation buttons */}
        <div className="tabNavigation">
          {dataCards.map((item, index) => (
            <button
              key={index}
              className={`tabButton fs-24 ${item.name === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Display cards based on selected tab */}
        <div className="tabContentArea">
          {selectedTab?.images.map((img, idx) => (
            <BestDealCard key={idx} data={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDealSection;
