import api from "./axios";

export interface CreateOrderPayload {
  challengeId: string;
}

export interface Order {
  id: string;
  challengeId: string;
  challengeName: string;
  amount: number;
  status: "pending" | "paid" | "failed";
  createdAt: string;
}

export const createOrderApi = (
  payload: CreateOrderPayload
) =>
  api.post<Order>(
    "/orders",
    payload
  );

export const getOrdersApi = () =>
  api.get<Order[]>("/orders");

export const getOrderApi = (
  id: string
) =>
  api.get<Order>(
    `/orders/${id}`
  );