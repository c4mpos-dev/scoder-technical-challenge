import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CheckoutForm } from "../components/Checkout/CheckoutForm";
import { Header } from "../components/Header";

import { useCart } from "../contexts/CartContext";

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
            <Header variant="internal" />

            <div className="">
                <h1 className="text-3xl font-bold font-title mb-8 mt-8 text-center">Finalizar Compra</h1>
                <CheckoutForm />
            </div>
        </div>
    );
}
