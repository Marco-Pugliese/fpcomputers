import { Col, Row } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <div id="myFooter" className="p-0 m-0 ">
      <div id="myFooterInner" className="minhfoot py-3">
        <Row>
          <Col className="col-12">
            <Row className="d-flex text-center flex-column">
              <Col>FP Computers </Col>
              <Col>Via Vittorio Emanuele, 304, Procida (Na) - 80079 </Col>
              <Col>P.Iva 07527441211</Col>
            </Row>
          </Col>
          <Col className="col-12 mt-4">
            <Row className="d-flex text-center flex-column">
              <Col>
                Made with <HeartFill className="text-danger heartbeat mx-1" />
                by M.Pugliese
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default MyFooter;
