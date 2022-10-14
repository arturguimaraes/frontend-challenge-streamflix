import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';

const store = configureStore({
  reducer: { searchState: searchReducer },
});

export default store;
