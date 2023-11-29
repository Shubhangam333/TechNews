import { BallTriangle } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <div>
      <BallTriangle
        height="80"
        width="80"
        color="#3B82F6"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
