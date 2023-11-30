import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .main {
    grid-column: span 3;
    padding: 0.5rem;
  }
  .aside-article {
    grid-column: span 1;
    padding: 0.5rem;
    text-align: center;
  }

  .user-info h1 {
    font-size: 3rem;
  }
  .user-info p {
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  .header-container {
    border-bottom: 1px solid var(--aside-background-color);
    padding-right: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 2rem;
  }
  .about-info {
    line-height: 1.7;
  }
  .about-info p {
    margin-top: 1.8rem;
    font-size: 1.1rem;
  }

  .aside-article .profile-image-container {
    width: 300px;
    height: 300px;
  }
  .aside-article .profile-image-container img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .contact-info {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
  .contact-info button {
    font-size: 2rem;
  }

  .followers-info {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .followers-info p {
    margin-top: 2rem;
    padding: 0rem 1rem;
    background: var(--background-color);
    color: white;
  }
  .aside-article button {
    margin-top: 1rem;
    color: white;
    padding: 0.4rem 1rem;
    background: var(--link-color);
    border-radius: 0.4rem;
    opacity: 0.9;
  }
  .aside-article button:hover,
  .aside-article button:active {
    opacity: 1;
  }

  .create-post {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .create-post:hover::before {
    content: "create post";
    width: max-content;
    font-size: 0.7rem;
    height: 1rem;
    position: absolute;
    padding: 0rem 0.2rem;
    top: -2rem;
    background: var(--background-color);
    color: white;
  }
  .create-post:hover::after {
    content: "";
    height: 0;
    width: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid var(--background-color);
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default Wrapper;
