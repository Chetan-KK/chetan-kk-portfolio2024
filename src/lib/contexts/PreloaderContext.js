import React, { createContext, useContext, useState } from 'react';

// Create a new context
const PreloaderContext = createContext();

export const usePreloader = () => useContext(PreloaderContext);

export const PreloaderProvider = ({ children }) => {
    const [isPreloaderShown, setPreloaderShown] = useState(false);

    return (
        <PreloaderContext.Provider value={{ isPreloaderShown, setPreloaderShown }}>
            {children}
        </PreloaderContext.Provider>
    );
};
