"use client";

import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useRef } from 'react';

// Create a new context
const LenisContext = createContext();

export const useLenis = () => useContext(LenisContext);

export const LenisProvider = ({ children }) => {
    const pathname = usePathname();
    const lenisRef = useRef(null); // Ref to hold lenis instance

    useEffect(() => {
        // Initialize Lenis
        if (!lenisRef.current) {
            lenisRef.current = new Lenis();
        }

        function raf(time) {
            if (lenisRef.current) {
                lenisRef.current.raf(time);
            }
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Clean up
        return () => {
            if (lenisRef.current) {
                lenisRef.current.stop(); // Stop lenis when component unmounts
            }
        };
    }, []);

    useEffect(() => {
        lenisStart();
    }, [pathname]);

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
        if (targetElement && lenisRef.current) {
            // lenisRef.current.scrollTo(targetElement);
        }
    };

    useEffect(() => {
        lenisStop();
    }, []);

    return (
        <LenisContext.Provider value={{ lenisStart, lenisStop, lenisScrollTo, lenisRef }}>
            {children}
        </LenisContext.Provider>
    );
};
