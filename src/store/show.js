import { createSlice } from '@reduxjs/toolkit';

const initialState = { show: null };

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setShow(state, action) {
      state.show = action.payload;
    },
    clearShow(state) {
      state.show = null;
    },
  },
});

export const { setShow, clearShow } = showSlice.actions;
export default showSlice.reducer;
