import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    compareItems: localStorage.getItem("compareItems")
      ? JSON.parse(localStorage.getItem("compareItems"))
      : [],
  },
  reducers: {
    addToCompare: (state, action) => {
      const itemIndex = state.compareItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        toast.error("Item already added to compare", {
          position: "top-right",
          theme: "colored",
        });
      } else {
        const newItems = { ...action.payload, compareQuantity: 1 };
        state.compareItems.push(newItems);
        toast.success("Added to compare", {
          position: "top-right",
          theme: "colored",
        });
      }

      localStorage.setItem("compareItems", JSON.stringify(state.compareItems));
    },
    removeFromCompare: (state, action) => {
      const removeItems = state.compareItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.compareItems = removeItems;
      localStorage.setItem("compareItems", JSON.stringify(state.compareItems));
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;

export default compareSlice.reducer;
