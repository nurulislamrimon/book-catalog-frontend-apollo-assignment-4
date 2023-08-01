import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  author: string | null;
  genre: string | null;
}

const initialState: IInitialState = {
  author: null,
  genre: null,
};
export const filterSlice = createSlice({
  name: "userselectedfilter",
  initialState,
  reducers: {
    createUserSelectedFilterList: (
      state,
      action: PayloadAction<{ field: "author" | "genre"; value: string | null }>
    ) => {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    },
  },
});
export const { createUserSelectedFilterList } = filterSlice.actions;
export default filterSlice.reducer;
