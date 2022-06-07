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
      <div class='header'>
        <div class='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
          <Link to='/'>
            <a class='pure-menu-heading' id='header-icon' href='/'>
              Monster Hunter Wiki
            </a>
          </Link>

          <ul class='pure-menu-list'>
            <li class='pure-menu-item'>
              <a
                href='https://monsterhunterworld.wiki.fextralife.com/Monster+Hunter+World+Wiki'
                class='pure-menu-link'
              >
                Wiki
              </a>
            </li>
            <li class='pure-menu-item'>
              <a
                href='https://github.com/cjeong1021/monster-hunter-wiki'
                class='pure-menu-link'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Link to='/' className='div4'></Link>
      <Sidebar
        monsters={monsters}
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterCategory={filterCategory}
        matchedMonsters={matchedMonsters}
      />

      <main className='div3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/monster/:id'
            element={<Details monsters={monsters} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
