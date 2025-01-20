import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
  favourites: []
};

const Slice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemExists = state.favourites.some(
        (item) => item.name.id === action.payload.id
      );
      
      if (!itemExists) {
        const data = {
          id: nanoid(),
          name: action.payload
        };
        state.favourites.push(data);
        console.log(current(state.favourites));
      } else {
        console.log("Item already in favourites.");
      }
    },
    removeItem: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload
      );
    }
  }
});

export const { addItem, removeItem } = Slice.actions;
export default Slice.reducer;
