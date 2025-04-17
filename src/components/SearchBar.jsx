const SearchBar = ({ cityName, onChange, showSuggestions }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a city"
        value={cityName}
        onChange={onChange}
        className={`${showSuggestions ? 'rounded-tl-lg' : 'rounded-l-lg'} border-x border-t border-b border-gray-300 bg-transparent px-4 py-2 text-base outline-none placeholder:text-gray-400`}
      />
    </>
  );
};

export default SearchBar;
