import { apiClient } from "../Configs/Api";
import { ProductPaginatedInterface } from "../Interfaces";
import { handleErrorRepository } from "./handleErrorsRepository";

class ProductRepository {
    async selectProducts({
        page,
        perPage,
        customerId,
    }: ProductPaginatedInterface) {
        try {
            const { data } = await apiClient.get(
                `/customers/${customerId}/products`,
                {
                    params: { page, perPage, customerId },
                }
            );

            return data;
        } catch (error) {
            handleErrorRepository.execute(error);
        }
    }
}

export const productRepository = new ProductRepository();
