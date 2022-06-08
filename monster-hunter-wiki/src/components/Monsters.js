import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'purecss/build/pure.css';

function Monsters(props) {
  const [faves, setFaves] = useState('+');

  function addFaves() {
    if (props.monsterHistory.includes(props.monster)) {
      let newArray = props.monsterHistory.filter(
        (monster) => monster !== props.monster
      );
      props.setMonsterHistory(newArray);
      setFaves('+');
    } else {
      props.setMonsterHistory([...props.monsterHistory, props.monster]);
      setFaves('-');
    }
  }
  return (
    <Link to={'/monster/' + props.id}>
      <li className='pure-menu-item pure-menu-selected'>
        <a href='#' className='pure-menu-link'>
          {props.monster.name}
          <a
            className={`button1 ${faves === '-' ? 'faves' : ''}`}
            onClick={addFaves}
          >
            {faves}
          </a>
        </a>
      </li>
    </Link>
  );
}

export default Monsters;
