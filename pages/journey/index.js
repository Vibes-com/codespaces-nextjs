import AboutJourney from "../../comps/journey/AboutJourney"
import JourneyBanner from "../../comps/journey/Banner"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Index = () => {
  useEffect(() => {
    AOS.init({
      delay:50,
      duration: 2000,
    });
  }, [])
  return (
   <>
    <JourneyBanner/>
    <AboutJourney/>

   </>
  )
}

export default Index