import { createSlice } from '@reduxjs/toolkit';

const initialState = { input: '', searching: false };

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    startSearch(state, action) {
      state.searching = true;
      state.input = action.payload;
    },
    endSearch(state) {
      state.searching = false;
      state.input = '';
    },
  },
});

export const { startSearch, endSearch } = searchSlice.actions;
export default searchSlice.reducer;
