import "./Collapse.scss";
import aproposData from "../../data/aproposData.json";
import Collapse from "./Collapse";

function CollaspseOnClick() {
  return (
    <>
      {aproposData.map((rule) => {
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
