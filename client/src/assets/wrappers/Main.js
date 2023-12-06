import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2rem 1rem;
  background: var(--background-color);
  color: white;
  margin-top: 5rem;

  .container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 20px;
    height: 100%;
    min-height: 1100px;
    max-height: 1100px;
    width: 100%;
    max-width: 1250px;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--divider-color);
  }
  .post {
    position: relative;
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
  .container .post-med .med-post-image-container img {
    width: 200px;
    height: 150px;
    object-fit: cover;
  }
  .container .post-img-container {
    width: 100%;
    height: 100%;
  }
  .large-post-title-link {
    font-size: 2rem;
    color: white;
    font-weight: bolder;
  }
  .large-post-title-link::after,
  .title-link::after {
    position: absolute;
    inset: 0;
    content: "";
    z-index: 1;
  }

  .post-small {
    width: 24%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .container .post h1 {
    color: white;
  }
  .container .post a.title-link {
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
  }
  .container .post h1:hover {
    cursor: pointer;
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
  .post-right-container {
    margin-right: 1rem;
    width: 26%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .post-right-container img {
    width: 90%;
    height: 100%;
    object-fit: cover;
  }

  .container .post:nth-child(3) {
    border-bottom: none;
  }
  .container .post:nth-child(9) {
    border-bottom: none;
  }
  .container .post:last-child {
    margin-top: 16rem;
  }
`;

export default Wrapper;
