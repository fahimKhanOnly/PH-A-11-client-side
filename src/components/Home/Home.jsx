import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HistoriX</title>
      </Helmet>
      <Header></Header>
      <Featured></Featured>
      <Footer/>
    </div>
  );
};

export default Home;