import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import background from "../assets/background.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <HelmetProvider>
      <div className="Home">
        <Helmet>
          <title>HOMEPAGE</title>
        </Helmet>
        <Banner image={background} isText={true} />
        <Gallery />
      </div>
    </HelmetProvider>
  );
}

export default Home;
