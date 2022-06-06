import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import axios from 'axios';

function App() {
  // set states for monster list, filtered list and filter variable
  const [monsters, setMonsters] = useState([]);
  const [matchedMonsters, setMatchedMonsters] = useState([]);
  const [filter, setFilter] = useState('name');

  // handle filter change in filter component, set matchedMonsters state based on filter values
  const handleFilterChange = (e) => {
    e.preventDefault();

    if (filter === 'name') {
      let filteredMonsters = monsters.filter((monster) =>
        monster.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setMatchedMonsters(filteredMonsters);
    } else if (filter === 'location') {
      let filteredMonsters = monsters.filter((monster) =>
        monster.location.name[0]
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setMatchedMonsters(filteredMonsters);
    } else {
      let filteredMonsters = monsters.filter((monster) =>
        monster.species.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setMatchedMonsters(filteredMonsters);
    }
  };

  // change filter state based on drop down
  const filterCategory = (e) => {
    setFilter(e.target.value);
  };

  // get API data and set states with data
  useEffect(() => {
    axios.get('https://mhw-db.com/monsters').then((res) => {
      setMonsters(res.data);
      setMatchedMonsters(res.data);
    });
  }, []);

  return (
    <div className='App'>
      Monster Hunter Wiki
      <Sidebar
        monsters={monsters}
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterCategory={filterCategory}
        matchedMonsters={matchedMonsters}
      />
    </div>
  );
}

export default App;
