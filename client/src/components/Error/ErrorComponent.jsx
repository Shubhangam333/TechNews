import { useNavigate } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Error";

const ErrorComponent = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <img src="/error.jpg" alt="" />
      <button onClick={() => navigate("/")}>Go Back to HomePage</button>
    </Wrapper>
  );
};

export default ErrorComponent;
