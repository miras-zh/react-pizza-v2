import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPizzas = createAsyncThunk(
    'pizza/getAllPizzas',
    async (param)=>{
        const {categoryId, search,sortType,order,currentPage} = param;
        let url = `${categoryId > 0 ? "category=" + categoryId : ""}`;
        let searchParam = `${search.length !== 0 ? "&search=" + search : ""}`;
        url = url + `&sortBy=${sortType}&order=${order}`;
        url = searchParam !== "" ? url + searchParam : url;
        const {data} = await axios.get(`https://62b0a7a6e460b79df04ab646.mockapi.io/items?limit=4&page=${currentPage}&` +url)
        state
    }
)
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
    },
    extraReducers: {
        [getAllPizzas.fulfilled]:(state, action)=>{

        }
    }
})

export const {setItemsState} = pizzaSlice.actions;
export default pizzaSlice.reducer;
