import { useState } from "react"

import { Search, ShoppingCart  } from "lucide-react";

import { Input } from "../components/input";
import { CartDrawer } from "../components/CartDrawer";

// interface Product {
//   id: number
//   title: string
//   price: number
//   description: string
//   category: string
//   image: string
//   rating: {
//     rate: number
//     count: number
//   }
// }

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
                        <div className="flex items-center">
                            <h1 className="text-2xl font-title font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                                Scoder Store
                            </h1>
                        </div>

                        <Input
                            icon={Search}
                            placeholder="Buscar produtos..."
                        />

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative px-3 py-2 border border-purple-300 rounded-lg transition hover:bg-gray-100"
                        >
                            <ShoppingCart className="w-4 h-5 text-purple-700" />
                            <span className="absolute -top-2 -right-2.5 bg-purple-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                                3
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} isEmpty={true}>
                <p>Cart Item</p>
            </CartDrawer>
        </div>
    )
}
