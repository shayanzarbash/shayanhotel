import { Link } from "react-router-dom";
import { useHotels } from "../Context/HotelProvider";

const Hotels = () => {

    // eslint-disable-next-line no-unused-vars
    const { isLoading, hotels } = useHotels();

    if (isLoading) return <p>loading...</p>;

    return (
        <div className="searchList">
            <h2>{`Search Result (${hotels.length})`}</h2>
            {hotels.map((item) => {
                return (
                    <Link
                        key={item.id}
                        to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
                        <div className="searchItem">
                            <img src={item.picture_url.url} alt={item.name} />
                            <div className="searchItemDesc">
                                <p className="location">{item.smart_location}</p>
                                <p className="name">{item.name}</p>
                                <p className="price">{item.price}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Hotels;