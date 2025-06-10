import { ProductCard } from "./ProductCard";
import type { Product } from "../../pages/Store";

interface ProductListProps {
    products: Product[];
}

export function ProductList({ products }: ProductListProps) {
    return (
        <section className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}