import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HistoriX</title>
      </Helmet>
      <Header></Header>
      <Footer/>
    </div>
  );
};

export default Home;