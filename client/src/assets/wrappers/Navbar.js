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
  z-index: 500000;

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

  .main .menu-btn,
  .main .close-btn {
    font-size: 2rem;
  }

  .main .logo {
    font-weight: 700;
    font-size: 1.8rem;
    cursor: pointer;
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
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    margin-right: 1.2rem;
  }

  .btn-list .auth-container .icon-container .icon {
    width: 1.2rem;
    height: 1.2rem;
  }

  .btn-list .auth-btn {
    padding: 0.3rem;
    background-color: var(--aside-background-color);
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-size: 1rem;
    letter-spacing: 0.075rem;
    transition: all 0.3s linear;
  }

  .btn-list .auth-btn.user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 0.1rem;
    border-radius: 0rem;
  }

  .btn-list .auth-btn.google-auth {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-list .icon-container .auth-btn.logout {
    padding: 0.3rem;
    border: 0.2rem;
  }

  .btn-list .icon-container:hover {
    background: red;
  }
  .btn-list .icon-container .auth-btn:hover {
    background: var(--link-color);
  }

  .btn-list .search-icon {
    font-size: 1.2rem;
    background: none;
    color: var(--icon-color);
  }

  .profile-section {
    background-color: var(--aside-background-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 0.33rem 0.8rem;
    gap: 0.4rem;
    font-size: 1rem;
  }

  .profile-section:hover {
    background: var(--link-color);
  }
  .profile-section img {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (max-width: 980px) {
    padding: 0rem 1rem;
    .navLinks {
      display: none;
    }
  }

  @media (max-width: 720px) {
    height: 3.5rem;
    .btn-list .search-icon {
      display: none;
    }
    .main .logo {
      font-weight: 700;
      font-size: 1rem;
    }
    .btn-list .auth-container .icon-container img {
      width: 0.9rem;
      height: 0.9rem;
    }
    .btn-list .auth-container .icon-container {
      width: 2rem;
      height: 1.2rem;
    }
    .btn-list .auth-btn {
      font-size: 0.7rem;
      padding: 0.1rem;
    }
    .main .menu-btn,
    .main .close-btn {
      font-size: 1rem;
    }
  }
`;
export default Wrapper;
