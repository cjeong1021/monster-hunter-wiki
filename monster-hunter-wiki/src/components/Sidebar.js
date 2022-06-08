import React from 'react';
import Filter from './Filter';
import MonsterList from './MonsterList';

function Sidebar(props) {
  return (
    <div>
      <Filter
        handleFilterChange={props.handleFilterChange}
        filterCategory={props.filterCategory}
      />
      <MonsterList
        monsters={props.monsters}
        matchedMonsters={props.matchedMonsters}
        filter={props.filter}
        monsterHistory={props.monsterHistory}
        setMonsterHistory={props.setMonsterHistory}
      />
    </div>
  );
}

export default Sidebar;
