import { apiSlice } from "../api/apiSlice"
import type {
  SubscribeRequest,
  SubscribeResponse,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
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

    verifyPayment: builder.mutation<
      VerifyPaymentResponse,
      VerifyPaymentRequest
    >({
      query: (body) => ({
        url: "/payment-verify",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useSubscribeMutation,
  useVerifyPaymentMutation,
} = subscriptionApi;