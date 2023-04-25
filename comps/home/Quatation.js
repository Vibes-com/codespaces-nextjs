import {Container, Form ,Button,InputGroup } from 'react-bootstrap'
const Quatation = () => {
  return (
        <Container>
            <div className='quotewrapper'>
                <div className='quote-img' data-aos="fade-right">
                    <img src='/images/shoe_manufacturing.jpg' />
                </div>
                <div className='quotebox' data-aos="fade-left">
                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>For Quotation</p>
                    </div>
                        <div className='form_wrap_quote'>
                        <Form>
                                <Form.Group className="mb-3 nameclass" controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3 telclass" controlId="formBasicPassword">
                                    <Form.Control type="tel" placeholder="Number" />
                                </Form.Group>
                                <Form.Group className="mb-3 emailclass" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted text-start">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <InputGroup>
                                    <Form.Control as="textarea" className='quoteclass' aria-label="With textarea" placeholder='Purpose' />
                                </InputGroup>
                        
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                </div>
            </div>
        </Container>
  )
}

export default Quatation