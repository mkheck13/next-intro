'use client'

import { createContext, useContext, useState } from "react";

interface Context {
    username: string;
    setUsername: (name: string) => void;
}

// Creating the context
const AppContext = createContext<Context>({
    username: '',
    setUsername: (name: string) => ''
});


// Creating the wrapper
export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [username, setUsername] = useState('');

    return (
        <AppContext.Provider value={ { username, setUsername } }>
            {children}
        </AppContext.Provider>
    )
}


// Function to allow access to data
export function useAppContext() {
    return useContext(AppContext);
}