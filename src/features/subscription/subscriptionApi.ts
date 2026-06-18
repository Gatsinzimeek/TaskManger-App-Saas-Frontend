  import { apiSlice } from "../api/apiSlice"
  import type {
    SubscribeRequest,
    SubscribeResponse,
  } from "../../types/subscription";

  export const subscriptionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      subscribe: builder.mutation<
        SubscribeResponse,
        SubscribeRequest
      >({
        query: (body) => ({
          url: "/subscribe",
          method: "POST",
          body,
        }),
      }),
      getPaymentStatus: builder.query<{ status: string },void>({
        query: () => ({
          url: "/payment/status",
          method: "GET",
        }),
      }),
      processPayment: builder.mutation<any,void>({
        query: () => ({
          url: "/payment/process",
          method: "POST",
        }),
      }),
    }),
  });

  export const {
    useSubscribeMutation,
   useLazyGetPaymentStatusQuery,
    useProcessPaymentMutation
  } = subscriptionApi;


