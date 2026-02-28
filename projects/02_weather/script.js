// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select HTML elements
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    // Your OpenWeather API key
    const API_KEY = "efe3c8fa5c3b93c76992925320e3a44f";

    // When button is clicked, run getWeather function
    getWeatherBtn.addEventListener('click', getWeather);

    // Allow pressing Enter key to also fetch weather
    cityInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            getWeather();
        }
    });

    // Main function to handle getting weather
    async function getWeather() {
        const city = cityInput.value.trim(); // Get input value and remove spaces

        if (!city) return; // Stop if input is empty

        try {
            const weatherData = await fetchWeatherData(city); // Fetch data from API
            displayWeatherData(weatherData); // Display the data
        } catch (error) {
            showError(error.message); // Show error if something fails
        }
    }

    // Function to fetch weather data from OpenWeather API
    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url); // Send request to server

        if (!response.ok) {
            throw new Error("City not found. Please try again.");
        }

        return await response.json(); // Convert response to JSON
    }

    // Function to display weather data on the page
    function displayWeatherData(data) {
        const { name, main, weather } = data;

        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main.temp}°C`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;

        weatherInfo.classList.remove('hidden'); // Show weather info
        errorMessage.classList.add('hidden');   // Hide error message
    }

    // Function to show error message
    function showError(message) {
        weatherInfo.classList.add('hidden');    // Hide weather info
        errorMessage.classList.remove('hidden'); // Show error message
        errorMessage.textContent = message;
    }

});