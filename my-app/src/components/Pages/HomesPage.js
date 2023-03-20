import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import background from "../../assets/background.png";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner image={background} isText={true} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
