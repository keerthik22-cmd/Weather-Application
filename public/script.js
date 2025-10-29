const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const result = document.getElementById('result');
const errorDiv = document.getElementById('error');
const loadingDiv = document.getElementById('loading');

getWeatherBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();

  if (!city) {
    errorDiv.textContent = 'Please enter a city name.';
    errorDiv.classList.remove('hidden');
    result.classList.add('hidden');
    return;
  }

  errorDiv.classList.add('hidden');
  result.classList.add('hidden');
  loadingDiv.classList.remove('hidden');

  try {
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();
    loadingDiv.classList.add('hidden');

    if (data.error) {
      errorDiv.textContent = data.error;
      errorDiv.classList.remove('hidden');
    } else {
      result.classList.remove('hidden');
      document.getElementById('cityName').textContent = data.city;
      document.getElementById('temperature').textContent = data.temperature;
      document.getElementById('humidity').textContent = data.humidity;
      document.getElementById('wind').textContent = data.wind_speed;
      document.getElementById('desc').textContent = data.description;
    }
  } catch (err) {
    loadingDiv.classList.add('hidden');
    errorDiv.textContent = 'Failed to fetch weather data.';
    errorDiv.classList.remove('hidden');
  }
});
