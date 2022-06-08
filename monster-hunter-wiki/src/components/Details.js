import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Monsters from './Monsters';

function Details(props) {
  // useParams gets id of selected monster
  let { id } = useParams();

  // set states for button text, related filter, and filtered monsters
  const [buttonText, setButtonText] = useState('Add to Favorites');
  const [relatedFilter, setRelatedFilter] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  // useParams to filter api data to get correct monster
  if (props.monsters.length !== 0) {
    let clickedMonster = props.monsters.filter((monster) => monster.id == id);

    // create array of star images based on weakness, render the correct number of stars
    let weaknessRating = clickedMonster[0].weaknesses.map((weakness) => {
      let starsArray = [];
      for (let i = 0; i <= weakness.stars; i++) {
        starsArray.push(i);
      }
      let starPics = starsArray.map(() => {
        return (
          <img className='star' src={require('../images/Star_icon.png')} />
        );
      });
      return (
        <li>
          {weakness.element.toUpperCase()}:{starPics}
        </li>
      );
    });

    // render the locations the monster can be found
    let locations = clickedMonster[0].locations.map((location) => {
      return (
        <li>
          {location.name}: Zone {location.zoneCount}
        </li>
      );
    });

    // render the resistances the monster has
    let resistances = clickedMonster[0].resistances.map((resistance) => {
      return <li>{resistance.element.toUpperCase()}</li>;
    });

    // Filter monster data to find monsters with similar location or species
    function relatedHandle(e) {
      e.preventDefault();
      setRelatedFilter(e.target.getAttribute('value'));
      if (relatedFilter === 'locations') {
        var filteredMonsters = props.monsters.filter((monster) => {
          let locations = monster.locations.filter((location) => {
            return location.name
              .toLowerCase()
              .includes(
                clickedMonster[0].locations.map((location) =>
                  location.name.toLowerCase()
                )
              );
          });

          if (locations.length !== 0) {
            return monster;
          }
        });
        setFilteredMonsters(filteredMonsters);
      } else if (relatedFilter === 'species') {
        var filteredMonsters = props.monsters.filter((monster) =>
          monster.species
            .toLowerCase()
            .includes(clickedMonster[0].species.toLowerCase())
        );
        setFilteredMonsters(filteredMonsters);
      }
    }

    let monsterList = [];

    if (filteredMonsters !== []) {
      monsterList = filteredMonsters.map((monster) => {
        return (
          <Monsters
            monster={monster}
            id={monster.id}
            monsterHistory={props.monsterHistory}
            setMonsterHistory={props.setMonsterHistory}
          />
        );
      });
    }

    return (
      <div>
        <div className='details-container'>
          <img
            className='monster-image'
            src={require(`../images/MHW_${clickedMonster[0].name.replace(
              ' ',
              '_'
            )}_Icon.webp`)}
          />
          <div className='description-container'>
            <h1 className='name'>{clickedMonster[0].name}</h1>
            <h2 className='species'>{clickedMonster[0].species}</h2>
            <h3 className='type'>{clickedMonster[0].type}</h3>
          </div>

          <div className='description'>
            <h2>Description</h2>
            {clickedMonster[0].description}
          </div>

          <div className='location'>
            <h2>Locations</h2>
            {locations}
          </div>
          <div className='weakness'>
            <h2>Weaknesses</h2>
            {weaknessRating}
          </div>
          <div className='resistances'>
            <h2>Resistances</h2>
            {resistances}
          </div>
        </div>
        <div className='related'>
          <h2>Related Monsters</h2>
          <div className='pure-menu pure-menu-horizontal'>
            <ul className='pure-menu-list'>
              <li className='pure-menu-item'>
                <a
                  onClick={relatedHandle}
                  value='species'
                  href='#'
                  className='pure-menu-link'
                >
                  Species
                </a>
              </li>
              <li className='pure-menu-item'>
                <a
                  onClick={relatedHandle}
                  value='locations'
                  href='#'
                  className='pure-menu-link'
                >
                  Location
                </a>
              </li>
            </ul>
          </div>
          <div className='related-list'>{monsterList}</div>
        </div>
      </div>
    );
  } else {
    return <div>searching</div>;
  }
}

export default Details;
