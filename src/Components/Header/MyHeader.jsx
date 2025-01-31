import {
  EnvelopeAtFill,
  PinMapFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MyLogo from "./MyLogo";

const MyHeader = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-white shadow-lg-white">
        <Container>
          <Navbar.Brand href="#home">
            <MyLogo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-4">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Servizi</Nav.Link>

              <NavDropdown title="Info & Contatti" id="basic-nav-dropdown">
                <NavDropdown.Item className="d-flex justify-content-center align-items-center">
                  <Whatsapp />
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="d-flex justify-content-center align-items-center">
                  <TelephoneFill />
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="d-flex justify-content-center align-items-center">
                  <EnvelopeAtFill />
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.1"
                  className="d-flex justify-content-center align-items-center"
                >
                  <PinMapFill />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyHeader;
