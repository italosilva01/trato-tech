const { createSlice } = require("@reduxjs/toolkit");
const initialState = 0;
const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => state++,
  },
});
export const { increment } = countSlice.actions;
export default countSlice.reducer;
