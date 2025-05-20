import BestDealSection from "../components/BestDealSection/BestDealSection"
import DreamSection from "../components/DreamSection/DreamSection"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent"
import TrendingSection from "../components/TrendingSection/TrendingSection"
import WorkSection from "../components/WorkSection/WorkSection"
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