import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import TopStories from "./TopStories";
import MegaNav from "./MegaNav";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <MegaNav />
      <TopStories />
    </>
  );
};

export default Home;
