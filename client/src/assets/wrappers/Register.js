import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 5.5rem;
  z-index: 0;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  color: var(--link-color);
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(50% 0%, 100% 0, 100% 39%, 0 79%, 0 0);
    background: var(--background-color);
  }

  .auth-container {
    margin-top: 1rem;
    width: 23rem;
    height: 90%;
    background-color: white;
    border: 1px solid var(--link-color);
    box-shadow: 0px 0px 10px var(--link-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.2rem;
  }

  .auth-container h1 {
    margin-bottom: 2rem;
  }
  .auth-container .input-container input {
    border: 2px solid var(--link-underline-color);
    padding: 0.3rem;
    width: 20rem;
    color: var(--background-color);
  }

  .auth-container form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
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
