import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "raiting",
  },
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setCategoryId(state, action){
        console.log(action);
        state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;