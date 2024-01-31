"use client"

import CartSidebar from "@/components/global/CartSidebar";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

export default function StoreLayout({ children }) {
    return (
        <main className="w-full min-h-screen h-auto flex flex-col justify-start items-start relative">
            <Navbar />
            <CartSidebar />
            {children}
            <Footer />
        </main>
    );
}
