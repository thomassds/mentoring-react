import { apiClient } from "../Configs/Api";
import { handleErrorRepository } from "./handleErrorsRepository";

class OrderRepository {
    async selectOrders(customerId: string) {
        try {
            const { data } = await apiClient.get(
                `/customers/${customerId}/orders`
            );

            return data;
        } catch (error) {
            handleErrorRepository.execute(error);
        }
    }
}

export const orderRepository = new OrderRepository();
