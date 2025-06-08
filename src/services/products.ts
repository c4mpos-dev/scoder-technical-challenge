import { api } from "../lib/api";
import type { Product } from "../pages/Store";

export async function fetchProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>("/products");
    return response.data;
}