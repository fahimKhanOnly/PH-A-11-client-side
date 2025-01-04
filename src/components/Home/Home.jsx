import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HistoriX</title>
      </Helmet>
      <Header></Header>
      <Featured></Featured>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <Footer/>
    </div>
  );
};

export default Home;