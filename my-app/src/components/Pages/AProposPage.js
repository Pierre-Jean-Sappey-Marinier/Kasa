import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import background_apropos from "../../assets/background_apropos.png";
import CollaspseOnClick from "../Collapse/CollapseOnClick";
import aproposData from "../../data/aproposData.json";

const AProposPage = () => {
  return (
    <div className="AProposPage">
      <Header />
      <Banner image={background_apropos} isText={false} />
      <CollaspseOnClick props={aproposData} />
      <Footer />
    </div>
  );
};

export default AProposPage;
