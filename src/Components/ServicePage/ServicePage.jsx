import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const [support, isSupportClicked] = useState(false);
  const [azienda, isAziendaClicked] = useState(false);
  const [assistenza, isAssistenzaClicked] = useState(false);
  const [vendita, isVenditaClicked] = useState(false);
  return (
    <div id="ServicePage">
      <Container>
        <Row
          className="d-flex align-items-center border shad-wht bg-sm-1 position-relative"
          onClick={() => {
            isVenditaClicked(!vendita);
          }}
        >
          {vendita && (
            <Col className="position-absolute w-100 h-100 bg-black">
              <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                <Link to={"/Support"} className="nav-link">
                  <div className="bg-success py-2 px-3 rounded-4 scale-on-hover">
                    Chiedi Informazioni
                  </div>
                </Link>
              </div>
            </Col>
          )}
          <Col className="col-12 col-lg-6 darker-sm text-center text-lg-end h-30vh spacing1 py-4 d-flex flex-column justify-content-center">
            <div className="fs-3">Vendita di Prodotti</div>
            <div className="small d-flex flex-column">
              <div>PC e Periferiche</div>
              <div>Stampanti e Consumabili</div>
              <div>Reti e Connettività</div>
            </div>
          </Col>
          <Col className="d-none d-lg-block h-30vh bg1 "></Col>
        </Row>
        <Row
          className="d-flex align-items-center border shad-wht bg-sm-2 position-relative"
          onClick={() => {
            isAssistenzaClicked(!assistenza);
          }}
        >
          {assistenza && (
            <Col className="position-absolute w-100 h-100 bg-black">
              <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                <Link to={"/Support"} className="nav-link">
                  <div className="bg-primary py-2 px-3 rounded-4 scale-on-hover">
                    Chiedi Assistenza
                  </div>
                </Link>
              </div>
            </Col>
          )}
          <Col className="d-none d-lg-block h-30vh bg2"></Col>
          <Col className="col-12 col-lg-6  darker-sm text-center text-lg-start h-30vh spacing1 py-4 d-flex flex-column justify-content-center">
            <div className="fs-3">Assistenza Tecnica</div>{" "}
            <div className="small d-flex flex-column">
              <div>Riparazioni e Manutenzione</div>
              <div>Configurazione Software</div>
              <div>Upgrade Hardware</div>
            </div>
          </Col>
        </Row>
        <Row
          className="d-flex align-items-center border shad-wht bg-sm-3 position-relative"
          onClick={() => {
            isAziendaClicked(!azienda);
          }}
        >
          {azienda && (
            <Col className="position-absolute w-100 h-100 bg-black">
              <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                <Link to={"/Support"} className="nav-link">
                  <div className="bg-danger py-2 px-3 rounded-4 scale-on-hover">
                    Chiedi Consulenza
                  </div>
                </Link>
              </div>
            </Col>
          )}
          <Col className="col-12 col-lg-6 darker-sm text-center text-lg-end h-30vh spacing1 py-4 d-flex flex-column justify-content-center">
            <div className="fs-3"> Servizi per Aziende</div>
            <div className="d-flex flex-column">
              <div>Networking e Sicurezza</div>
              <div> Assistenza Fiscale e Gestionale</div>
              <div> Soluzioni Cloud e Backup</div>
            </div>
          </Col>
          <Col className="d-none d-lg-block h-30vh bg3"></Col>
        </Row>
        <Row
          className="d-flex align-items-center border bg-sm-4 shad-wht position-relative"
          onClick={() => {
            isSupportClicked(!support);
          }}
        >
          {support && (
            <Col className="position-absolute w-100 h-100 bg-black">
              <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                <Link to={"/Support"} className="nav-link">
                  <div className="bg-warning py-2 px-3 rounded-4 scale-on-hover">
                    Chiedi Supporto
                  </div>
                </Link>
              </div>
            </Col>
          )}
          <Col className="d-none d-lg-block h-30vh bg4"></Col>
          <Col className="col-12 col-lg-6 darker-sm text-center text-lg-start h-30vh spacing1 py-4 d-flex flex-column justify-content-center">
            <div className="fs-3">Supporto e Consulenza</div>
            <div className="d-flex flex-column">
              <div>Assistenza Remota</div>
              <div>Consulenza per Acquisti</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ServicePage;
