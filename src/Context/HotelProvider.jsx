import { createContext, useContext } from 'react'

const HotelContext = createContext();

const HotelProvider = ({ children }) => {
    return (
        <HotelContext.Provider value={{
            
        }}>
            {children}
        </HotelContext.Provider>
    );
}

export default HotelProvider;


export function useHotels() {
    return useContext(HotelContext);
}
