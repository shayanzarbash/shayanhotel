import useFetch from '../../hooks/useFetch';

const LocationList = () => {

    const { data, isLoading } = useFetch('http://localhost:5000/hotels', '');
    if (isLoading) return <p>loading...</p>;

    return (
        <div className='nearbyLocation'>
            <h2>nearby</h2>
            <div className='locationList'>
                {data.map((item) => {
                    return <div className='locationItem' key={item.id}>
                        <img src={item.picture_url.url} alt="" />
                        <div className='locationItemDesc'>
                            <p className='location'>{item.smart_location}</p>
                            <p className='name'>{item.name}</p>
                            <p className='price'>{item.price}</p>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}


export default LocationList;