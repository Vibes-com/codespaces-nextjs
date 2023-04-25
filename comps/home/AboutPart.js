import styles from '../../styles/Home.module.css'
import Accordion from 'react-bootstrap/Accordion';
const AboutPart = () => {

  return (
    <>
        <section className="aboutsection d-flex">
            <div className="boxImage" data-aos="fade-right">
              <img className='w-100 auto' src="/images/107.jpg"/>
            </div>
            <div className="boxfaq " data-aos="fade-left "   >
            <div class="section-title ms-3">
              <h2 className='text-white'>About</h2>
              <p>About Us</p>
            </div>
            <Accordion  defaultActiveKey="0" flush>
              <Accordion.Item  eventKey="0" data-aos="fade-up">
                <Accordion.Header className={styles.acc_button}>Who is LIGO?</Accordion.Header>
                <Accordion.Body>
                We are a vertically integrated manufacturing partner, based out of DELHI, INDIA.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className='acc_box' eventKey="1" data-aos="fade-up">
                <Accordion.Header>What makes LIGO unique?</Accordion.Header>
                <Accordion.Body>
                We work as a partner instead of vendros. We take a consultative approach to understanding your needs, and propose solutions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item  className='acc_box' eventKey="2" data-aos="fade-up">
                <Accordion.Header>How do we do it?</Accordion.Header>
                <Accordion.Body>
                LIGO has factories in Delhi, in addition to proprietary factory. Regardless of whether you need a prototype, or need mass production, we can help.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item  className='acc_box' eventKey="3" data-aos="fade-up">
                <Accordion.Header>How can we begin?</Accordion.Header>
                <Accordion.Body>
                We are just call or an email away +91-0000000000 or info@ligogroup.in
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
         
        </section>
        
    </>
  )
}

export default AboutPart