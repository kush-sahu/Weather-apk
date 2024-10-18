## Applicant Introduction
Hi, I'm Kush Sahu, a Frontend Developer and enthusiast skilled in javascript and React js, I'm always eager to learn and innovate! 
# Weather Monitoring System

This project is a real-time weather monitoring system built using React.js and the OpenWeatherMap API. It displays current weather data, including temperature, humidity, and other relevant weather conditions, for multiple cities. The data is updated at regular intervals, and users can search for additional cities.

## Features

- **Real-Time Weather Data**: Displays the current weather data including temperature, feels like temperature, humidity, and weather conditions for a list of cities.
- **Dynamic City Search**: Users can add new cities and view weather updates for them.
- **Alerts**: Weather alerts for cities that exceed a defined temperature threshold (e.g., 35°C).
- **Data Visualization**: Displays weather information in a tabular format.
- **Scheduled Updates**: Weather data is updated every 5 minutes automatically.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the OpenWeatherMap API.
- **Moment.js**: For formatting timestamps and date values.
- **OpenWeatherMap API**: To fetch the real-time weather data.
- **HTML/CSS**: Basic structure and styling.

## Components

1. **WeatherDataFetcher**: 
   - The main component responsible for fetching weather data and rendering the summary and alerts.
   - Handles API calls and processes the data.

2. **DailySummary**: 
   - A child component that displays the daily weather summary in a tabular format.
   - Columns include City, Temperature, Feels Like, Humidity, Condition, and Updated At.

3. **WeatherAlert**: 
   - Displays alerts when the temperature in a city exceeds the defined threshold.

4. **WeatherCharts**: 
   - A placeholder component for future weather data visualizations.

## API Key

To use this project, you need an API key from OpenWeatherMap. Insert your key in the `WeatherDataFetcher.jsx` file:

```js
const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API Key
