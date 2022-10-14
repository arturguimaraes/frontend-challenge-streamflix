import React from 'react';
import classes from './Search.module.css';

function Search() {
  return (
    <form className={classes.form}>
      <input type="text" name="title" placeholder="Search title" />
      <button type="button">Go</button>
    </form>
  );
}

export default Search;
