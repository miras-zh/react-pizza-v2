import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice:0, 
  items:[]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action){
        state.items(action.payload);
    },
    removePizza(state, action){
      state.items = state.items.filter((item)=>item.id !== action.payload);
    },
    clearPizzas(state,action){
      state.items = [];
    }
  },
});

export const { addPizza, removePizza, clearPizzas } = cartSlice.actions;
export default cartSlice.reducer;