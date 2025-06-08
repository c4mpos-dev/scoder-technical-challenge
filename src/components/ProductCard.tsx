import { Star, ShoppingCart } from "lucide-react";

import type { Product } from "../pages/Store";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="relative group p-4 bg-white border border-black/10 rounded-xl shadow-md shadow-black/20 hover:shadow-xl transition-all flex flex-col hover:border-purple-500/50 hover:scale-105 hover:cursor-pointer">
            <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-yellow-500 text-xs shadow-sm z-10 hover:bg-white">
                <Star className="w-3 h-3 fill-yellow-500" />
                <span>{product.rating.rate.toFixed(1)}</span>
                <span className="text-gray-400">({product.rating.count})</span>
            </div>
   
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 mb-4 object-contain transition-transform duration-300 hover:scale-110"
            />
            
            <h3 className="font-semibold font-title line-clamp-2 mb-1">
                {product.title}
            </h3>

            <p className="text-sm text-gray-500 line-clamp-2 mb-4">{product.description}</p>

            <div className="mt-auto flex items-center justify-between">
                <span className="text-xl font-bold text-purple-600">${product.price}</span>
                <button className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 transition">
                    <ShoppingCart className="w-4 h-4" />
                    Adicionar
                </button>
            </div>
        </div>
    );
}
