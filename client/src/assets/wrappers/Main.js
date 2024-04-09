import styled from "styled-components";

// const Wrapper = styled.section`
//   padding: 2rem 1rem;
//   background: var(--background-color);
//   color: white;
//   margin-top: 5rem;

//   .container {
//     /* display: flex;
//     flex-direction: column;
//     align-items: stretch;
//     flex-wrap: wrap; */
//     gap: 20px;
//     display: grid;
//     height: 100%;
//     max-height: 1200px;
//     width: 100%;
//     max-width: 1250px;
//     padding-bottom: 3rem;
//     border-bottom: 1px solid var(--divider-color);
//   }
//   .post {
//     position: relative;
//   }
//   .container .post-first-col {
//     width: 50%;
//     max-width: 650px;
//   }
//   .container .post-lg {
//     display: flex;
//     flex-direction: column;
//     flex-wrap: wrap;
//     gap: 1rem;
//     padding-bottom: 1rem;
//     border-bottom: 1px solid var(--divider-color);
//   }
//   .container .post-lg h1 {
//     font-weight: 700;
//     font-size: 2rem;
//   }
//   p {
//     color: var(--text-color);
//     font-size: 1rem;
//   }

//   .container .post-med {
//     display: flex;
//     gap: 1rem;
//     justify-content: center;
//     padding-bottom: 1.5rem;
//     border-bottom: 1px solid var(--divider-color);
//   }

//   .container .post-med .med-post-image-container {
//     flex: 1;
//     width: 100%;
//     height: 150px;
//   }
//   .container .post-med .med-post-image-container img {
//     width: 200px;
//     height: 150px;
//     object-fit: cover;
//   }
//   .container .post-img-container {
//     width: 100%;
//     height: 500px;
//   }
//   .large-post-title-link {
//     font-size: 2rem;
//     color: white;
//     font-weight: bolder;
//   }
//   .large-post-title-link::after,
//   .title-link::after {
//     position: absolute;
//     inset: 0;
//     content: "";
//     z-index: 1;
//   }

//   .post-small {
//     width: 24%;
//     max-width: 300px;
//   }
//   img {
//     width: 100%;
//     height: 100%;
//   }
//   .post-img-container img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
//   .container .post h1 {
//     color: white;
//   }
//   .container .post a.title-link {
//     font-size: 1.5rem;
//     color: white;
//     font-weight: bold;
//   }
//   .container .post h1:hover {
//     cursor: pointer;
//   }
//   .med-post-content-detail {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//   }
//   .post-tags {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//   }
//   .post-tags a {
//     color: var(--link-color);
//     text-transform: uppercase;
//     font-weight: bold;
//     letter-spacing: 1px;
//     font-size: 0.8rem;
//     z-index: 2;
//   }
//   .post-tags .publisher {
//     font-size: 0.7rem;
//     color: white;
//   }
//   .post-small {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     padding-bottom: 1rem;
//     border-bottom: 1px solid var(--divider-color);
//   }
//   .post-right-container {
//     margin-right: 1rem;
//     width: 26%;
//     max-width: 300px;
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   }
//   .post-right-container p {
//     max-width: 300px;
//   }
//   .post-right-container img {
//     width: 90%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .container .post:nth-child(3) {
//     border-bottom: none;
//     margin-bottom: 3rem;
//   }
//   .container .post:nth-child(9) {
//     border-bottom: none;
//   }
// `;
const Wrapper = styled.section`
  padding: 2rem 1rem;
  background: var(--background-color);
  color: white;
  margin-top: 5rem;

  .container {
    /* display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap; */
    gap: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    height: 100%;
    max-height: max-content;
    width: 100%;
    max-width: 1250px;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--divider-color);
  }
`;

export default Wrapper;
