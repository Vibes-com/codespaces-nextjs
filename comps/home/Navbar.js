import {Container, Nav , Navbar ,NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

function BasicExample() {
      
      return (
        <>
         
          <Navbar bg="white" expand="lg">
            <Container>
              <Link href = "/" ><img src="/ligo_logo.jpg" className='logo'/></Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link  class="nav-button" href="/">Home</Link>
              
                  <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item > <Link class="nav-button" href="/about"> Who We Are</Link></NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link href='/journey' class="nav-button"> Journey Of a Bag </Link>
                    </NavDropdown.Item>
                
                  </NavDropdown>
                  <Link  class="nav-button" href="/media">Media</Link>
                  <Link  class="nav-button" href="/category">Category</Link>
                
                  <Link  class="nav-button" href="/contact"> Contact</Link> 
                
                
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      );
    }
    
    export default BasicExample;
