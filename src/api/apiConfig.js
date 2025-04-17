import axios from 'axios';

const openWeatherMapApi = axios.create({
  baseURL: 'https://weather-app-backend-9zhm.onrender.com/api',
});

export default openWeatherMapApi;
