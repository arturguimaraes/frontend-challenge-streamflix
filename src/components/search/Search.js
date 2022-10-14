import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch } from '../../store/search';
import classes from './Search.module.css';

function Search() {
  const dispatch = useDispatch();
  const titleInput = useRef();
  //Checks if search is in progress
  const searching = useSelector((state) => state.searchState.searching);

  //When submitted, changes search state to 'searching', which will be detected by the App
  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleInput.current.value;
    dispatch(startSearch(title));
  };

  return (
    <form method="POST" className={classes.form} onSubmit={submitHandler}>
      <input
        ref={titleInput}
        type="text"
        name="title"
        placeholder="Search title"
        required
        disabled={searching}
        className={searching ? 'disabled' : ''}
      />
      <button
        type="submit"
        disabled={searching}
        className={searching ? 'disabled' : ''}
      >
        Go
      </button>
    </form>
  );
}

export default Search;
