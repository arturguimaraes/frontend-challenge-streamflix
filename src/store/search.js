 import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  error: null,
  loading: false,
  typing: false
};

const endpoint = 'https://api.tvmaze.com/singlesearch';
// FORCE ERROR
// const endpoint = 'https://api.tvmaze.c124128410924012984098092134820942om/singlesearch';

export const startSearch = createAsyncThunk(
  'search/startSearch',
  async (searchInput) => {
    const url = `${endpoint}/shows?q=${encodeURI(searchInput)}`;
    // console.log('Searching:', url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const searchSlice = createSlice({
  extraReducers: (builder) => {
    // Start Search Action
    builder.addCase(startSearch.pending, (state) => {
      const newState = { ...state };
      newState.loading = true;
      newState.data = null;
      newState.error = null;
      newState.typing = false;
      return newState;
    });
    builder.addCase(startSearch.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.loading = false;
      newState.data = action.payload || 'Not found';
      newState.error = null;
      newState.typing = false;
      return newState;
    });
    builder.addCase(startSearch.rejected, (state, action) => {
      const newState = { ...state };
      newState.loading = false;
      newState.data = null;
      newState.error = action.error;
      newState.typing = false;
      return newState;
    });
  },
  initialState,
  name: 'search',
  reducers: {
    startTyping(state) {
      const newState = { ...state };
      newState.data = null;
      newState.error = null;
      newState.loading = false;
      newState.typing = true;
      return newState;
    },
  },
});

export const { startTyping } = searchSlice.actions;
export default searchSlice.reducer;
