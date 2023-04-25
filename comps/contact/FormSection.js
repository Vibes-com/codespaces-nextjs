
const FormSection = () => {
  return (
    <>
        <div className='contact-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-5 gx-0">
                        <div className='contact-img'>
                            <div className="contact-info">
                                <div className='address'> 
                               
                                </div>
                            </div>
                            <img src="/images/bag.png" alt="" />
                        </div> 
                    </div>
                    <div className='col-lg-7 gx-0'>
                        <div className='form-wrap'>
                        <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <form>
                                        <div className="row g-3">
                                        <div className="col-md-6">
                                            <label for="your-name" className="form-label">Your Name</label>
                                            <input type="text" className="form-control" id="your-name" name="your-name" required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="your-mobile" className="form-label">Mobile</label>
                                            <input type="tel" className="form-control" id="your-mobile" name="your-mobile" required/>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="your-email" className="form-label">Your Email</label>
                                            <input type="email" className="form-control" id="your-email" name="your-email" required/>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="your-subject" className="form-label">Type of Business</label>
                                            <select class="form-select" aria-label="Default select example">
                                            <option selected>Select Business</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label for="your-message" className="form-label">Your Message</label>
                                            <textarea className="form-control" id="your-message" name="your-message" rows="3" required></textarea>
                                        </div>
                                        <div className="col-12">
                                                <button data-res="" type="submit" className="btn btn-dark text-center w-100 fw-bold" >Send</button>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormSection