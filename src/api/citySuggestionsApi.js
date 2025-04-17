import apiConfig from './apiConfig.js';

const fetchCitySuggestions = async ({ queryCity }) => {
  try {
    const response = await apiConfig.get(
      `/suggestions?city=${queryCity}&limit=5`,
    );
    const data = response.data;

    console.log(data);

    const result = data.map((suggestedCity) => {
      return [suggestedCity.name, suggestedCity.state, suggestedCity.country]
        .filter(Boolean)
        .join(', ');
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default fetchCitySuggestions;
