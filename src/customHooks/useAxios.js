import { useState, useEffect } from 'react'
import axios from 'axios';

const useAxios = ({ baseURL, url, method, body = {}, headers = { accept: '*/*' } }) => {
    axios.defaults.baseURL = baseURL
    const [response, setResponse] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios({
                url,
                method,
                body,
                headers
            })
            console.log(res);
            const { status, statusText, data } = res
            setResponse({ status, error: statusText, data })
        }
        catch (error) {
            console.log(error);
            const { status, statusText, data } = error.response
            setResponse({ status, error: statusText, data })
        }

    }

    useEffect(() => {
        fetchData();
    }, [baseURL, url, method, body, headers]);

    return { response };
}

export default useAxios