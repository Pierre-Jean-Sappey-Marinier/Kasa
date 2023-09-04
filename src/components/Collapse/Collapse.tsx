import React, { useState } from "react";
import "./Collapse.scss";
import arrow from "../../assets/arrow.png";

type CollapseProps = {
  id?: string;
  description: string | string[];
  title: string;
  className?: string;
};

const Collapse: React.FC<CollapseProps> = ({ id, description, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <li key={id} className={`expander`}>
        <button className={` expander_title`} onClick={toggle}>
          {title}
          <img
            src={arrow}
            alt=""
            className={"arrow " + (isOpen ? `up` : `down  `)}
          />
        </button>
        <div className={`collapse_content ${isOpen ? "" : "hidden"}`}>
          {isOpen ? `collapse_content` : `collapse_content_hidden  `}
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
