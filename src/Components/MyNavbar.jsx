import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-secondary"
        bs-data-theme="dark"
      >
        <Container fluid>
          <img
            src="sole.jpeg"
            alt="sun-img"
            width={50}
            height={50}
            className="mx-3 rounded-circle"
          />
          <Navbar.Brand className="text-white fw-bolder" href="#home">
            EPI.Weather Forecast
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link text-white" to="/today-weather">
                Today
              </Nav.Link>
              <Nav.Link className="nav-link text-white" to="/weekly-weather">
                Weekly
              </Nav.Link>
              <Nav.Link className="nav-link text-white" to="/monthly-weather">
                Monthly
              </Nav.Link>
              <Nav.Link className="nav-link text-white" to="/air-pollution">
                Air Pollution
              </Nav.Link>
              <Nav.Link className="nav-link text-white" to="/more-info">
                More Info.
              </Nav.Link>
              <Nav.Link className="nav-link text-white" to="/more-info">
                Support
              </Nav.Link>
              <Nav.Link className="nav-link text-white" to="/more-info">
                Partners
              </Nav.Link>
              <Nav.Link className="nav-link text-white" to="/more-info">
                Guide
              </Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
