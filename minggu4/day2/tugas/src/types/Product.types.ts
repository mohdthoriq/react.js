export interface Product {
    id: string;
    name: string;
    price: number;
    tags: string[]
}

export type ProductSummary = Pick<Product, 'id' | 'name'>;
export type ProductInput = Omit<Product, 'id'>
export type ProductMap = Record<string, Product>
export type ProductUpdate = Partial<Product>