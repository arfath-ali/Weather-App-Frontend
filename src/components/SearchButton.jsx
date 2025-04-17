import searchIcon from '../assets/images/icons/search.svg';

const SearchButton = ({ onClick }) => {
  return (
    <button
      className="rounded-r-lg border border-l-0 border-gray-300 bg-[#f5f5f5] px-4 py-2.5 hover:cursor-pointer"
      onClick={onClick}>
      <img
        src={searchIcon}
        alt="Search icon"
        className="h-5 w-5 hover:cursor-pointer"
      />
    </button>
  );
};

export default SearchButton;
