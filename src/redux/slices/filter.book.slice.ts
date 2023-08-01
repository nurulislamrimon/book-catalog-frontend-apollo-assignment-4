import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFileringField } from "../../interfaces/Book.interface";

interface IInitialState {
  author: string | null;
  genre: string | null;
}

const initialState: IInitialState = {
  author: null,
  genre: null,
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    createFilter: (
      state,
      action: PayloadAction<{ field: IFileringField; value: string | null }>
    ) => {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    },
  },
});
export const { createFilter } = filterSlice.actions;
export default filterSlice.reducer;
