import { useSelector } from "react-redux";
import Wrapper from "../../assets/wrappers/Search";
import { useCallback, useEffect, useState } from "react";
import { useSearchPostByKeywordMutation } from "../../features/post/postapi";
import SearchResultPost from "./Posts/SearchResultPost";

const SearchBar = () => {
  const { megaMenuActive, searchActive } = useSelector((state) => state.navbar);
  const [getPostByKeyword, { data }] = useSearchPostByKeywordMutation();
  const [query, setSearchQuery] = useState("");

  console.log("q", query);

  const getPosts = useCallback(async () => {
    if (query.length > 0) {
      try {
        const res = await getPostByKeyword(query).unwrap();
        console.log("r", res);
      } catch (error) {
        console.log("er", error);
      }
    }
  }, [query, getPostByKeyword]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);
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
            value={query}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </Wrapper>
      )}
      {searchActive && (
        <section className="search-res-container">
          {data &&
            data.posts.map((post) => (
              <SearchResultPost post={post} key={post._id} />
            ))}
        </section>
      )}
    </>
  );
};

export default SearchBar;
