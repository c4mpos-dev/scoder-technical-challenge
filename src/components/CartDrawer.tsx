import { useNavigate } from "react-router-dom";

import { X, Trash2, ShoppingCart, Plus, Minus } from "lucide-react";

import { useCart } from "../contexts/CartContext";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { cart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity } = useCart();
    const navigate = useNavigate();

    const isEmpty = cart.length === 0;
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            {/* Overlay escurecido */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            />

            {/* Drawer lateral */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-96 p-6 bg-white shadow-2xl transition-transform duration-300 z-50 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-semibold font-title">Carrinho de compras</h2>
                    <button onClick={onClose}>
                        <X className="w-5 h-5 text-gray-600 transition-all hover:cursor-pointer hover:scale-110" />
                    </button>
                </div>

                {isEmpty ? (
                    <div className="flex flex-col items-center gap-4 mt-24">
                        <ShoppingCart className="w-14 h-14 text-purple-500" />
                        <p className="text-gray-500">Seu carrinho está vazio.</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6 h-[calc(100%-60px)]">
                        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center px-3 py-2 gap-3 bg-gray-50 rounded-lg">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>

                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="flex justify-center items-center w-6 h-6 rounded-full bg-purple-100 text-purple-800 font-bold hover:bg-purple-200 hover:cursor-pointer transition"
                                            >
                                                <Minus className="w-4 h-4 text-purple-500" />
                                            </button>
                                            <span className="text-sm font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="flex justify-center items-center w-6 h-6 rounded-full bg-purple-100 text-purple-800 font-bold hover:bg-purple-200 hover:cursor-pointer transition"
                                            >
                                                <Plus className="w-4 h-4 text-purple-500" />
                                            </button>
                                        </div>

                                        <p className="font-semibold text-purple-700 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>

                                    <button onClick={() => removeFromCart(item.id)}>
                                        <Trash2 className="w-4 h-4 text-red-500 hover:cursor-pointer hover:scale-110 transition-all" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-black/20 space-y-4">
                            <div className="flex justify-between font-semibold text-lg">
                                <span>Total:</span>
                                <span className="text-purple-700">${totalPrice.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={clearCart}
                                className="w-full text-sm text-red-500 underline hover:text-red-700 hover:cursor-pointer transition-all"
                            >
                                Limpar tudo
                            </button>
                            <button
                                onClick={() => navigate("/checkout")}
                                className="w-full py-3 text-white font-bold rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 hover:to-purple-700 hover:cursor-pointer hover:scale-105 transition-all duration-300"
                            >
                                Finalizar compra
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
