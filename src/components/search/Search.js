import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearchWait, startTyping } from '../../store/actions/search';
import classes from './Search.module.css';

function Search() {
  const dispatch = useDispatch();
  const titleInput = useRef();
  const [title, setTitle] = useState('');

  // Checks if search is in progress
  const { loading } = useSelector((state) => state.searchState);

  // When submitted, changes search state to 'searching', which will be detected by the App
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(startSearchWait(title));
  };

  // On first load only, get focus to serach input
  useEffect(() => {
    titleInput.current.focus();
    titleInput.current.value = 'Silicon Valley';
    setTitle('Silicon Valley');
  }, []);

  // When key is stroked, changes state typing to true, which will be detected by the App
  useEffect(() => {
    // Set a timer to not call this redux action all the time
    const timer = setTimeout(() => {
      // console.log('going back to home');
      dispatch(startTyping());
    }, 250);
    return () => clearTimeout(timer);
  }, [title, dispatch]);

  return (
    <form method="POST" className={classes.form} onSubmit={submitHandler}>
      <input
        ref={titleInput}
        type="text"
        name="title"
        placeholder="Search title"
        required
        onKeyUp={() => setTitle(titleInput.current.value)}
        disabled={loading}
        className={loading ? 'disabled' : ''}
      />
      <button
        type="submit"
        disabled={loading}
        className={loading ? 'disabled' : ''}
      >
        Go
      </button>
    </form>
  );
}

export default Search;
