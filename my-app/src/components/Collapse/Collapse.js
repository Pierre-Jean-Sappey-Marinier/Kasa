import React from "react";
import "./Collapse.scss";
import aproposData from "../../data/aproposData.json";
import Rule from "./Rule";

const Collapse = (data) => {
  return (
    <div>
      {aproposData.map((data) => {
        return (
          <>
            <Rule
              id={data.id}
              description={data.description}
              title={data.title}
            />
          </>
        );
      })}
    </div>
  );
};

export default Collapse;
