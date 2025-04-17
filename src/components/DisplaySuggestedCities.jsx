const DisplaySuggestedCities = ({
  loadingValue,
  suggestedCities,
  onSelectCity,
}) => {
  return (
    <>
      {loadingValue ? (
        <p className="px-4 py-2 text-gray-500">Searching...</p>
      ) : suggestedCities.length === 0 ? (
        <p className="px-4 py-2 text-gray-500">No cities available</p>
      ) : (
        suggestedCities.map((suggestedCity, index) => (
          <div key={index} className="hover:cursor-pointer">
            <p
              onClick={() => onSelectCity(suggestedCity)}
              className="mx-4 py-2">
              {suggestedCity}
            </p>
            {index !== suggestedCities.length - 1 && (
              <div className="h-px bg-gray-300"></div>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default DisplaySuggestedCities;
