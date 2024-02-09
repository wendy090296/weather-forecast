import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CitySelector = (props) => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Form.Select
          aria-label="cityname"
          className=""
          value={props.cityName}
          onChange={(e) => props.changeCityName(e.target.value)}
        >
          <option>Napoli</option>
          <option>Roma</option>
          <option>Perugia</option>
          <option>Firenze</option>
          <option>Palermo</option>
          <option>Lecce</option>
          <option>Milano</option>
          <option>Aosta</option>
          <option>Torino</option>
          <option>Genova</option>
          <option>Reggio Calabria</option>
        </Form.Select>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default CitySelector;
