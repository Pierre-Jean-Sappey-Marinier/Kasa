import "./Collapse.scss";
import Collapse from "./Collapse";

type CollapsesProps = {
  props: Array<{ id: string; description: string; title: string }>;
};

function Collapses({ props }: CollapsesProps) {
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
