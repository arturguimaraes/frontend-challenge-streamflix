import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';
import showReducer from './show';

const store = configureStore({
  reducer: { searchState: searchReducer, showState: showReducer },
});

export default store;
