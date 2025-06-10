import { useNavigate } from "react-router-dom";
import { Star, Plus } from "lucide-react";

import type { Product } from "../../pages/Store";
import { useCart } from "../../contexts/CartContext";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/product/${product.id}`);
    }

    return (
        <div
            className="relative group p-4 bg-white border border-black/10 rounded-xl shadow-md shadow-black/20 hover:shadow-xl transition-all flex flex-col hover:border-purple-500/50 hover:scale-105 hover:cursor-pointer"
            onClick={handleNavigate}
        >
            <div
                className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-yellow-500 text-xs shadow-sm z-10 hover:bg-white"
                onClick={(e) => e.stopPropagation()}
            >
                <Star className="w-3 h-3 fill-yellow-500" />
                <span>{product.rating.rate.toFixed(1)}</span>
                <span className="text-gray-400">({product.rating.count})</span>
            </div>

            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="font-semibold font-title line-clamp-2 mb-1">
                {product.title}
            </h3>

            <p className="text-sm text-gray-500 line-clamp-2 mb-4">{product.description}</p>

            <div className="mt-auto flex items-center justify-between">
                <span className="text-xl font-bold text-purple-600">${product.price}</span>
                <button
                    className="flex items-center gap-2 text-sm px-3 py-2 text-gray-50 from-purple-500 to-purple-700 bg-gradient-to-r rounded-lg shadow-md shadow-black/20 hover:from-purple-700 hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all"
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                    }}
                >
                    <Plus className="w-4 h-4" />
                    <span className="font-semibold">Adicionar</span>
                </button>
            </div>
        </div>
    );
}