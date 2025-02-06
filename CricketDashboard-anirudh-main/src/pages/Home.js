

import Headers from '../Components/HomeComponents/Headers'
import HeroSections from '../Components/HomeComponents/HeroSections'
import CricketStats from '../Components/HomeComponents/CricketStats'
import OurProcesss from '../Components/HomeComponents/OurProcesss'

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
      

     
    </div>
  );
}
