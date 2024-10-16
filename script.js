// Suggested code may be subject to a license. Learn more: ~LicenseLog:2983468328.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:244001968.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1908717469.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2335138280.
require('dotenv').config();
const apiKey = 'process.env.API_KEY'; 
const cityInput
 = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cityNameElement = document.getElementById('city');
const weatherIconElement = document.getElementById('weatherIcon');
const temperatureElement = document.querySelector('.temperature');
const conditionElement = document.querySelector('.condition');

// Function to fetch and display weather data
async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        const data = await response.json();

        // Update HTML elements with weather data
        cityNameElement.textContent = data.name; 
        weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temperatureElement.textContent = `${data.main.temp}°C`;
        conditionElement.textContent = data.weather[0].description; 

    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle errors (e.g., display an error message to the user)
    }
}

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    getWeatherData(city);
});

// Initial weather data for a default city (e.g., London)
getWeatherData('London');
