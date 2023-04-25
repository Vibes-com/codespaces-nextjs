
import Link from 'next/link'
const LatestProducts = () => {
    const backgroundImageUrl = "images/107.jpg";
    const backgroundImageUrl1 = "images/107.jpg";
    const backgroundImageUrl2 = "images/107.jpg";
    
    const backgroundImageUrl3 = "images/107.jpg";
    const backgroundImageUrl4 = "images/107.jpg";
    const backgroundImageUrl5 = "images/107.jpg";
  return (
    <>
        <div className='product-area'>
          <div class="section-title container text-center" >
              <h2 className='text-white'> Check</h2>
              <p className=''>Our Latest Products</p>
          </div>
          <section className="latest-name d-flex flex-wrap">

              <div className="flip" data-aos="zoom-in"  >
                  <div className="front" style={{    backgroundImage: `url(${backgroundImageUrl})`}}>
                    {/* <h1 className="text-shadow">Handbag</h1> */}
                  </div>
                  <div className="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <div className="discover_btn"><Link href="#" className='discover-link'> Discover More</Link></div>
                  </div>
              </div>
              <div className="flip" data-aos="zoom-in" data-aos-delay="80">
                  <div className="front" style={{    backgroundImage: `url(${backgroundImageUrl2})`}}>
                    {/* <h1 className="text-shadow">Handbag</h1> */}
                  </div>
                  <div className="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <div className="discover_btn"><Link href="#" className='discover-link'> Discover More</Link></div>
                  </div>
              </div>
              <div className="flip" data-aos="zoom-in" data-aos-delay="100">
                  <div className="front" style={{    backgroundImage: `url(${backgroundImageUrl3})`}}>
                    {/* <h1 className="text-shadow">Handbag</h1> */}
                  </div>
                  <div className="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <div className="discover_btn"><Link href="#" className='discover-link'> Discover More</Link></div>
                  </div>
              </div>
              <div className="flip" data-aos="zoom-in" data-aos-delay="120">
                  <div className="front" style={{    backgroundImage: `url(${backgroundImageUrl4})`}}>
                    {/* <h1 className="text-shadow">Handbag</h1> */}
                  </div>
                  <div className="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <div className="discover_btn"><Link href="#" className='discover-link'> Discover More</Link></div>
                  </div>
              </div>
              <div className="flip" data-aos="zoom-in" data-aos-delay="140">
                  <div className="front" style={{    backgroundImage: `url(${backgroundImageUrl5})`}}>
                    {/* <h1 className="text-shadow">Handbag</h1> */}
                  </div>
                  <div className="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <div className="discover_btn"><Link href="#" className='discover-link'> Discover More</Link></div>
                  </div>
              </div>
              <div className="flip" data-aos="zoom-in" data-aos-delay="160" >
                  <div className="front" style={{    backgroundImage: `url(${backgroundImageUrl1})`}}>
                    {/* <h1 className="text-shadow">Handbag</h1> */}
                  </div>
                  <div className="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    <div className="discover_btn"><Link href="#" className='discover-link'> Discover More</Link></div>
                  </div>
              </div>
          </section>
        </div>
  </>  
  )
}

export default LatestProducts