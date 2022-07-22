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
        const findItem = state.items.find(obj => obj.id === action.payload.id)
        if(findItem){
            findItem.count++;
        }else {
            state.items.push({
                ...action.payload,
                count:1
            });
        }
        state.totalPrice = state.items.reduce((sum, obj)=>{
            let countSum = obj.price * obj.count;
            return  countSum + sum;
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