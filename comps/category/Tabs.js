import { Row , Col , Nav ,  Tab, Container  } from "react-bootstrap" 
import Link from "next/link"
export const CategoryTabs = () => {
    const bgImage = 'https://www.beyoung.in/blog/wp-content/uploads/2022/04/The-Shoulder-Bag-853x1024.jpg'
    const bgChange = {
        backgroundImage: `url('${bgImage}')`,
        width:"100px",
        height:"100px"
    }
  return (
    < >
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={12}>
                    <h1 class="listing-heading"> Collection</h1>
                </Col>
                <Col sm={2}>
                    <div className="listing-name">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">
                                <div className="listing-tab" style={bgChange}>
                                        <div className="para">Duffle Bag</div>
                                </div>
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">
                                <div className="listing-tab" style={bgChange}>
                                        <div className="para">Hand Bag</div>
                                </div>
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">
                                <div className="listing-tab" style={bgChange}>
                                        <div className="para">Hiking Bag</div>
                                </div>
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fourth">
                                <div className="listing-tab" style={bgChange}>
                                        <div className="para">laptop Bag</div>
                                </div>
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fifth">
                                <div className="listing-tab" style={bgChange}>
                                        <div className="para">laptop Bag</div>
                                </div>
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="sixth">
                                <div className="listing-tab" style={bgChange}>
                                        <div className="para">laptop Bag</div>
                                </div>
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="seventh">
                                <div className="listing-tab" style={bgChange}>
                                        <div className="para">laptop Bag</div>
                                </div>
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Col>
                <Col sm={10}>
                <div className="listings">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className="row">
                                <Col sm={4}>
                                <div  className="product-link"> 
                                        <div className="product-listing-image">
                                            <img src="/images/110.jpg" alt="product-ligo" />
                                        </div>
                                        <div className="listing-content">
                                            <div className="prod_heading"> Duffle Bag</div>    
                                            <div className="prod_para"> Adipisicing cillum cupidatat ex ex incididunt ea.</div>
                                            <Link href="/product"> Explore  </Link>    
                                        </div>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="product-link">
                                        <div className="product-listing-image">
                                            <img src="/images/110.jpg" alt="product-ligo" />
                                        </div>
                                        <div className="listing-content">
                                            <div className="prod_heading"> Duffle Bag</div>    
                                            <div className="prod_para"> Adipisicing cillum cupidatat ex ex incididunt ea.</div>
                                            <Link href="/product"> Explore  </Link>        
                                        </div>
                                    </div>
                                </Col>
                               
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <div className="row">
                                <Col sm={4}>
                                    <div className="product-link">
                                        <div className="product-listing-image">
                                            <img src="/images/110.jpg" alt="product-ligo" />
                                        </div>
                                        <div className="listing-content">
                                            <div className="prod_heading"> Duffle Bag</div>    
                                            <div className="prod_para"> Adipisicing cillum cupidatat ex ex incididunt ea.</div>
                                            <Link href="/product"> Explore  </Link>        
                                        </div>
                                    </div>
                                </Col>
                            
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <div className="row">
                                <Col sm={4}>
                                    <div  className="product-link">
                                        <div className="product-listing-image">
                                            <img src="/images/110.jpg" alt="product-ligo" />
                                        </div>
                                        <div className="listing-content">
                                            <div className="prod_heading"> Duffle Bag</div>    
                                            <div className="prod_para"> Adipisicing cillum cupidatat ex ex incididunt ea.</div>
                                            <Link href="/product"> Explore  </Link>        
                                        </div>
                                    </div>
                                </Col>
                              
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fouth">
                        <div className="row">
                                <Col sm={4}>
                                    <div  className="product-link">
                                        <div className="product-listing-image">
                                            <img src="/images/110.jpg" alt="product-ligo" />
                                        </div>
                                        <div className="listing-content">
                                            <div className="prod_heading"> Duffle Bag</div>    
                                            <div className="prod_para"> Adipisicing cillum cupidatat ex ex incididunt ea.</div>
                                            <Link href="/product"> Explore  </Link>        
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div  className="product-link">
                                        <div className="product-listing-image">
                                            <img src="/images/110.jpg" alt="product-ligo" />
                                        </div>
                                        <div className="listing-content">
                                            <div className="prod_heading"> Duffle Bag</div>    
                                            <div className="prod_para"> Adipisicing cillum cupidatat ex ex incididunt ea.</div>
                                            <Link href="/product"> Explore  </Link>        
                                        </div>
                                    </div>
                                </Col>
                              
                              
                            </div>
                        </Tab.Pane>
                    </Tab.Content>

                </div>
                </Col>
            </Row>
        </Tab.Container>
    </>
  )
}
