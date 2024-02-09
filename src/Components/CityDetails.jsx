import { Component } from "react";
import Card from "react-bootstrap/Card";

class CityDetails extends Component {
  state = {
    weatherObj: [],
  };

  componentDidMount() {
    this.fetchWeatherForecast();
  }

  fetchWeatherForecast = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.props.cityName +
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
        this.setState({
          weatherObj: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.cityName !== this.props.cityName) {
      this.fetchWeatherForecast();
    }
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src="meteoimg.png" alt="meteo img" />
        <Card.Body>
          <Card.Title>
            <h1>
              {this.state.weatherObj.name} -{" "}
              {this.state.weatherObj.sys && this.state.weatherObj.sys.country}
            </h1>
          </Card.Title>
          <Card.Text>
            <div>
              Temperatura:{" "}
              {this.state.weatherObj.main && this.state.weatherObj.main.temp}
            </div>
            <div>
              Temperatura Massima:{" "}
              {this.state.weatherObj.main &&
                this.state.weatherObj.main.temp_max}{" "}
            </div>
            <div>
              Temperatura Minima:{" "}
              {this.state.weatherObj.main &&
                this.state.weatherObj.main.temp_min}{" "}
            </div>
            <div>
              Umidità:{" "}
              {this.state.weatherObj.main &&
                this.state.weatherObj.main.humidity}{" "}
              - Pressione:{" "}
              {this.state.weatherObj.main &&
                this.state.weatherObj.main.pressure}{" "}
            </div>
          </Card.Text>
          <h2 className="fw-bold">
            {" "}
            {this.state.weatherObj.weather &&
              this.state.weatherObj.weather[0].main}
          </h2>
        </Card.Body>
      </Card>
    );
  }
}

export default CityDetails;
