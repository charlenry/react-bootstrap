import { NavLink } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../App.css'

const Menu = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav.Link as={NavLink} to="/" className='navbar-brand'>React Bootstrap Navbar</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/docs">Docs</Nav.Link>
            <Nav.Link as={NavLink} to="/tutorial">Tutorial</Nav.Link>
            <Nav.Link as={NavLink} to="/community">Community</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Menu;