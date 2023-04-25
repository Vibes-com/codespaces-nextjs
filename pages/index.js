import Count from '../comps/home/Count.js';
import AboutPart from "../comps/home/AboutPart";
import LatestProducts from "../comps/home/LatestProducts";
import ClientSection from "../comps/home/ClientSection";
import Journey from "../comps/home/Journey";
import WhyUs from '../comps/home/WhyUs';
import Quotation from '../comps/home/Quatation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import HomeSlider from '../comps/Slider';

export default function Index() {

    useEffect(() => {
      AOS.init({
        disable: window.innerWidth < 768,
        delay:50,
        duration: 2000,
        once:true
      });
    }, [])
    
  return (
    <>   
    
      <HomeSlider/>
      <Count />
      <AboutPart/>
      <LatestProducts/>
      <ClientSection/>
      <Journey/>
      <WhyUs/>
      <Quotation/>

    </>
  )
  }

