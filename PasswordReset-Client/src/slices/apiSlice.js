import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = import.meta.env.VITE_BASE_URL;


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (payload) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: payload,
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ token, newPassword }) => ({
        url: `/auth/reset-password/${token}`,
        method: "POST",
        body: { newPassword },
      }),
    }),
  }),
});


export const {
  useRegisterMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = apiSlice;