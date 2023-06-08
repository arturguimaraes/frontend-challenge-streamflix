import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { emptySeasons } from '../../store/actions/season';
import { startTyping, fetchShowWait } from '../../store/actions/show';
import classes from './Search.module.css';

function Search() {
  const dispatch = useDispatch();
  const titleInput = useRef();
  const [title, setTitle] = useState('');
  const location = useLocation();

  // Checks if search is in progress
  const { loading } = useSelector((state) => state.showState);

  // When submitted, changes search state to 'searching', which will be detected by the App
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(fetchShowWait(title));
    dispatch(emptySeasons());
  };

  // When on home, error or no results, get focus to input to improve UX
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/noResults' || location.pathname === '/error') {
      titleInput.current.focus();
    }
  }, [location.pathname]);

  // When key is stroked, changes state typing to true, which will be detected by the App
  useEffect(() => {
    // Set a timer to not call this redux action all the time
    const timer = setTimeout(() => {
      // console.log('going back to home');
      dispatch(startTyping());
      dispatch(emptySeasons());
    }, 250);
    return () => clearTimeout(timer);
  }, [title, dispatch]);

  // Test
  // useEffect(() => {
  //   titleInput.current.value = 'Silicon Valley';
  //   setTitle(titleInput.current.value);
  // }, []);

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
      <button type="submit" disabled={loading} className={`${classes.button} ${loading ? 'disabled' : ''}`}>Go</button>
    </form>
  );
}

export default Search;
