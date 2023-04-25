import Image from 'next/image'
import { Navigation, Pagination, A11y, Autoplay, Parallax , EffectFade} from 'swiper';
// import Image1 from '../images/imageabout1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/parallax';

const HeroSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y,Autoplay,Parallax,EffectFade]}
      
      effect={"fade"}
    
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 4000
      }}
      loop={true}
      
    >
      <SwiperSlide>
        <div className='slide_home'>
          <Image
            width={1350}
            height={550}
            data-swiper-parallax="30%"
            src="/images/banner/Banner_ligo.jpg"
            alt='alt'
          />
        </div>
      </SwiperSlide>
 
      <SwiperSlide>
        <div className='slide_home'>
          <Image
            width={1350}
            data-swiper-parallax="30%"
            height={550}
            src="/images/banner_ligo_1.png"
            alt='alt'
          />
        </div>
      </SwiperSlide>
 
  
    </Swiper>
  )
}

export default HeroSlider