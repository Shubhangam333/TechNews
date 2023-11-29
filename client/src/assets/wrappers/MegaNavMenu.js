import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 37%;
  top: 0;
  border-left: 2px solid var(--divider-color);
  padding-left: 2rem;
  right: 5rem;
  z-index: 30000;
  height: 100%;

  h3 {
    margin-bottom: 2rem;
  }

  .menu-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .menu-container ul li:first-child {
    color: var(--link-color);
    margin-bottom: 1rem;
  }

  .menu-container ul li {
    margin-bottom: 0.7rem;
  }
  .menu-container ul li a {
    font-size: 1.2rem;
    color: white;
    font-weight: 400;
  }

  .menu-container ul li a:hover {
    text-decoration: underline;
    color: var(--link-color);
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    border-bottom: 2px solid var(--divider-color);
    border-left: none;
    padding-left: 0rem;
    top: 3rem;
    bottom: 4rem;

    .menu-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Wrapper;
