import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Star, ArrowLeft } from "lucide-react";

import type { Product } from "./Store";

import { Loading } from "../components/Loading";
import { useCart } from "../contexts/CartContext";
import { fetchProducts } from "../services/products";

import logoScoder from "../assets/logo-scoder.png";

export function ProductPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        fetchProducts()
            .then((products) => {
                const found = products.find((p) => p.id === Number(id));
                setProduct(found || null);
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
            setIsAdded(true);
        }
    };

    return (
        <div className="flex flex-col bg-gray-50 font-content">
            
            <header className="sticky top-0 z-40 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate("/")}
                            className="flex items-center gap-1 text-md text-purple-700 font-semibold hover:underline hover:cursor-pointer"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Voltar para loja
                        </button>

                        <img src={logoScoder} className="w-9" alt="Logo" />
                    </div>
                </div>
            </header>

            {loading ? (
                <Loading />
            ) : !product ? (
                <div className="flex-grow p-10 text-center text-gray-600 text-lg">Produto não encontrado.</div>
            ) : (
                <div>
                    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-96 object-contain rounded-xl bg-white shadow-md shadow-black/20 transition-all hover:scale-105 hover:shadow-purple-700/30"
                        />

                        <div className="flex flex-col justify-between gap-4 h-96">
                            <h1 className="text-3xl font-title font-bold text-gray-800">{product.title}</h1>

                            <div className="flex items-center gap-2 text-yellow-500">
                                <Star className="w-4 h-4 fill-yellow-500" />
                                <span className="text-lg">{product.rating.rate.toFixed(1)}</span>
                                <span className="text-sm text-gray-400">({product.rating.count} avaliações)</span>
                            </div>

                            <p className="text-gray-600 text-md leading-relaxed max-h-24 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-400">
                                {product.description}
                            </p>

                            <span className="text-3xl font-bold text-purple-700">${product.price}</span>

                            <button
                                onClick={handleAddToCart}
                                disabled={isAdded}
                                className={`mt-4 w-full text-lg px-6 py-3 font-semibold rounded-xl shadow-md transition-all
                                    ${
                                        isAdded
                                            ? "bg-green-500 text-white cursor-not-allowed"
                                            : "bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 hover:scale-105 hover:cursor-pointer"
                                    }`}
                            >
                                {isAdded ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
                            </button>
                        </div>
                    </div>

                    {/* Comentários fictícios */}
                    <div className="flex flex-col justify-center max-w-5xl mx-auto px-6 pb-10 mb-6">
                        <h2 className="text-2xl font-semibold font-title mb-4">Comentários</h2>
                        <ul className="space-y-4">
                            <li className="bg-white p-4 rounded-xl shadow">
                                <p className="font-semibold text-purple-700">João P.</p>
                                <p className="text-gray-600">Produto excelente, chegou rápido e em perfeito estado!</p>
                            </li>
                            <li className="bg-white p-4 rounded-xl shadow">
                                <p className="font-semibold text-purple-700">Mariana L.</p>
                                <p className="text-gray-600">Superou minhas expectativas. Recomendo!</p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
