import React from "react";
import { useParams } from "react-router-dom";
import "./ProfilePageInformation.scss";
import data from "../../data/data.json";
import StarRating from "./StarRating";
// import CollapseOnClick from "../Collapse/CollapseOnClick";
import Collapse from "../Collapse/Collapse";

const ProfilePageInformations = ({ idLocale }) => {
  const dataOfOneLocation = data.find(({ id }) => id === idLocale);

  const length = dataOfOneLocation.pictures.length;

  if (Array.isArray(dataOfOneLocation.equipments)) {
  }
  console.log();
  return (
    <section className="infos">
      <div className="title-location-tags">
        <div className="title-picture">
          <div className="title"> {dataOfOneLocation.title} </div>
          <div className="name-and-picture">
            <div className="identité">
              <div className="name"> {dataOfOneLocation.host.name} </div>
              <picture className="picture_content">
                <img
                  className="picture"
                  src={dataOfOneLocation.host.picture}
                  alt="Logo"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="location">{dataOfOneLocation.location}</div>
        <div className="tags-star">
          <div className="tags">
            {dataOfOneLocation.tags.map((tag, i) => {
              return (
                <p key={i} className="tag">
                  {tag}
                </p>
              );
            })}
          </div>
          <div className="stars">
            <StarRating className="star" rating={dataOfOneLocation.rating} />
          </div>
        </div>
      </div>

      <div className="collapse-description-equipment">
        <div className="collapses_informations_page">
          <Collapse
            className="collaspe_description"
            title="Description"
            description={dataOfOneLocation.description}
          />
          <Collapse
            className="collaspe_equipment"
            title="Equipements"
            description={dataOfOneLocation.equipments}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfilePageInformations;
