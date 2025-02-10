import { Col, Container, Row } from "react-bootstrap";

const ServicePage = () => {
  return (
    <div id="ServicePage">
      <Container>
        <Row>
          <Col className="col-6 spacing1 d-flex flex-column">
            <div className="fs-3">Vendita di Prodotti</div>
            <div className="small d-flex flex-column">
              <div>PC e Periferiche</div>
              <div>Stampanti e Consumabili</div>
              <div>Reti e Connettività</div>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className="col-6 spacing1 d-flex flex-column">
            <div className="fs-3">Assistenza Tecnica</div>
            <div className="small d-flex flex-column">
              <div>Riparazioni e Manutenzione</div>
              <div>Configurazione Software</div>
              <div>Upgrade Hardware</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-6 spacing1">Servizi per Aziende</Col>
          <Col className="col-6 spacing1 d-flex flex-column">
            <div className="fs-3"> Servizi per Aziende</div>
            <div className="d-flex flex-column">
              <div>Networking e Sicurezza</div>
              <div> Assistenza Fiscale e Gestionale</div>
              <div> Soluzioni Cloud e Backup</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className="col-6 spacing1 d-flex flex-column">
            <div>Supporto e Consulenza</div>
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
