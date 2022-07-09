import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "raiting",
  },
  order:{
    asc:'asc',
    desc:'desc'
  }
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action){
        console.log(action);
        state.categoryId = action.payload;
    },
    setSort(state, action){
      console.log('state ###', state)
      console.log('setSort slice ##', action)
      console.log('state.sort old ##', state.sort)
      state.sort = action.payload;
      console.log('state.sort now ##', state.sort)
    }
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;