import axios from 'axios';
import { HEADER } from './appSettings';

const fetchData = async ({ baseURL, url, method, body = {} }) => {
    axios.defaults.baseURL = baseURL
    try {
        const res = await axios({
            url,
            method,
            data: body,
            headers: HEADER()
        })
        const { status, statusText, data } = res
        return { status, error: statusText, data }
    }
    catch (err) {
        const { status, statusText, data } = err.response
        if (status === 401) {
            localStorage.removeItem('userName')
            localStorage.removeItem('fullName')
            localStorage.removeItem('acceptToken')

        }
        return { status, error: statusText, data }
    }
}

export default fetchData