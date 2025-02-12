import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  EnvelopeAtFill,
  PinMapFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";

const SupportPage = () => {
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
      <Row className="py-4">
        <Col
          className="bg-info col-2 text-end  py-2 iconDark"
          onMouseEnter={() => {
            setMailHovered(true);
          }}
          onMouseLeave={() => {
            setMailHovered(false);
          }}
        >
          <EnvelopeAtFill />
        </Col>
        <Col
          className={
            mailHovered === true
              ? "col-8 text-center rounded-end-2 text-light bg-info transition scale11 py-2 text-dark "
              : "col-1 text-center rounded-end-4 transparent bg-info transition py-2"
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
      <Row className="py-4">
        <Col
          className="bg-info col-2 text-end  py-2 iconDark"
          onMouseEnter={() => {
            setphone1Hovered(true);
          }}
          onMouseLeave={() => {
            setphone1Hovered(false);
          }}
        >
          <TelephoneFill />
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
              ? "col-8 text-center rounded-end-2 text-light bg-info transition scale11 py-2 text-dark "
              : "col-1 text-center rounded-end-4 transparent bg-info transition py-2"
          }
        >
          081 896 9373
        </Col>
      </Row>{" "}
      <Row className="py-4">
        <Col
          className="bg-info col-2 text-end  py-2 iconDark"
          onMouseEnter={() => {
            setwhatsappHovered(true);
          }}
          onMouseLeave={() => {
            setwhatsappHovered(false);
          }}
        >
          <Whatsapp />
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
              ? "col-8 text-center rounded-end-2 text-light bg-info transition scale11 py-2 text-dark "
              : "col-1 text-center rounded-end-4 transparent bg-info transition py-2"
          }
        >
          +39 3392024442
        </Col>
      </Row>{" "}
      <Row className="py-4">
        <Col
          className="bg-info col-2 text-end  py-2 iconDark"
          onMouseEnter={() => {
            setssmapHovered(true);
          }}
          onMouseLeave={() => {
            setssmapHovered(false);
          }}
        >
          <PinMapFill />
        </Col>
        <Col
          className={
            mapHovered === true
              ? "col-8 text-center rounded-end-2 text-light bg-info transition scale11 py-2 text-dark "
              : "col-1 text-center rounded-end-4 transparent bg-info transition py-2"
          }
        >
          Via V.Emanuele, 303 - Procida (Na) - 80079
        </Col>
      </Row>
    </Container>
  );
};
export default SupportPage;
