import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import DailySummary from './DailySummary';
import WeatherAlert from './WeatherAlert';
import WeatherCharts from './WeatherCharts';

const apiKey = 'e456c0dfb419ab53c25068819c143fc5'; // Your OpenWeatherMap API Key
const defaultCities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad', 'Gondia'];

const WeatherDataFetcher = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [cities, setCities] = useState(defaultCities);
    const val = useRef();

    const AddCity = () => {
        const value = val.current.value.trim();
        // Check if the input is not empty and the city is not already in the list
        if (value && !cities.includes(value)) {
            setCities(prevCities => [...prevCities, value]); // Update cities state
            val.current.value = ''; // Clear the input field after adding
        } else {
            console.error('City is either empty or already added.'); // Error message for duplicate or empty input
        }
    };

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const responses = await Promise.all(
                    cities.map(city =>
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                    )
                );

                const data = responses.map(res => ({
                    city: res.data.name,
                    temp: res.data.main.temp.toFixed(2),
                    feels_like: res.data.main.feels_like.toFixed(2),
                    weather: res.data.weather[0].main,
                    dt: moment.unix(res.data.dt).format('DD-MM-YYYY HH:mm:ss'),
                }));

                setWeatherData(data);
                handleAlerts(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                if (error.response && error.response.status === 401) {
                    console.error('Unauthorized access - please check your API key.');
                }
            }
        };

        fetchWeatherData(); // Fetch weather data initially when the component mounts
        const intervalId = setInterval(fetchWeatherData, 300000); // Re-fetch every 5 minutes
        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [cities]); // Fetch weather data whenever cities change

    const handleAlerts = (data) => {
        const threshold = 35; // User-defined threshold
        const newAlerts = data.filter(item => item.temp > threshold);
        setAlerts(newAlerts);
    };

    return (
        <div>
            <h2>Weather Data</h2>
            <div>
                <input type="text" ref={val} placeholder="Enter city name" />
                <button onClick={AddCity}>Add City</button>
            </div>
            <DailySummary data={weatherData} />
            <WeatherAlert alerts={alerts} />
            <WeatherCharts data={weatherData} />
        </div>
    );
};

export default WeatherDataFetcher;
