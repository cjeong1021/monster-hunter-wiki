import React from 'react';

function Filter(props) {
  return (
    <div>
      <form action=''>
        <input type='text' onChange={(e) => props.handleFilterChange(e)} />
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
