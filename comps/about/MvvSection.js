import {Container , Row , Col} from 'react-bootstrap'

export const MvvSection = () => {
  return (
    <>
        <section className='mv_wrap'>
            <Container>
               <div className='vision_wrap'>
           
                    <div className='vision-row' data-aos="fade-right">
                           <div className='box1'>
                                <h1>vision</h1>
                                <p>Our ultimate goal is to make Ligo’s label shine amongst the
                                    prevalent bag manufacturer names in the country. Our eyes are
                                    set to deliver patron&#39;s orders timely with the help of cutting-
                                    edge technology, unique designs, and skilled artisans.</p>
                            </div> 
                           <div className='box2'>
                                <img src="/images/vision.png" className='w-100 h-auto' alt="" />
                            </div> 
                    </div>
                    <div className='vision-row' data-aos="fade-left">
                        <div className='box2'>
                            <img src="/images/mission.png" className='w-100 h-auto' alt="" />
                        </div> 
                        <div className='box1'>
                            <h1>Mission</h1>
                            <p>We are all set to cater to the needs of the modern lifestyle.
                                With our unique designs and efficient manufacturing, we strive
                                to exceed our customers’ expectations. We focus on utilizing
                                the finest materials and artisans. We want to dedicate our 360-
                                degree efforts to delivering the best products.</p>
                        </div>
                    </div>
                    {/* <div className='vision-row' data-aos="fade-right">
                        
                        <div className='box1'>
                            <h1>Values</h1>
                            <p>Aliqua culpa in reprehenderit adipisicing ad velit aliquip elit ex exercitation qui. In ad consequat magna in cupidatat labore ut est pariatur adipisicing nisi reprehenderit sunt veniam. </p>
                        </div>
                        <div className='box2'>
                            <img src="/images/value.png" className='w-100 h-auto' alt="" />
                        </div> 
                    </div> */}
               </div>
            </Container>
        </section>
    </>
  )
}
