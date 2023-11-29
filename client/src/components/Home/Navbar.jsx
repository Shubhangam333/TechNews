import Wrapper from "../../assets/wrappers/Navbar";
import { IoClose, IoLogoGoogle } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  setMegaMenuActive,
  setSearchActive,
} from "../../features/navbar/navbarSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { megaMenuActive } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  const handleActive = () => {
    dispatch(setMegaMenuActive());
  };

  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="main">
        <button onClick={() => handleActive()}>
          {!megaMenuActive && <RxHamburgerMenu className="menu-btn" />}
          {megaMenuActive && <IoClose className="close-btn" />}
        </button>
        <h1 className="logo" onClick={() => navigate("/")}>
          TechNews
        </h1>
      </div>
      <ul className="navLinks">
        <li className="navItem">
          <a href="#">Computing</a>
        </li>
        <li className="navItem">
          <a href="#">Mobile</a>
        </li>
        <li className="navItem">
          <a href="#">Gaming</a>
        </li>
        <li className="navItem">
          <a href="#"> Entertainment</a>
        </li>
        <li className="navItem">
          <a href="#"> Audio / Video</a>
        </li>
      </ul>
      <div className="btn-list">
        {/* <button className="icon-container auth-btn google-auth">
          <span className="">Sign In</span>
          <IoLogoGoogle className="icon" />
        </button> */}

        <button className="icon-container" onClick={() => navigate("/signup")}>
          <span className="auth-btn">Sign In</span>
        </button>

        <button
          className="search-icon"
          onClick={() => dispatch(setSearchActive())}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
