import React from 'react';
import './ProfilePageInformation.scss';
import StarRating from './StarRating';
import Collapse from '../Collapse/Collapse';

const ProfilePageInformations = ({ dataOfOneLocation }) => {
  if (Array.isArray(dataOfOneLocation.equipments)) {
  }

  console.log();

  return (
    <section className='infos'>
      <div className='locationAndPictureAndStar'>
        <div className='title-location-tags'>
          <div className='title-picture'>
            <div className='title'> {dataOfOneLocation.title} </div>
          </div>
          <div className='location'>{dataOfOneLocation.location}</div>

          <div className='tags-star'>
            <div className='tags'>
              {dataOfOneLocation.tags.map((tag, i) => {
                return (
                  <p key={i} className='tag'>
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className='identityAndStar'>
          <div className='identité'>
            <div className='name'> {dataOfOneLocation.host.name} </div>
            <picture className='picture_content'>
              <img
                className='picture'
                src={dataOfOneLocation.host.picture}
                alt='Logo'
              />
            </picture>
          </div>
          <div className='stars'>
            <StarRating className='star' rating={dataOfOneLocation.rating} />
          </div>
        </div>
      </div>
      <div className='collapse-description-equipment'>
        <div className='collapses_informations_page'>
          <Collapse
            className='collapse_description'
            title='Description'
            description={dataOfOneLocation.description}
          />

          <Collapse
            className='collapse_equipment'
            title='Equipements'
            description={dataOfOneLocation.equipments}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfilePageInformations;
