import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Hotels = () => {

    // eslint-disable-next-line no-unused-vars
    const [searchPrams, setSearchParams] = useSearchParams();
    const destination = searchPrams.get('destination');
    const room = JSON.parse(searchPrams.get('option'))?.room;

    const { data, isLoading } = useFetch(
        'http://localhost:5000/hotels',
        `q=${destination || ""}&accommodates_gte=${room || 1}`
    );

    if (isLoading) return <p>loading...</p>;

    return (
        <div className="searchList">
            <h2>{`Search Result (${data.length})`}</h2>
            {data.map((item) => {
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