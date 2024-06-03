import { createSlice } from '@reduxjs/toolkit';
const reducer = createSlice({
  name: 'counter',
  initialState: 2,
  reducers: {
    add(state, { payload }) {
      return state + payload;
    },
    minus(state, { payload }) {
      return state - payload;
    },
  },
});
export const { add, minus } = reducer.actions;
export default reducer;
