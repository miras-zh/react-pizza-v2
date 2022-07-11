import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "raiting",
  },
  sortOrder:'asc'
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
      state.sort = action.payload;
    },
    setSortOrder(state, action){
      state.sortOrder = action.payload;
    }
  },
});

export const { setCategoryId, setSort, setSortOrder } = filterSlice.actions;
export default filterSlice.reducer;