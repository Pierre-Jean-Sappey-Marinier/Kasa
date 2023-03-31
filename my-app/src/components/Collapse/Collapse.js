import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ id, description, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <li key={id} className={`expander_${title}`}>
        <div
          className={`collapse_title expander-summary ${title}`}
          onClick={toggle}
        >
          {title}
        </div>
        <div
          className={isOpen ? `collapse_content` : `collapse_content_hidden  `}
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
