import { Routes, Route } from "react-router-dom"

import { Store } from "./pages/Store";
import { Checkout } from "./pages/Checkout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/checkout" element={<Checkout />}/>
        </Routes>
    );
}