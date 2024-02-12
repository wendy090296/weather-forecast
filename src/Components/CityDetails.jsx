// import { Component } from "react";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

const CityDetails = (props) => {
  // state = {
  //   weatherObj: [],
  // };

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetchWeatherForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchWeatherForecast = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        props.cityName +
        ",IT&appid=0c1aa2a41f772d632fe090a439af5e0b&units=metric"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella richiesta dei dati");
        }
      })
      .then((data) => {
        console.log(data);
        // this.setState({
        //   weatherObj: data,
        // });
        setWeather(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetchWeatherForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cityName]);

  return (
    <Card>
      <Card.Img variant="top" src="meteoimg.png" alt="meteo img" />
      <Card.Body>
        <Card.Title>
          <h1>
            {weather.name} - {weather.sys && weather.sys.country}
          </h1>
        </Card.Title>
        <Card.Text>
          <div>Temperatura: {weather.main && weather.main.temp}</div>
          <div>
            Temperatura Massima: {weather.main && weather.main.temp_max}{" "}
          </div>
          <div>
            Temperatura Minima: {weather.main && weather.main.temp_min}{" "}
          </div>
          <div>
            Umidità: {weather.main && weather.main.humidity} - Pressione:{" "}
            {weather.main && weather.main.pressure}{" "}
          </div>
        </Card.Text>
        <h2 className="fw-bold">
          {" "}
          {weather.weather && weather.weather[0].main}
        </h2>
      </Card.Body>
    </Card>
  );
};

export default CityDetails;
