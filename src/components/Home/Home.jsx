import { Helmet } from "react-helmet";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>HistoriX</title>
      </Helmet>
      <Header></Header>
    </div>
  );
};

export default Home;