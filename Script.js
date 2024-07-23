async function getWeather() {
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');
    const weatherAnimation = document.getElementById('weather-animation');
    const city = cityInput.value;

    if (!city) {
        weatherInfo.innerHTML = 'Please enter a city name.';
        return;
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a6075823fe1c387c8b5d5b49fa4bf2b&units=metric`);
        const data = response.data;
        
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        updateWeatherAnimation(data.weather[0].main);
    } catch (error) {
        weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
    }
}

function updateWeatherAnimation(weatherType) {
    const weatherAnimation = document.getElementById('weather-animation');
    weatherAnimation.innerHTML = '';

    switch (weatherType.toLowerCase()) {
        case 'thunderstorm':
            weatherAnimation.innerHTML = '<div class="lightning"></div>';
            addRaindrops();
            break;
        case 'drizzle':
        case 'rain':
            addRaindrops();
            break;
        case 'snow':
            addSnowflakes();
            break;
        case 'mist':
        case 'fog':
            weatherAnimation.style.background = 'rgba(200, 200, 200, 0.5)';
            break;
        case 'clear':
            weatherAnimation.innerHTML = '<div class="sun"></div>';
            break;
        case 'clouds':
            weatherAnimation.innerHTML = '<div class="cloud"></div>';
            break;
    }

    if (Math.random() > 0.5) {
        weatherAnimation.innerHTML += '<div class="wind"></div>';
    }
}

function addRaindrops() {
    const weatherAnimation = document.getElementById('weather-animation');
    for (let i = 0; i < 50; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        raindrop.style.animationDelay = `${Math.random()}s`;
        weatherAnimation.appendChild(raindrop);
    }
}

function addSnowflakes() {
    const weatherAnimation = document.getElementById('weather-animation');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${3 + Math.random() * 2}s`;
        snowflake.style.animationDelay = `${Math.random()}s`;
        weatherAnimation.appendChild(snowflake);
    }
}

function updateWeatherAnimation(weatherType) {
    const weatherAnimation = document.getElementById('weather-animation');
    weatherAnimation.innerHTML = '';

    switch (weatherType.toLowerCase()) {
        case 'thunderstorm':
            weatherAnimation.innerHTML = '<div class="lightning"></div><div class="rain"></div>';
            break;
        case 'drizzle':
        case 'rain':
            weatherAnimation.innerHTML = '<div class="rain"></div>';
            break;
        // ... (other cases remain the same) ...
    }

    if (Math.random() > 0.5) {
        weatherAnimation.innerHTML += '<div class="wind"></div>';
    }
}
