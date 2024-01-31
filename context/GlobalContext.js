"use client"
import React, { createContext, useState, useRef } from "react";
export const GlobalContext = createContext();


export const GlobalContextProvider = ({ children }) => {

    const cartRef = useRef(null);
    const filterRef = useRef(null);

    const toggleCart = () => {
        // Check if the cartRef.current is not null before accessing its classList
        if (cartRef.current) {
            cartRef.current.classList.toggle("translate-x-0");
            cartRef.current.classList.toggle("translate-x-96");
        }
    };


    const toggleFilter = () => {
        // Check if the cartRef.current is not null before accessing its classList
        if (filterRef.current) {
            filterRef.current.classList.toggle("translate-x-0");
            filterRef.current.classList.toggle("-translate-x-full");

        }
    }

    return (
        <GlobalContext.Provider value={{ cartRef, toggleCart, filterRef, toggleFilter }}>
            <div>
                {children}
            </div>
        </GlobalContext.Provider>
    )
}

