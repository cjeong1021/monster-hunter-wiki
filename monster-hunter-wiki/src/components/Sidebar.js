import React from 'react';
import Filter from './Filter';
import MonsterList from './MonsterList';

function Sidebar(props) {
  return (
    <div>
      Sidebar
      <Filter
        handleFilterChange={props.handleFilterChange}
        filterCategory={props.filterCategory}
      />
      <MonsterList
        monsters={props.monsters}
        matchedMonsters={props.matchedMonsters}
        filter={props.filter}
      />
    </div>
  );
}

export default Sidebar;
