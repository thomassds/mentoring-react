export interface ProductInterface {
    id: string;
    customerId: string;
    name: string;
    description: string;
    status: number;
    purchasePrice: number;
    salePrice: number;
    avaliation?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
}
