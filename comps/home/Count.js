
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Container } from 'react-bootstrap';
import {useState} from 'react'

const Count = () => {
  const [counterOn , setCounterOn] = useState(false)
  return (
    <>

        <Container className=" counts">
              <div className="section-title " >
                        <h2 className="text-white">Clients</h2>
                        <p>Check Our Clients</p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12" >
                  
                      <div className="count-box" data-aos="zoom-in">
                        <i class="bi bi-emoji-smile"></i>
                        <div className="right_box">
                          <div  className="purecounter">
                          <ScrollTrigger  onEnter= {() => setCounterOn(true)} onExit={() => setCounterOn(false)} >        {counterOn &&  <CountUp  start={0} end={236} duration={2}>236</CountUp>}</ScrollTrigger>
                          </div>
                          <p>Happy Clients</p>
                        </div>
                      </div>
               
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-box" data-aos="zoom-in">
                    <i class="bi bi-journal-richtext"></i>
                    <div className="right_box">
                      <div  className="purecounter">
                      <ScrollTrigger  onEnter= {() => setCounterOn(true)} onExit={() => setCounterOn(false)} >        {counterOn &&  <CountUp  start={0} end={236} duration={2}>236</CountUp>}</ScrollTrigger></div>
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12" >
                  <div className="count-box" data-aos="zoom-in">
                    <i class="bi bi-headset"></i>
                    <div className="right_box">
                      <div  className="purecounter">
                      <ScrollTrigger  onEnter= {() => setCounterOn(true)} onExit={() => setCounterOn(false)} >        {counterOn &&
                        <CountUp  start={0} end={1463} duration={2}>
                          1463
                        </CountUp>} </ScrollTrigger>
                      </div>
                      <p>Hours Of Support</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-box" data-aos="zoom-in">
                    <i class="bi bi-people"></i>
                    <div className="right_box">
                      <div  className="purecounter">
                      <ScrollTrigger  onEnter= {() => setCounterOn(true)} onExit={() => setCounterOn(false)} >        {counterOn && <CountUp  start={0} end={36} duration={2}>36</CountUp>}</ScrollTrigger></div>
                      <p>Hard Workers</p>
                    </div>
                  </div>
                </div>
              </div>
        </Container>
    </>    
  )
}

export default Count