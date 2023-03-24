import "./Collapse.scss";
import aproposData from "../../data/aproposData.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse";
import data from "../../data/data.json";

function CollaspseOnClick({ props }) {
  return (
    <>
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
    </>
  );
}

export default CollaspseOnClick;
