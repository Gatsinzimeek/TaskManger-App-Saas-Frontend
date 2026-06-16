// src/types/subscription.ts

export interface SubscribeRequest {
  plan: string;
  phone_number: string;
  channel_name: string;
}

export interface SubscribeResponse {
  success: boolean;
  message: string;
  transaction_id: string;
  data: unknown;
}

export interface VerifyPaymentRequest {
  transaction_id: string;
}

export interface VerifyPaymentResponse {
  message: string;
}