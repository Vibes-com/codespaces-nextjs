import React from "react";
import { FaAngleRight , FaAngleLeft} from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <FaAngleLeft/>,
    nextArrow: <FaAngleRight/>,
  };
export default function RelatedSlider() {
  return (
    <>
        <h1  className="related_head">Related Products</h1>
        <section className="related_prod-slider" data-aos="fade-up">
            <Slider {...settings}>
                <div className="slide-item">
                        <div className="product-div">
                            <img src="/images/107.jpg" alt=" ligo" className="image-slider" />
                            <div className="product-title">
                                Dolor nisi ad ipsum 
                            </div>
                            <div className="rel-description"> Amet magna quis incididunt sunt enim eiusmod duis eiusmod duis eiusmod ut do. Exercitation tempor cupidatat commodo tempor laborum sit consequat ex irure nulla pariatur ipsum non ad.  </div>
                            <Link href="/product"> <div className="exp_btn"> Explore </div></Link>
                        </div>
                </div>
                <div className="slide-item">
                        <div className="product-div">
                            <img src="/images/107.jpg" alt=" ligo" className="image-slider" />
                            <div className="product-title">
                                Dolor nisi ad ipsum 
                            </div>
                            <div className="rel-description"> Amet magna quis incididunt sunt enim eiusmod duis eiusmod duis eiusmod ut do. Exercitation tempor cupidatat commodo tempor laborum sit consequat ex irure nulla pariatur ipsum non ad.  </div>
                            <Link href="/product"> <div className="exp_btn"> Explore </div></Link>
                        </div>
                </div>
                <div className="slide-item">
                        <div className="product-div">
                            <img src="/images/107.jpg" alt=" ligo" className="image-slider" />
                            <div className="product-title">
                                Dolor nisi ad ipsum 
                            </div>
                            <div className="rel-description"> Amet magna quis incididunt sunt enim eiusmod duis eiusmod duis eiusmod ut do. Exercitation tempor cupidatat commodo tempor laborum sit consequat ex irure nulla pariatur ipsum non ad.  </div>
                            <Link href="/product"> <div className="exp_btn"> Explore </div></Link>
                        </div>
                </div>
                <div className="slide-item">
                        <div className="product-div">
                            <img src="/images/107.jpg" alt=" ligo" className="image-slider" />
                            <div className="product-title">
                                Dolor nisi ad ipsum 
                            </div>
                            <div className="rel-description"> Amet magna quis incididunt sunt enim eiusmod duis eiusmod duis eiusmod ut do. Exercitation tempor cupidatat commodo tempor laborum sit consequat ex irure nulla pariatur ipsum non ad.  </div>
                            <Link href="/product"> <div className="exp_btn"> Explore </div></Link>
                        </div>
                    
                </div>
                <div className="slide-item">
                        <div className="product-div">
                            <img src="/images/107.jpg" alt=" ligo" className="image-slider" />
                            <div className="product-title">
                                Dolor nisi ad ipsum 
                            </div>
                            <div className="rel-description"> Amet magna quis incididunt sunt enim eiusmod duis eiusmod duis eiusmod ut do. Exercitation tempor cupidatat commodo tempor laborum sit consequat ex irure nulla pariatur ipsum non ad.  </div>
                            <Link href="/product"> <div className="exp_btn"> Explore </div></Link>
                        </div>
                </div>
                <div className="slide-item">
                        <div className="product-div">
                            <img src="/images/107.jpg" alt=" ligo" className="image-slider" />
                            <div className="product-title">
                                Dolor nisi ad ipsum 
                            </div>
                            <div className="rel-description"> Amet magna quis incididunt sunt enim eiusmod duis eiusmod duis eiusmod ut do. Exercitation tempor cupidatat commodo tempor laborum sit consequat ex irure nulla pariatur ipsum non ad.  </div>
                            <Link href="/product"> <div className="exp_btn"> Explore </div></Link>
                        </div>
                    
                </div>
            </Slider>
        </section>
    </>
  )
}
