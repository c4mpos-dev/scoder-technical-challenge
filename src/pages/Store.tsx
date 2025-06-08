import { useEffect, useState } from "react"

import { Search, ShoppingCart, Truck, Zap, DollarSign, Lock } from "lucide-react";

import { Input } from "../components/Input";
import { CartDrawer } from "../components/CartDrawer";
import { Feature } from "../components/Feature";
import { ProductList } from "../components/ProductList";

import { categoryLabels } from "../utils/categoryLabels"; 
import { fetchProducts } from "../services/products";

import logoScoder from "../assets/logo-scoder.png";
import { Loading } from "../components/Loading";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const features = [
    { span: "Frete grátis", icon: Truck, iconColor: "text-gray-400" },
    { span: "Entrega Rápida", icon: Zap, iconColor: "text-yellow-500" },
    { span: "Melhor Preço", icon: DollarSign, iconColor: "text-green-500" },
    { span: "Compra Segura", icon: Lock, iconColor: "text-yellow-500" },
];

export function Store() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, []);

    const categories = [...new Set(products.map((p) => p.category))];

    if (isLoading) return <Loading />;

    return (
        <div className="min-h-screen bg-gray-50 font-content">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <img src={logoScoder} className="w-9" />
                        </div>

                        <Input
                            icon={Search}
                            placeholder="Buscar produtos..."
                        />

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative px-3 py-2 border border-purple-300 rounded-lg transition hover:bg-gray-100 hover:cursor-pointer"
                        >
                            <ShoppingCart className="w-4 h-5 text-purple-700" />
                            <span className="absolute -top-2 -right-2.5 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                                3
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} isEmpty={true}>
                <p>Cart Item</p>
            </CartDrawer>

            {/* Hero Section */}
            <div className="flex flex-col justify-center items-center px-6 py-10 gap-6 text-gray-50 from-purple-800 to-purple-500 from-80% bg-gradient-to-r">
                <h1 className="font-title text-6xl text-gray-50 animate-pulse">Bem-vindo à Scoder Store</h1>
                <h2 className="font-title text-2xl">Descubra produtos incríveis com tecnologia de ponta</h2>

                <div className="flex items-center gap-6">
                    {features.map((feature, index) => (
                        <Feature
                            key={index}
                            span={feature.span}
                            icon={feature.icon}
                            iconColor={feature.iconColor}
                        />
                    ))}
                </div>

                <div className="animate-fade-in-up mt-2">
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 font-bold px-8 py-2 text-lg rounded-full shadow-xl hover:cursor-pointer hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                        Explorar Produtos
                    </button>
                </div>
            </div>

            {/* Categories and Products */}
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-24">
                {categories.map((category) => {
                    const categoryProducts = products.filter((p) => p.category === category);
                    return (
                        <section key={category}>
                            <div className="flex items-center gap-4 mb-2">
                                <h2 className="text-3xl font-bold font-title">
                                    {categoryLabels[category]}
                                </h2>
                                <div className="h-1 flex-1 rounded-full from-purple-400 to-purple-50 bg-gradient-to-r" />
                            </div>

                            <p className="text-sm text-gray-500 mb-4">
                                {categoryProducts.length} produto{categoryProducts.length !== 1 && "s"}
                            </p>
                            <ProductList products={categoryProducts} />
                        </section>
                    );
                })}
            </div>
        </div>
    )
}