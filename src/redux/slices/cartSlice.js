import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  totalPrice:0,
  totalCount:0,
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
        },0);
        state.totalCount = state.items.reduce((sc,obj)=>{
            return obj.count + sc;
        },0);
    },
    removePizza(state, action){
        const item = state.items.find((item)=>item.id === action.payload.id);
        if (item.count > 1){
            item.count--;
        }else{
            state.items = state.items.filter((item)=>item.id !== action.payload.id);
        }

        state.totalPrice = state.items.reduce((sum, obj)=>{
            let countSum = obj.price * obj.count;
            return  countSum + sum;
            },0);
        state.totalCount = state.items.reduce((sc,obj)=>{
            return obj.count + sc;
        },0);
    },
    clearPizzaPosition(state, action){
        state.items = state.items.filter((item)=>item.id !== action.payload.id);
        state.totalPrice = state.items.reduce((sum, obj)=>{
            let countSum = obj.price * obj.count;
            return  countSum + sum;
        },0);
        state.totalCount = state.items.reduce((sc,obj)=>{
            return obj.count + sc;
        },0);
    },
    clearPizzas(state,action){
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    }
  },
});

export const { addPizza, removePizza, clearPizzas, clearPizzaPosition } = cartSlice.actions;
export default cartSlice.reducer;