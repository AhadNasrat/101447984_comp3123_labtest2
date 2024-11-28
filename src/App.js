import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/weatherdisplay.js';
import ForecastDisplay from './components/forecastdisplay.js';
import SearchBar from './components/searchbar.js';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = "a71ce7ee010374a270d473108f649b87"; // API key
    const CURRENT_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        axios.get(CURRENT_URL),
        axios.get(FORECAST_URL),
      ]);

      setWeather(currentResponse.data);
      setForecast(forecastResponse.data.list); // List contains 3-hour intervals
      setError(null);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
      setForecast(null);
    }
  };

  return (
    <div className="App">
      <h1
        style={{
          background: 'linear-gradient(to right, #4facfe, #00f2fe)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '36px',
          fontWeight: 'bold',
          padding: '10px 0',
        }}
      >
        Weather App
      </h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherDisplay data={weather} />}
      {forecast && <ForecastDisplay forecast={forecast} />}
    </div>
  );
};

export default App;
