import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Navigation , Autoplay ,A11y } from 'swiper';
// import 'swiper/swiper.scss';
import 'swiper/css';
// import 'swiper/components/navigation/navigation.css';

SwiperCore.use([Navigation,  Autoplay]);

const slideVariants = {
  hidden: { opacity: 0 },
  visible: {
   
    opacity: 1,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 1
    },
  },
  exit: {  opacity: 0 },
};

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className='slider ban-slider'>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop = "true"
        speed={1300}
        autoplay={{
            delay: 4000
          }}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate={currentIndex === 0 ? 'visible' : 'hidden'}
            exit="exit"
          >
            <div className="slide" style={{backgroundImage: 'url(/images/banner/Banner_ligo.jpg)'}}>
                <div className='banner-text'>
                  <h1>Ex id enim amet aliquip nisi deserunt esse nisi elit magna sit.</h1>
                  <p>Tempor mollit ea cillum velit proident exercitation consequat non consequat do id. Et ex tempor adipisicing culpa est adipisicing. </p>
                </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate={currentIndex === 1 ? 'visible' : 'hidden'}
            exit="exit"
          >
            <div className="slide" style={{backgroundImage: 'url(/images/banner/about-us-banner.jpg)'}}>
            <div className='banner-text'>
                  <h1>Ex id enim amet aliquip nisi deserunt esse nisi elit magna sit.</h1>
                  <p>Tempor mollit ea cillum velit proident exercitation consequat non consequat do id. Et ex tempor adipisicing culpa est adipisicing. </p>
                </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate={currentIndex === 2 ? 'visible' : 'hidden'}
            exit="exit"
          >
            <div className="slide" style={{backgroundImage: 'url(/images/banner_ligo_1.png)'}}>
                <div className='banner-text'>
                  <h1>Ex id enim amet aliquip nisi deserunt esse nisi elit magna sit.</h1>
                  <p>Tempor mollit ea cillum velit proident exercitation consequat non consequat do id. Et ex tempor adipisicing culpa est adipisicing. </p>
                </div>
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;