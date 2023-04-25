
import ProductDetail from '../../comps/product/ProductDetail'
import RelatedSlider from '../../comps/product/RelatedSlider'
import WhyUs from '../../comps/home/WhyUs'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function Index() {
  useEffect(() => {
    AOS.init({
      delay:50,
      duration: 2000,
    });
  }, [])
  return (
    <>
      <div className='bg-white pd-wrapper'>
        <ProductDetail/>
        <RelatedSlider/>
        <WhyUs/>
      </div>
    </>
  )
}
