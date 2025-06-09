// src/App.tsx ou src/routes.tsx
import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Store } from "./pages/Store";
import { Checkout } from "./pages/Checkout";
import { ProductPage } from "./pages/Product";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Store />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="product/:id" element={<ProductPage />} />
            </Route>
        </Routes>
    );
}