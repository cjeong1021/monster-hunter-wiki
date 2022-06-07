import React from 'react';
import { Link } from 'react-router-dom';
import 'purecss/build/pure.css';

function Monsters(props) {
  return (
    <Link to={'/monster/' + props.id}>
      <li class='pure-menu-item'>
        <a href='#' class='pure-menu-link'>
          {props.monster.name}
        </a>
      </li>
    </Link>
  );
}

export default Monsters;
