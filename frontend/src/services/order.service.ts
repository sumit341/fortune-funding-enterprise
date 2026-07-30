import {
  createOrderApi,
  getOrdersApi,
  getOrderApi,
  CreateOrderPayload,
} from "../api/order.api";

export const orderService = {
  async createOrder(
    payload: CreateOrderPayload
  ) {
    const response =
      await createOrderApi(
        payload
      );

    return response.data;
  },

  async getOrders() {
    const response =
      await getOrdersApi();

    return response.data;
  },

  async getOrder(
    id: string
  ) {
    const response =
      await getOrderApi(id);

    return response.data;
  },
};