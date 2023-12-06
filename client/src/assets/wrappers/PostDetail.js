import styled from "styled-components";

const Wrapper = styled.section`
  margin: 8rem 30rem 2rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  h1 {
    font-size: 2.5rem;
  }
  .publisher-details {
    padding-bottom: 2rem;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .publisher-details img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .publisher-info {
    p {
      font-size: 0.8rem;
      word-spacing: 0.1rem;
    }
  }
  .post-img-container {
    width: 100%;
    height: 100%;
  }

  .post-img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Wrapper;
