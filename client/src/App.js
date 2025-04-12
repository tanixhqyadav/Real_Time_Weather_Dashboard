import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      setError('City not found or API error');
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">🌤️ Weather Dashboard</h1>
      <SearchBar onSearch={getWeather} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
