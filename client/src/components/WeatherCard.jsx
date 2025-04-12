import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center w-80">
      <h2 className="text-2xl font-bold mb-2">{data.city}</h2>
      <img src={data.icon} alt="icon" className="mx-auto" />
      <p className="text-xl">{data.condition}</p>
      <p className="text-3xl font-semibold">{data.temperature}°C</p>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.wind} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
