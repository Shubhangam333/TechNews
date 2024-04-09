import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;

  .post-input-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.5rem;

    input,
    select {
      border: 1px solid var(--background-color);
      opacity: 0.7;
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }
  label {
    font-size: 1.5rem;
  }
  .text-editor {
    .ql-toolbar,
    .ql-editor {
      border: 1px solid var(--background-color);
      font-size: 1.4rem;
      opacity: 0.5;
    }
    .ql-toolbar,
    .ql-editor {
      opacity: 1;
    }
    .ql-editor {
      height: 265px;
    }
  }
  button {
    background-color: var(--link-color);
    align-self: flex-start;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    opacity: 0.9;
  }
  button:hover {
    opacity: 1;
  }
  .preview-container {
    padding: 0.4rem;

    .title {
      font-size: 1.5rem;
      border: 1px solid var(--background-color);
      margin-bottom: 0.1rem;
    }
    .preview-content {
      border: 1px solid var(--background-color);
      height: 265px;
      font-size: 1.4rem;
      overflow-y: auto;
    }
  }
`;

export default Wrapper;
