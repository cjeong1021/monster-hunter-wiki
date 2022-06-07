import React from 'react';
import 'purecss/build/pure.css';

function Filter(props) {
  return (
    <div className='div1'>
      <form className='pure-form' action=''>
        <input
          className='pure-input-rounded pure-u-1-2'
          type='text'
          onChange={(e) => props.handleFilterChange(e)}
        />
        <select name='' id='' onChange={(e) => props.filterCategory(e)}>
          <option value='name'>Monster</option>
          <option value='locations'>Location</option>
          <option value='species'>Species</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
