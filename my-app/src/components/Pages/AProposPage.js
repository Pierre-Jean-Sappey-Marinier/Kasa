import React from "react";
import Banner from "../Banner/Banner";
import background_apropos from "../../assets/background_apropos.png";
import Collapses from "../Collapse/Collapses";
import aproposData from "../../data/aproposData.json";
import "./AProposPage.scss";

const AProposPage = () => {
  return (
    <div className="AProposPage">
      <Banner image={background_apropos} isText={false} />
      <Collapses props={aproposData} />
    </div>
  );
};

export default AProposPage;
