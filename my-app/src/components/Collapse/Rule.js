import React from "react";
import "./Collapse.scss";
const Rule = ({ title, id, description }) => {
  return (
    <>
      <details class="expander" id={id}>
        <summary class="expander-summary ">
          <span>{title}</span>
        </summary>

        <div class="content">
          <p>{description}</p>
        </div>
      </details>
    </>
  );
};

export default Rule;
