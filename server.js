import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const API_KEY = process.env.WEATHER_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'Missing WEATHER_API_KEY in .env file' });
  }

  if (!city) {
    return res.status(400).json({ error: 'Please provide a city name' });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`9aa628e761faf2eec05eb2ec1c5bf1f6`}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Weather API error: ${response.status}`);

    const data = await response.json();

    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
