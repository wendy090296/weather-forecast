import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container fluid className="bg-secondary">
        <Row className="justify-content-center">
          <Col></Col>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items center my-3"
          >
            <img src="insta2.webp" width="30" height="30" alt="instagram img" />
            <img
              src="facebook.png"
              width="30"
              height="30"
              className="mx-3"
              alt="facebook img"
            />
            <img src="twitter2.webp" width="30" height="30" alt="twitter img" />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-0"></Row>

        <Row className="mt-0">
          <Col></Col>
          <Col s={12} md={3} lg={4} className="my-3"></Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-center">
          <Col></Col>
          <Col xs={12} md={3} lg={4} className="d-flex">
            <Col>
              <div className="square border-end me-1" id="terms-of-use">
                Terms of Use
              </div>
            </Col>
            <Col>
              <div className="square border-end ms-2" id="privacy">
                Privacy Policy
              </div>
            </Col>
            <Col>
              <div className="square border-end ms-2" id="cookies">
                Cookie Policy
              </div>
            </Col>
            <Col></Col>
          </Col>
          <Col></Col>
          <p className="text-center mt-3" id="paragraph">
            &copy;2024 EpiWeather, Inc. "Epiweather" and sun design are
            registered trademarks of Epiweather, Inc. All Rights Reserved.
          </p>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
