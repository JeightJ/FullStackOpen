import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get( // Apikutsu säätiedoille maan ja apiavaimen perusteella muodostettuun urliin
        `http://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving weather data:', error);
      });
  }, [capital]);

  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon"/>
      <p><strong>Temperature:</strong> {weatherData.main.temp} °C</p>
      <p><strong>Wind:</strong> {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
