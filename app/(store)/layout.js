"use client"

import CartSidebar from "@/components/global/CartSidebar";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import AuthenticatoinRequired from "@/pages/AuthenticatoinRequired";
import { useContext, useEffect, useState } from "react";

export default function StoreLayout({ children }) {
    const {isLoggedIn} = useContext(GlobalContext);

    return (
        isLoggedIn ?
        <main className="w-full min-h-screen h-auto flex flex-col justify-start items-start relative" >
            <Navbar />
            <CartSidebar />
            {children}
            <Footer />
        </main>
        : <AuthenticatoinRequired />
    )
}
