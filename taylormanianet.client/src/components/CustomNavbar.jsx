import { Link } from "react-router-dom";
import LoveIcon from '../assets/noun-love-5417528.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import OffCanvasLogin from "./Login/OffCanvasLogin";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" style={{ height: '50px' }}>
      
      {/* Brand Section */}
      <Container>
        <div className="icon-container">
          <img src={LoveIcon} alt="Love Icon" width="50" height="50" />
        </div>
        <Link to="/" className="navbar-brand">
          <h1>TaylorMania</h1>
        </Link>

         {/* Navbar Toggler and Collapse Section */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/create">
              New Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/ratings">
              Ratings
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <OffCanvasLogin></OffCanvasLogin>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
