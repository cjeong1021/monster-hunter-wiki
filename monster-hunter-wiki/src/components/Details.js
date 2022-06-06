import React from 'react';
import { useParams } from 'react-router-dom';

function Details(props) {
  let { id } = useParams();
  let clickedMonster = props.matchedMonsters.filter(
    (monster) => monster.id == id
  );

  console.log(clickedMonster);
  console.log(id);
  return;
}

export default Details;
