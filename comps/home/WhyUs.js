import {Container , Row , Col} from 'react-bootstrap'
const WhyUs = () => {
  return (
    <>
       <section className='why_us bg-white'> 

            <Container className="ethics ">
            <div class="section-title my-4">
                <h2>Why</h2>
                <p>Choose us</p>
            </div>
                <Row>
                    <Col lg="3" md="6" xs="12" >
                        <div className="ethic_box" data-aos="flip-right">
                            <div className="logo">
                                <img src="/images/headphones.png" className= "h-auto w-100" alt="" />
                            </div>
                            <div className="ethic_head">24X7 Support</div>
                            <div className="ethic_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis similique optio nostrum quidem hic facilis earum ullam .</div>
                        </div>
                    </Col>
                    <Col lg="3" md="6" xs="12" >
                        <div className="ethic_box" data-aos="flip-right" data-aos-delay="50">
                            <div className="logo">
                                <img src="/images/headphones.png" className= "h-auto w-100" alt="" />
                            </div>
                            <div className="ethic_head">24X7 Support</div>
                            <div className="ethic_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis similique optio nostrum quidem hic facilis earum ullam .</div>
                        </div>
                    </Col>
                    <Col lg="3" md="6" xs="12" >
                        <div className="ethic_box" data-aos="flip-right" data-aos-delay="100">
                            <div className="logo">
                                <img src="/images/headphones.png" className= "h-auto w-100" alt="" />
                            </div>
                            <div className="ethic_head">24X7 Support</div>
                            <div className="ethic_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis similique optio nostrum quidem hic facilis earum ullam .</div>
                        </div>
                    </Col>
                    <Col lg="3" md="6" xs="12" >
                        <div className="ethic_box" data-aos="flip-right" data-aos-delay="150">
                            <div className="logo">
                                <img src="/images/headphones.png" className= "h-auto w-100" alt="" />
                            </div>
                            <div className="ethic_head">24X7 Support</div>
                            <div className="ethic_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis similique optio nostrum quidem hic facilis earum ullam .</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default WhyUs