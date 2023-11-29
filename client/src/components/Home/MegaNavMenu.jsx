import Wrapper from "../../assets/wrappers/MegaNavMenu";

const MegaNavMenu = ({ MenuId }) => {
  return (
    <>
      {MenuId && (
        <Wrapper>
          <h3>See All Computing</h3>
          <div className="menu-container">
            <ul>
              <li>
                <p>TRENDING TOPICS</p>
              </li>
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Software</a>
              </li>
              <li>
                <a href="#">PC Gaming</a>
              </li>
              <li>
                <a href="#">Graphic Cards</a>
              </li>
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
            </ul>

            <ul>
              <li>
                <p>TRENDING GUIDES</p>
              </li>
              <li>
                <a href="#">ChatGPT</a>
              </li>
              <li>
                <a href="#">What is a ChromeBook?</a>
              </li>
              <li>
                <a href="#">How to Choose a Laptop?</a>
              </li>
              <li>
                <a href="#">Windows 11 vs Windows 10</a>
              </li>
              <li>
                <a href="#">Download Youtube Videos</a>
              </li>
            </ul>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default MegaNavMenu;
