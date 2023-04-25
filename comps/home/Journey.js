import { Navigation, Pagination, A11y, Autoplay, Parallax , EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/parallax';

const Journey = () => {
    const image = "/images/journey1.jpg"
  return (
        <>
        <main className='journey_main'>
            <div className='journey-heading'>
                Journey of a <span className="bag-head"> Bag </span>
            </div>
            <div className='journey-slider'>
            <Swiper
                    modules={[Navigation, Pagination, A11y,Autoplay,Parallax,EffectCoverflow]}
                    spaceBetween={10}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={false}
                    effect={"fade"}              
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4000
                    }}
                    >
                    <SwiperSlide className=" bg-white">
                        <div className='swiper-image' style={{backgroundImage: `url(${image})`}}>
                            {/* <img src="/images/journey1.jpg"/> */}
                            <div className='journey_content'>
                                <h1>2020</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </SwiperSlide> 
                    <SwiperSlide className=" bg-white">
                        <div className='swiper-image' style={{backgroundImage: `url(${image})`}}>
                            {/* <img src="/images/journey1.jpg"/> */}
                            <div className='journey_content'>
                                <h1>2020</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </SwiperSlide> 
                    <SwiperSlide className=" bg-white">
                        <div className='swiper-image' style={{backgroundImage: `url(${image})`}}>
                            {/* <img src="/images/journey1.jpg"/> */}
                            <div className='journey_content'>
                                <h1>2020</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </SwiperSlide> 
                 
                </Swiper>
            </div>
        </main>
        </>
         
  )
}

export default Journey