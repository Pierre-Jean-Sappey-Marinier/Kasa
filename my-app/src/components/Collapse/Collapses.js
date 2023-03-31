import "./Collapse.scss";
import aproposData from "../../data/aproposData.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse";
import data from "../../data/data.json";

function Collapses({ props }) {
  return (
    <ul className="Collapses">
      {props.map((rule) => {
        return (
          <Collapse
            key={rule.id}
            id={rule.id}
            description={rule.description}
            title={rule.title}
          />
        );
      })}
    </ul>
  );
}

export default Collapses;
