import React from 'react';
import { useParams } from 'react-router-dom';

function Details(props) {
  let { id } = useParams();
  if (props.monsters.length !== 0) {
    let clickedMonster = props.monsters.filter((monster) => monster.id == id);

    let weaknessRating = clickedMonster[0].weaknesses.map((weakness) => {
      let starsArray = [];
      for (let i = 0; i <= weakness.stars; i++) {
        starsArray.push(i);
      }
      let starPics = starsArray.map((star) => {
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

    let locations = clickedMonster[0].locations.map((location) => {
      return (
        <li>
          {location.name}: Zone {location.zoneCount}
        </li>
      );
    });

    let resistances = clickedMonster[0].resistances.map((resistance) => {
      return <li>{resistance.element.toUpperCase()}</li>;
    });

    return (
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
        <p className='description'>{clickedMonster[0].description}</p>

        <div className='location'>
          <h2>Where to find them</h2>
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
    );
  } else {
    return <div>searching</div>;
  }
}

export default Details;
