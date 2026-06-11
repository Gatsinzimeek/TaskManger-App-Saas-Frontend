import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithAuth = async (  args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {

    // Save current page
  localStorage.setItem(
    "redirectAfterLogin",
    window.location.pathname
  );

    toast.error(
      "Session expired. Please login again."
    );

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  }
  return result;

};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Tasks", "Auth"],
  endpoints: () => ({}),
});

