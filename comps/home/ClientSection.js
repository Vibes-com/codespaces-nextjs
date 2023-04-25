import { Container , Row , Col } from "react-bootstrap";
// import Image from "next/image";
import { Navigation, Pagination, A11y, Autoplay, Parallax , EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/parallax';
const ClientSection  = () => {
    return (
    
    <Container className="client-container">
        <Row className="align-items-center">
            <Col lg="6" sm="12">
                <div className="client_left_side">
                    <div className="section-title" >
                        <h2 className="text-white">Clients</h2>
                        <p>Check Our Clients</p>
                    </div>
                    <div className="clients_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </Col>
            <Col lg="6" sm="12">
                <div className= "swiper_slider">
                    <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y,Autoplay,Parallax,EffectCoverflow]}
                    spaceBetween={10}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 4,
                        slideShadows:false
                    }}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 4000,

                    }}
                   
                     >
                           <SwiperSlide className="swiper-image bg-white">
                           
                               <img src="/images/client.png"/>
                            
                            </SwiperSlide> 
                           <SwiperSlide className="bg-white swiper-image">
                           
                                <img
                                    src="/images/client.png"
                                    alt='alt'
                                />
                           
                            </SwiperSlide> 
                           <SwiperSlide className="bg-white swiper-image">
                          
                                <img
                                    src="/images/client.png"
                                    alt='alt'
                                />
                         
                            </SwiperSlide> 
                           <SwiperSlide className="bg-white swiper-image">
                           
                                <img
                                    src="/images/client.png"
                                    alt='alt'
                                />
                          
                            </SwiperSlide> 
                           <SwiperSlide className="bg-white swiper-image">
                          
                                <img
                                    src="/images/client.png"
                                    alt='alt'
                                />
                          
                            </SwiperSlide> 
                           <SwiperSlide className="bg-white swiper-image">
                          
                                <img
                                    src="/images/client.png"
                                    alt='alt'
                                />
                            
                            </SwiperSlide> 
                           <SwiperSlide className="bg-white swiper-image">
                           
                                <img
                                    src="/images/client.png"
                                    alt='alt'
                                />
                          
                            </SwiperSlide> 
                           <SwiperSlide className="bg-white swiper-image">
                          
                                <img
                                    src="/images/client.png"
                                    alt='alt'
                                />
                          
                            </SwiperSlide> 
                    </Swiper>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ClientSection