import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 2rem 3rem;
  gap: 4rem;

  .main-articles {
    grid-column: 1 / 7;
  }
  .suggestion-container {
    grid-column: 7 / -1;
  }

  .post-article {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
    position: relative;
    margin-bottom: 2rem;
  }
  .post-article .article-image-container {
    flex: 1;
    width: 100%;
    height: 200px; /* Set the desired height for your container */
    overflow: hidden; /* Hide any overflowing content */
  }

  .post-article .article-image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .post-article .article-content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 2;
  }
  .post-article .article-content a.post-title-link {
    font-size: 2.2rem;
    color: black;
    font-weight: bolder;
  }
  .post-article .article-content a.post-title-link::after {
    position: absolute;
    inset: 0;
    content: "";
  }

  .post-article .article-content p {
    font-size: 1.1rem;
    font-weight: lighter;
    color: rgba(0, 0, 0, 0.6);
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
`;

export default Wrapper;
