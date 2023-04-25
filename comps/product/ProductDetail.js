
import { Container } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaEnvelope, FaHome, FaPhone, FaPhoneAlt, FaTelegramPlane, FaTimes } from 'react-icons/fa'
 


export default function ProductDetail() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

  return (
    <>
      <Container>
         <div className="moadal-enquiry">

            <Modal 
             size="lg"
            
             aria-labelledby="contained-modal-title-vcenter"
            show={show} onHide={handleClose}>
              <div className="close_modal" onClick={handleClose}> <FaTimes/> </div>
              <Modal.Body className="p-0" id="contained-modal-title-vcenter"> 
                  <div className='enquiry-popup'>
                      <div className='row'>
                          <div className='col-lg-5 p-0'>
                            <div className="left-img">
                              <img src="/images/110.jpg" alt="ligo" />
                            </div>
                          </div>
                          <div className='col-lg-7 p-0'>
                            <div className='form-div'>
                            <form>
                                <div class="mb-2">
                                  <label for="name" class="form-label">< FaHome />Name</label>
                                  <input type="text" class="form-control" id="name" name="name" required />
                                </div>
                                <div class="mb-2">
                                  <label for="number" class="form-label"> < FaPhoneAlt /> Number</label>
                                  <input type="tel" class="form-control" id="number" name="number" required/>
                                </div>
                                <div class="mb-2">
                                  <label for="email" class="form-label"> < FaEnvelope /> Email address</label>
                                  <input type="email" class="form-control" id="email" name="email" required />
                                </div>
                                <div class="mb-2">
                                  <label for="message" class="form-label"> < FaTelegramPlane /> Message</label>
                                  <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
                                </div>
                                <div className='text-center modal_close_btn'> <button type="submit" class="btn">Submit</button> </div>
                            </form>

                            </div>
                          </div>
                      </div>
                  </div>
              </Modal.Body>         
            </Modal>
          </div> 
        <div className='flex-product-wrap'>
          <div className='galler-section' data-aos="fade-right" >
            <ImageGallery items={images} />
          </div>
          <div className='product-content ' data-aos="fade-left">
              <h1>Leather Crafted professional bag</h1>
              <p> 
                Commodo labore elit fugiat eiusmod consequat non nostrud est. Culpa nisi consectetur consequat duis ullamco ad nostrud ad reprehenderit pariatur proident. Enim id aute laboris labore veniam dolor voluptate. Cillum ut incididunt non laboris irure enim Lorem ut cupidatat. Eu velit amet sit amet.
              </p>
              <ul>
                <li>Minim Lorem ut veniam non labore cupidatat.</li>
                <li>Minim Lorem ut veniam non labore cupidatat.</li>
                <li>Minim Lorem ut veniam non labore cupidatat.</li>
                <li>Minim Lorem ut veniam non labore cupidatat.</li>
              </ul>
              <button onClick={handleShow}>Enquire</button>
          </div>
        </div>
      </Container>
    </>
  )
}
