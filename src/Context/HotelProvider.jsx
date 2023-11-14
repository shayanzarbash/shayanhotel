import { createContext, useContext } from 'react'
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const HotelContext = createContext();

const HotelProvider = ({ children }) => {
    const [searchPrams, setSearchParams] = useSearchParams();
    const destination = searchPrams.get('destination');
    const room = JSON.parse(searchPrams.get('option'))?.room;

    const { data: hotels, isLoading } = useFetch(
        'http://localhost:5000/hotels',
        `q=${destination || ""}&accommodates_gte=${room || 1}`
    );

    return (
        <HotelContext.Provider value={{
            isLoading, hotels
        }}>
            {children}
        </HotelContext.Provider>
    );
}

export default HotelProvider;


export function useHotels() {
    return useContext(HotelContext);
}
