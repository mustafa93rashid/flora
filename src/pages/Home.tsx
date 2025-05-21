import BestDealSection from "../sections/BestDealSection/BestDealSection"
import DreamSection from "../sections/DreamSection/DreamSection"
import Footer from "../sections/Footer/Footer"
import Hero from "../sections/Hero/Hero"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent"
import TrendingSection from "../sections/TrendingSection/TrendingSection"
import WorkSection from "../sections/WorkSection/WorkSection"
import { BestDealsTabData } from "../data/BestDealsData"
import { HowItWorksData } from "../data/HowItWorksData"
import { NavBarData } from "../data/NavBarData"
import { HeroData } from "../data/HeroData"
import { BestDealTitle, DreamTitle, HeroTitle, TrendingTitle, WorksTitle } from "../data/TitleSectionsData"
import { TrendingData } from "../data/TrendingData"
import { footerData } from './../data/FooterData'
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"
import HandleLoadingComponent from "../components/HandleLoadingComponent/HandleLoadingComponent"
import SocialToggle from "../components/SocialToggle/SocialToggle"
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage"

const Home = () => {
  return (
    <>
      <WelcomeMessage />
      <HandleLoadingComponent />
      <ScrollToTop />
      <SocialToggle />
      <NavBarComponent data={NavBarData} />
      <Hero data={HeroTitle} herodata={HeroData} />
      <WorkSection dataTitle={WorksTitle} dataCards={HowItWorksData} />
      <DreamSection dataTitle={DreamTitle} />
      <TrendingSection dataTitle={TrendingTitle} dataCards={TrendingData} />
      <BestDealSection dataTitle={BestDealTitle} dataCards={BestDealsTabData} />
      <Footer data={footerData} />

    </>
  )
}

export default Home