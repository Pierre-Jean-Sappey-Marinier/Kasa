import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import background from "../../assets/background.png";
import { Helmet } from "react-helmet";
function Home() {
  return (
    <div className="Home">
      <Helmet>
        <title>HOMEPAGE</title>
      </Helmet>
      <Banner image={background} isText={true} />
      <Gallery />
    </div>
  );
}

export default Home;
