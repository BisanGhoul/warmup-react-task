import searchIcon from "../assets/imgs/search-icon-35.svg";
import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="search-container container">
        <button className="search-button" aria-label="Search" data-search-btn>
          <img src={searchIcon} alt="" />
        </button>
        <label htmlFor="search" className="visually-hidden">
          Search tasks
        </label>
        <input
          type="text"
          id="search"
          className="search-input"
          placeholder="Find Members"
          data-search-input
        />
      </div>
    </>
  );
}

export default SearchBar;
