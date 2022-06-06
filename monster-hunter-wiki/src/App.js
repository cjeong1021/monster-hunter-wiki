import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';

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
    } else if (filter === 'locations') {
      let filteredMonsters = monsters.filter((monster) => {
        let locations = monster.locations.filter((location) => {
          return location.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });

        console.log(locations);
        if (locations.length !== 0) {
          return monster;
        }
      });
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
      <Link to='/'>Monster Hunter Wiki</Link>
      <Sidebar
        monsters={monsters}
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterCategory={filterCategory}
        matchedMonsters={matchedMonsters}
      />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/monster/:id'
            element={<Details matchedMonsters={matchedMonsters} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
