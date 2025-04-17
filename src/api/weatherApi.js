import apiConfig from './apiConfig.js';

const fetchWeatherData = async ({ queryCity }) => {
  try {
    const response = await apiConfig.get(`/weather?city=${queryCity}`);
    const weatherData = response.data;

    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log(error);
  }
};

export default fetchWeatherData;
