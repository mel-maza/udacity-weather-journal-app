/* Global Variables */
OwmUrl = 'api.openweathermap.org/data/2.5/weather?id=';
OwmApiKey = '&appid=66c1a8d4f4f4474aeae2c15feab2bcaf';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Fetch Functions
const getWeatherforZip = async (url = '') => {
    const response = await fetch(url);
    try {
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log('An error occurred while calling the OpenWeatherMap-API: ', error);
    }
}