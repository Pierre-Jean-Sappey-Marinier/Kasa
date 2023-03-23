import "./Collapse.scss";
import aproposData from "../../data/aproposData.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse";
import data from "../../data/data.json";

function CollaspseOnClick({ props }) {
  // let { id: paramId } = useParams();

  // const dataLocale = data.find(({ id }) => id === paramId);
  //const dataLocale = data.find(({ id: itemId }) => itemId === id);
  //const dataLocale = data.find((item) => item.id === id);

  return (
    <>
      {props.map((rule) => {
        return (
          <>
            <Collapse
              id={rule.id}
              description={rule.description}
              title={rule.title}
            />
          </>
        );
      })}
    </>
  );
}

export default CollaspseOnClick;
