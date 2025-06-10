import { useCart } from "../../contexts/CartContext";

export function OrderSummary() {
    const { cart } = useCart();

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <aside className="w-72 sm:w-96 p-4 bg-gray-50 rounded-lg shadow-md sticky top-6 self-start">
            <h2 className="text-lg font-semibold mb-4">Resumo do Pedido</h2>
            
            <ul className="divide-y divide-gray-200 max-h-[300px] overflow-y-auto">
                {cart.map((item) => (
                    <li
                        key={item.id}
                        className="flex items-center justify-between py-2"
                    >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-12 h-12 object-cover rounded flex-shrink-0"
                            />
                            <div className="truncate">
                                <p className="font-medium truncate">{item.title}</p>
                                <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="font-semibold ml-4 w-20 text-right whitespace-nowrap flex-shrink-0">
                            $ {(item.price * item.quantity).toFixed(2)}
                        </p>
                    </li>
                ))}
            </ul>
            <div className="border-t border-gray-300 mt-4 pt-4 text-right font-bold text-lg">
                Total: R$ {totalPrice.toFixed(2)}
            </div>
        </aside>
    );
}