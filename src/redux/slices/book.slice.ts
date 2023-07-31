import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "../../interfaces/Book.interface";
import { IResponse } from "../../interfaces/Response.interface";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-backend-eosin.vercel.app",
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<IResponse<IBook[]>, null>({
      query: () => `/books`,
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;
