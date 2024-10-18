import React from 'react';

const DailySummary = ({ data }) => {
  return (
    <div>
      <h2>Daily Weather Summary</h2>
      <center>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Feels Like (°C)</th>
            <th>Humidity (%)</th> {/* New column for Humidity */}
            <th>Condition</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.city}</td>
              <td>{item.temp}°C</td>
              <td>{item.feels_like}°C</td>
              <td>{item.humidity}%</td> {/* Display Humidity here */}
              <td>{item.weather}</td>
              <td>{item.dt}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </center>
    </div>
  );
};

export default DailySummary;
