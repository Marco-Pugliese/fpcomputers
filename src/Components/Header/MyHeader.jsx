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
import { Link } from "react-router-dom";
import { useState } from "react";
// import MyLogo from "./MyLogo";

const MyHeader = () => {
  const phoneNumber = "3392024442";
  const Callme = "tel:3392024442";
  const message = "Ciao! Mi piacerebbe sapere di più sui servizi che offri";
  const whatsapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const email = "fpcompsas@gmail.com";
  const subjectMail = "Richiesta Informazioni";
  const bodyMail = "Ciao! Mi piacerebbe sapere di più sui servizi che offri";
  const mailtoFP = `mailto:${email}?subject=${encodeURIComponent(
    subjectMail
  )}&body=${encodeURIComponent(bodyMail)}`;

  //
  const [homeHover, setHomeHover] = useState(false);
  const removesetHomeTrue = () => {
    setTimeout(() => {
      setHomeHover(false);
    }, 10000);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-white shadow-lg-gray" id="myHeader">
        <Container>
          <Navbar.Brand>
            <Link
              to={"/"}
              onMouseEnter={() => setHomeHover(true)}
              onMouseLeave={removesetHomeTrue}
            >
              <MyLogo />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-4">
              {homeHover === true ? (
                <Link
                  to={"/Support"}
                  className="nav-link fw-bold hov d-flex align-items-center justify-content-center h100"
                >
                  Richiedi Assistenza
                </Link>
              ) : (
                <Link
                  to={"/Support"}
                  className="nav-link fw-bold hov d-flex align-items-center justify-content-center makeItDisappear"
                >
                  Richiedi Assistenza
                </Link>
              )}
              <Link
                to={"/"}
                className="nav-link hov d-flex align-items-center justify-content-center"
              >
                Home
              </Link>{" "}
              <NavDropdown
                title="Info & Contatti"
                id="basic-nav-dropdown"
                className="text-center nav-link"
              >
                <span className="d-flex justify-content-center align-items-center hov2">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    <Whatsapp />
                  </a>{" "}
                </span>
                <NavDropdown.Divider />
                <span className="d-flex justify-content-center align-items-center hov2">
                  <a
                    href={Callme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    <TelephoneFill />
                  </a>
                </span>
                <NavDropdown.Divider />
                <span className="d-flex justify-content-center align-items-center hov2">
                  <a
                    href={mailtoFP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    <EnvelopeAtFill />
                  </a>
                </span>
                <NavDropdown.Divider />
                <span className="d-flex justify-content-center align-items-center hov2">
                  <a
                    href="https://www.google.com/maps/dir//Via+Vittorio+Emanuele,+304,+80079+Procida+NA/@40.757176,13.936367,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x133b135b5260a181:0x325bb46e1f89b84c!2m2!1d14.018748!2d40.7572153?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    <PinMapFill />
                  </a>
                </span>
              </NavDropdown>
              <Link
                to={"/Services"}
                className="nav-link justify-content-center d-flex align-items-center hov"
              >
                Servizi
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyHeader;
