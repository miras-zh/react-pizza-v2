import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    items:[]
};

const pizzaSlice = createSlice({
    name:"pizza",
    initialState,
    reducers:{
        setItemsState(state, action){
            state.items = action.payload;
        }
    }
})

export const {setItemsState} = pizzaSlice.actions;
export default pizzaSlice.reducer;
