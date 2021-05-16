import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(null);
  let [message, setMessage] = useState(null);
  function displayTemperature(response) {
    setMessage(
      <ul className="cityInformation">
        <li>Temperature: {Math.round(response.data.main.temp)}°C </li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
        <li>
          {" "}
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="weatherIcon"
          />
        </li>
      </ul>
    );
  }
  function cityInput(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "df15f890ef8916ee6cc25712989eef1a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }
  return (
      <div className="Search"> 
        <form onSubmit={handleSubmit}>
          <div class="row">              
           <div class="col-10">
          <input
            type="search" 
            placeholder="Enter a city.." 
            className="form-control" 
            onChange={cityInput}
            autocomplete="off"
            /></div>
          <div class="col-2">
          <input 
            type="submit" 
            value="Search" 
            className="btn btn-light" 
            id="search-button" /> 
          </div>
        </div>
       </form>
      <p>{message}</p>
      </div>
  );
}
