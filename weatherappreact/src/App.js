import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [details, setDet] = useState([]);
  const [place, setPlace] = useState("");

  const searchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=7e7353c9d8ee0cef59b7081e4c1cfd77`
      )
      .then((res) => {
        console.log(res.data);
        setDet(res.data);
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
      <h5>
        City Name:{" "}
        <text
          style={{ fontStyle: "italic", fontFamily: "cursive", fontSize: 20 }}
        >
          {details.name}
        </text>
      </h5>
    </div>
  );
}

export default App;
