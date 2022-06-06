import React from 'react';
import { Link } from 'react-router-dom';

function Monsters(props) {
  return (
    <Link to={'/monster/' + props.id}>
      <div>{props.monster.name}</div>
    </Link>
  );
}

export default Monsters;
