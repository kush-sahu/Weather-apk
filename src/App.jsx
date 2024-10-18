import React, { useState, useEffect } from 'react';
import WeatherDataFetcher from './components/WeatherDataFetcher';
import './App.css';

function App() {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now()); // Update the state every second
        }, 50000);
        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className="App">
            <h1>Real-Time Weather Monitoring  </h1>
            <p>"it wil automatically update in every 5 min for wether updates"</p>
            <WeatherDataFetcher key={time} /> {/* Unique key based on time to trigger re-render */}
        </div>
    );
}

export default App;
