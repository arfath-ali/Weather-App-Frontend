import convertUnixToDate from '../utilities/convertUnixToData';
import convertUnixToTime from '../utilities/convertUnixToTime ';

const DisplayWeatherReport = ({ WeatherReport }) => {
  const icon = WeatherReport?.weather[0]?.icon;
  return (
    <div className='flex flex-col items-center'>
      <div className="ml-4 text-center">
        <h1 className="text-4xl">
          {WeatherReport?.name}, {WeatherReport?.sys?.country}
        </h1>

        <h2 className="mt-2 text-xl">{convertUnixToDate(WeatherReport?.dt)}</h2>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather-Icon"
          className="h-48 w-48"
        />
        <p className="text-3xl">{WeatherReport?.weather[0]?.description}</p>
      </div>

      <div className='text-lg mt-4 flex flex-col gap-4 mx-4'>
        <div className="flex items-center gap-3">
          <img
            src="src/assets/images/icons/temparature.png"
            className="h-6 w-6"
            alt="Temparature-Icon"
          />
          <p>Temperature: {WeatherReport?.main?.temp}°C</p>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="src/assets/images/icons/humidity.png"
            className="h-6 w-6"
            alt="Humidity-Icon"
          />
          <p>Humidity: {WeatherReport?.main?.humidity}°C</p>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="src/assets/images/icons/sunrise.png"
            className="h-6 w-6"
            alt="Sunrise-Icon"
          />
          <p>Sunrise: {convertUnixToTime(WeatherReport?.sys?.sunrise)}</p>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="src/assets/images/icons/sunset.png"
            className="h-6 w-6"
            alt="Sunset-Icon"
          />
          <p>Sunset: {convertUnixToTime(WeatherReport?.sys?.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeatherReport;
