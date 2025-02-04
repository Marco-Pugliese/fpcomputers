import { Col, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div id="landingPage">
      <Row className="text-center fs-4 mt-3 fade-in">
        <Col className="col-12">Benvenuto su</Col>
        <Col className="fs-1 py-2 fade-in">FP Computers</Col>
      </Row>
      <Row className="text-center fs-4 mt-3 mt-4">
        <Col className="col-12 mt-4 p-4">
          <div className="px-4">
            Sei stato contattato e stai ricevendo assistenza?
          </div>
          <div className="bg-purple btn m-2 p-2 fs-5 slide-in-top">
            <a href="https://www.supremocontrol.com/download.aspx?file=Supremo.exe&id_sw=7&ws=supremocontrol.com">
              Clicca qui!
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default LandingPage;
