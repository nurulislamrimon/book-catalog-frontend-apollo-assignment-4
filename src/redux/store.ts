import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";
import { bookApi } from "./slices/book.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
