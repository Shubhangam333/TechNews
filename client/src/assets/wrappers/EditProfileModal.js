import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 3.5rem;
  color: var(--link-color);
  display: flex;
  justify-content: center;
  position: relative;
  top: 40%;
  left: 50%;
  max-height: 80%;
  overflow-y: auto;
  transform: translate(-50%, -40%);

  .auth-container {
    margin-top: 1rem;
    overflow-y: auto;
    width: 30rem;
    background-color: white;
    border: 1px solid var(--link-color);
    box-shadow: 0px 0px 10px var(--link-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.2rem;
  }

  .auth-container .input-container input,
  textarea {
    border: 2px solid var(--link-underline-color);
    padding: 0.3rem;
    width: 28rem;
    color: var(--background-color);
  }

  textarea {
    resize: none;
  }

  .auth-container form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .radio-input-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .radio-input-container div {
    display: flex;
    align-items: center;
  }
  .submit-btn-container {
    align-self: center;
    display: flex;
    justify-content: center;
  }

  .submit-btn-container button {
    padding: 0.5rem 1rem;
    /* background-color: var(--background-color); */
    color: white;
    font-size: 1rem;
    margin-bottom: 0.7rem;
    border-radius: 0.2rem;
    background-color: var(--link-color);
    opacity: 0.8;
  }
  .submit-btn-container button:hover {
    background-color: var(--link-color);
    opacity: 1;
  }
`;

export default Wrapper;
