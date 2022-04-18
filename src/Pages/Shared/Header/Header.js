import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='secondary'
        variant='dark'
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Brand pic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/home'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='home#services'>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to='/galary'>
                Galary
              </Nav.Link>
              <Nav.Link as={Link} to='/blogs'>
                Blog
              </Nav.Link>
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
              {user ? (
                <Button
                  onClick={logout}
                  className='text-light bg-secondary border-0'
                >
                  Log Out
                </Button>
              ) : (
                <Nav.Link as={Link} to='/login' eventKey={2}>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
