import { Col } from "react-bootstrap";
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import { FaAngleLeft ,FaAngleRight } from "react-icons/fa";
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  loop:true,
  autoplay:false,
  autoplaySpeed:2000,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: <FaAngleLeft/>,
  nextArrow: <FaAngleRight/>,
};

export default function MediaSection() {
    const sliderRef = useRef(null);

    useEffect(() => {
      sliderRef.current.slickGoTo(0);
    }, []);  
return (
 
        <>
            <Col md={12} data-aos="fade-right">
            <div className="media-head"> News & Media </div>
                <div className="media-wrapper">
                    
                    <Slider ref={sliderRef} {...settings}>
                        <div>
                            <div className="slideImage" style={{backgroundImage: `url('/images/107.jpg')`}}>    
                                <div className="media-content">
                                       <div className="media-title"> Eu cupidatat minim adipisicing proident ad nostrud. </div>
                                       <div className="media-para">Sunt aute officia consectetur voluptate sit ullamco eu sit anim anim voluptate laborum. Elit veniam consectetur aliquip ad ea aliquip occaecat fugiat aliqua. </div> 
                                       <div className="rd-button"> <Link href="/mediaDetail"> Read More</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slideImage" style={{backgroundImage: `url('/images/110.jpg')`}}>    
                                <div className="media-content">
                                        <div className="media-title"> Eu cupidatat minim adipisicing proident ad nostrud. </div>
                                        <div className="media-para">Sunt aute officia consectetur voluptate sit ullamco eu sit anim anim voluptate laborum. Elit veniam consectetur aliquip ad ea aliquip occaecat fugiat aliqua. </div> 
                                        <div className="rd-button"> <Link href="/mediaDetail"> Read More</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slideImage" style={{backgroundImage: `url('/images/114.png')`}}>    
                                <div className="media-content">
                                        <div className="media-title"> Eu cupidatat minim adipisicing proident ad nostrud. </div>
                                        <div className="media-para">Sunt aute officia consectetur voluptate sit ullamco eu sit anim anim voluptate laborum. Elit veniam consectetur aliquip ad ea aliquip occaecat fugiat aliqua. </div> 
                                        <div className="rd-button"> <Link href="/mediaDetail"> Read More</Link> </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Col>
            
        </>

  )
}
