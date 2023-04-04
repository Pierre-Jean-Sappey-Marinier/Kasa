import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import background from "../../assets/background.png";

function Home() {
  return (
    <div className="Home">
      <Banner image={background} isText={true} />
      <Gallery />
    </div>
  );
}

export default Home;
