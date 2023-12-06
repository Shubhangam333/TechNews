import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    color: var(--label-color);
    text-transform: uppercase;
    font-weight: bold;
    font-weight: 0.8rem;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default Wrapper;
