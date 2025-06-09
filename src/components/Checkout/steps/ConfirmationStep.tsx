import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CheckCircle } from "lucide-react";

import { useCart } from "../../../contexts/CartContext";

interface Props {
    onBack: () => void;
}

export function ConfirmationStep({ onBack }: Props) {
    const [showModal, setShowModal] = useState(false);
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const fakeOrderId = Math.floor(Math.random() * 900000 + 100000);

    const handleFinish = () => {
        setShowModal(true);
    };

    const handleContinue = () => {
        clearCart();
        navigate("/");
    };

    return (
        <div className="space-y-4 relative">
            <h2 className="text-lg font-bold">Confirmação</h2>
            <p>Revise seus dados e clique em "Finalizar Compra" para concluir.</p>

            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={onBack}
                    className="py-3 px-4 text-white font-bold rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 hover:to-purple-700 transition-all duration-300 hover:cursor-pointer"
                >
                    Voltar
                </button>
                <button
                    type="button"
                    onClick={handleFinish}
                    className="py-3 px-4 text-white font-bold rounded-xl bg-gradient-to-r from-green-700 to-green-500 hover:to-green-700 transition-all duration-300 hover:cursor-pointer"
                >
                    Finalizar Compra
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center space-y-4">
                        <CheckCircle className="text-green-600 w-16 h-16 mx-auto" />
                        <h3 className="text-2xl font-bold text-gray-800">Pedido Concluído</h3>
                        <p className="text-gray-600">
                            Seu pedido foi finalizado com sucesso. Você receberá mais informações por e-mail.
                        </p>
                        <div className="text-left text-sm text-gray-700 space-y-1 bg-gray-100 p-4 rounded-md">
                            <p><strong>Número do Pedido:</strong> #{fakeOrderId}</p>
                            <p><strong>Total:</strong> R$ {totalPrice.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={handleContinue}
                            className="mt-4 px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-800 hover:cursor-pointer transition"
                        >
                            Continuar Comprando
                        </button>
                    </div>
                </div>
            )}
        </div>
    );   
}