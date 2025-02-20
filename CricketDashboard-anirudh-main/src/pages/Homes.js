
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

  const faqs = [{
    question : 'whats your doubt',
    answer : 'this is my answer'
  }
  ,
  {
    question : 'whats your doubt 2',
    answer : 'you should say'
  }
  ,
  {
    question : 'whats your doubt 2',
    answer : 'you should say'
  }

]
  return (
    <div>
      <Headers  />
      <HeroSections />
      <CricketStats />
      <div className="contianer m-1" >
      {faqs.map((item)=> <OurProcesss value={item}/>)}
      </div>
      
      <FeaturesSection /> 
      <LatestInsightsSection />
      <CricketMoments />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
