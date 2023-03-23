import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ id, description, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div key={id} className={`expander ${title}`}>
        <div className="collapse_title expander-summary" onClick={toggle}>
          {title}
        </div>
        <ul
          className={
            isOpen ? `collapse_content content` : "collapse_content_hidden "
          }
        >
          <p>{<p>{description}</p>}</p>
          {/* {console.log(
            "🚀 ~ file: Collapse.js:20 ~ Collapse ~ description:",
            description
          )} */}
        </ul>
      </div>
    </>
  );
};

export default Collapse;
