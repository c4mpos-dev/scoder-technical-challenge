import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import { CheckoutForm } from "../components/Checkout/CheckoutForm";

import { useCart } from "../contexts/CartContext";

import logoScoder from "../assets/logo-scoder.png";



export function Checkout() {
    const navigate = useNavigate();
    const { cart } = useCart();

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/");
        }
    }, [cart, navigate]);


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

            <div className="">
                <h1 className="text-3xl font-bold font-title mb-8 mt-8 text-center">Finalizar Compra</h1>
                <CheckoutForm />
            </div>
        </div>
    );
}
