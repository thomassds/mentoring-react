export interface PaginatedInterface {
    page: number | null;
    perPage: number | null;
}

export interface ProductPaginatedInterface extends PaginatedInterface {
    customerId?: string;
}
