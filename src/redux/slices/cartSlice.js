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
        state.items.push(action.payload);
        state.totalPrice = state.items.reduce((sum, obj)=>{
            return obj.price + sum;
        },0)
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