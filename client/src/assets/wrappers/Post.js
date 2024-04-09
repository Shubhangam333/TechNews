import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .post-img-container {
    width: 100%;
    height: auto;
  }
  .post-img-container img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
  }
  .post-title-link {
    color: white;
  }
  .post-desc {
    color: gray;
    background-color: none;
  }
`;

export default Wrapper;
