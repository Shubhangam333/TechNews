import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 37%;
  top: 0;
  border-left: 2px solid var(--divider-color);
  height: 60vh;
  padding-left: 2rem;
  right: 5rem;
  z-index: 30000;

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
`;

export default Wrapper;
