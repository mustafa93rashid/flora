import type { TitleData } from "../../types/Title";
import type { WorkItem } from "../../types/Work";
import './Hero.css';

interface HeroProps {
  data: TitleData;
  herodata: WorkItem[];
}

const Hero: React.FC<HeroProps> = ({ data, herodata }) => {
  return (
    // Wrapper section for the entire hero component
    <section className="allsection"  >
      {/* Hero image (positioned as background or visual element) */}
      <div className="heroImage">
        <img src="/flora/Images/Hero/hero.png" alt="hero image" />
      </div>
      {/* Top part of the hero with title and image */}
      <div className="heroContainer">

        {/* Text content (title and description) */}
        <div className="heroTitle px-150" data-aos="fade-up">
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
        </div>
        {/* Bottom part with icon-label items mapped from herodata */}
        <div className="labelContainer">
          {herodata.map((item, index) => (
            <div className="labelInside" key={index}>
              <div className="iconContainer">
                <img src={item.icon} alt="icon" />
              </div>

              <div className="labelDesc">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>


    </section>
  );
};

export default Hero;