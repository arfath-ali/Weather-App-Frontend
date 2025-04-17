import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce.js';
import fetchCitySuggestions from '../api/citySuggestionsApi.js';
import fetchWeatherData from '../api/weatherApi.js';
import SearchBar from './SearchBar.jsx';
import SearchButton from './SearchButton.jsx';
import DisplaySuggestedCities from './DisplaySuggestedCities.jsx';
import DisplayWeatherReport from './DisplayWeatherReport.jsx';

const WeatherDashboard = () => {
  const [searchCity, setSearchCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherReportData, setWeatherReportData] = useState(null);
  const [weatherReportFetched, setWeatherReportFetched] = useState(false);

  let debouncedInput = useDebounce(searchCity, 500, isLoading);

  const handleSearchInput = (e) => {
    setSearchCity(e.target.value);

    setShowSuggestions(true);
  };

  useEffect(() => {
    const getSuggestions = async () => {
      setIsLoading(true);
      if (debouncedInput !== '') {
        try {
          const fetchedSuggestions = await fetchCitySuggestions({
            queryCity: debouncedInput,
          });

          setSuggestions(fetchedSuggestions);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getSuggestions();
  }, [debouncedInput]);

  useEffect(() => {
    const displaySuggestions = () => {
      if (searchCity === '') {
        setShowSuggestions(false);
      }
    };

    displaySuggestions();
  }, [searchCity]);

  const handleCitySelect = (citySelected) => {
    setShowSuggestions(false);

    setSearchCity(citySelected);
  };

  const fetchWeatherForCity = async () => {
    if (!showSuggestions) {
      const weatherInfo = await fetchWeatherData({ queryCity: searchCity });
      setWeatherReportData(weatherInfo);
      setWeatherReportFetched(true);
    }
  };

  return (
    <>
      <section>
        <div className="flex items-start justify-center">
          <div className="relative flex max-w-[15.5rem] flex-col">
            <SearchBar
              cityName={searchCity}
              onChange={handleSearchInput}
              showSuggestions={showSuggestions}
            />

            {showSuggestions && searchCity !== '' && (
              <div className="absolute top-full z-10 w-[15.5rem] rounded-b-lg bg-[#f5f5f5] text-base">
                <DisplaySuggestedCities
                  loadingValue={isLoading}
                  suggestedCities={suggestions}
                  onSelectCity={handleCitySelect}
                />
              </div>
            )}
          </div>

          <SearchButton onClick={fetchWeatherForCity} />
        </div>
      </section>

      <section className="mt-20">
        {weatherReportFetched && (
          <DisplayWeatherReport WeatherReport={weatherReportData} />
        )}
      </section>
    </>
  );
};

export default WeatherDashboard;
