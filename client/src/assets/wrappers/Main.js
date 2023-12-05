import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2rem 1rem;
  background: var(--background-color);
  color: white;

  margin-top: 5rem;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    height: 100%;
    max-height: 1100px;
    width: 100%;
    max-width: 1250px;
  }
  .container .post-first-col {
    width: 50%;
  }
  .container .post-lg {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--divider-color);
  }
  .container .post-lg h1 {
    font-weight: 700;
    font-size: 2rem;
  }
  p {
    color: var(--text-color);
    font-size: 1rem;
  }

  .container .post-med {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--divider-color);
  }

  .container .post-med .med-post-image-container {
    width: 50%;
    height: 50%;
  }

  .container .post-img-container {
    width: 100%;
    height: 100%;
  }

  .post-small {
    width: 24%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .container .post h1 {
    width: 100%;
  }
  .med-post-content-detail {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .post-tags {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .post-tags a {
    color: var(--link-color);
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
  .post-tags .publisher {
    font-size: 0.7rem;
    color: white;
  }
  .post-small {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--divider-color);
  }
`;

export default Wrapper;
