import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { SearchBar } from "./SearchBar";

import { useCart } from "../contexts/CartContext";

import logoScoder from "../assets/logo-scoder.png";

interface HeaderProps {
    variant: "store" | "internal";
    onSearch?: (query: string) => void;
    onCartClick?: () => void;
}

export function Header({ variant, onSearch, onCartClick }: HeaderProps) {
    const navigate = useNavigate();
    const { cart } = useCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="sticky top-0 z-40 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                {variant === "store" ? (
                    <div className="flex items-center justify-between gap-4">
                        <img src={logoScoder} className="w-9" alt="Logo" />

                        {onSearch && <SearchBar onSearch={onSearch} />}

                        <button
                            onClick={onCartClick}
                            className="relative px-3 py-2 border border-purple-400 rounded-lg transition hover:bg-gray-100 hover:cursor-pointer"
                        >
                            <ShoppingCart className="w-4 h-5 text-purple-700" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2.5 bg-purple-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                ) : (
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
                )}
            </div>
        </header>
    );
}