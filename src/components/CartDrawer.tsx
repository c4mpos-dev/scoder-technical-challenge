import type { ReactNode } from "react";
import { X, ShoppingCart } from "lucide-react";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    isEmpty?: boolean;
    children: ReactNode;
}

export function CartDrawer({ isOpen, onClose, children, isEmpty = false }: CartDrawerProps) {
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

                <div className={`${isEmpty ? "flex flex-col items-center mt-24" : ""}`}>
                    {isEmpty ? (
                        <div className="flex flex-col items-center gap-4">
                            <ShoppingCart className="w-14 h-14 text-purple-200" />
                            <p className="text-gray-500">Seu carrinho está vazio.</p>
                        </div>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </div>
    );
};
