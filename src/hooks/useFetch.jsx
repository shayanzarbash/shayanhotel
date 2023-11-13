import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetch = (url, query = '') => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const { data } = await axios.get(`${url}?${query}`);
                setData(data);
            } catch (err) {
                setData([]);
                toast.error(err?.massage)
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url, query]);

    return { loading, data }
}

export default useFetch;