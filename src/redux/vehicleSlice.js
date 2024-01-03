import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: initialState,
  reducers: {
    addToCompare: (state, action) => {
      state.compareItems.push(action.payload);
    },
  },
});

export default vehicleSlice.reducer;
