import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/home'>
            Brand pic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#features'>Home</Nav.Link>
              <Nav.Link href='#features'>Services</Nav.Link>
              <Nav.Link href='#pricing'>Galary</Nav.Link>
              <Nav.Link href='#pricing'>Blog</Nav.Link>
              {/* <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/login' eventKey={2}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
