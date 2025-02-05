import { Carousel, Col, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div
      id="landingPage"
      className="d-flex align-items-center flex-column justify-content-center"
    >
      <Row className="text-center justify-content-center fs-4 mt-4 ">
        <Col className="mt-5 col-10 bg-dark text-light text-shadow rounded-5 shadow-white-lg px-2 py-5">
          <Carousel fade>
            <Carousel.Item>
              <div className="p-4 fs-4">Benvenuto su</div>
              <div className="fs-1 slide-in-top p-4 words-cng">
                FP Computers
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="p-4">
                Sei stato contattato e stai ricevendo assistenza?
              </div>
              <div className="bg-purple btn mx-2 p-2 my-4 fs-5 slide-in-top shadow-btn notxt-shdw">
                <a
                  className="d-block py-1 px-2"
                  href="https://www.supremocontrol.com/download.aspx?file=Supremo.exe&id_sw=7&ws=supremocontrol.com"
                >
                  Clicca qui!
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="p-4">
                Vuoi contattarci per richiedere assistenza?
              </div>
              <div className="bg-purple btn mx-2 my-4 p-2 fs-5 slide-in-top shadow-btn notxt-shdw">
                <a className="d-block py-1 px-2">Contattaci!</a>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};
export default LandingPage;
