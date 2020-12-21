import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [details, setDet] = useState([]);
  const [longitude, setLong] = useState("");
  const [latitude, setLat] = useState("");
  const [feels_like, setFeel] = useState("");
  const [humidity, setHum] = useState("");
  const [pressure, setPre] = useState("");
  const [temperature, setTemp] = useState("");
  const [temp_max, setTempMax] = useState("");
  const [temp_min, setTempMin] = useState("");

  const [place, setPlace] = useState("");
  const [gotdata, setGotData] = useState(false);

  const searchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=7e7353c9d8ee0cef59b7081e4c1cfd77`
      )
      .then((res) => {
        console.log(res.data);
        setDet(res.data);
        setLong(res.data.coord.lon);
        setLat(res.data.coord.lat);
        setFeel(res.data.main.feels_like);
        setHum(res.data.main.humidity);
        setPre(res.data.main.pressure);
        setTemp(Math.round(res.data.main.temp - 273));
        setTempMax(Math.round(res.data.main.temp_max - 273));
        setTempMin(Math.round(res.data.main.temp_min - 273));
        setGotData(true);
      });
  };

  const typedData = (event) => {
    setPlace(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    searchWeather();
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <br />
      <br />
      <form onSubmit={formSubmit}>
        <input
          value={place}
          type="text"
          placeholder="Enter city name"
          onChange={typedData}
        />

        <input type="submit" value="Search" />
      </form>
      <br />
      <br />
      {gotdata ? (
        <container>
          <h5>
            City Name:{" "}
            <text
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontSize: 20,
              }}
            >
              {details.name}
            </text>
            <br />
            <br />
            Latitude:{" "}
            <text style={{ fontStyle: "italic", fontSize: 20 }}>
              {longitude}
            </text>
            <br />
            <br />
            Longitude:{" "}
            <text style={{ fontStyle: "italic", fontSize: 20 }}>
              {latitude}
            </text>
            <br />
            <br />
            Feels Like:{" "}
            <text
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontSize: 20,
              }}
            >
              {feels_like} &deg;C
            </text>
            <br />
            <br />
            Pressure:{" "}
            <text
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontSize: 20,
              }}
            >
              {pressure}
            </text>
            <br />
            <br />
            Humidity:{" "}
            <text
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontSize: 20,
              }}
            >
              {humidity}
            </text>
            <br />
            <br />
            Temperature:{" "}
            <text
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontSize: 20,
              }}
            >
              {temperature} &deg;C
            </text>
            <br />
            <br />
            Max Temperature:{" "}
            <text
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontSize: 20,
              }}
            >
              {temp_max} &deg;C
            </text>
            <br />
            <br />
            Min Temperature:{" "}
            <text
              style={{
                fontStyle: "italic",
                fontFamily: "cursive",
                fontSize: 20,
              }}
            >
              {temp_min} &deg;C
            </text>
            <br />
          </h5>
        </container>
      ) : null}
    </div>
  );
}

export default App;
