import { createSlice } from '@reduxjs/toolkit';

const initialState = { input: '', searching: false };

const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    endSearch(state) {
      const newState = { ...state };
      newState.searching = false;
      newState.input = '';
      return newState;
    },
    startSearch(state, action) {
      const newState = { ...state };
      newState.searching = true;
      newState.input = action.payload;
      return newState;
    },
  },
});

export const { endSearch, startSearch } = searchSlice.actions;
export default searchSlice.reducer;
