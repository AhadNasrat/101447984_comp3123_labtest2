import React from 'react';

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind } = data; // Destructure wind for additional details
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-display">
      <h2>Current Weather in {name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p><strong>Temperature:</strong> {main.temp.toFixed(1)}°C</p>
      <p><strong>Condition:</strong> {weather[0].description}</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
