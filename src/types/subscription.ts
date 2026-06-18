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
