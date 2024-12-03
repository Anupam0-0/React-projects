
import { createContext, useContext, useEffect, useState } from 'react';
import featureFlag from './data';

export const FlagContext = createContext();

export const FlagProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchfeatureFlag() {
        try{
            setLoading(true);
            const response = await featureFlag();
            setEnabledFlags(response);
            setLoading(false);

        } catch(error){
            throw new Error(error);
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchfeatureFlag();
    }, []);

    return (
        <FlagContext.Provider value={{loading, enabledFlags  }}>
            {children}
        </FlagContext.Provider>
    );
}
