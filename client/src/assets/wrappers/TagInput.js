import styled from "styled-components";

const Wrapper = styled.div`
  .taginput-container {
    border: 1px solid var(--background-color);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    input {
      border: none;
      max-width: 100%;
      flex: 1;
    }
    .tag {
      margin: 0rem 0.2rem;
      padding: 0rem 0.4rem;
      border-radius: 10px;
      color: white;
      background-color: var(--label-color);
    }
  }
`;

export default Wrapper;
