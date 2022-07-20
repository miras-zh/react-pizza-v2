import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order:[]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOrder(state, action){
        state.order = action.payload;
    },
  },
});

export const { setOrder} = cartSlice.actions;
export default cartSlice.reducer;