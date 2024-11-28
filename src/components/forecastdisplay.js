import React from 'react';

const ForecastDisplay = ({ forecast }) => {
  if (!forecast) return null;

  // Filter to show daily forecasts at 12:00 PM
  const dailyForecasts = forecast.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast-display">
      <h3>Next 5 Days Forecast</h3>
      <div className="forecast-container">
        {dailyForecasts.map((item, index) => (
          <div key={index} className="forecast-item">
            <p><strong>{new Date(item.dt_txt).toLocaleDateString()}</strong></p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
            <p>{item.main.temp.toFixed(1)}°C</p>
            <p>{item.weather[0].description}</p>
            <p>Humidity: {item.main.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;
