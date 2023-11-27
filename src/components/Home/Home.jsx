import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import TopStories from "./TopStories";
import MegaNav from "./MegaNav";

const Home = () => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <>
      <Navbar setSearchActive={setSearchActive} searchActive={searchActive} />
      <SearchBar
        searchActive={searchActive}
        setSearchActive={setSearchActive}
      />
      <MegaNav />
      <TopStories />
    </>
  );
};

export default Home;
