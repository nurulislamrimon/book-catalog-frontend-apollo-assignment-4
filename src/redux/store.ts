import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./slices/book.slice";
import userReducer from "./slices/user.slice";
import filterSlice from "./slices/filter.book.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userSelectedFilter: filterSlice,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
