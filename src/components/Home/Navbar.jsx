import Wrapper from "../../assets/wrappers/Navbar";

const Navbar = ({ setSearchActive, searchActive }) => {
  return (
    <Wrapper>
      <div className="main">
        <button>
          <i className="fa-solid fa-bars"></i>
        </button>
        <h1 className="logo">TechNews</h1>
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
        <div className="auth-container">
          <button className="icon-container">
            <img src="google.svg" alt="" />
          </button>
          <span className="auth-btn">Sign In</span>
        </div>

        <button
          className="search-icon"
          onClick={() => setSearchActive(!searchActive)}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
