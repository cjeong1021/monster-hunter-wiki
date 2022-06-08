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
  const [monsterHistory, setMonsterHistory] = useState([]);

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

  // take monsterHistory state and make a dropdown menu that links to monster details
  let favorited = monsterHistory.map((monster) => {
    return (
      <Link to={'/monster/' + monster.id}>
        <li class='pure-menu-item'>
          <a href='#' class='pure-menu-link'>
            {monster.name}
          </a>
        </li>
      </Link>
    );
  });

  // get API data and set states with data
  useEffect(() => {
    axios.get('https://mhw-db.com/monsters').then((res) => {
      setMonsters(res.data);
      setMatchedMonsters(res.data);
    });
  }, []);

  return (
    <div className='App'>
      <div className='header'>
        <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
          <Link to='/'>
            <a className='pure-menu-heading' id='header-icon' href='/'>
              Monster Hunter Wiki
            </a>
          </Link>
          <li class='pure-menu-item pure-menu-has-children pure-menu-allow-hover'>
            <a href='#' id='menuLink1' class='pure-menu-link'>
              Favorited
            </a>
            <ul class='pure-menu-children'>{favorited}</ul>
          </li>
          <ul className='pure-menu-list'>
            <li className='pure-menu-item'>
              <a
                href='https://monsterhunterworld.wiki.fextralife.com/Monster+Hunter+World+Wiki'
                className='pure-menu-link'
              >
                Wiki
              </a>
            </li>
            <li className='pure-menu-item'>
              <a
                href='https://github.com/cjeong1021/monster-hunter-wiki'
                className='pure-menu-link'
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
        monsterHistory={monsterHistory}
        setMonsterHistory={setMonsterHistory}
      />

      <main className='div3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/monster/:id'
            element={
              <Details
                monsters={monsters}
                monsterHistory={monsterHistory}
                setMonsterHistory={setMonsterHistory}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
