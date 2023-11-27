import styled from "styled-components";

const Wrapper = styled.aside`
  backdrop-filter: blur(30px);
  position: fixed;
  height: 100vh;
  width: 100vw;

  top: 5.5rem;
  z-index: 500000;
  background: rgba(0, 0, 0, 0.9);
`;

export default Wrapper;
