const { createSlice } = require("@reduxjs/toolkit");
const initialState = 0;
const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state++;
    },
  },
});

export default countSlice.reducer;
