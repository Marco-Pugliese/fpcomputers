import { Carousel, Col, Row } from "react-bootstrap";

const LandingPage = () => {
  const phoneNumber = "3392024442";
  const message = "Ciao! Mi piacerebbe sapere di più sui servizi che offri";
  const whatsapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div id="landingPageContainer" className="m-0 p-0">
      <div
        id="landingPage"
        className="d-flex align-items-center flex-column justify-content-center "
      >
        <Row className="text-center fs-4 text-shadow-wht">
          <Col className="col-12 ">
            <Carousel interval={6000} pause={false}>
              <Carousel.Item interval={3000}>
                <div className="p-4 fs-2">Benvenuto su</div>
                <div className="display-3 p-4 words-cng mx-2 p-2 my-4 fw-bold notxt-shdw">
                  FP Computers
                </div>
              </Carousel.Item>
              <Carousel.Item interval={12000}>
                <div className="p-4">
                  Sei stato contattato e stai ricevendo assistenza?
                </div>
                <div className="bg-purple rounded-4 btn mx-2 p-2 my-4 fs-4 shadow-btn notxt-shdw">
                  <a
                    className="d-block py-1 px-2"
                    href="https://www.supremocontrol.com/download.aspx?file=Supremo.exe&id_sw=7&ws=supremocontrol.com"
                  >
                    Clicca qui!
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <div className="p-4 fs-2">Benvenuto su</div>
                <div className="display-3 p-4 words-cng mx-2 p-2 my-4 fw-bold notxt-shdw">
                  FP Computers
                </div>
              </Carousel.Item>
              <Carousel.Item interval={6000}>
                <div className="p-4">
                  Vuoi contattarci per richiedere assistenza?
                </div>
                <div className="bg-purple btn rounded-4 mx-2 my-4 p-2 fs-4 shadow-btn notxt-shdw">
                  <a
                    className="d-block py-1 px-2 text-black"
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contattaci!
                  </a>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default LandingPage;
