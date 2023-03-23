import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import background_apropos from "../../assets/background_apropos.png";
import CollaspseOnClick from "../Collapse/CollapseOnClick";

const AProposPage = () => {
  return (
    <div className="AProposPage">
      <Header />
      <Banner image={background_apropos} isText={false} />
      <CollaspseOnClick />
      <Footer />
    </div>
  );
};

export default AProposPage;
