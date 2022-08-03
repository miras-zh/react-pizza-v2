import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue:'',
  categoryId: 0,
  currentPage:1,
  sort: {
    name: "популярности",
    sortType: "raiting",
  },
  sortOrder:'asc',
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action){
        state.categoryId = action.payload;
    },
    setSort(state, action){
      state.sort = action.payload;
    },
    setSortOrder(state, action){
      state.sortOrder = action.payload;
    },
    setCurrentPage(state, action){
      state.currentPage = action.payload
    },
    setFilters(state, action){
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.sort.sortType = action.payload.sortType;
    },
    setSearchValue(state, action){
      state.searchValue = action.payload;
    }
  },
});

export const { setFilters, setCategoryId, setSort, setCurrentPage,setSortOrder, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;