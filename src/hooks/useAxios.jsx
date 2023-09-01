import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [reload, setReload] = useState(0);

    const refetch = () => setReload(prev => prev + 1);

    axios.defaults.baseURL = "https://api.coingecko.com/api/v3/";

    const fetchData = async(param) => {
        try {
            setLoading(true);
            const result = await axios(param);
            setResponse(result.data);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(param);

        // eslint-disable-next-line
    }, [reload])
  return {
    response, loading, error, refetch
  }
}

export default useAxios