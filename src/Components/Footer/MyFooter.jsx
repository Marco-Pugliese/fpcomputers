import { Col, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <div id="myFooter">
      <Row>
        <Col>
          <Row className="d-flex flex-column">
            <Col>FP Computers</Col>
            <Col>Via Vittorio Emanuele, Procida, (Na), 80079 </Col>
            <Col>P.Iva 000001111112222222333333</Col>
          </Row>
        </Col>
        <Col>
          <Row></Row>
        </Col>
      </Row>
    </div>
  );
};
export default MyFooter;
