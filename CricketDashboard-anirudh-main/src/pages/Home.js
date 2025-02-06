

import Headers from '../Components/HomeComponents/Headers'
import HeroSections from '../Components/HomeComponents/HeroSections'

export default function Home() {

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
      

     
    </div>
  );
}
