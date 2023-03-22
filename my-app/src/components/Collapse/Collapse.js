import React from "react";
import "./Collapse.scss";
import aproposData from "../../data/aproposData.json";
import Rule from "./Rule";

const Collapse = (data) => {
  return (
    <div>
      {aproposData.map((rule, index) => {
        return (
          <>
            <Rule
              key={rule.id}
              id={rule.id}
              description={rule.description}
              title={rule.title}
            />
          </>
        );
      })}
    </div>
  );
};

export default Collapse;
