import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a new context
const ScreenSizeContext = createContext();

export const useScreenSize = () => useContext(ScreenSizeContext);

export const ScreenSizeProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const updateScreenSize = () => {
            setScreenSize(window.innerWidth);
        };

        // Set initial screen size
        if (typeof window !== 'undefined') {
            updateScreenSize();
            window.addEventListener('resize', updateScreenSize);
        }

        // Cleanup the event listener on component unmount
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', updateScreenSize);
            }
        };
    }, []);

    return (
        <ScreenSizeContext.Provider value={screenSize}>
            {children}
        </ScreenSizeContext.Provider>
    );
};
