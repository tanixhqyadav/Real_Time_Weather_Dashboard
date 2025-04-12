const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.OPENWEATHER_API_KEY;

router.get('/', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      }
    );

    const data = response.data;
    res.json({
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    });
  } catch (err) {
    res.status(404).json({ error: 'City not found' });
  }
});

module.exports = router;
