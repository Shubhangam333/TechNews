import styled from "styled-components";

const Wrapper = styled.aside`
  backdrop-filter: blur(30px);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 5.5rem;
  z-index: 500000;
  background: rgba(0, 0, 0, 0.9);
  padding: 0.5rem 2rem;
  color: white;
  overflow-y: auto;
  .listItem {
    position: relative;
    width: 100%;
  }

  .listItem button {
    font-weight: 500;
    font-size: 1.3rem;
    margin-top: 1.2rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
  }
  .listItem button .icon {
    color: var(--icon-color);
  }

  .listItem button.down-arrow-icon {
    display: none;
  }

  @media (max-width: 720px) {
    top: 3.5rem;
    .listItem button.arrow-icon {
      display: none;
    }
    .listItem button.down-arrow-icon {
      display: flex;
    }
    .listItem button {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

export default Wrapper;
