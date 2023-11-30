import Navbar from "../components/Home/Navbar";
import SearchBar from "../components/Home/SearchBar";
import MegaNav from "../components/Home/MegaNav";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <MegaNav />
      <main className="main-container">{children}</main>
    </>
  );
};

export default Layout;
