// src/layouts/Layout.tsx
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function DefaultLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-content">
            <ScrollToTop />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}