

import Headers from '../Components/HomeComponents/Headers'
import HeroSections from '../Components/HomeComponents/HeroSections'
import CricketStats from '../Components/HomeComponents/CricketStats'
import OurProcesss from '../Components/HomeComponents/OurProcesss'
import FeaturesSection from '../Components/HomeComponents/FeaturesSection'
import LatestInsightSection from '../Components/HomeComponents/LatestInsightsSection'
import CricketMoments from '../Components/HomeComponents/CricketMoments'
import ContactSection from '../Components/HomeComponents/ContactSection'
import FooterSection from '../Components/HomeComponents/FooterSection'

export default function Home() {

  const faqs = [{
    question : 'whats your doubt',
    answer : 'Type your question here'
  }
  ,
  {
    question : 'whats your doubt 2',
    answer : 'Type your doubt here'
  }
  ,
  {
    question : 'whats your doubt 2',
    answer : 'Type your doubt here'
  }
 
]
  return (
    <div>
      <Headers  />
      <HeroSections />
      <CricketStats />
      <div className="container m-1">
        {faqs.map((item)=><OurProcesss value={item}/>)}
      </div>

      <FeaturesSection />
      <LatestInsightSection />
      <CricketMoments />
      <ContactSection />
      <FooterSection />
     
    </div>
  );
}
