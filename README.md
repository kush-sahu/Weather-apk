
## Applicant Introduction
Hi, I'm Kush Sahu, a Frontend Developer and enthusiast skilled in JavaScript and React.js. I'm always eager to learn and innovate!

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

## How to Run the Project

### 1. Clone the repository
```
git clone https://github.com/your-username/weather-monitoring-system.git
cd weather-monitoring-system
```

### 2. Install dependencies
Make sure you have Node.js installed, then run:
```
npm install
```



### 3. Start the Development Server
```
npm run dev
```

This will start the project in development mode and open it in your browser at `http://localhost:3000`.

## Future Improvements

- Add more detailed weather metrics (e.g., wind speed, precipitation).
- Implement data visualizations using charting libraries like Chart.js or D3.js.
- Add error handling for invalid city names.
