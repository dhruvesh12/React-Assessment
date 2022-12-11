import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style/style.css'

function NavBar() {
    return ( 
        <>
            <Navbar sticky="top" style={{backgroundColor:'#770c09'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_29GQbjLVbviF4vuy6U42fQ_d0z10D41F0w&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span style={{color:'white'}}>Medical Darpan</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className='centerName'>

            
            <Nav.Link className='texts' href="#features">Home</Nav.Link>
            <Nav.Link className='texts' href="#pricing">Product</Nav.Link>
            <Nav.Link className='texts' href="#features">Distributors</Nav.Link>
            <Nav.Link className='texts' href="#pricing">Manufacturers</Nav.Link>
            <Nav.Link className='texts' href="#features">About Us</Nav.Link>
            <Nav.Link className='texts' href="#pricing">Blog</Nav.Link>
            </div>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><span style={{color:'white', marginRight:'20px'}}>Login</span></Nav.Link>
            <Nav.Link eventKey={2} href="">
            <img
              alt=""
              src="https://img.icons8.com/color/512/user-male-circle--v1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
     );
}

export default NavBar;