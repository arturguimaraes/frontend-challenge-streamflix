import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/auth';
import classes from './Auth.module.css';

function Auth() {
  const dispatch = useDispatch();
  const usernameInput = useRef();
  const [username, setUsername] = useState('');
  const passwordInput = useRef();
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);
  const authState = useSelector((state) => state.authState);

  // When submitted, will try to login
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  // On first load only, get focus to username input
  useEffect(() => {
    usernameInput.current.focus();
  }, []);

  // Detect password error
  useEffect(() => {
    if (authState.failed && username !== '') wrongPasswordHandler();
  }, [authState]);

  const wrongPasswordHandler = () => {
    usernameInput.current.value = username;
    passwordInput.current.value = '';
    setWrongPassword(true);
    setTimeout(() => {
      setWrongPassword(false);
    }, 2000);
  };

  // Test
  // useEffect(() => {
  //   usernameInput.current.value = 'usuario';
  //   setUsername(usernameInput.current.value);
  //   passwordInput.current.value = 'password';
  //   setPassword(passwordInput.current.value);
  // }, []);

  return (
    <form method="POST" className={`${classes.form} ${wrongPassword && classes.wobble}`} onSubmit={submitHandler}>
      <input
        ref={usernameInput}
        type="text"
        name="username"
        placeholder="Username"
        required
        onKeyUp={() => setUsername(usernameInput.current.value)}
      />
      <input
        ref={passwordInput}
        type="password"
        name="password"
        placeholder="Password"
        required
        onKeyUp={() => setPassword(passwordInput.current.value)}
        onFocus={() => setWrongPassword(false)}
        className={wrongPassword ? classes.wrongInput : ''}
      />
      {wrongPassword && (
        <p className={classes.wrongInputMessage}>
          Password incorret. Please try again.
        </p>
      )}
      <button type="submit" className={classes.button}>Login</button>
    </form>
  );
}

export default Auth;
