import Wrapper from "../../assets/wrappers/Navbar";
import { IoClose, IoLogoGoogle } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  setMegaMenuActive,
  setSearchActive,
} from "../../features/navbar/navbarSlice";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../features/auth/authapi";
import { setlogout } from "../../features/auth/authSlice";
import { useGetAllCategoriesQuery } from "../../features/post/postapi";

const Navbar = () => {
  const { megaMenuActive } = useSelector((state) => state.navbar);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();
  const { data } = useGetAllCategoriesQuery();

  const handleActive = () => {
    dispatch(setMegaMenuActive());
  };

  const handleLogout = async () => {
    try {
      const res = await logoutUser().unwrap();
      if (res) {
        dispatch(setlogout());
      }
    } catch (error) {
      console.log(error);
    }
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
        {data &&
          data.map((d) => (
            <li className="navItem" key={d._id}>
              <Link to={`/${d.name}`}>{d.name}</Link>
            </li>
          ))}
        {/* 
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
        </li> */}
      </ul>
      <div className="btn-list">
        {/* <button className="icon-container auth-btn google-auth">
          <span className="">Sign In</span>
          <IoLogoGoogle className="icon" />
        </button> */}
        {!isAuthenticated && (
          <button
            className="icon-container"
            onClick={() => navigate("/signup")}
          >
            <span className="auth-btn">Sign In</span>
          </button>
        )}
        {isAuthenticated && (
          <>
            <button onClick={() => navigate("/profile")}>
              <span className="profile-section">
                <img src={user?.avatar?.url} alt="" />
                {user?.name}
              </span>
            </button>
            <button className="icon-container" onClick={handleLogout}>
              <span className="auth-btn user-info logout">
                <LuLogOut />
                <span> Logout</span>
              </span>
            </button>
          </>
        )}

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
