import React from "react";
import { useParams } from "react-router-dom";
import "./ProfilePageInformation.scss";
import data from "../../data/data.json";
import StarRating from "./StarRating";
// import CollaspseOnClick from "../Collapse/CollapseOnClick";
import Collaspse from "../Collapse/Collapse";
const ProfilePageInformations = () => {
  let { id: paramId } = useParams();

  const dataLocale = data.find(({ id }) => id === paramId);
  // const dataLocale = data.find(({ id: itemId }) => itemId === id);
  // const dataLocale = data.find((item) => item.id === id);
  const length = dataLocale.pictures.length;

  return (
    <section className="infos">
      <div className="title-location-tags">
        <div className="title"> {dataLocale.title} </div>
        <div className="location">{dataLocale.location}</div>
        <div className="tags">
          {dataLocale.tags.map((tag, i) => {
            return (
              <p key={i} className="tag">
                {tag}
              </p>
            );
          })}
        </div>
      </div>
      <div className="name-and-picture">
        <div className="identité">
          <div className="name"> {dataLocale.host.name} </div>
          <picture className="picture_content">
            <img className="picture" src={dataLocale.host.picture} alt="Logo" />
          </picture>
        </div>
      </div>
      <div className="stars">
        <StarRating className="star" rating={dataLocale.rating} />
      </div>
      <div className="collapse-description-equipment">
        <div className="description-equipment">
          <Collaspse
            className="collaspe_description"
            title="Description"
            description={dataLocale.description}
          />
          <Collaspse
            className="collaspe_equipment"
            title="Equipements"
            description={dataLocale.equipments}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfilePageInformations;
