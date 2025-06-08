import { useState } from "react"

import { Search, ShoppingCart, Truck, Zap, DollarSign, Lock } from "lucide-react";

import { Input } from "../components/Input";
import { CartDrawer } from "../components/CartDrawer";
import { Feature } from "../components/Feature";
// import { ProductCard } from "../components/ProductCard";

import logoScoder from "../assets/logo-scoder.png";
import { ProductList } from "../components/ProductList";
import { mockProducts } from "../data/mockProducts";

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

const categoryLabels: Record<string, string> = {
    "men's clothing": "Moda Masculina",
    "women's clothing": "Moda Feminina",
    "jewelery": "Joias & Acessórios",
    "electronics": "Eletrônicos",
};

const categories = Object.keys(categoryLabels);

export function Store() {
    // const [loading, setLoading] = useState(true)
    const [isCartOpen, setIsCartOpen] = useState(false);

    // if (loading) {
    //     return (
    //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    //         <div className="text-center">
    //         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
    //         <h2 className="text-xl font-semibold text-gray-700">Carregando produtos...</h2>
    //         </div>
    //     </div>
    //     )
    // }

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


             <div className="max-w-7xl mx-auto px-4 py-10 space-y-24">
                {categories.map((category) => {
                    const products = mockProducts.filter((p) => p.category === category);

                    if (products.length === 0) return null;

                    return (
                        <section key={category}>
                            <div className="flex items-center gap-8 mb-8">
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-title font-bold">
                                        {categoryLabels[category]}
                                    </h2>
                                    <span className="text-sm text-gray-500">
                                        {products.length} produto{products.length > 1 ? 's' : ''} disponíveis
                                    </span>
                                </div>
                                <div className="h-1 flex-1 rounded-full from-purple-400 to-purple-50 bg-gradient-to-r"></div>
                            </div>
                            <ProductList products={products} />
                        </section>
                    );
                })}
            </div>

        </div>
    )
}
