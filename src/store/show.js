import { createSlice } from '@reduxjs/toolkit';

const initialState = { show: null };

const showSlice = createSlice({
  initialState,
  name: 'show',
  reducers: {
    clearShow(state) {
      const newState = { ...state };
      newState.show = null;
      return newState;
    },
    setShow(state, action) {
      const newState = { ...state };
      newState.show = action.payload;
      return newState;
    },
  },
});

export const { clearShow, setShow } = showSlice.actions;
export default showSlice.reducer;
