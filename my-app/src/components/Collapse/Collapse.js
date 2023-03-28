import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ id, description, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div key={id} className={`expander_${title}`}>
        <div
          className={`collapse_title expander-summary ${title}`}
          onClick={toggle}
        >
          {title}
        </div>
        <ul
          className={isOpen ? `collapse_content` : `collapse_content_hidden  `}
        >
          {Array.isArray(description) ? (
            description.map((item) => {
              return <li key={`${item}${id}`}>{item}</li>;
            })
          ) : (
            <p>{description}</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Collapse;
