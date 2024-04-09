import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  a.link-number {
    color: gray;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }
  a.link-number.active {
    background-color: #00608c;
    color: white;
  }
  .icon {
    width: 2rem;
    height: 2rem;
    color: #00608c;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a.disabled {
    cursor: default;
    pointer-events: none;
  }
  .icon.disabled {
    opacity: 0.5;
  }
`;

export default Wrapper;
