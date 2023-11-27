import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--nav-background-color);
  color: var(--title-color);
  padding: 0rem 3rem;
  height: 5.5rem;

  .main,
  .navLinks,
  .btn-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .main button {
    background: none;
    color: var(--icon-color);
    margin-top: 0.3rem;
  }

  .main button i {
    font-size: 1.4rem;
  }

  .main .logo {
    font-weight: 700;
    font-size: 1.8rem;
  }
  .navLinks {
    list-style: none;
    height: 100%;
  }

  .navLinks .navItem a {
    font-size: 1.1rem;
    color: var(--title-color);
    font-weight: 500;
    position: relative;
    display: block;
    line-height: 5.5rem;
  }

  .navLinks .navItem a:hover::before {
    background: var(--link-color);
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    right: 0;
  }

  .btn-list .auth-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.8rem;
  }

  .btn-list .auth-container .icon-container {
    background-color: var(--title-color);
    width: 2rem;
    height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }

  .btn-list .auth-container .icon-container img {
    width: 1.2rem;
    height: 1.2rem;
  }

  .btn-list .auth-btn {
    padding: 0.3rem;
    background-color: var(--aside-background-color);
    cursor: pointer;
    color: white;
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    font-size: 1rem;
    letter-spacing: 0.075rem;
    transition: all 0.3s linear;
  }

  .btn-list .auth-btn:hover {
    background: var(--aside-divider-color);
  }

  .btn-list .search-icon {
    font-size: 1.2rem;
    background: none;
    color: var(--icon-color);
  }
`;
export default Wrapper;
