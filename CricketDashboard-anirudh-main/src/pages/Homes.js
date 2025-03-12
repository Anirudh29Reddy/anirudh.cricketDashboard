import Headers from "../Components/HomeComponents/Headers";
import HeroSections from "../Components/HomeComponents/HeroSections";
import OurProcesss from "../Components/HomeComponents/OurProcesss";
import CricketStats from "../Components/HomeComponents/CricketStats";
import FeaturesSection from "../Components/HomeComponents/FeaturesSection";
import LatestInsightsSection from "../Components/HomeComponents/LatestInsightsSection";
import CricketMoments from "../Components/HomeComponents/CricketMoments";
import ContactSection from "../Components/HomeComponents/ContactSection";


import FooterSection from "../Components/HomeComponents/FooterSection";

export default function Homes() {

  
  return (
    <div>
    <Headers  />
    <HeroSections />
    <CricketStats />
    <OurProcesss />
   
    
    <FeaturesSection /> 
    <LatestInsightsSection />
    <CricketMoments />
    <ContactSection />
    <FooterSection />
  </div>
  );
}