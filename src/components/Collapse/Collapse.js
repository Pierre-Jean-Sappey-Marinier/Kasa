import React, { useState } from 'react';
import './Collapse.scss';
import arrow from '../../assets/arrow.png';

const Collapse = ({ id, description, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <li key={id} className={`expander`}>
        <button className={` expander_title`} onClick={toggle}>
          {title}
          <img
            src={arrow}
            alt=''
            className={'arrow ' + (isOpen ? `up` : `down  `)}
          />
        </button>
        <div
          className={'collapse_content ' + (isOpen ? `` : `hidden`)}
          // className={isOpen ? `collapse_content` : `collapse_content_hidden  `}
        >
          {Array.isArray(description) ? (
            <ul>
              {description.map((item) => {
                return <li key={`${item}${id}`}>{item}</li>;
              })}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </li>
    </>
  );
};

export default Collapse;
