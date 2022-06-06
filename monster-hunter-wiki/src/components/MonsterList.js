import React, { useEffect } from 'react';
import Monsters from './Monsters';

function MonsterList(props) {
  let monsterList = props.matchedMonsters.map((monster) => {
    return <Monsters monster={monster} key={monster.id} />;
  });

  return <div>{monsterList}</div>;
}

export default MonsterList;
