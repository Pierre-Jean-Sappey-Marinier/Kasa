import React from "react";
import { useParams } from "react-router-dom";
import "./ProfilePageInformation.scss";
import data from "../../data/data.json";
import StarRating from "./StarRating";
import Collapse from "../Collapse/Collapse";
const ProfilePageInformations = () => {
  let { id: paramId } = useParams();

  const dataLocale = data.find(({ id }) => id === paramId);
  //const dataLocale = data.find(({ id: itemId }) => itemId === id);
  //const dataLocale = data.find((item) => item.id === id);
  const length = dataLocale.pictures.length;

  return (
    <>
      <div className="lieu">
        <div> {dataLocale.title} </div>
        <div>{dataLocale.location}</div>
        <div>{dataLocale.tags}</div>
      </div>
      <div className="identité">
        <div> {dataLocale.host.name} </div>
        <div>
          <img src={dataLocale.host.picture} alt="Logo" />
        </div>
        <>
          <StarRating rating={dataLocale.rating} />
        </>
        <div>
          <Collapse />
        </div>
      </div>
    </>
  );
};

export default ProfilePageInformations;
