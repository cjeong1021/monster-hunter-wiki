import React, { useEffect } from 'react';
import Monsters from './Monsters';
import 'purecss/build/pure.css';

function MonsterList(props) {
  // generate list of monsters from api data
  let monsterList = props.matchedMonsters.map((monster) => {
    return (
      <Monsters
        monster={monster}
        id={monster.id}
        monsterHistory={props.monsterHistory}
        setMonsterHistory={props.setMonsterHistory}
      />
    );
  });

  return (
    <div className='menu'>
      <div className='pure-menu pure-menu-scrollable custom-restricted'>
        <a href='/' className='pure-menu-link pure-menu-heading'>
          Monster List
        </a>
        <ul class='pure-menu-list'>
          <div className='div2'>{monsterList}</div>
        </ul>
      </div>
    </div>
  );
}

export default MonsterList;
