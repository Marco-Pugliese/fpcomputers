import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  EnvelopeAtFill,
  PinMapFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";

const SupportPage = () => {
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

  const [mailHovered, setMailHovered] = useState(false);
  const [phone1Hovered, setphone1Hovered] = useState(false);
  const [mapHovered, setssmapHovered] = useState(false);
  const [whatsappHovered, setwhatsappHovered] = useState(false);
  return (
    <Container
      fluid
      id="supportPage"
      className="py-3 d-flex flex-column justify-content-center"
    >
      <Row className="py-5 pointerHover">
        <Col
          className="bg-primary col-2 text-end  py-3 text-light"
          onMouseEnter={() => {
            setMailHovered(true);
          }}
          onMouseLeave={() => {
            setMailHovered(false);
          }}
        >
          <a
            href={mailtoFP}
            target="_blank"
            rel="noopener noreferrer"
            className={
              mailHovered === true
                ? "nav-link wobble-hor-bottom"
                : "nav-link wobbleback"
            }
          >
            <EnvelopeAtFill />
          </a>
        </Col>
        <Col
          className={
            mailHovered === true
              ? "col-8 text-center rounded-end-4 text-light bg-primary transition scale11 py-3 text-light "
              : "col-1 text-center rounded-end-5 transparent bg-primary transition py-3"
          }
          onMouseEnter={() => {
            setMailHovered(true);
          }}
          onMouseLeave={() => {
            setMailHovered(false);
          }}
        >
          fpcompsas@gmail.com
        </Col>
      </Row>
      <Row className="py-5 pointerHover">
        <Col
          className={
            phone1Hovered === true
              ? "bg-purple2 col-2 text-end py-3 text-light"
              : "bg-purple2 col-2 text-end py-3 iconDark"
          }
          onMouseEnter={() => {
            setphone1Hovered(true);
          }}
          onMouseLeave={() => {
            setphone1Hovered(false);
          }}
        >
          <a
            href={Callme}
            target="_blank"
            rel="noopener noreferrer"
            className={
              phone1Hovered === true
                ? "nav-link wobble-hor-bottom"
                : "nav-link wobbleback"
            }
          >
            <TelephoneFill />
          </a>
        </Col>
        <Col
          onMouseEnter={() => {
            setphone1Hovered(true);
          }}
          onMouseLeave={() => {
            setphone1Hovered(false);
          }}
          className={
            phone1Hovered === true
              ? "col-8 text-center rounded-end-4 text-light bg-purple2 transition scale11  py-3 "
              : "col-1 text-center rounded-end-5 transparent bg-purple2 transition py-3 "
          }
        >
          081 896 9373
        </Col>
      </Row>{" "}
      <Row className="py-5 pointerHover">
        <Col
          className={
            whatsappHovered === true
              ? "bg-info col-2 text-end  py-3 iconDark"
              : "bg-info col-2 text-end  py-3 text-light"
          }
          onMouseEnter={() => {
            setwhatsappHovered(true);
          }}
          onMouseLeave={() => {
            setwhatsappHovered(false);
          }}
        >
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={
              whatsappHovered === true
                ? "nav-link wobble-hor-bottom"
                : "nav-link wobbleback"
            }
          >
            <Whatsapp />
          </a>{" "}
        </Col>
        <Col
          onMouseEnter={() => {
            setwhatsappHovered(true);
          }}
          onMouseLeave={() => {
            setwhatsappHovered(false);
          }}
          className={
            whatsappHovered === true
              ? "col-8 text-center rounded-end-4 text-light bg-info transition scale11 py-3 text-dark "
              : "col-1 text-center rounded-end-5 transparent bg-info transition py-3"
          }
        >
          +39 3392024442
        </Col>
      </Row>{" "}
      <Row className="py-5 pointerHover">
        <Col
          className="bg-dark col-2 text-end py-3 text-light "
          onMouseEnter={() => {
            setssmapHovered(true);
          }}
          onMouseLeave={() => {
            setssmapHovered(false);
          }}
        >
          <a
            href="https://www.google.com/maps/dir//Via+Vittorio+Emanuele,+304,+80079+Procida+NA/@40.757176,13.936367,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x133b135b5260a181:0x325bb46e1f89b84c!2m2!1d14.018748!2d40.7572153?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={
              mapHovered === true
                ? "nav-link wobble-hor-bottom"
                : "nav-link wobbleback"
            }
          >
            <PinMapFill />
          </a>
        </Col>
        <Col
          onMouseEnter={() => {
            setssmapHovered(true);
          }}
          onMouseLeave={() => {
            setssmapHovered(false);
          }}
          className={
            mapHovered === true
              ? "col-8 text-center rounded-end-4 text-light bg-dark transition scale11 py-3 text-light "
              : "col-1 text-center rounded-end-5 transparent bg-dark transition py-3"
          }
        >
          Via V.Emanuele, 303 - Procida (Na) - 80079
        </Col>
      </Row>
    </Container>
  );
};
export default SupportPage;
