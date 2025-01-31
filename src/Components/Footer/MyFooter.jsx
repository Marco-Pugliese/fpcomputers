import { Col, Row } from "react-bootstrap";
import MyLogo from "../Header/MyLogo";

const MyFooter = () => {
  return (
    <div id="myFooter">
      <Row>
        <Col>
          <Row className="d-flex flex-column">
            <Col>FP Computers</Col>
            <Col>Via Vittorio Emanuele, Procida, (Na), 80079 </Col>
            <Col>
              P.Iva Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nihil reprehenderit tempora explicabo soluta deserunt suscipit
              odio, in mollitia quidem at, illum minima libero neque? Quasi
              dolore tenetur quidem nemo et.
            </Col>
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
