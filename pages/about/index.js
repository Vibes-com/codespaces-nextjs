import { AboutBanner }  from "../../comps/about/AboutBanner"
import { MvvSection } from "../../comps/about/MvvSection"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { WhoWeAre } from "../../comps/about/WhoWeAre";
import { OurValues } from "../../comps/about/OurValues";

const Index = () => {
  useEffect(() => {
    AOS.init({
      delay:50,
      duration: 2000,
      once:true
    });
  }, [])
  
  return (
    <>
      <AboutBanner/>
      <WhoWeAre/>
  
      <MvvSection/>
      <OurValues/>
    </>
  )
}

export default Index