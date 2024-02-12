import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/MyNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CitySelector from "./Components/CitySelector";
import CityDetails from "./Components/CityDetails";
// import { Component } from "react";
import Footer from "./Components/Footer";
import { useState } from "react";

const App = () => {
  // state = {
  //   cityName: "Napoli",
  // };

  const [cityName, setCityName] = useState("Napoli");

  // (changeCityName = (newCity) => {
  //   this.setState({
  //     cityName: newCity,
  //   });
  // });

  const changeCityName = (newCity) => {
    setCityName(newCity);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <MyNavbar />
      </header>
      <main className="flex-grow-1 bg-warning">
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col xs={12} md={3}>
              <CitySelector
                cityName={cityName}
                changeCityName={changeCityName}
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={3}>
              <CityDetails cityName={cityName} />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
