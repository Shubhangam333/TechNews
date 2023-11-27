import Wrapper from "../../assets/wrappers/Search";

const SearchBar = ({ searchActive, setSearchActive }) => {
  return (
    <>
      {searchActive && (
        <Wrapper>
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            className="search-bar"
            placeholder="Search"
          />
          <button className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </Wrapper>
      )}
    </>
  );
};

export default SearchBar;
