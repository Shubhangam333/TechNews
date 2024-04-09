import Home from "../components/Home/Home";
import Layout from "./Layout";

const Main = () => {
  return (
    <>
      <Layout />
      <main className="main-container">
        <Home />
      </main>
    </>
  );
};

export default Main;
