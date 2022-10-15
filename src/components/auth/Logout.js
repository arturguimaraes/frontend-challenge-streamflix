import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/auth';
import classes from './Logout.module.css';

function Logout() {
  const dispatch = useDispatch();

  // Checks if search is in progress
  const { loading } = useSelector((state) => state.showState);

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <button
      type="button"
      onClick={logoutHandler}
      disabled={loading}
      className={`${classes.logout}`}
    >
      Logout
    </button>
  );
}

export default Logout;
