import { useHotels } from "../../Context/HotelProvider";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from "react";

const Map = () => {

    const { isLoading, hotels } = useHotels();
    const [mapCenter, setMapCenter] = useState([51, 3]);

    return (
        <div className="mapContainer">
            <MapContainer
                className="map"
                center={mapCenter}
                zoom={13}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {hotels.map((item) => {
                    return (
                        <Marker key={item.id} position={[item.latitude, item.longitude]}>
                            <Popup>
                                {item.host_location}
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </div>
    )
}

export default Map;