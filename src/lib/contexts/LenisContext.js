"use client";

import Lenis from '@studio-freight/lenis';
import React, { createContext, useContext, useEffect, useRef } from 'react';

// Create a new context
const LenisContext = createContext();

export const useLenis = () => useContext(LenisContext);

export const LenisProvider = ({ children }) => {

    const lenisRef = useRef(null); // Ref to hold lenis instance

    useEffect(() => {
        lenisRef.current = new Lenis();
        function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Clean up
        return () => {
            lenisRef.current.stop(); // Stop lenis when component unmounts
        };
    }, []);

    const lenisStart = () => {
        if (lenisRef.current) {
            lenisRef.current.start();
        }
    };

    const lenisStop = () => {
        if (lenisRef.current) {
            lenisRef.current.stop();
        }
    };


    const lenisScrollTo = (targetElement) => {
        if (targetElement) {
            // lenisRef.current.scrollTo(targetElement);
        }
    };

    return (
        <LenisContext.Provider value={{ lenisStart, lenisStop, lenisScrollTo }}>
            {children}
        </LenisContext.Provider>
    );
};
