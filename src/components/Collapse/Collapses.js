import './Collapse.scss';
import Collapse from './Collapse';

function Collapses({ props }) {
  return (
    <ul className='Collapses'>
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
