import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--nav-background-color);
  border-top: 0.1rem solid var(--aside-divider-color);
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0rem;
  position: relative;

  .search-bar {
    background: var(--search-bar-color);
    width: 95%;
    height: 80%;
    border-radius: 0.4rem;
    border: 0.055rem solid white;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 1rem;
    font-weight: bold;
    padding-right: 2rem;
  }
  .search-bar::placeholder {
    color: white;
  }

  .search-icon {
    color: white;
    background: none;
    z-index: 20;
  }

  .search-icon {
    font-size: 1.5rem;
    position: absolute;
    right: 2.5rem;
  }
`;
export default Wrapper;
