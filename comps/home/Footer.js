import Link from "next/link"
export default function Footer(){
    
    const onFormSubmit = (e) => {e.preventDefault();}
  return (
  
    <>
         <div className="footer">
            <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-4 col-md-6">
                    <div className="footer-info text-center">
                    <Link href=""><img src= 'images/ligo-svg.svg' className='logo'/></Link>
                    <p className="pb-3 text-start">Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod.</p>
                    <p className="text-start">
                       address
                    </p>
                    <div className="social-links mt-3">
                        <Link href="#" className="twitter"></Link>
                        <Link href="#" className="facebook"></Link>
                        <Link href="#" className="instagram"></Link>
                        <Link href="#" className="google-plus"></Link>
                        <Link href="#" className="linkedin"></Link>
                    </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                    <li> <Link href="#">Home</Link></li>
                    <li> <Link href="#">About us</Link></li>
                    <li> <Link href="#">Services</Link></li>
                    <li> <Link href="#">Terms of service</Link></li>
                    <li> <Link href="#">Privacy policy</Link></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Categories</h4>
                    <ul>
                    <li> <Link href="#">Duffle Bag</Link></li>
                    <li> <Link href="#">Laptop Bag</Link></li>
                    <li> <Link href="#">Gym Bag</Link></li>
                    <li> <Link href="#">Luggage Bag</Link></li>
                    <li> <Link href="#">Hiking Bag</Link></li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action="#" onSubmit={onFormSubmit}>
                    <input type="email" className="emailInput" id="first" name="Write Your E-mail" />
                    <input type="submit" className="submitInput" id="first" name="Subscribe" />
                    </form>

                </div>

                </div>
            </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>LIGO</span></strong>. All Rights Reserved
            </div>
          
            </div>
        </div>
    </>
  )
}
