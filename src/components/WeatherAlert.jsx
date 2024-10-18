import React from 'react';

const WeatherAlert = ({ alerts }) => {
  if (alerts.length === 0) return <p>No alerts at the moment.</p>;

  return (
    <div>
      <h3>Weather Alerts</h3>
      {alerts.map((alert, index) => (
        <p key={index}>
          {alert.city}: Temperature {alert.temp}°C exceeds the threshold!
        </p>
      ))}
    </div>
  );
};

export default WeatherAlert;
